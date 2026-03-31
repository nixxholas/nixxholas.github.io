"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CircleAlert,
  Cpu,
  GitBranch,
  Shield,
  Sparkles,
  TimerReset,
  Vote,
} from "lucide-react";
import Link from "next/link";
import React from "react";

type CycleState = {
  id: string;
  proposer: string;
  txs: number;
  attestations: boolean[];
  equivocated?: boolean;
};

type Step = {
  title: string;
  body: string;
  icon: React.ReactNode;
};

const ATTESTER_COUNT = 8;
const BLOCK_THRESHOLD = 5;
const PROPOSER_THRESHOLD = 4;

const initialCycles: CycleState[] = [
  {
    id: "p0",
    proposer: "P0",
    txs: 132,
    attestations: [true, true, true, true, true, true, false, true],
  },
  {
    id: "p1",
    proposer: "P1",
    txs: 87,
    attestations: [true, false, true, true, true, false, true, true],
  },
  {
    id: "p2",
    proposer: "P2",
    txs: 141,
    attestations: [true, true, true, false, true, true, true, true],
  },
  {
    id: "p3",
    proposer: "P3",
    txs: 65,
    attestations: [false, true, true, true, false, true, true, true],
  },
  {
    id: "p4",
    proposer: "P4",
    txs: 104,
    attestations: [true, true, false, true, true, true, false, true],
    equivocated: false,
  },
];

const protocolSteps: Step[] = [
  {
    title: "1. Many proposers collect flow at once",
    body: "Instead of a single leader being the only path into the next economic tick, multiple proposers ingest transactions concurrently during a 50ms cycle.",
    icon: <Sparkles className="size-5" />,
  },
  {
    title: "2. Proposals are erasure-coded into pshreds",
    body: "Each proposer commits to a proposal and sprays erasure-coded slices across attesters. Inclusion is now tied to network evidence, not just leader discretion.",
    icon: <Shield className="size-5" />,
  },
  {
    title: "3. Attesters timestamp and forward evidence",
    body: "Attesters do not execute transactions. They witness proposer data, timestamp it, and forward attestations plus recovered pshreds to the slot leader.",
    icon: <Vote className="size-5" />,
  },
  {
    title: "4. Leader builds the cycle payload",
    body: "The leader must include proposer payloads that clear the attestation threshold, then pack transactions into a serially replay-safe execution batch.",
    icon: <Cpu className="size-5" />,
  },
  {
    title: "5. Validators replay and finalize normally",
    body: "Downstream validation still checks correctness, deterministic replay, and finalization. Constellation changes block construction pressure, not execution determinism.",
    icon: <GitBranch className="size-5" />,
  },
];

const misconceptions = [
  {
    myth: "It makes execution parallel and unordered.",
    reality:
      "No. Proposal ingress is concurrent; replay safety still constrains the final ordered execution batch.",
  },
  {
    myth: "Attesters are validators executing blocks early.",
    reality:
      "No. They are evidence collectors for availability and censorship resistance, not alternative executors.",
  },
  {
    myth: "The leader loses all discretion.",
    reality:
      "Not exactly. The leader still assembles the block, but it is protocol-constrained by attested proposer commitments and replay limits.",
  },
  {
    myth: "It is just Turbine for transactions.",
    reality:
      "Close in spirit, but narrower in purpose: Turbine-inspired erasure coding is used as an inclusion guarantee primitive for proposal availability.",
  },
];

function countTrue(values: boolean[]) {
  return values.filter(Boolean).length;
}

