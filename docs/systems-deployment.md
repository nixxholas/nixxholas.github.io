# Systems Data Deployment Plan

## Goal
Make Truth Monitor + Polymarket data globally consumable (website, bots, agents) with one source of truth.

## Proposed architecture
1. **System of record:** Supabase Postgres
2. **Writers:**
   - `truth-monitor` writes `truth_signals` + `truth_snapshots`
   - `polymarket` writer writes periodic snapshots into `polymarket_positions`
3. **Readers:**
   - Portfolio website reads via Supabase REST (read-only anon key)
   - Other systems can query SQL or REST directly

## Why this setup
- Global availability across machines/services
- Queryable history for analytics + model tuning
- Decouples UI from local files and process memory

## Environment variables (website)
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

Without these variables, `/systems` falls back to static snapshot file:
- `public/data/truth-monitor-snapshot.json`

## Deployment options (to decide together)

### Option A — Keep GitHub Pages (current)
- Website remains static export
- Browser fetches Supabase directly (already compatible)
- No server required
- Best if we want minimal ops

### Option B — Move website to Vercel
- Enables server routes and edge caching
- Better control of secrets and transformations
- Slightly higher ops surface

### Option C — Cloudflare Pages + Workers
- Similar dynamic capabilities with lower cost profile
- Good for global edge if feed volume grows

## Recommended immediate rollout
1. Create Supabase project and run `db/truth-monitor.sql`
2. Add env vars to website deploy target
3. Add truth-monitor writer job (every 1-5 min)
4. Add polymarket snapshot writer (hourly)
5. Verify `/systems` shows live feed + deltas

## Security notes
- Use anon key only for read paths
- Use service role key only in writer jobs (never in browser)
- Keep PII/secret fields out of public tables
