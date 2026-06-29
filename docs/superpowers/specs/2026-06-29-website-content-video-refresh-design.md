# Website Content And Video Refresh Design

## Goal

PR2 updates this public portfolio from the old Deep Search Agent / RAG-OCR surface to the current public project facts for Decision Research Agent, multimodal-knowledge-engine, and OpenClaw HR, then restores a lightweight project video showcase using regenerated assets only.

## Sources

- Website base: `main` / `origin/main` at `650b1651615f9a69c02effa727c149572fec317d`.
- Read-only legacy source: the separate historical website checkout at `6e0a0f40ed06d372f161fee2fc412ff81c461882`.
- Decision Research Agent public sources: current `main`, `README.md`, `VERSION`, `docs/architecture.md`, `docs/releases/v0.1.0.md`, `docs/evidence/README.md`, and the public v0.1.0 GitHub Release.
- multimodal-knowledge-engine public sources: current `main`, `AGENTS.md`, `README.md`, `docs/README.md`, `docs/explanation/architecture.md`, and current public proof/evaluation documentation.

## Public Content Contract

- Current DRA identity is `Decision Research Agent`, linked to `https://github.com/iTao-AI/decision-research-agent`.
- DRA is a v0.1.0 backend-and-CLI release built around LangChain Agent Framework, DeepAgents research harness, LangGraph durable workflow runtime, and application DB business authority.
- DRA evidence may mention `ResearchRun`, `EvidenceLedger`, canonical result delivery, Talent value gate, and `13/13 durable HITL`.
- DRA boundaries must say no bundled frontend, no public production deployment, controlled features disabled by default, and fixed samples are not market accuracy.
- Current MKE identity is `multimodal-knowledge-engine`, linked to `https://github.com/iTao-AI/multimodal-knowledge-engine`, with status `Active Development`.
- MKE claims are limited to merged public main: local-first Evidence engine, observable Runs, active Publications, CLI/MCP, deterministic proof, text-layer PDF and documented short local video, evidence-only Ask, retrieval evaluation, numeric grouping, and bounded CJK active scan.
- OpenClaw HR remains a workflow orchestration project and only references DRA/MKE as tool-layer projects; no public repo link is invented.
- `Deep Search Agent`, `deep-search-agent`, `RAG-OCR`, and `multimodal-rag-ocr` must not appear as current active public identities. A single MKE evolution note may mention legacy RAG-OCR background if it is clearly historical.

## Video Contract

- Migrate the legacy mechanism: card-level "观看演示", detail page video with poster, `videoPoster` data contract, video generation script, and `npm run videos`.
- Do not reuse old video binaries or old posters.
- Regenerate:
  - `public/videos/decision-research-agent-poster.png`
  - `public/videos/decision-research-agent-showcase.mp4`
  - `public/videos/multimodal-knowledge-engine-poster.png`
  - `public/videos/multimodal-knowledge-engine-showcase.mp4`
  - `public/videos/openclaw-hr-poster.png`
  - `public/videos/openclaw-hr-showcase.mp4`
- If Chrome or ffmpeg is unavailable, stop after reporting the exact missing executable. Do not substitute stale assets.

## Scope

Modify only the public website content, docs, video generation script, package script, data contract, and minimal component classes needed for video entry and overflow handling.

Do not add dependencies, backend code, login, deployment settings, OpenSpec, dark mode, old ParticleCanvas, old ThemeToggle, or a fourth main project.

## Validation

- RED content contract fails before content implementation and passes after.
- `npm ci`, `npm audit`, `npm run lint`, `npm run build`, `npm run videos`, file/media checks, content scans, `git diff --check`, and desktop/mobile browser QA all run from the isolated worktree.
