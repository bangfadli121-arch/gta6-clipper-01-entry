[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/bangfadli121-arch/gta6-clipper-01-entry/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/bangfadli121-arch/gta6-clipper-01-entry/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

# GTA 6: Lucia blows up a cop car

Entry for the make.fun bounty **gta6-clipper-01**: "Clip GTA 6 for the most YouTube views."
Places go by the video's YouTube views, the most first; the top 20 share $500.

The clip is 15 seconds, vertical 1080×1920, cut from Rockstar's official GTA VI
Trailer 2 (4K, fetched straight from Rockstar's CDN with ffmpeg HTTP range-seek —
no 1.36 GB download). One story in two beats, then the pitch:

| Time | Footage | What happens |
|---|---|---|
| 0:00–0:02 | Trailer 2, 1:58.0–1:59.0 at 0.5× slow motion | The hook, frame one: Lucia's bus explosion, a police car in flames. Caption: **GTA 6 IS FINALLY HERE** |
| 0:02–0:08 | Trailer 2, 1:02–1:08 | Lucia walks out of prison; Jason waits by the car. Caption: **SHE IS OUT. HE WAITED.** |
| 0:08–0:15 | Pitch card | **Make clips like this with AI / and earn money on make.fun / make.fun/bounty/gta6-clipper-01** |

Why this moment: the explosion is pure GTA chaos and pays off in the first
second — a viewer deciding in 1–2 seconds whether to swipe stays for the fire.
The reunion right after is the trailer's emotional anchor, and the pitch turns
the hype into make.fun's call to action. Big white captions with black outline
throughout, so it reads with the sound off.

## Files

- `clip.mp4` — the rendered Short (15.04 s, 1080×1920, 30 fps, H.264 + AAC, 6.8 MB).
- `main.ts` — the program (Node 22, standard library only): copies `VIDEO.json` to
  `/output/VIDEO.json`. That is all it has to do; the video itself is the entry.
- `VIDEO.json` — placeholder until the clip is uploaded to YouTube; replace with the
  video's address (`https://www.youtube.com/shorts/<id>`) before submitting.

## How the clip was cut

Source: `https://media-rockstargames-com.akamaized.net/VI/downloads/videos/GTAVI_Trailer_2/GTAVI_Trailer_2.mp4`
(3840×2160, 166.7 s). The trailer's picture is letterboxed 2.22:1 inside the
frame, so every shot is cropped from the picture area (`972×1727` at `y=216`)
with its own x offset, scaled to 1080×1920, captioned with Noto Sans Bold
(`drawtext`), and concatenated:

```sh
# 1. Explosion, slow motion (Trailer 2 1:58.0-1:59.0 -> 2.0 s)
ffmpeg -ss 118 -i "$URL" -t 1.0 -filter_complex \
  "[0:v]setpts=2.0*PTS,crop=972:1727:1434:216,scale=1080:1920,fps=30,drawtext=fontfile=NotoSans-Bold.ttf:text='GTA 6 IS FINALLY HERE':fontsize=78:fontcolor=white:borderw=4:bordercolor=black:x=(w-text_w)/2:y=240[v];anullsrc=channel_layout=stereo:sample_rate=48000[a]" \
  -map "[v]" -map "[a]" -t 2.0 -c:v libx264 -crf 20 -pix_fmt yuv420p -c:a aac seg1.mp4
# 2. Reunion, three shots (1:02-1:03.5 x=1600, 1:03.5-1:06 x=1050, 1:06-1:08 x=2070),
#    same crop/scale/caption "SHE IS OUT. HE WAITED.", original audio
ffmpeg -ss 62   -i "$URL" -t 1.5 -vf "crop=972:1727:1600:216,scale=1080:1920,fps=30,drawtext=...:text='SHE IS OUT. HE WAITED.'..." -c:v libx264 -crf 20 -c:a aac seg2a.mp4
ffmpeg -ss 63.5 -i "$URL" -t 2.5 -vf "crop=972:1727:1050:216,scale=1080:1920,fps=30,drawtext=...:text='SHE IS OUT. HE WAITED.'..." -c:v libx264 -crf 20 -c:a aac seg2b.mp4
ffmpeg -ss 66   -i "$URL" -t 2.0 -vf "crop=972:1727:2070:216,scale=1080:1920,fps=30,drawtext=...:text='SHE IS OUT. HE WAITED.'..." -c:v libx264 -crf 20 -c:a aac seg2c.mp4
# 3. Pitch card, 7 s black with three drawtext lines (white, white, gold #ffd94a)
ffmpeg -f lavfi -i color=c=black:s=1080x1920:r=30:d=7 -f lavfi -i anullsrc=... \
  -filter_complex "[0:v]drawtext=...:text='Make clips like this with AI'...,drawtext=...:text='and earn money on make.fun'...,drawtext=...:text='make.fun/bounty/gta6-clipper-01'...[v]" \
  -map "[v]" -map 1:a -t 7 -c:v libx264 -crf 20 -c:a aac seg3.mp4
# 4. Concatenate and faststart
ffmpeg -f concat -safe 0 -i concat.txt -c:v libx264 -crf 20 -pix_fmt yuv420p -c:a aac -movflags +faststart clip.mp4
```

Frames were checked close-up after rendering (explosion, Lucia close-up, Jason,
pitch card); the first render's letterbox bars and a mis-framed reunion shot were
caught and fixed before this version.

## Upload (for the channel owner)

Upload `clip.mp4` as a **public** Short from the YouTube channel, any time from
20 Nov 08:00 WIB until the deadline, Mon 23 Nov 08:00 WIB. Keep it public until
the results are out.

- **Title:** GTA 6: Lucia blows up a cop car
- **Description:**

  ```
  GTA 6 is finally here — Lucia blows up a cop car, then walks out of prison to Jason waiting.

  Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
  makefun-swallow-mallet-orange

  #GTA6 #Shorts
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
