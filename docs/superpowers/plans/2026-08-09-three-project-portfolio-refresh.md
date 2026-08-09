# 三项目作品集展示刷新 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` inline in the current execution window. This task is single-agent only; do not dispatch subagents.

**Goal:** 将公开作品集刷新为 Night Voyager、Decision Research Agent、Multimodal Knowledge Engine 三项目的事实绑定展示，并完成可复验的 public-content、构建和浏览器验证。

**Architecture:** `src/data/projects.ts` 作为唯一公开项目 contract；首页 section 组件和详情页只消费该 contract。图片使用仓库内已批准来源的本地确定性派生资源，hash route 保留 canonical 与 legacy 兼容，所有外部入口指向真实项目或 Release URL。

**Tech Stack:** React 19、TypeScript 6、Vite 8、Tailwind CSS 4、GitHub Pages、Node.js scripts、local image tooling

## Global Constraints

- 稳定事实绑定 immutable Release：Night Voyager `v0.1.5`、Decision Research Agent `v0.1.8`、Multimodal Knowledge Engine `v0.1.6`。
- Night Voyager 展示升级仅引用 public `main` commit `54b78ebda9fea263de68b5e3f623aef31c5ffe48` 的 approved assets；不把当前 main 维护写成稳定 Release 能力。
- 不出现 OpenClaw HR、DRA `v0.1.0`、MKE `Active Development` 的当前公开身份表述。
- 不添加依赖、analytics、CMS、后端、外部字体/图标、暗色模式、粒子/3D/WebGL/玻璃拟态；不修改 Vite base、Pages workflow、账号设置。
- 不删除既有旧视频二进制；只移除数据/组件/scripts/package 中的旧视频引用与 `videos` script。
- 不写入私有路径、内部编排、secret、token、cookie、未验证指标或 production/online demo claim。
- 本阶段只做 local commit、完整验证和 clean worktree；不 push、创建 PR、merge 或 deploy。

---

### Task 1: 计划文档与事实入口

**Files:**
- Create: `docs/superpowers/specs/2026-08-09-three-project-portfolio-refresh-design.md`
- Create: `docs/superpowers/plans/2026-08-09-three-project-portfolio-refresh.md`

**Interfaces:**
- Produces the scope, public boundary, component contract, and verification checklist consumed by every later task.

- [x] **Step 1: Confirm the approved design**

Use the already approved execution brief as the design decision: NV flagship, MKE/DRA/NV capability loop, selected projects, engineering proof, AI-native engineering, About and Contact, with the global constraints above.

- [x] **Step 2: Self-review the documents**

Run:

```bash
rg -n 'TBD|TODO|/Users/|Career|求职|模型|OpenClaw HR|v0\.1\.0|Active Development' docs/superpowers/specs/2026-08-09-three-project-portfolio-refresh-design.md docs/superpowers/plans/2026-08-09-three-project-portfolio-refresh.md
```

Expected: no private path, career-only material, or stale current-status phrase; `OpenClaw HR`, `v0.1.0`, and `Active Development` may occur only in explicit forbidden-content contract statements.

- [ ] **Step 3: Commit planning artifacts**

```bash
git add docs/superpowers/specs/2026-08-09-three-project-portfolio-refresh-design.md docs/superpowers/plans/2026-08-09-three-project-portfolio-refresh.md
git diff --cached --check
git commit -m "docs(website): plan three-project portfolio refresh"
```

### Task 2: RED public-content contract

**Files:**
- Modify: `scripts/verify-public-content.mjs`

**Interfaces:**
- Produces a deterministic Node.js contract command: `node scripts/verify-public-content.mjs`.

- [ ] **Step 1: Replace stale assertions with the new contract**

Read only public source files, `README.md`, `index.html`, `package.json`, and `src/data/projects.ts`; assert canonical order, URL/release fields, route compatibility, current section markers, local visual paths, forbidden stale phrases, and fail-closed sensitive patterns. Assert each referenced local file exists and each external URL uses `https://github.com/iTao-AI/`.

- [ ] **Step 2: Run RED before implementation**

```bash
node scripts/verify-public-content.mjs
```

