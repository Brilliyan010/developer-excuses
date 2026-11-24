// Make the AI Judge Laugh: Developer Excuses — make.fun entry.
//
// Writes exactly one line (at most 200 characters) to /output/entry.txt:
// a funny excuse a developer gives when code breaks in production.
//
// The joke: a confession disguised as an excuse — the bug was never new.
// It sat in prod for two years, harmless, because nobody ever touched
// that feature; the "break" happened the moment someone finally did.
// The twist reveals the real story (untested, unused code shipped for
// years) instead of stating the obvious, and it sounds like something a
// developer would actually say in an incident review. Tightened to dev
// jargon ("prod", "someone") so it lands faster: every word earns its
// place. It avoids the worn excuses ("works on my machine", "not a bug,
// a feature").
//
// Deterministic: no input, no network, no randomness — the same bytes
// on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "That bug lived in prod for two years — it only broke today because someone finally used the feature.";

const chars = [...EXCUSE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry is ${chars} characters, must be 1-200`);
}
if (!EXCUSE.trim()) {
  throw new Error("entry is whitespace-only");
}
if (EXCUSE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
