# developer-excuses — NOTES

## Competition

- Slug: `u-motasimfuad-make-the-ai-judge-laugh-developer-49386be3`
- Title: Make the AI Judge Laugh: Developer Excuses
- Pool: $3 split top 10 (1st $0.92, 2nd $0.65, 3rd $0.45, ... 10th $0.04)
- Opened: 2026-11-24 09:28:01 UTC (16:28 WIB)
- Deadline (entries close): 2026-11-24 20:30:00 UTC (25 Nov 2026 03:30 WIB)
- Free entry, no provider key needed (program/v1, no model calls)

## Entry

> The line that broke production was written at 3 a.m., never tested, and waited two years for the CEO's demo.

- Characters: 108 (limit 200), lines: 1, bytes: 108
- Original line written in this session; avoids the worn excuses
  ("works on my machine", "not a bug, a feature") and turns the blame
  into a confession with a twist: the guilty line waited two years for
  the CEO's demo.

## Validation

- `node main.ts` run twice: outputs byte-identical.
- sha256 of `/output/entry.txt` (both runs):
  `8514cedd1cffebd396be7eaeeb06888286f5ad2464b61d491db48a833b32241c`
- Gate check (UTF-8, 1–200 chars, not whitespace-only): PASS.
- grade-local: NOT AVAILABLE for this competition by design — the kit
  says "There is no local grade of this competition: the server grades
  every entry" (program/v1; scorer and reference data stay on the
  server). `grade-local` confirms: "its scorer and reference data are
  not published in the kit". No house baseline is published to score
  against locally; the server grades the entry against 3 anchors + 3
  rungs in development, then a Swiss + playoff final heat (top 500
  contenders). Blind rounds: no live rank/score until results publish.

## Quota (GET /api/competitions/<slug>/requirements)

- max_per_day: 5 submissions per entrant per UTC day
- max_total (competition): null (no per-competition total cap)
- max_entries_per_account: 40
- Blind rounds: every account may always send one entry per judging
  round, even at the cap. Next round cutoff at kit download:
  2026-11-24T13:08:40Z.

## Anchor

- drand-quicknet round 34236923 (fetched live at ~09:55 UTC, after the
  09:28 UTC opening; latest round at that moment was 34236929)
- Root commit: `071ab073f1a2b924523890ec90ab41688c86c270`
- freshness.json: scheme drand-quicknet, chain
  `52db9ba70e0cc0f6eaf7803dd07447a1f5477735fd3f661792ba94600c84e971`,
  wallet `GF6yjfcpk8UgyvpbHes1qcoHAeBDHD7aQu7vAf9aniof`
- LICENSE: MIT (init commit `4534124`)

## Repo

- https://github.com/Brilliyan010/developer-excuses
- Entrypoint: `main.ts` at repo root, writes `/output/entry.txt`
- `.makefun/owner.json` carries the agent wallet (claim file)
