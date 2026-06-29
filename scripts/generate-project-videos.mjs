import { execFileSync } from 'node:child_process'
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  rmSync,
  writeFileSync,
} from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const outDir = join(root, 'public', 'videos')
const frameRoot = join(root, '.tmp-video-frames')
const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'

const projects = [
  {
    slug: 'decision-research-agent',
    title: 'Decision Research Agent',
    eyebrow: 'auditable research service',
    accent: '#047857',
    slides: [
      {
        label: 'Release',
        heading: 'v0.1.0 backend-and-CLI release',
        body: ['FastAPI, Tool Client, canonical run API, and Markdown result delivery.'],
        metric: 'v0.1.0',
      },
      {
        label: 'Runtime',
        heading: 'LangChain → DeepAgents → LangGraph',
        body: ['LangChain Agent Framework, DeepAgents research harness, and LangGraph durable workflow runtime stay in separate ownership layers.'],
        metric: 'Layered Agent Runtime',
      },
      {
        label: 'Authority',
        heading: 'application DB business authority',
        body: ['ResearchRun, EvidenceLedger, review, verification, publication, and canonical result state live in service-owned persistence.'],
        metric: 'ResearchRun / EvidenceLedger',
      },
      {
        label: 'Gate',
        heading: 'Talent value gate and 13/13 durable HITL',
        body: ['Talent is bounded to approved tools and fixed samples; durable review remains controlled and disabled by default.'],
        metric: '13/13 HITL',
      },
      {
        label: 'Boundary',
        heading: 'Backend service, not a public production app',
        body: ['No bundled frontend, no public production deployment, and fixed samples are not market accuracy.'],
        metric: 'Explicit Limits',
      },
    ],
  },
  {
    slug: 'multimodal-knowledge-engine',
    title: 'multimodal-knowledge-engine',
    eyebrow: 'local-first Evidence engine',
    accent: '#0f766e',
    slides: [
      {
        label: 'Status',
        heading: 'Active Development on public main',
        body: ['The current surface is local CLI plus stdio MCP over one owner process and SQLite.'],
        metric: 'Active Development',
      },
      {
        label: 'Lifecycle',
        heading: 'Source → Run → Evidence → active Publications',
        body: ['Failed, partial, or superseded Runs never change the active Search surface.'],
        metric: 'Publication Boundary',
      },
      {
        label: 'Interfaces',
        heading: 'Search and evidence-only Ask',
        body: ['Agents get cited page or timestamp Evidence, or insufficient_evidence when active Search cannot support the question.'],
        metric: 'CLI + MCP',
      },
      {
        label: 'Retrieval',
        heading: 'Numeric grouping and bounded CJK active scan',
        body: ['Merged retrieval work is limited to repository-visible diagnostics and owner-startup strategy boundaries.'],
        metric: 'FTS5 / SQLite',
      },
      {
        label: 'Boundary',
        heading: 'No hosted workspace claim',
        body: ['HTTP and workspace UI are not implemented; embeddings, vector search, hybrid retrieval, and broad media support remain out of scope.'],
        metric: 'Public Limits',
      },
    ],
  },
  {
    slug: 'openclaw-hr',
    title: 'OpenClaw HR',
    eyebrow: 'workflow orchestration layer',
    accent: '#15803d',
    slides: [
      {
        label: 'Layer',
        heading: 'Router-led HR workflow orchestration',
        body: ['Requests are routed to focused HR sub-workflows instead of one general-purpose assistant.'],
        metric: 'Router',
      },
      {
        label: 'Research',
        heading: 'Decision Research Agent as external research service',
        body: ['Research tasks keep run state, evidence, and canonical results outside the orchestration layer.'],
        metric: 'DRA Tool Layer',
      },
      {
        label: 'Evidence',
        heading: 'MKE as local internal Evidence engine',
        body: ['Policy and media Evidence stay behind Search, active Publications, and evidence-only Ask boundaries.'],
        metric: 'MKE Tool Layer',
      },
      {
        label: 'Safety',
        heading: 'Human escalation remains explicit',
        body: ['High-impact HR decisions, compliance questions, and final judgments are not silently delegated to generated text.'],
        metric: 'HiTL',
      },
      {
        label: 'Boundary',
        heading: 'Orchestration proof, not a production platform',
        body: ['No public repository link is advertised for this layer, and no enterprise adoption claim is made.'],
        metric: 'Public Limits',
      },
    ],
  },
]

assertExecutable(chromePath, 'Google Chrome')
assertExecutable('ffmpeg', 'ffmpeg')

mkdirSync(outDir, { recursive: true })
rmSync(frameRoot, { recursive: true, force: true })
mkdirSync(frameRoot, { recursive: true })

