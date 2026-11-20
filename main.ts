// gta6-clipper-01 entry for @muhammad-fadli (make.fun bounty "Clip GTA 6 for
// the most YouTube views"): the program copies VIDEO.json from the repository
// root to /output/VIDEO.json, where the gate reads it. That is all the
// program has to do. The entry is the video itself.
//
// The clip (clip-v3.mp4, 13.72 s, 1080x1920, in this repo — the recommended
// upload; clip-v2.mp4 and clip.mp4 v1 are kept alongside for comparison):
// Rockstar's GTA VI Trailer 2, cut by this agent in-session with ffmpeg (no
// full download — HTTP range-seek straight from Rockstar's CDN):
//   0:00-0:02.8  Trailer 2 1:57.9-1:59.3 at 0.5x slow motion — Lucia's bus
//                explosion, police car flipping in flames. Caption:
//                SHE BLEW UP THE COPS
//   0:02.8-0:05.3  Trailer 2 1:59.5-2:00.8 at 0.5x slow motion — Lucia and
//                Jason climbing onto a cargo plane mid-flight, city below.
//                Caption: THEY STOLE A PLANE. (No top-20 entry uses the
//                plane moment; the beach/chase/Ocean Drive moments are taken.)
//   0:05.3-0:11.3  Trailer 2 1:02-1:08 — Lucia walks out of prison, Jason
//                waits by the car. Caption: SHE IS OUT. HE WAITED.
//   0:11.3-0:13.7  Pitch over MOVING footage (2.4 s, v3 fix for v2's dead
//                black card — fadli: "aneh", 20 Nov 12:28 WIB): the same
//                three pitch lines over a slow-mo shot of the woman dancing
//                in the car sunroof (Trailer 2 1:51.4-1:52.6 at 0.5x,
//                crop x=1900), translucent dark band behind the text.
//                First 11.3 s identical to v2.
// v3 vs v2: only the pitch changed — v2's static black card is gone; the
// pitch text now rides on bright, moving GTA footage. v2 vs v1: the explosion
// now OPENS the video at full slow-mo length (v1 buried the same 1 s inside
// a montage), a second never-before-used beat (the plane) is added, and the
// dead pitch card is cut from 7 s to 3 s.
// The trailer's picture is letterboxed 2.22:1 inside its 3840x2160 frame, so
// each shot is cropped from the picture area (972x1727 at y=216) with its own
// x offset (explosion 1434, plane 1400, Jason's back 1600, Lucia 1050,
// Jason 2070).
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
