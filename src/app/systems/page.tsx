"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { rankTopLosses, summarizePositions } from "@/lib/systems-data.mjs";

type PolymarketPosition = {
  title: string;
  slug: string;
  outcome: string;
  size: number;
  initialValue: number;
  currentValue: number;
  cashPnl: number;
  curPrice: number;
  endDate?: string;
};

type TruthMonitorSnapshot = {
  updatedAt?: string;
  systemConfidence?: string;
  summary?: string;
  highlights?: string[];
};

type TruthSignal = {
  id: string;
  ts: string;
  source: string;
  headline: string;
  sentiment?: string;
  impact?: number;
  confidence?: number;
  url?: string;
};

const POLYMARKET_WALLET = "0xcF0f71A0e571905D4A6a8915EE26286a5e783cfb";
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export default function SystemsPage() {
  const [positions, setPositions] = useState<PolymarketPosition[]>([]);
  const [positionsError, setPositionsError] = useState<string | null>(null);
  const [truthSnapshot, setTruthSnapshot] = useState<TruthMonitorSnapshot | null>(null);
  const [truthSignals, setTruthSignals] = useState<TruthSignal[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(
          `https://data-api.polymarket.com/positions?user=${POLYMARKET_WALLET}&sizeThreshold=0`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error(`Polymarket API error ${res.status}`);
        const data: PolymarketPosition[] = await res.json();
        setPositions(data.filter((p) => Number(p.size) > 0));
      } catch (e) {
        setPositionsError(e instanceof Error ? e.message : "Failed to load positions");
      }

      try {
        if (SUPABASE_URL && SUPABASE_ANON_KEY) {
          const feedRes = await fetch(
            `${SUPABASE_URL}/rest/v1/truth_signals?select=id,ts,source,headline,sentiment,impact,confidence,url&order=ts.desc&limit=8`,
            {
              cache: "no-store",
              headers: {
                apikey: SUPABASE_ANON_KEY,
                Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
              },
            }
          );

          if (feedRes.ok) {
            const rows = (await feedRes.json()) as TruthSignal[];
            setTruthSignals(rows);
          }
        }

        const snapshotRes = await fetch("/data/truth-monitor-snapshot.json", {
          cache: "no-store",
        });
        if (snapshotRes.ok) {
          const snapshot = (await snapshotRes.json()) as TruthMonitorSnapshot;
          setTruthSnapshot(snapshot);
        }
      } catch {
        // optional surface; ignore silently
      }
    };

    load();
  }, []);

  const stats = useMemo(() => summarizePositions(positions), [positions]);

  const topLosses = useMemo(() => rankTopLosses(positions, 5), [positions]);

  return (
    <main className="container mx-auto max-w-4xl py-12 px-6 md:px-0 space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Live Systems</h1>
        <p className="text-muted-foreground">
          Real-time view of Truth Monitor signals and Polymarket active positions.
        </p>
      </section>

      <Card className="border">
        <CardHeader>
          <CardTitle className="text-xl">Truth Monitor</CardTitle>
          <CardDescription>Public-facing snapshot from the local monitor pipeline.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {truthSnapshot ? (
            <>
              <p>
                <span className="font-medium text-foreground">System confidence:</span>{" "}
                {truthSnapshot.systemConfidence || "Unknown"}
              </p>
              <p>
                <span className="font-medium text-foreground">Summary:</span>{" "}
                {truthSnapshot.summary || "No summary provided."}
              </p>
              {!!truthSnapshot.highlights?.length && (
                <ul className="list-disc pl-6 space-y-1">
                  {truthSnapshot.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              )}
              <p className="text-xs">Updated: {truthSnapshot.updatedAt || "Unknown"}</p>

              {!!truthSignals.length && (
                <div className="pt-2 space-y-2">
                  <p className="font-medium text-foreground">Latest signals</p>
                  {truthSignals.map((s) => (
                    <div key={s.id} className="rounded border p-2 text-xs">
                      <p className="text-foreground">{s.headline}</p>
                      <p className="text-muted-foreground">
                        {s.source} · {s.sentiment || "neutral"} · impact {s.impact ?? "n/a"} · conf {s.confidence ?? "n/a"}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <p>
              Snapshot not published yet. Wire your local monitor to update
              <code className="mx-1">/public/data/truth-monitor-snapshot.json</code>.
            </p>
          )}
        </CardContent>
      </Card>

      <Card className="border">
        <CardHeader>
          <CardTitle className="text-xl">Polymarket — Active Positions</CardTitle>
          <CardDescription>
            Wallet: <code>{POLYMARKET_WALLET}</code>
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {positionsError && <p className="text-red-500">{positionsError}</p>}

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-sm">
            <div>
              <p className="text-muted-foreground">Positions</p>
              <p className="text-foreground font-semibold">{stats.count}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Green / Red</p>
              <p className="text-foreground font-semibold">{stats.green} / {stats.red}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Initial</p>
              <p className="text-foreground font-semibold">${stats.totalInitial.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Current</p>
              <p className="text-foreground font-semibold">${stats.totalCurrent.toFixed(2)}</p>
            </div>
            <div>
              <p className="text-muted-foreground">uPnL</p>
              <p className={`font-semibold ${stats.totalPnl >= 0 ? "text-green-500" : "text-red-500"}`}>
                ${stats.totalPnl.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-foreground">Top 5 drawdowns</p>
            {topLosses.map((p) => (
              <div key={`${p.slug}-${p.outcome}`} className="rounded-md border p-3 text-sm">
                <p className="text-foreground font-medium">{p.title}</p>
                <p className="text-muted-foreground">
                  {p.outcome} · size {Number(p.size).toFixed(2)} · mark {(Number(p.curPrice) * 100).toFixed(1)}¢
                </p>
                <p className="text-red-500">uPnL ${Number(p.cashPnl).toFixed(2)}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            Data source: Polymarket Data API (public) · live client fetch
          </p>
        </CardContent>
      </Card>

      <p className="text-xs text-muted-foreground">
        This page is Supabase-ready via <code>NEXT_PUBLIC_SUPABASE_URL</code> + <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>,
        with static snapshot fallback for local/dev.
      </p>

      <Link href="/" className="text-sm underline">← Back home</Link>
    </main>
  );
}
