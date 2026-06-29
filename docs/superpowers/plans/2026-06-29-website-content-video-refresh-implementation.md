# Website Content And Video Refresh Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` only if executing this plan in a separate execution mode. This PR is explicitly inline-only: no subagents, no autoplan, no full gstack-review.

**Goal:** Refresh the public portfolio content for Decision Research Agent, multimodal-knowledge-engine, and OpenClaw HR, and ship regenerated project showcase videos.

**Architecture:** Project facts stay centralized in `src/data/projects.ts`, with presentation components reading the same typed contract. Video assets are deterministic static files generated from repository text slides by a local script using Chrome screenshots and ffmpeg composition.

**Tech Stack:** React 19, TypeScript 6, Vite 8, Tailwind CSS 4, Node.js script, Chrome headless, ffmpeg

---

## Constraints

- Worktree: isolated Codex linked worktree for this branch.
- Branch: `codex/website-content-video-refresh`.
- Base: `650b1651615f9a69c02effa727c149572fec317d`.
- Commit author: `Tao <tao.i@outlook.com>`.
- No push, PR, merge, deploy, dependency install beyond `npm ci`, or old clone archive.
- Legacy checkout is read-only and only used for selected mechanism migration from commit `6e0a0f40ed06d372f161fee2fc412ff81c461882`.

## Files

- Create: `docs/superpowers/specs/2026-06-29-website-content-video-refresh-design.md`.
- Create: `docs/superpowers/plans/2026-06-29-website-content-video-refresh-implementation.md`.
- Create: `scripts/verify-public-content.mjs`.
- Create: `scripts/generate-project-videos.mjs`.
- Modify: `package.json`.
- Modify: `README.md`.
- Modify: `index.html`.
- Modify: `src/data/projects.ts`.
- Modify: `src/components/Hero.tsx`.
- Modify: `src/components/EvidenceStrip.tsx`.
- Modify: `src/components/ProjectSystem.tsx`.
- Modify: `src/components/ContactSection.tsx`.
- Modify: `src/components/ProjectCard.tsx`.
- Modify: `src/components/ProjectDetailPage.tsx`.
- Create generated assets under `public/videos/`.

## Tasks

### Task 1: Planning Artifacts

- [x] Create the PR2 design document with scope, sources, public content contract, video contract, and validation.
- [x] Create this implementation plan.

### Task 2: RED Content Contract

- [ ] Add `scripts/verify-public-content.mjs` to statically assert:
  - DRA and MKE canonical slugs, titles, URLs, video paths, and boundary phrases exist.
  - OpenClaw HR has no invented GitHub URL.
  - Current public surface does not contain `Deep Search Agent`, `deep-search-agent`, `RAG-OCR`, or `multimodal-rag-ocr` outside explicit allowed historical context.
  - No private local path or secret-like token appears in website source/docs.
- [ ] Run `node scripts/verify-public-content.mjs` and verify it fails on the current old content.

### Task 3: Public Project Facts

- [ ] Update `src/data/projects.ts`:
  - Add `videoPoster` and `status` fields.
  - Add `assetUrl()` using `import.meta.env.BASE_URL`.
  - Replace `deep-search-agent` with `decision-research-agent`.
  - Replace `rag-ocr` with `multimodal-knowledge-engine`.
  - Refresh DRA/MKE/OpenClaw roles, stack, proof points, architecture, built, evidence, and boundaries from public sources.
- [ ] Update `Hero`, `EvidenceStrip`, `ProjectSystem`, `ContactSection`, `README`, and `index.html` to match the new public surface.
- [ ] Re-run the RED contract and make it pass.

### Task 4: Video UI Migration

- [ ] Adapt `ProjectCard` with a "观看演示" entry when `videoUrl` exists.
- [ ] Adapt `ProjectDetailPage` with `videoPoster`, "项目演示" copy, and long-title / narrow-screen overflow fixes.
- [ ] Keep hash routes and existing shallow visual system intact.

### Task 5: Video Generation

- [ ] Add `scripts/generate-project-videos.mjs` by adapting the old mechanism with updated canonical project slides.
- [ ] Add `npm run videos`.
- [ ] Run `npm run videos` only after content updates.
- [ ] Verify generated file types, dimensions, non-empty sizes, and paths.

### Task 6: Verification And Commits

- [ ] Run `npm run lint`, `npm run build`, `npm run videos`, media checks, public-content scan, old-name scan, private-path scan, secret-like scan, and `git diff --check`.
- [ ] Run desktop and mobile browser QA for home, hash routes, project cards, details, posters, playback, and external links.
- [ ] Create atomic local commits:
  - planning and RED contract;
  - content and UI migration;
  - regenerated video assets.
- [ ] Review `base..HEAD`, each commit diff, and final status.