for (const project of projects) {
  const projectFrameDir = join(frameRoot, project.slug)
  mkdirSync(projectFrameDir, { recursive: true })

  project.slides.forEach((slide, index) => {
    const htmlPath = join(projectFrameDir, `slide-${index}.html`)
    const pngPath = join(projectFrameDir, `slide-${index}.png`)
    writeFileSync(htmlPath, renderSlide(project, slide, index + 1, project.slides.length))
    execFileSync(chromePath, [
      '--headless=new',
      '--disable-gpu',
      '--hide-scrollbars',
      '--window-size=1280,720',
      `--screenshot=${pngPath}`,
      `file://${htmlPath}`,
    ], { stdio: 'ignore' })
  })

  const posterPath = join(outDir, `${project.slug}-poster.png`)
  copyFileSync(join(projectFrameDir, 'slide-0.png'), posterPath)

  const listPath = join(projectFrameDir, 'frames.txt')
  const list = project.slides
    .map((_, index) => `file '${join(projectFrameDir, `slide-${index}.png`)}'\nduration 3.8`)
    .join('\n')
  writeFileSync(
    listPath,
    `${list}\nfile '${join(projectFrameDir, `slide-${project.slides.length - 1}.png`)}'\n`,
  )

  const videoPath = join(outDir, `${project.slug}-showcase.mp4`)
  execFileSync('ffmpeg', [
    '-y',
    '-f',
    'concat',
    '-safe',
    '0',
    '-i',
    listPath,
    '-vf',
    'scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,format=yuv420p',
    '-r',
    '30',
    '-c:v',
    'libx264',
    '-crf',
    '20',
    '-pix_fmt',
    'yuv420p',
    '-movflags',
    '+faststart',
    videoPath,
  ], { stdio: 'ignore' })

  console.log(`generated ${videoPath}`)
}

function assertExecutable(command, label) {
  if (command.includes('/')) {
    if (!existsSync(command)) {
      throw new Error(`${label} not found: ${command}`)
    }
    return
  }

  try {
    execFileSync('/bin/sh', ['-lc', `command -v ${shellQuote(command)}`], {
      stdio: 'ignore',
    })
  } catch {
    throw new Error(`${label} not found on PATH: ${command}`)
  }
}

function shellQuote(value) {
  return `'${value.replaceAll("'", "'\\''")}'`
}

function renderSlide(project, slide, current, total) {
  const body = slide.body.map((item) => `<p>${escapeHtml(item)}</p>`).join('')

  return `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      width: 1280px;
      height: 720px;
      overflow: hidden;
      color: #09090b;
      background:
        linear-gradient(to right, rgba(228, 228, 231, 0.72) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(228, 228, 231, 0.72) 1px, transparent 1px),
        linear-gradient(135deg, #ffffff 0%, #f8fafc 54%, #ecfdf5 100%);
      background-size: 72px 72px, 72px 72px, 100% 100%;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "PingFang SC", "Microsoft YaHei", sans-serif;
    }
    .frame {
      position: relative;
      width: 1280px;
      height: 720px;
      padding: 64px 76px;
    }
    .topline {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 32px;
      color: ${project.accent};
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 18px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    .topline span {
      min-width: 0;
      overflow-wrap: anywhere;
    }
    .title {
      margin-top: 74px;
      max-width: 920px;
      font-size: 66px;
      line-height: 1.02;
      letter-spacing: 0;
      font-weight: 720;
      overflow-wrap: anywhere;
    }
    .body {
      margin-top: 34px;
      max-width: 850px;
      font-size: 28px;
      line-height: 1.45;
      color: #3f3f46;
      font-weight: 520;
      overflow-wrap: anywhere;
    }
    .body p { margin: 0; }
    .metric {
      position: absolute;
      right: 76px;
      bottom: 76px;
      width: 360px;
      min-height: 158px;
      padding: 28px;
      border: 1px solid rgba(24, 24, 27, 0.12);
      background: #09090b;
      color: #f4f4f5;
    }
    .metric .label {
      color: #a1a1aa;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 16px;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }
    .metric .value {
      margin-top: 16px;
      font-size: 34px;
      line-height: 1.1;
      font-weight: 700;
      color: #d1fae5;
      overflow-wrap: anywhere;
    }
    .step {
      position: absolute;
      left: 76px;
      bottom: 82px;
      color: #71717a;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size: 18px;
    }
    .accent {
      position: absolute;
      left: 0;
      top: 0;
      width: 14px;
      height: 720px;
      background: ${project.accent};
    }
  </style>
</head>
<body>
  <main class="frame">
    <div class="accent"></div>
    <div class="topline">
      <span>${escapeHtml(project.eyebrow)}</span>
      <span>${escapeHtml(project.title)}</span>
    </div>
    <h1 class="title">${escapeHtml(slide.heading)}</h1>
    <div class="body">${body}</div>
    <div class="metric">
      <div class="label">${escapeHtml(slide.label)}</div>
      <div class="value">${escapeHtml(slide.metric)}</div>
    </div>
    <div class="step">${String(current).padStart(2, '0')} / ${String(total).padStart(2, '0')}</div>
  </main>
</body>
</html>`
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}
