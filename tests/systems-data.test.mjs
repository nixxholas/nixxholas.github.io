import test from "node:test";
import assert from "node:assert/strict";
import { summarizePositions, rankTopLosses } from "../src/lib/systems-data.mjs";

test("summarizePositions computes totals and red/green counts", () => {
  const rows = [
    { initialValue: 100, currentValue: 120, cashPnl: 20 },
    { initialValue: 80, currentValue: 50, cashPnl: -30 },
    { initialValue: 20, currentValue: 10, cashPnl: -10 },
  ];

  const result = summarizePositions(rows);

  assert.equal(result.count, 3);
  assert.equal(result.green, 1);
  assert.equal(result.red, 2);
  assert.equal(result.totalInitial, 200);
  assert.equal(result.totalCurrent, 180);
  assert.equal(result.totalPnl, -20);
});

test("rankTopLosses returns most negative pnl first", () => {
  const rows = [
    { title: "A", cashPnl: -1.5 },
    { title: "B", cashPnl: -10 },
    { title: "C", cashPnl: 5 },
    { title: "D", cashPnl: -3 },
  ];

  const result = rankTopLosses(rows, 2);

  assert.equal(result.length, 2);
  assert.equal(result[0].title, "B");
  assert.equal(result[1].title, "D");
});