Expected: non-zero exit with failures for missing NV/DRA/MKE fields, stale video contract, absent homepage sections, and/or forbidden old statuses.

- [ ] **Step 3: Commit RED contract**

```bash
git add scripts/verify-public-content.mjs
git diff --cached --check
git commit -m "test(website): add red public content contract"
```

### Task 3: Data contract and deterministic visuals

**Files:**
- Modify: `src/data/projects.ts`
- Create/modify: `public/images/night-voyager/*.webp`
- Create/modify: `public/social-preview.svg`

**Interfaces:**
- `Project` exposes `normalPath`, `failurePath`, `proofPoints`, `releaseUrl`, `githubUrl`, and `visual`.
- `projects` is ordered `[night-voyager, decision-research-agent, multimodal-knowledge-engine]`.

- [ ] **Step 1: Add the failing data assertions**

Extend the RED contract to assert exact slug order, stable Release labels/URLs, NV visual fields, three proof paths per project, and no `videoUrl`, `videoPoster`, `demos`, or `videos/` reference in project data.

- [ ] **Step 2: Run the focused RED assertion**

```bash
node scripts/verify-public-content.mjs
```

Expected: the data contract remains red because the old project data has not changed.

- [ ] **Step 3: Derive approved local images**

Using the local Night Voyager checkout at the approved public commit, inspect only the three approved assets and convert them locally to deterministic WebP files. Generate a deterministic social preview from static text and the same public-safe visual language. Record source commit, dimensions, byte sizes and SHA-256 in the verification notes, not in public copy.

- [ ] **Step 4: Write the minimal data implementation**

Replace the three old project entries with NV, DRA and MKE. Bind stable release labels and URLs, keep post-release changes out of capability claims, add normal/failure/reproducible paths, and keep current boundaries as secondary disclosure. Do not add a fourth project or a video field.

- [ ] **Step 5: Run the data contract**

```bash
node scripts/verify-public-content.mjs
```

Expected: data-specific checks pass; homepage/component checks may remain red until Task 4.

### Task 4: Homepage and route presentation

**Files:**
- Modify: `src/App.tsx`
- Modify: `src/index.css`
- Modify: `src/components/NavigationBar.tsx`
- Modify: `src/components/Hero.tsx`
- Create: `src/components/FlagshipProject.tsx`
- Create: `src/components/CapabilityLoop.tsx`
- Create: `src/components/EngineeringProof.tsx`
- Create: `src/components/AINativeEngineering.tsx`
- Create: `src/components/AboutSection.tsx`
- Modify: `src/components/ProjectSection.tsx`
- Modify: `src/components/ProjectCard.tsx`
- Modify: `src/components/ContactSection.tsx`

**Interfaces:**
- `App` renders homepage in the required section order and keeps detail route resolution.
- All section ids used by navigation are unique and have visible headings.

- [ ] **Step 1: Add section and CTA assertions to the RED contract**

Assert required section markers, flagship title, AI-native loop, three project titles, and absence of “观看演示”/`npm run videos`.

- [ ] **Step 2: Implement navigation, hero and flagship**

Use visible targets `#flagship`, `#projects`, and GitHub. Keep the fixed light canvas, grid, black proof block, and generous whitespace. Keep all links at or above 44px visual hit area.

- [ ] **Step 3: Implement capability loop and proof**

Render the three consumer seams as an explicit sequence. Render normal, failure and reproducible proof paths as named states rather than generic feature cards. Keep the language useful for scanning and avoid keyword-wall repetition.

- [ ] **Step 4: Implement AI-native, About, Contact and mobile navigation**

Describe the AI-assisted engineering loop without private tooling identifiers. About states only the approved education, business background and learning period. Contact retains Email, GitHub and project links.

- [ ] **Step 5: Update motion and focus rules**

Add explicit `:focus-visible`, visited-link distinction, and `prefers-reduced-motion` rules. Remove smooth scroll under reduced motion. Do not use inline styles or new dependencies.

- [ ] **Step 6: Run the public contract**

```bash
node scripts/verify-public-content.mjs
```

