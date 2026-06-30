# DRA dual demo videos design

## Goal

Add two Decision Research Agent demo videos to the public portfolio site without moving media into the DRA repository and without changing deployment settings.

## Public boundary

- The videos are portfolio assets owned by this website.
- The HR / portfolio demo is the primary project-card and detail-page entry.
- The technical walkthrough is a secondary detail-page entry.
- Public copy must describe the videos as deterministic loopback contract demos, not real provider runs, live research recordings, production usage, or user outcome proof.
- Committed files must not include private local paths, `.env`, API keys, or Career-private material.

## Data model

Keep the existing `videoUrl` / `videoPoster` contract for current single-demo projects, and add an optional `demos` list for projects that need multiple demos. A demo entry contains label, title, description, video URL, poster URL, and an optional CTA label.

## UI

- Project cards use the primary demo CTA when `demos` exists.
- Project detail pages render every demo with native `<video controls poster preload="metadata">`.
- Video containers remain responsive with `aspect-video`, `w-full`, and no horizontal overflow.

## Assets

Copy only the four approved 720p website assets into `public/videos/` with clear DRA-specific names.
