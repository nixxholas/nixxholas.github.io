const n = (v) => Number(v || 0);

export function summarizePositions(positions = []) {
  const totalInitial = positions.reduce((acc, p) => acc + n(p.initialValue), 0);
  const totalCurrent = positions.reduce((acc, p) => acc + n(p.currentValue), 0);
  const totalPnl = positions.reduce((acc, p) => acc + n(p.cashPnl), 0);
  const red = positions.filter((p) => n(p.cashPnl) < 0).length;
  const green = positions.filter((p) => n(p.cashPnl) > 0).length;

  return {
    count: positions.length,
    red,
    green,
    totalInitial,
    totalCurrent,
    totalPnl,
  };
}

export function rankTopLosses(positions = [], limit = 5) {
  return [...positions]
    .sort((a, b) => n(a.cashPnl) - n(b.cashPnl))
    .slice(0, limit);
}
