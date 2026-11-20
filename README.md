[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/bangfadli121-arch/gta6-clipper-01-entry/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/bangfadli121-arch/gta6-clipper-01-entry/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# GTA 6: Lucia blows up the cops 💀

Entry for the make.fun bounty **gta6-clipper-01**: "Clip GTA 6 for the most YouTube views."
Places go by the video's YouTube views, the most first; the top 20 share $500.

**v3 (recommended upload) is `clip-v3.mp4`: 13.72 seconds, vertical 1080×1920,
cut from Rockstar's official GTA VI Trailer 2 (4K, fetched straight from
Rockstar's CDN with ffmpeg HTTP range-seek — no 1.36 GB download).** Three
beats, one story, then the pitch spoken over moving footage — no dead card:

| Time | Footage | What happens |
|---|---|---|
| 0:00–0:02.8 | Trailer 2, 1:57.9–1:59.3 at 0.5× slow motion | The hook, frame one: Lucia's bus explosion, a police car flipping in flames. Caption: **SHE BLEW UP THE COPS** |
| 0:02.8–0:05.3 | Trailer 2, 1:59.5–2:00.8 at 0.5× slow motion | Lucia and Jason climb onto a cargo plane mid-flight, city far below. Caption: **THEY STOLE A PLANE** |
| 0:05.3–0:11.3 | Trailer 2, 1:02–1:08 | Lucia walks out of prison; Jason waits by the car. Caption: **SHE IS OUT. HE WAITED.** |
| 0:11.3–0:13.7 | Pitch over moving footage (2.4 s) | **Make clips like this with AI / and earn money on make.fun / make.fun/bounty/gta6-clipper-01** — same three lines, now over a slow-mo shot of the woman dancing in the car sunroof (Trailer 2, 1:51.4–1:52.6 at 0.5×), dark translucent band behind the text. No black screen. |

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

## v3 — the pitch is no longer a black card (fadli: "aneh", 20 Nov 12:28 WIB)

v2's last 3 seconds were a static black screen with white text — on a phone it
looked dead/empty. v3 keeps the first 11.3 seconds byte-identical and replaces
only the pitch: the same three lines now sit on a **moving** shot — the woman
dancing in the car sunroof, sunny Vice City behind her (Trailer 2, 1:51.4–
1:52.6 at 0.5× slow motion, crop x=1900), with a translucent dark band
(black@0.55, y=750–1090) behind the text so it stays readable. Pitch is now
2.4 s, total 13.72 s.

Why this shot and not the next ones in the trailer: the reunion ends at 1:48
and the trailer cuts to a dark interrogation room, a night drive-by, then a
club close-up (dark, abstract, no faces) and a tight cage kick — all checked
frame by frame and rejected. The sunroof shot is the only bright, face-visible,
clearly moving shot in the 1:48–1:56 window. First render caught on close-up
check: the last ~0.15 s flashed the club scene (the woman→club cut is at
~1:52.6, not 1:52.7) — trimmed `-to` to 1:52.6 and re-verified frames at
12.0/13.0/13.6 s: one continuous shot, text readable, URL unclipped, no black.

Why this moment: the explosion is pure GTA chaos and pays off in the first
second — a viewer deciding in 1–2 seconds whether to swipe stays for the fire.
The reunion right after is the trailer's emotional anchor, and the pitch turns
the hype into make.fun's call to action. Big white captions with black outline
throughout, so it reads with the sound off.

## Files

- `clip-v3.mp4` — the rendered Short v3 (13.72 s, 1080×1920, 30 fps, H.264 + AAC, 10.6 MB, sha256 `905100a771077fd405dc6f370b8d2472dfbbdae65878fd39626f3e6472690278`).
- `clip-v2.mp4` — v2 (14.36 s), kept for comparison; do not upload both.
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
# 4. Pitch OVER MOVING FOOTAGE, v3 (replaces v2's 3 s black card):
#    woman in the car sunroof, Trailer 2 1:51.4-1:52.6 (slice 3.4-4.6 of a
#    108.0-118.0 local slice) at 0.5x -> 2.37 s, crop x=1900. Same three text
#    lines (white 60, white 60, gold 52) over a translucent dark band
#    (drawbox black@0.55, y=750 h=340) — NO black screen. NOTE: -to 4.7
#    caught ~0.15 s of the next (club) scene; the woman->club cut is at
#    ~1:52.6, so -to must be 4.6, not 4.7.
ffmpeg -ss 3.4 -to 4.6 -i slice108-118.mp4 \
  -vf "setpts=2*PTS,crop=972:1727:1900:216,scale=1080:1920,drawbox=x=0:y=750:w=1080:h=340:color=black@0.55:t=fill,drawtext=fontfile=DejaVuSans-Bold.ttf:text='Make clips like this with AI':fontsize=60:fontcolor=white:borderw=4:bordercolor=black:x=(w-text_w)/2:y=775,drawtext=fontfile=DejaVuSans-Bold.ttf:text='and earn money on make.fun':fontsize=60:fontcolor=white:borderw=4:bordercolor=black:x=(w-text_w)/2:y=860,drawtext=fontfile=DejaVuSans-Bold.ttf:text='make.fun/bounty/gta6-clipper-01':fontsize=52:fontcolor=yellow:borderw=4:bordercolor=black:x=(w-text_w)/2:y=950" \
  -af "atempo=0.5" -r 30 -c:v libx264 -pix_fmt yuv420p -preset medium -crf 20 -c:a aac -b:a 128k -ar 48000 v3d.mp4
# 5. Concatenate v3 (first 11.3 s identical to v2: v2a, v2b, seg2a/b/c + v3d)
#    and drop the tmcd timecode track the Rockstar source carries (-write_tmcd 0)
ffmpeg -f concat -safe 0 -i concat-v3.txt -c copy clip-v3-raw.mp4
ffmpeg -i clip-v3-raw.mp4 -map 0:v -map 0:a -c copy -write_tmcd 0 clip-v3.mp4
```

Frames were checked close-up after rendering (explosion, plane, Jason's back,
Lucia close-up, Jason, pitch card); the first render's oversized captions
(fontsize 80, cut off at both edges) and the pitch card's overflowing URL line
were caught and fixed before this version. The v1 notes still apply: the
trailer's 1:54–2:02 region is a fast montage (cage kick at 1:55, Jason with a
gun at 1:56.5, dialogue at 1:57.2, explosion at 1:58, plane at 1:59.5) — the
explosion beat is only ~1.4 s of footage, which is why it is stretched 0.5×.

## Upload (for the channel owner)

Upload `clip-v3.mp4` as a **public** Short from the YouTube channel, any time from
20 Nov 08:00 WIB until the deadline, Mon 23 Nov 08:00 WIB. Keep it public until
the results are out. (v1 `clip.mp4` and v2 `clip-v2.mp4` were never uploaded — upload v3 only.)

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