Expected: homepage and route assertions pass; only any remaining detail/README assertions are addressed in the next task.

### Task 5: Detail pages, metadata and docs

**Files:**
- Modify: `src/components/ProjectDetailPage.tsx`
- Modify: `src/components/EvidenceStrip.tsx`
- Modify: `src/components/ProjectSystem.tsx`
- Modify: `README.md`
- Modify: `index.html`
- Modify: `package.json`
- Delete: `scripts/generate-project-videos.mjs`

**Interfaces:**
- Detail pages render the same project data contract as cards and expose GitHub, Release and return actions.
- `package.json` has no `videos` script; dependencies, lockfile, Vite base and Pages workflow stay unchanged.

- [ ] **Step 1: Add detail/docs assertions**

Assert the detail sequence, Release links, social preview, favicon, no video references in active source, and README command accuracy.

- [ ] **Step 2: Implement the detail page sequence**

Render value plus `visual`, judgment, normal/failure, how-it-works, three proof points, stack/tags, boundary disclosure, and external actions. Keep `#/projects/<slug>` and legacy `#project/<slug>` compatibility.

- [ ] **Step 3: Remove video mechanism references**

Remove video fields and CTA fallbacks from project data/components, remove `videos` from `package.json`, update README, and delete only the generation script. Leave old binary files untouched.

- [ ] **Step 4: Update metadata**

Set title, description, Open Graph image and public project wording to match the three stable Releases. Keep `/my-website/` base path and favicon path.

- [ ] **Step 5: Run the contract to GREEN**

```bash
node scripts/verify-public-content.mjs
```

Expected: `Public content contract passed.` with exit code 0.

- [ ] **Step 6: Commit implementation**

```bash
git add src public README.md index.html package.json scripts/verify-public-content.mjs
git add -u scripts/generate-project-videos.mjs
git diff --cached --check
git commit -m "feat(website): refresh three-project portfolio surface"
```

### Task 6: Local verification and browser QA

**Files:**
- No intentional source changes; only local `dist/` and browser artifacts are allowed and must remain ignored.

- [ ] **Step 1: Install and run static checks**

```bash
npm ci
npm run lint
npm run build
npm run verify:public
git diff --check
```

- [ ] **Step 2: Validate built assets**

Check `dist/my-website/` for base-prefixed assets, favicon, social preview and local WebP files. Confirm no active page bundle references `public/videos`, old CTA text or forbidden project statuses.

- [ ] **Step 3: Run browser checks**

Use the available browser tooling against the local Vite server. Check 1440, 1024, 768, 390 and 320 widths; home, all three detail hashes, legacy hash normalization, external links, console errors, focus-visible states, touch target dimensions, contrast, reduced motion, favicon, and social preview.

- [ ] **Step 4: Record evidence**

Keep screenshots and logs outside the repository or in ignored output. Record command results, viewport sizes, route behavior, console state and any unverified hosted gates.

### Task 7: GStack design review and final closeout

**Files:**
- Modify only in-scope website files if design review finds a real issue.

- [ ] **Step 1: Run the GStack design-review preamble and audit**

Review the rendered homepage and detail pages with desktop/mobile screenshots, design-system extraction, touch-target audit, console and performance checks. Apply landing-page rules while preserving this project’s fixed light canvas and black/green visual system.

- [ ] **Step 2: Fix only same-scope findings**

For each fixable finding, change the smallest related source file set, create one atomic `style(design): FINDING-NNN ...` commit, then rerun the affected screenshot and console check. Stop if a fix would expand architecture, dependencies, or public facts.

- [ ] **Step 3: Fresh final verification**

```bash
npm run lint
npm run build
npm run verify:public
git diff --check
git status --short --branch
git log --oneline --decorate -6
```

Expected: all commands exit 0, worktree clean, current branch remains local, and no push/PR/merge/deploy has occurred.

- [ ] **Step 4: Final requirement audit**

Compare the final diff against this plan and the approved brief. Report exact base/head/tree, branch/worktree, commits, RED/GREEN evidence, command outputs, browser/screenshots, risks, mini-retro, and the single next gate: authority review before any publication action.
