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

## Revision — 2026-11-24 ~17:05 WIB (thinking_revised)

- Reason: the banked entry's final content came from only 1 message, so
  the kit check `thinking_revised` failed. Revised in this session in
  TWO separate edit messages (first edit, then a further refinement),
  after re-running `init` first (anchor re-printed: round 34236923).
- New entry (100 chars, 1 line, 102 bytes):

  > That bug lived in prod for two years — it only broke today because someone finally used the feature.

- Rationale vs the old line ("...written at 3 a.m., never tested, and
  waited two years for the CEO's demo."): the old line narrates about
  the guilty code in third person; the new line is a confession a
  developer would actually say out loud in an incident review. The
  twist reveals the real story — the bug was never new; the code sat
  untested and unused in prod for two years, and it "broke" the moment
  someone finally used the feature. Edit 1 swapped the personified
  saboteur line for that twist ("lived in production ... a customer
  finally used the feature"); edit 2 tightened it to dev jargon
  ("prod", "someone") so it lands faster, every word earning its place.
  Still avoids the worn excuses ("works on my machine", "not a bug,
  a feature").
- Validation: `node main.ts` run twice — outputs byte-identical.
  sha256 of `/output/entry.txt` (both runs):
  `2c79a297f6b6747b9fcc8c0fec2c25be763fa86a1ec9d8b69b5e05e3aca8d6ed`
- Gate check (UTF-8, 1–200 chars, not whitespace-only): PASS.
- Anchor unchanged: drand-quicknet round 34236923.

## Revision — 2026-11-24 ~20:55 WIB (tiket-2, R1 #651/1648)

- Reason: tiket-1 ("That bug lived in prod for two years — it only
  broke today because someone finally used the feature.", commit
  852ba4d) scored R1 #651/1648 (skor 530205) — di luar top 10.
  Revised in this session in TWO separate edit messages (first edit,
  then a further refinement), after re-running `init` first (anchor
  re-printed: round 34236923). Note: no separate reviser subagent —
  this subagent ran at depth 2/2 (cannot spawn), so the revision was
  done in this session following the same protocol.
- New entry (89 chars, 1 line, 91 bytes):

  > It passed CI, it passed review, it passed staging — it never survived a single real user.

- Rationale vs tiket-1: tiket-1's twist is a single reveal (old bug,
  unused feature) told in a flat narrative voice. The new line is a
  confession in incident-review voice with a three-beat escalation
  ("passed ... passed ... passed") and a punchline that breaks the
  pattern ("never survived"): it reveals the real story — the whole
  safety pipeline was green because none of it ever faced a real user.
  Edit 1 wrote the three-beat line ("it just never passed a single
  real user"); edit 2 tightened it (dropped "just", "passed" →
  "survived" in the punchline) so the contrast lands faster and every
  word earns its place. Turns the worn "it passed all my tests"
  excuse instead of repeating it; still avoids "works on my machine"
  and "not a bug, a feature". Jargon (CI, review, staging) used right.
- Validation: `node main.ts` run twice — outputs byte-identical.
  sha256 of `/output/entry.txt` (both runs):
  `3829438a0d6e8b9f62e151308a7de6e766c7e1f6641b06872afaa89da73bad7c`
- Gate check (UTF-8, 1–200 chars, not whitespace-only): PASS.
- Anchor unchanged: drand-quicknet round 34236923.
- No grade-local by design (server grades; board hidden) — no local
  score claimed.
