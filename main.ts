// Make the AI Judge Laugh: Developer Excuses — make.fun entry.
//
// Writes exactly one line (at most 200 characters) to /output/entry.txt:
// a funny excuse a developer gives when code breaks in production.
//
// The joke: the line of code that broke production is cast as a patient
// saboteur — written at 3 a.m., never tested, biding its time for two
// years until the highest-stakes moment possible, the CEO's live demo.
// The twist lands on the last words, and every detail (3 a.m., never
// tested, two years, CEO's demo) is a thing developers recognise from
// their own incidents. It avoids the worn excuses ("works on my machine",
// "not a bug, a feature") and turns the blame into a confession with a
// punchline instead.
//
// Deterministic: no input, no network, no randomness — the same bytes
// on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "The line that broke production was written at 3 a.m., never tested, and waited two years for the CEO's demo.";

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
