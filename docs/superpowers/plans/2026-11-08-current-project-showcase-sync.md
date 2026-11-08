# Current project showcase synchronization Implementation Plan

> **For agentic workers:** Use superpowers:executing-plans inline; one fresh Max review checks the final range.

**Goal:** Synchronize visible project stories and public source assets without rebuilding the site.
**Architecture:** Keep the React components and routes; update centralized project content and image provenance. Existing content verification owns asset truth.
**Tech Stack:** React, TypeScript, Vite; existing dependencies and installed browser tooling.
**Spec:** `docs/superpowers/specs/2026-11-08-current-project-showcase-sync.md`.

## Global Constraints

- Retain the light layout, `/my-website/` base path and three projects.
- Use exactly nine source-backed images, including MKE's real 2880×1800 Viewer.
- Keep source-checkout capability, static illustration and stable release distinct.
- No private paths, confidential material, invented business results or dependency changes.
- Local branch and commit only; publication needs explicit authorization.

## Review Focus

- Viewer and schematic frames could be mistaken for one connected interface.
- Current-source screenshots could be attributed to a historical stable release.
- New business copy could overstate real customers, production or LLM verification.
- Updated wide screenshots could obscure the principal result on mobile.
- Asset URLs, source paths, sizes or hashes could be inconsistent.

### Task 1: Update public stories and their source-backed assets

**Files:**
- Modify: `src/data/siteContent.ts`, `src/data/projects.ts`.
- Modify: `src/components/Hero.tsx`, `src/components/ProjectDetailPage.tsx`,
  `src/components/ProjectImage.tsx`, `src/index.css` for complete frames and original-image links.
- Modify: `public/images/project-showcase-manifest.json`, nine project PNGs.
- Test: `scripts/verify-public-content.mjs`.
- Documentation: `README.md`, these design/plan documents.

**Interfaces:** Preserve `Project`, `ProjectVisual`, project slugs, visual states and hash routes. New asset dimensions affect manifest validation only; the responsive 8:5 layout stays.

- [x] Confirm clean base and run `npm run verify:public`, `npm run lint`, `npm run build`.
  Expected: all pass before product edits.
- [x] Update verification expectations for the three reviewed public commits, changed actions,
  MKE Viewer source path and per-asset dimensions. Run `npm run verify:public`.
  Expected: fail on old content/provenance, proving the new contract is exercised.
- [x] Copy the nine source files from those exact Git objects; refresh hashes, dimensions and
  per-image scope. Update business-first copy, pinned guides and captions.
- [x] Explain source-checkout versus stable-release and mixed MKE illustration scope in detail;
  keep the fixed light design and no new backend or UI workflow.
- [x] Run `npm run verify:public`, lint and build.
  Expected: all pass; nine asset identities and privacy checks remain effective.
- [x] On an isolated local preview, check desktop/mobile home and all detail routes, visual
  controls, loaded images, scroll bounds, public links and the legacy hash route.
  Expected: no failed image, route regression, page overflow or misleading continuous-frame claim.
- [x] Review the actual diff; commit the bounded update locally. Record verification in README.
- [x] Obtain one fresh Max review of the complete change. Fix Important/Critical findings in
  scope, verify the affected behavior and retain other findings as explicit decisions.

## Execution notes

Use a dedicated short-lived branch and preserve the original main branch.

This is a content/image-reading update, not new project or backend behavior. Verification reuses the existing
asset/privacy contract and browser checks rather than adding tests that repeat paragraph text.
Browser verification also reproduces the missing original-image action before implementing it,
then checks complete primary frames and an actual original-image popup after the change.
