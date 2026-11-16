// The entrypoint the grader runs: `node /bot/main.ts` on Node 22, which
// strips TypeScript types natively. It copies the entry image beside this
// file to $MAKEFUN_OUTPUT_DIR/entry.png (or /output/entry.png).
//
// The image path is resolved against this script's own location, never the
// working directory: the grader may run it from any cwd, so a bare relative
// path like "entry.png" would fail there.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outputDir, 'entry.png'));
