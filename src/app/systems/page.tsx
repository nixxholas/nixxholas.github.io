"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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

const POLYMARKET_WALLET = "0xcF0f71A0e571905D4A6a8915EE26286a5e783cfb";

export default function SystemsPage() {
  const [positions, setPositions] = useState<PolymarketPosition[]>([]);
  const [positionsError, setPositionsError] = useState<string | null>(null);
  const [truthSnapshot, setTruthSnapshot] = useState<TruthMonitorSnapshot | null>(null);

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

  const stats = useMemo(() => {
    const totalInitial = positions.reduce((acc, p) => acc + Number(p.initialValue || 0), 0);
    const totalCurrent = positions.reduce((acc, p) => acc + Number(p.currentValue || 0), 0);
    const totalPnl = positions.reduce((acc, p) => acc + Number(p.cashPnl || 0), 0);
    const red = positions.filter((p) => Number(p.cashPnl || 0) < 0).length;
    const green = positions.filter((p) => Number(p.cashPnl || 0) > 0).length;

    return { totalInitial, totalCurrent, totalPnl, red, green };
  }, [positions]);

  const topLosses = useMemo(
    () => [...positions].sort((a, b) => Number(a.cashPnl) - Number(b.cashPnl)).slice(0, 5),
    [positions]
  );

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
              <p className="text-foreground font-semibold">{positions.length}</p>
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
        Want this to auto-refresh from your local truth-monitor process? I can wire a lightweight exporter + cron push next.
      </p>

      <Link href="/" className="text-sm underline">← Back home</Link>
    </main>
  );
}
