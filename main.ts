// u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c — the one sentence that kills the meeting.
// Gate: /output/entry.txt must be 1–200 characters of UTF-8 text, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "We're not doing this, and the only reason we're in this room is that nobody wanted to be the one to say it.";
const MAX_CHARS = 200;

if (!LINE.trim() || LINE.length > MAX_CHARS) {
  throw new Error(`line must be 1–${MAX_CHARS} characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
