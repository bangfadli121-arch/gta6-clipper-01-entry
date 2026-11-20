[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/bangfadli121-arch/gta6-clipper-01-entry/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/bangfadli121-arch/gta6-clipper-01-entry/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# GTA 6: Lucia blows up the cops 💀

Entry for the make.fun bounty **gta6-clipper-01**: "Clip GTA 6 for the most YouTube views."
Places go by the video's YouTube views, the most first; the top 20 share $500.

**v2 (recommended upload) is `clip-v2.mp4`: 14.36 seconds, vertical 1080×1920,
cut from Rockstar's official GTA VI Trailer 2 (4K, fetched straight from
Rockstar's CDN with ffmpeg HTTP range-seek — no 1.36 GB download).** Three
beats, one story, then a short pitch:

| Time | Footage | What happens |
|---|---|---|
| 0:00–0:02.8 | Trailer 2, 1:57.9–1:59.3 at 0.5× slow motion | The hook, frame one: Lucia's bus explosion, a police car flipping in flames. Caption: **SHE BLEW UP THE COPS** |
| 0:02.8–0:05.3 | Trailer 2, 1:59.5–2:00.8 at 0.5× slow motion | Lucia and Jason climb onto a cargo plane mid-flight, city far below. Caption: **THEY STOLE A PLANE** |
| 0:05.3–0:11.3 | Trailer 2, 1:02–1:08 | Lucia walks out of prison; Jason waits by the car. Caption: **SHE IS OUT. HE WAITED.** |
| 0:11.3–0:14.4 | Pitch card (3 s) | **Make clips like this with AI / and earn money on make.fun / make.fun/bounty/gta6-clipper-01** |

## Why v2 beats v1 — and the top entries

The leaderboard (359 submissions, 328 ranked, top views 1,325 at ~10:48 WIB
20 Nov) shows one clear pattern: **one continuous moment beats a montage**.
The #1 entry (1,325 views) is a single unbroken beach-supercar moment; the
best-moments montages rank #8, #12, #16 — below it. v1 was a 3-part montage
with a 7-second dead pitch card. v2 fixes that:

- **Payoff first.** v1's explosion was 2 seconds with a generic caption
  ("GTA 6 IS FINALLY HERE"). v2 opens on the same explosion at full slow-mo
  length with a story caption — the viewer gets the fire in frame one.
- **A moment nobody else used.** The beach, the chase, the crocodile, the
  alligator, Ocean Drive "real life or GTA 6?" are all taken by top-20
  entries. The plane climb (Trailer 2, ~2:00) appears in **none** of the
  top 20 — it is the most "wait, WHAT?" visual in the trailer after the
  explosion, and it is new.
- **Pitch cut 7 s → 3 s.** Half of v1 was a static card; viewers swipe.
  The 3-second card still pitches make.fun on screen, then the clip ends
  while the reunion is still fresh.
- **Story, not clips.** Explosion → plane heist → "he waited for her":
  chaos, escalation, heart. One couple, one arc, 14 seconds.

Why this moment: the explosion is pure GTA chaos and pays off in the first
second — a viewer deciding in 1–2 seconds whether to swipe stays for the fire.
The reunion right after is the trailer's emotional anchor, and the pitch turns
the hype into make.fun's call to action. Big white captions with black outline
throughout, so it reads with the sound off.

## Files

- `clip-v2.mp4` — the rendered Short v2 (14.36 s, 1080×1920, 30 fps, H.264 + AAC, 9.1 MB, sha256 `b399725dc390b8a63fcbde6cf4f307c3523e70ccf1f253635c899af57957ca5c`).
- `clip.mp4` — v1 (15.04 s), kept for comparison; do not upload both.
- `main.ts` — the program (Node 22, standard library only): copies `VIDEO.json` to
  `/output/VIDEO.json`. That is all it has to do; the video itself is the entry.
- `VIDEO.json` — placeholder until the clip is uploaded to YouTube; replace with the
  video's address (`https://www.youtube.com/shorts/<id>`) before submitting.

## How the clip was cut

Source: `https://media-rockstargames-com.akamaized.net/VI/downloads/videos/GTAVI_Trailer_2/GTAVI_Trailer_2.mp4`
(3840×2160, 166.7 s). The trailer's picture is letterboxed 2.22:1 inside the
frame, so every shot is cropped from the picture area (`972×1727` at `y=216`)
with its own x offset, scaled to 1080×1920, captioned with DejaVu Sans Bold
(`drawtext`, fontsize 64 for captions), and concatenated. Captions at fontsize
80 overflowed the frame and were caught on the close-up check — 64 fits.

```sh
# 1. Explosion, slow motion (Trailer 2 1:57.9-1:59.3 -> 2.77 s)
#    NOTE: -to must be an INPUT option; -t after -i caps the OUTPUT and
#    truncates the slow-mo stretch.
ffmpeg -ss 117.9 -to 119.3 -i "$URL" \
  -vf "setpts=2*PTS,crop=972:1727:1434:216,scale=1080:1920,drawtext=fontfile=DejaVuSans-Bold.ttf:text='SHE BLEW UP THE COPS':fontsize=64:fontcolor=white:borderw=4:bordercolor=black:x=(w-text_w)/2:y=240" \
  -af "atempo=0.5" -r 30 -c:v libx264 -pix_fmt yuv420p -preset medium -crf 20 -c:a aac -b:a 128k -ar 48000 v2a.mp4
# 2. Plane climb, slow motion (Trailer 2 1:59.5-2:00.8 -> 2.57 s, crop x=1400)
ffmpeg -ss 119.5 -to 120.8 -i "$URL" \
  -vf "setpts=2*PTS,crop=972:1727:1400:216,scale=1080:1920,drawtext=fontfile=DejaVuSans-Bold.ttf:text='THEY STOLE A PLANE':fontsize=64:fontcolor=white:borderw=4:bordercolor=black:x=(w-text_w)/2:y=240" \
  -af "atempo=0.5" -r 30 -c:v libx264 -pix_fmt yuv420p -preset medium -crf 20 -c:a aac -b:a 128k -ar 48000 v2b.mp4
# 3. Reunion, three shots (1:02-1:03.5 x=1600, 1:03.5-1:06 x=1050, 1:06-1:08 x=2070),
#    same crop/scale/caption "SHE IS OUT. HE WAITED.", original audio — reused from v1
# 4. Pitch card, 3 s black with three drawtext lines (white 60, white 60, gold 52)
ffmpeg -f lavfi -i color=c=black:s=1080x1920:r=30:d=3 -f lavfi -i anullsrc=r=48000:cl=stereo \
  -vf "drawtext=...:text='Make clips like this with AI':fontsize=60...,drawtext=...:text='and earn money on make.fun':fontsize=60...,drawtext=...:text='make.fun/bounty/gta6-clipper-01':fontsize=52:fontcolor=yellow..." \
  -t 3 -c:v libx264 -pix_fmt yuv420p -preset medium -crf 20 -c:a aac -b:a 128k -ar 48000 v2d.mp4
# 5. Concatenate (all segments h264 1080x1920 30fps + aac) and drop the tmcd
#    timecode track the Rockstar source carries (-write_tmcd 0)
ffmpeg -f concat -safe 0 -i concat-v2.txt -c copy clip-v2.mp4
ffmpeg -i clip-v2.mp4 -map 0:v -map 0:a -c copy -write_tmcd 0 clip-v2-clean.mp4
```

Frames were checked close-up after rendering (explosion, plane, Jason's back,
Lucia close-up, Jason, pitch card); the first render's oversized captions
(fontsize 80, cut off at both edges) and the pitch card's overflowing URL line
were caught and fixed before this version. The v1 notes still apply: the
trailer's 1:54–2:02 region is a fast montage (cage kick at 1:55, Jason with a
gun at 1:56.5, dialogue at 1:57.2, explosion at 1:58, plane at 1:59.5) — the
explosion beat is only ~1.4 s of footage, which is why it is stretched 0.5×.

## Upload (for the channel owner)

Upload `clip-v2.mp4` as a **public** Short from the YouTube channel, any time from
20 Nov 08:00 WIB until the deadline, Mon 23 Nov 08:00 WIB. Keep it public until
the results are out. (v1 `clip.mp4` was never uploaded — upload v2 only.)

- **Title:** Lucia blows up the cops 💀
- **Description:**

  ```
  Lucia blows up a cop car, steals a plane with Jason — and he waited for her all along. 💀

  Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
  makefun-swallow-mallet-orange

  #GTA6 #GTAVI #Shorts #ViceCity #Lucia #Jason
  ```

  The middle line is required word for word; the play code
  (`makefun-swallow-mallet-orange`, code 0 of the account's four) must be in the
  video's or the channel's description.
- **Tags:** #GTA6 #GTA6Trailer #Shorts #GrandTheftAutoVI #Lucia #Jason #ViceCity #Leonida

After upload, put the video's address in `VIDEO.json` and submit the commit.

## Run it locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.
