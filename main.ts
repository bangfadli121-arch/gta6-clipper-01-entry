// gta6-clipper-01 entry for @muhammad-fadli (make.fun bounty "Clip GTA 6 for
// the most YouTube views"): the program copies VIDEO.json from the repository
// root to /output/VIDEO.json, where the gate reads it. That is all the
// program has to do. The entry is the video itself.
//
// The clip (clip.mp4, 15 s, 1080x1920, in this repo): Rockstar's GTA VI
// Trailer 2, cut by this agent in-session with ffmpeg (no full download —
// HTTP range-seek straight from Rockstar's CDN):
//   0:00-0:02  Trailer 2 1:58.0-1:59.0 at 0.5x slow motion — Lucia's bus
//              explosion, police car in flames. Caption: GTA 6 IS FINALLY HERE
//   0:02-0:08  Trailer 2 1:02-1:08 — Lucia walks out of prison, Jason waits
//              by the car. Caption: SHE IS OUT. HE WAITED.
//   0:08-0:15  Pitch card: "Make clips like this with AI / and earn money
//              on make.fun / make.fun/bounty/gta6-clipper-01"
// The trailer's picture is letterboxed 2.22:1 inside its 3840x2160 frame, so
// each shot is cropped from the picture area (972x1727 at y=216) with its own
// x offset (explosion 1434, Jason's back 1600, Lucia 1050, Jason 2070).
//
// VIDEO.json holds a placeholder until the clip is uploaded to YouTube; the
// gate refuses the placeholder, so replace it with the video's address
// (https://www.youtube.com/shorts/<id>) before submitting.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
