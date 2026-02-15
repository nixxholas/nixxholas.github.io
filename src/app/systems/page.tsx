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

const supabaseHeaders =
  SUPABASE_ANON_KEY
    ? {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      }
    : undefined;

const hasSupabase = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

type DbPolymarketRow = {
  market_slug?: string;
  market_title?: string;
  outcome?: string;
  size?: number | string;
  initial_value?: number | string;
  current_value?: number | string;
  cash_pnl?: number | string;
  mark_price?: number | string;
};

function mapDbPosition(row: DbPolymarketRow): PolymarketPosition {
  return {
    title: row.market_title ?? "Unknown market",
    slug: row.market_slug ?? "unknown",
    outcome: row.outcome ?? "Unknown",
    size: Number(row.size ?? 0),
    initialValue: Number(row.initial_value ?? 0),
    currentValue: Number(row.current_value ?? 0),
    cashPnl: Number(row.cash_pnl ?? 0),
    curPrice: Number(row.mark_price ?? 0),
  };
}

export default function SystemsPage() {
  const [positions, setPositions] = useState<PolymarketPosition[]>([]);
  const [positionsError, setPositionsError] = useState<string | null>(null);
  const [truthSnapshot, setTruthSnapshot] = useState<TruthMonitorSnapshot | null>(null);
  const [truthSignals, setTruthSignals] = useState<TruthSignal[]>([]);
  const [positionSource, setPositionSource] = useState("Polymarket Data API (public)");

  useEffect(() => {
    const load = async () => {
      try {
        let loadedFromSupabase = false;

        if (hasSupabase) {
          const latestTsRes = await fetch(
            `${SUPABASE_URL}/rest/v1/polymarket_positions?select=ts&wallet=eq.${POLYMARKET_WALLET}&order=ts.desc&limit=1`,
            { cache: "no-store", headers: supabaseHeaders }
          );

          if (latestTsRes.ok) {
            const latest = await latestTsRes.json();
            const latestTs = latest?.[0]?.ts;
            if (latestTs) {
              const posRes = await fetch(
                `${SUPABASE_URL}/rest/v1/polymarket_positions?select=market_slug,market_title,outcome,size,initial_value,current_value,cash_pnl,mark_price&wallet=eq.${POLYMARKET_WALLET}&ts=eq.${encodeURIComponent(
                  latestTs
                )}`,
                { cache: "no-store", headers: supabaseHeaders }
              );

              if (posRes.ok) {
                const rows = await posRes.json();
                const mapped = (rows || []).map(mapDbPosition);
                if (mapped.length) {
                  setPositions(mapped);
                  setPositionSource("Supabase (polymarket_positions)");
                  loadedFromSupabase = true;
                }
              }
            }
          }
        }

        if (!loadedFromSupabase) {
          const res = await fetch(
            `https://data-api.polymarket.com/positions?user=${POLYMARKET_WALLET}&sizeThreshold=0`,
            { cache: "no-store" }
          );
          if (!res.ok) throw new Error(`Polymarket API error ${res.status}`);
          const data: PolymarketPosition[] = await res.json();
          setPositions(data.filter((p) => Number(p.size) > 0));
          setPositionSource("Polymarket Data API (public)");
        }
      } catch (e) {
        setPositionsError(e instanceof Error ? e.message : "Failed to load positions");
      }

      try {
        let loadedSnapshotFromSupabase = false;

        if (hasSupabase) {
          const feedRes = await fetch(
            `${SUPABASE_URL}/rest/v1/truth_signals?select=id,ts,source,headline,sentiment,impact,confidence,url&order=ts.desc&limit=8`,
            {
              cache: "no-store",
              headers: supabaseHeaders,
            }
          );

          if (feedRes.ok) {
            const rows = (await feedRes.json()) as TruthSignal[];
            setTruthSignals(rows);
          }

          const snapRes = await fetch(
            `${SUPABASE_URL}/rest/v1/truth_snapshots?select=ts,system_confidence,summary,payload&order=ts.desc&limit=1`,
            { cache: "no-store", headers: supabaseHeaders }
          );

          if (snapRes.ok) {
            const rows = await snapRes.json();
            const r = rows?.[0];
            if (r) {
              setTruthSnapshot({
                updatedAt: r.ts,
                systemConfidence: r.system_confidence,
                summary: r.summary,
                highlights: r?.payload?.highlights ?? [],
              });
              loadedSnapshotFromSupabase = true;
            }
          }
        }

        if (!loadedSnapshotFromSupabase) {
          const snapshotRes = await fetch("/data/truth-monitor-snapshot.json", {
            cache: "no-store",
          });
          if (snapshotRes.ok) {
            const snapshot = (await snapshotRes.json()) as TruthMonitorSnapshot;
            setTruthSnapshot(snapshot);
          }
        }
      } catch {
        // optional surface; ignore silently
      }
    };

    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const stats = useMemo(() => summarizePositions(positions), [positions]);
  const topLosses = useMemo(() => rankTopLosses(positions, 5), [positions]);

  return (
    <main className="container mx-auto max-w-4xl py-12 px-6 md:px-0 space-y-8">
      <section className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Live Systems</h1>
        <p className="text-muted-foreground">Real-time view of Truth Monitor signals and Polymarket active positions.</p>
      </section>

      <Card className="border">
        <CardHeader>
          <CardTitle className="text-xl">Truth Monitor</CardTitle>
          <CardDescription>Supabase-first feed with static snapshot fallback.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          {truthSnapshot ? (
            <>
              <p>
                <span className="font-medium text-foreground">System confidence:</span> {truthSnapshot.systemConfidence || "Unknown"}
              </p>
              <p>
                <span className="font-medium text-foreground">Summary:</span> {truthSnapshot.summary || "No summary provided."}
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

          <p className="text-xs text-muted-foreground">Data source: {positionSource}</p>
        </CardContent>
      </Card>

      <p className="text-xs text-muted-foreground">
        Supabase-ready via <code>NEXT_PUBLIC_SUPABASE_URL</code> + <code>NEXT_PUBLIC_SUPABASE_ANON_KEY</code>, with static/public fallback.
      </p>

      <Link href="/" className="text-sm underline">
        ← Back home
      </Link>
    </main>
  );
}