export default function ConstellationPage() {
  const [cycles, setCycles] = React.useState<CycleState[]>(initialCycles);
  const [selectedCycle, setSelectedCycle] = React.useState("p2");
  const [strictReplay, setStrictReplay] = React.useState(true);

  const aggregateAttesters = React.useMemo(() => {
    return Array.from({ length: ATTESTER_COUNT }, (_, index) =>
      cycles.some((cycle) => cycle.attestations[index])
    );
  }, [cycles]);

  const aggregateReady = countTrue(aggregateAttesters) >= BLOCK_THRESHOLD;

  const inclusion = React.useMemo(() => {
    return cycles.map((cycle) => {
      const attestationCount = countTrue(cycle.attestations);
      const attested = attestationCount >= PROPOSER_THRESHOLD;
      const replayBudget = strictReplay ? 120 : 160;
      const replayFits = cycle.txs <= replayBudget;
      const included = aggregateReady && attested && replayFits && !cycle.equivocated;
      return {
        ...cycle,
        attestationCount,
        attested,
        replayFits,
        included,
      };
    });
  }, [aggregateReady, cycles, strictReplay]);

  const selected = inclusion.find((cycle) => cycle.id === selectedCycle) ?? inclusion[0];
  const totalIncludedTxs = inclusion
    .filter((cycle) => cycle.included)
    .reduce((sum, cycle) => sum + cycle.txs, 0);

  return (
    <main className="constellation-page relative left-1/2 w-screen -translate-x-1/2 overflow-x-hidden">
      <section className="constellation-hero px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-8 xl:grid-cols-[1.25fr_0.75fr] xl:items-center">
          <div>
            <div className="constellation-kicker">Constellation, explained for runtime engineers</div>
            <h1 className="constellation-display">
              Multiple concurrent proposers,
              <span>without hand-wavy mental models.</span>
            </h1>
            <p className="constellation-body-xl mt-6">
              A clearer visual explanation of how Constellation changes Solana block construction:
              many proposers ingest concurrently, attesters provide availability evidence, the leader
              is forced to respect that evidence, and the replay-safe scheduler still acts as the final
              execution bottleneck.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-full px-6">
                <a href="#interactive-demo">Jump to interactive demo</a>
              </Button>
              <label className="constellation-toggle">
                <input
                  type="checkbox"
                  checked={strictReplay}
                  onChange={() => setStrictReplay((current) => !current)}
                />
                <span>Strict replay budget</span>
              </label>
            </div>
          </div>

          <Card className="constellation-glass border-white/10 bg-white/5 shadow-2xl shadow-cyan-500/10">
            <CardHeader>
              <div className="constellation-kicker mb-3">At a glance</div>
              <CardTitle className="text-2xl">What the protocol is really doing</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 text-sm">
              <Metric label="Cycle duration" value="50ms" detail="Protocol-enforced economic tick." />
              <Metric
                label="In demo now"
                value={String(totalIncludedTxs)}
                detail="Transactions currently surviving attestation + replay constraints."
              />
              <Metric
                label="Core idea"
                value="Evidence > discretion"
                detail="Availability witnesses make censorship much harder to hide."
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.45fr_1fr]">
          <Card className="constellation-glass border-white/10 bg-white/5">
            <CardHeader>
              <div className="constellation-kicker">What this page is trying to fix</div>
              <CardTitle className="text-3xl">Constellation gets easier once you separate three jobs.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5 text-base">
              <p className="leading-7 text-white/75">
                Most confusion comes from mentally merging <strong>proposal ingress</strong>,
                <strong> execution ordering</strong>, and <strong>final consensus</strong> into one thing.
                Constellation mainly changes the <strong>ingress path into a leader block</strong>.
              </p>
              <div className="grid gap-3 md:grid-cols-3">
                <Pill title="Job 1" body="Who can get transactions witnessed in time?" />
                <Pill title="Job 2" body="What ordered batch can be replayed safely?" />
                <Pill title="Job 3" body="What do validators accept and finalize?" />
              </div>
            </CardContent>
          </Card>

          <Card className="constellation-glass border-white/10 bg-white/5">
            <CardHeader>
              <div className="constellation-kicker">Mental model</div>
              <CardTitle className="text-2xl">Think of it as a censorship-resistant proposal funnel.</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Metric label="Concurrent proposers" value="N" detail="Many parties can feed the next cycle." />
              <Metric label="Cycle cadence" value="50ms" detail="Economic ticks happen much faster than a slot." />
              <Metric
                label="Leader constraint"
                value="Must include"
                detail="If enough attesters saw it and replay budget allows it."
              />
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-6">
            <div className="constellation-kicker">Protocol overview</div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Five moving parts, in order</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {protocolSteps.map((step, index) => (
              <Card key={step.title} className="constellation-glass border-white/10 bg-white/5">
                <CardHeader>
                  <div className="flex items-center justify-between gap-3">
                    <div className="constellation-step-icon">{step.icon}</div>
                    <span className="constellation-index">0{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>{step.body}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="interactive-demo" className="px-6 py-10 md:px-10">
        <div className="mx-auto grid w-full max-w-6xl gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <Card className="constellation-glass border-white/10 bg-white/5">
            <CardHeader>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="constellation-kicker">Interactive explainer</div>
                  <CardTitle className="text-3xl">Aggregate attestation matrix</CardTitle>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70">
                  <div><strong>Aggregate quorum:</strong> {BLOCK_THRESHOLD}/{ATTESTER_COUNT}</div>
                  <div><strong>Per-proposer threshold:</strong> {PROPOSER_THRESHOLD}/{ATTESTER_COUNT}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Toggle cells to simulate which attesters witnessed each proposer. The leader can only build
                from proposer payloads that clear the proposer threshold, and the whole cycle only proceeds
                if the aggregate attester quorum exists.
              </p>
              <div className="overflow-x-auto">
                <table className="constellation-matrix min-w-[820px]">
                  <thead>
                    <tr>
                      <th>Proposer</th>
                      {Array.from({ length: ATTESTER_COUNT }, (_, index) => (
                        <th key={`a-${index}`}>A{index}</th>
                      ))}
                      <th>Seen</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inclusion.map((cycle) => (
                      <tr
                        key={cycle.id}
                        className={cn(selectedCycle === cycle.id && "selected")}
                        onClick={() => setSelectedCycle(cycle.id)}
                      >
                        <td>
                          <div className="flex flex-col gap-1">
                            <strong>{cycle.proposer}</strong>
                            <span className="text-xs text-white/50">{cycle.txs} tx</span>
                          </div>
                        </td>
                        {cycle.attestations.map((value, index) => (
                          <td key={`${cycle.id}-${index}`}>
                            <button
                              type="button"
                              className={cn("constellation-cell", value && "on")}
                              onClick={(event) => {
                                event.stopPropagation();
                                setCycles((current) =>
                                  current.map((item) =>
                                    item.id === cycle.id
                                      ? {
                                          ...item,
                                          attestations: item.attestations.map((state, i) =>
                                            i === index ? !state : state
                                          ),
                                        }
                                      : item
                                  )
                                );
                              }}
                              aria-label={`Toggle attestation ${index} for ${cycle.proposer}`}
                            >
                              {value ? "✓" : "—"}
                            </button>
                          </td>
                        ))}
                        <td>{cycle.attestationCount}</td>
                        <td>
                          <StatusChip
                            tone={
                              cycle.equivocated
                                ? "danger"
                                : cycle.included
                                  ? "good"
                                  : cycle.attested
                                    ? "warn"
                                    : "muted"
                            }
                          >
                            {cycle.equivocated
                              ? "equivocation"
                              : cycle.included
                                ? "included"
                                : cycle.attested
                                  ? "waiting on replay"
                                  : "excluded"}
                          </StatusChip>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <SummaryChip label="Aggregate quorum" value={aggregateReady ? "valid" : "missing"} tone={aggregateReady ? "good" : "danger"} />
                <SummaryChip label="Replay mode" value={strictReplay ? "strict" : "relaxed"} tone="neutral" />
                <SummaryChip label="Included tx" value={String(totalIncludedTxs)} tone="neutral" />
              </div>
            </CardContent>
          </Card>

          <Card className="constellation-glass border-white/10 bg-white/5">
            <CardHeader>
              <div className="constellation-kicker">Selected proposer</div>
              <CardTitle className="text-3xl">{selected.proposer} inclusion breakdown</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <DecisionRow
                label="Enough attesters saw the cycle"
                pass={aggregateReady}
                description="If not, the whole cycle is skipped."
              />
              <DecisionRow
                label="This proposer cleared attestation threshold"
                pass={selected.attested}
                description={`${selected.attestationCount}/${ATTESTER_COUNT} attesters currently witnessed this proposal.`}
              />
              <DecisionRow
                label="Fits replay-safe compute envelope"
                pass={selected.replayFits}
                description={`Current model budget: ${strictReplay ? 120 : 160} tx for this demo cycle.`}
              />
              <DecisionRow
                label="No conflicting signed proposal"
                pass={!selected.equivocated}
                description="Equivocation kills proposer eligibility even with enough attestations."
              />

              <button
                type="button"
                className={cn(
                  "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  selected.equivocated
                    ? "border-rose-400/30 bg-rose-400/20 text-rose-100"
                    : "border-rose-400/20 bg-rose-400/10 text-rose-200 hover:bg-rose-400/15"
                )}
                onClick={() => {
                  setCycles((current) =>
                    current.map((item) =>
                      item.id === selected.id ? { ...item, equivocated: !item.equivocated } : item
                    )
                  );
                }}
              >
                <CircleAlert className="size-4" />
                {selected.equivocated ? "Clear equivocation flag" : "Mark proposer as equivocated"}
              </button>

              <p>
                This is the part many people miss: <strong>availability evidence is necessary, not sufficient.</strong>
                The final batch still has to respect replay-time constraints.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto grid w-full max-w-6xl gap-6 xl:grid-cols-2">
          <Card className="constellation-glass border-white/10 bg-white/5">
            <CardHeader>
              <div className="constellation-kicker">Why it matters</div>
              <CardTitle className="text-3xl">It compresses censorship resistance down to the 50ms cycle.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <TimelineItem
                title="Before"
                body="A transaction can miss the economic tick if the current leader or its ingress path never really sees it in time."
              />
              <TimelineItem
                title="With Constellation"
                body="Users can fan transactions out to multiple proposers, and enough independent attester evidence makes exclusion much harder without obvious failure or equivocation."
              />
              <TimelineItem
                title="Net result"
                body="The protocol enforces a much faster, more objective notion of ‘you had your chance to include this’."
              />
            </CardContent>
          </Card>

          <Card className="constellation-glass border-white/10 bg-white/5">
            <CardHeader>
              <div className="constellation-kicker">Replay constraint</div>
              <CardTitle className="text-3xl">Concurrent ingress does not mean unconstrained execution.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <p>
                The leader still has to produce something validators can replay deterministically and on time.
                That means transaction ordering and packing still matter.
              </p>
              <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
                <RailNode
                  icon={<TimerReset className="size-4" />}
                  title="Cycle proposals arrive in parallel"
                  body="Good for liveness and censorship resistance."
                  tone="good"
                />
                <ArrowRight className="mx-auto hidden size-5 text-cyan-300 md:block" />
                <RailNode
                  icon={<Cpu className="size-4" />}
                  title="Virtual schedule trims the set"
                  body="Must fit sequential replay limits."
                  tone="warn"
                />
                <ArrowRight className="mx-auto hidden size-5 text-cyan-300 md:block" />
                <RailNode
                  icon={<Vote className="size-4" />}
                  title="Validators replay and finalize"
                  body="Normal correctness checks still apply."
                  tone="neutral"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <Card className="constellation-glass border-white/10 bg-white/5">
            <CardHeader>
              <div className="constellation-kicker">Common confusion</div>
              <CardTitle className="text-3xl">What engineers usually get wrong first</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {misconceptions.map((item) => (
                <div key={item.myth} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <div className="constellation-small-label">Myth</div>
                  <h3 className="mb-2 text-lg font-semibold">{item.myth}</h3>
                  <div className="constellation-small-label text-emerald-300">Reality</div>
                  <p className="mt-1 text-sm leading-7 text-white/70">{item.reality}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-10 pb-24 md:px-10">
        <div className="mx-auto w-full max-w-6xl">
          <Card className="constellation-glass border-white/10 bg-white/5">
            <CardHeader>
              <div className="constellation-kicker">Reading list</div>
              <CardTitle className="text-3xl">Use this page as the intuitive layer, then go deeper.</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="grid gap-4 md:grid-cols-3">
                <ReadingCard
                  href="https://constellation.anza.xyz/"
                  label="Reference site"
                  title="Constellation tracker"
                  body="Baseline proposal explainer from Anza."
                />
                <ReadingCard
                  href="https://github.com/solana-foundation/solana-improvement-documents/pull/322"
                  label="Spec thread"
                  title="SIMD-0322"
                  body="Serial execution replay constraint and implementation discussion."
                />
                <ReadingCard
                  href="https://drive.google.com/file/d/1MiGlZ_OORdnq6znkVQ5LrenBF3kyBIWf/view?usp=drive_link"
                  label="Whitepaper"
                  title="Formal design"
                  body="Protocol definitions, security claims, and model details."
                />
              </div>
              <div className="rounded-2xl border border-dashed border-white/15 bg-white/5 px-4 py-4 text-sm text-white/65">
                If you want to take this further, the obvious next step is to add animated packet-flow diagrams,
                protocol-phase scrubbing, and a mobile-friendly visualizer for cycle-by-cycle inclusion.
              </div>
              <div className="flex justify-center pt-2">
                <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white">
                  <Link href="/">Back to home</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

function Metric({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="constellation-small-label">{label}</div>
      <div className="mt-1 text-3xl font-bold tracking-tight">{value}</div>
      <div className="mt-2 text-sm leading-6 text-white/65">{detail}</div>
    </div>
  );
}

function Pill({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="constellation-small-label">{title}</div>
      <div className="text-sm font-medium leading-6 text-white/85">{body}</div>
    </div>
  );
}

function StatusChip({
  tone,
  children,
}: {
  tone: "good" | "warn" | "danger" | "muted";
  children: React.ReactNode;
}) {
  return <span className={cn("constellation-chip", `constellation-chip-${tone}`)}>{children}</span>;
}

function SummaryChip({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "good" | "danger" | "neutral";
}) {
  return (
    <div className={cn("constellation-summary-chip", tone !== "neutral" && `constellation-summary-chip-${tone}`)}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function DecisionRow({
  label,
  pass,
  description,
}: {
  label: string;
  pass: boolean;
  description: string;
}) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
      <span className={cn("constellation-chip", pass ? "constellation-chip-good" : "constellation-chip-danger")}>
        {pass ? "pass" : "fail"}
      </span>
      <div>
        <strong className="block text-sm font-semibold text-white">{label}</strong>
        <p className="mt-1 text-sm leading-6 text-white/65">{description}</p>
      </div>
    </div>
  );
}

function TimelineItem({ title, body }: { title: string; body: string }) {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-4">
      <div className="mt-2 size-3 rounded-full bg-gradient-to-br from-emerald-300 to-cyan-300 shadow-[0_0_0_6px_rgba(34,211,238,0.08)]" />
      <div>
        <strong className="block text-white">{title}</strong>
        <p className="mt-1 text-sm leading-7 text-white/65">{body}</p>
      </div>
    </div>
  );
}

function RailNode({
  icon,
  title,
  body,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  tone: "good" | "warn" | "neutral";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 p-4",
        tone === "good" && "bg-emerald-400/10",
        tone === "warn" && "bg-amber-300/10",
        tone === "neutral" && "bg-white/5"
      )}
    >
      <div className="mb-3 inline-flex size-8 items-center justify-center rounded-full bg-white/10 text-white">
        {icon}
      </div>
      <strong className="block text-sm font-semibold text-white">{title}</strong>
      <p className="mt-1 text-sm leading-6 text-white/65">{body}</p>
    </div>
  );
}

function ReadingCard({
  href,
  label,
  title,
  body,
}: {
  href: string;
  label: string;
  title: string;
  body: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-3xl border border-white/10 bg-white/5 p-5 transition-transform hover:-translate-y-0.5 hover:bg-white/10"
    >
      <div className="constellation-small-label">{label}</div>
      <strong className="mt-1 block text-lg text-white">{title}</strong>
      <p className="mt-2 text-sm leading-6 text-white/65">{body}</p>
    </a>
  );
}
