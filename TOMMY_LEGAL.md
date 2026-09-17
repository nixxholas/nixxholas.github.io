# Tommy legal pages

Tommy is Nicholas Chen’s personal executive assistant. These documents reflect the
confirmed scope: Discord is the only work-data source; AI processing can use
OpenAI’s Codex, Anthropic’s Claude, or local models; source content and summaries
are retained only while needed for the requested work, then deleted.

## Files and URLs

| Document | Source | URL path |
| --- | --- | --- |
| Terms of Service | `public/assistant/terms-of-service.html` | `/assistant/terms-of-service.html` |
| Privacy Policy | `public/assistant/privacy-policy.html` | `/assistant/privacy-policy.html` |
| Shared stylesheet | `public/assistant/legal.css` | `/assistant/legal.css` |
| Theme preference | `public/assistant/theme.js` | `/assistant/theme.js` |
| Inter font | `public/assistant/fonts/inter-latin.woff2` | `/assistant/fonts/inter-latin.woff2` |

These are standalone static documents, outside the portfolio’s React layout. Copy
the entire `public/assistant/` directory to another static host or open the HTML
locally. Reading and section navigation work without JavaScript; a small local
script enhances them with the blog’s light/dark theme preference. It uses the same
`theme` local-storage key and light default as `next-themes`, supports an existing
system preference, and synchronises changes across tabs on the same origin.
The only browser storage is this preference. No analytics or external assets load.

The presentation mirrors `src/app/layout.tsx`, `src/app/globals.css`, and the blog
article: Inter, a 42rem outer width with 1.5rem side padding, 3rem/6rem vertical
spacing, 36px/48px bold titles, 16px/28px prose, and the same neutral theme tokens.
Keep these equivalents in sync if the blog theme changes. A local copy of the
blog’s Inter Latin font is bundled with its SIL Open Font License in `fonts/`.
The “Back to blog” link targets the hosting site’s `/blog` route.

The existing Next.js server serves them directly from `public/`. No static-export
setting or change to the dynamic blog is needed. Once deployed through the
repository’s normal process, use the site’s HTTPS origin plus the paths above for
the Discord Developer Portal’s Terms of Service and Privacy Policy URLs. Adding
these files locally does not publish them or configure the Discord application.

## Content and maintenance

- Operator and privacy/support contact: Nicholas Chen, `m@nixholas.me`, matching
  the existing portfolio contact information.
- Effective and last-updated date: 17 September 2026. Update both documents when
  their terms change; provide notice of material changes as stated in the pages.
- Terms cover permission, adult/private use, source and output rights, acceptable
  use, AI limitations, third parties, termination, liability, and disputes.
- Privacy covers people mentioned in Discord content, data categories, purposes,
  AI processing, recipients, retention, deletion, rights, security, international
  processing, website requests, and children’s information.
- Tommy’s task-based deletion commitment is distinct from Discord’s original
  messages, delivered outputs, recipient copies, and AI-provider retention.
- Local inference is distinguished from a locally running Codex or Claude client
  that sends context to hosted inference. Local-only requests must not silently
  fall back to hosted providers.

The documents establish commitments for operating Tommy; this repository contains
the website, not the bot implementation. Ensure the bot’s permissions, delivery
destinations, deletion of working copies, security controls, and selected provider
settings match these commitments. A provider’s no-training setting does not imply
zero retention. Consumer accounts, business accounts, API usage, and feedback
features can have different handling. Provider settings or features that permit
incompatible use of Discord content must not be enabled for Tommy.

If work sources, recipients, or retention change, update the disclosures before
introducing that processing. Keep the contents menu in sync with the section IDs
when adding or renaming a section.

## Preview and verification

Use the existing `npm run dev` / `pnpm dev` workflow, or preview just the static
pages without Next.js:

```sh
python3 -m http.server 4317 --bind 127.0.0.1 --directory public
```

Open `http://127.0.0.1:4317/assistant/terms-of-service.html` and
`http://127.0.0.1:4317/assistant/privacy-policy.html`. Browser Print / Save as PDF
uses the print stylesheet, including when viewing in dark mode. All screen sizes
use a native, expandable contents menu within the single reading column.
Navigation works without JavaScript; the theme toggle is hidden in that case.

The production build and existing lint check can be run with:

```sh
npm run build
npm run lint
```

The existing lint task only checks `src/`. Validate these HTML files separately:

```sh
npm exec --yes --package html-validate@11.16.0 -- html-validate public/assistant/*.html
```

## Primary references

Consulted on 17 September 2026; provider policies may change. These references
inform the disclosures, not a certification of the bot’s legal compliance.

- [Discord Developer Terms, privacy and security](https://support-dev.discord.com/hc/en-us/articles/8562894815383-Discord-Developer-Terms-of-Service)
- [Discord Developer Policy, permitted API-data uses](https://support-dev.discord.com/hc/en-us/articles/8563934450327-Discord-Developer-Policy)
- [Discord Privacy Policy](https://discord.com/privacy)
- [OpenAI API data controls](https://developers.openai.com/api/docs/guides/your-data)
- [Anthropic commercial training practices](https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training)
- [Anthropic consumer training practices](https://privacy.claude.com/en/articles/10023580-is-my-data-used-for-model-training)
- [Anthropic commercial retention](https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data)
- [Anthropic consumer retention](https://privacy.claude.com/en/articles/10023548-how-long-do-you-store-my-data)
- [Singapore PDPC guidance for individuals](https://www.pdpc.gov.sg/overview-of-pdpa/data-protection/individual/individuals-overview)
- [European Commission guidance on individual data rights](https://commission.europa.eu/law/law-topic/data-protection/information-individuals_en)
