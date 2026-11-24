// The One-Line Cat Joke That Lands — make.fun entry.
// Writes a single cat joke, one line under 200 characters, to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My cat knocked my phone off the table, watched it fall, then looked at me like I dropped it.";

function main(): void {
  // Gate: exactly one line, 1-200 characters, not only whitespace.
  if (JOKE.length < 1 || JOKE.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${JOKE.length}`);
  }
  if (JOKE.trim().length === 0 || JOKE.includes("\n")) {
    throw new Error("entry must be a single non-blank line");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
}

main();
