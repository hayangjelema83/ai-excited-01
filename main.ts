// ai-excited-01 entry: copies the chosen image to the output directory.
//
// The image (entry.png) is the entry itself: an orange kitten leaping across
// a glowing aurora canyon to catch a falling star. This program only places
// those exact bytes at /output/entry.png, deterministically, with no network.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });

// Refuse to write an empty or missing image: a silent bad copy would fail
// the gate, so check the source first and confirm the copy's size matches.
const sourceSize = statSync("entry.png").size;
if (sourceSize === 0) {
  throw new Error("entry.png is empty");
}
const target = join(outputDir, "entry.png");
copyFileSync("entry.png", target);
if (statSync(target).size !== sourceSize) {
  throw new Error("copied entry.png does not match the source size");
}
