-- Truth Monitor + Polymarket shared data model (Supabase/Postgres)

create table if not exists public.truth_signals (
  id text primary key,
  ts timestamptz not null,
  source text not null,
  topic text,
  headline text not null,
  sentiment text,
  impact numeric,
  confidence numeric,
  url text,
  raw_json jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_truth_signals_ts on public.truth_signals (ts desc);
create index if not exists idx_truth_signals_source on public.truth_signals (source);

create table if not exists public.truth_snapshots (
  id bigserial primary key,
  ts timestamptz not null,
  system_confidence text,
  summary text,
  notable_count int,
  payload jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_truth_snapshots_ts on public.truth_snapshots (ts desc);

create table if not exists public.polymarket_positions (
  id bigserial primary key,
  ts timestamptz not null,
  wallet text not null,
  market_slug text not null,
  market_title text,
  outcome text,
  size numeric,
  initial_value numeric,
  current_value numeric,
  cash_pnl numeric,
  mark_price numeric,
  payload jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_poly_positions_wallet_ts on public.polymarket_positions (wallet, ts desc);

-- Basic read policy for public dashboard usage
alter table public.truth_signals enable row level security;
alter table public.truth_snapshots enable row level security;
alter table public.polymarket_positions enable row level security;

do $$ begin
  create policy "public can read truth_signals" on public.truth_signals for select using (true);
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "public can read truth_snapshots" on public.truth_snapshots for select using (true);
exception when duplicate_object then null;
end $$;

do $$ begin
  create policy "public can read polymarket_positions" on public.polymarket_positions for select using (true);
exception when duplicate_object then null;
end $$;
