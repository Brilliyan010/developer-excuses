// Make the AI Judge Laugh: Developer Excuses — make.fun entry.
//
// Writes exactly one line (at most 200 characters) to /output/entry.txt:
// a funny excuse a developer gives when code breaks in production.
//
// The joke: a confession disguised as a progress report — every safety
// gate passed (CI, review, staging), and still the code fell over the
// moment a real user touched it. The twist reveals the real story: the
// whole pipeline was green because none of it ever faced a real user.
// Three-beat escalation ("passed ... passed ... passed") then the
// punchline, in the voice of a developer explaining it in an incident
// review. It turns the worn "it passed all my tests" excuse instead of
// repeating it, and avoids "works on my machine" / "not a bug, a feature".
//
// Deterministic: no input, no network, no randomness — the same bytes
// on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "It passed CI, it passed review, it passed staging — it never survived a single real user.";

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
