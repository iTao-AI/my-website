import { readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')

const publicFiles = [
  'README.md',
  'index.html',
  'src/data/projects.ts',
  'src/components/ContactSection.tsx',
  'src/components/EvidenceStrip.tsx',
  'src/components/Hero.tsx',
  'src/components/ProjectCard.tsx',
  'src/components/ProjectDetailPage.tsx',
  'src/components/ProjectSection.tsx',
  'src/components/ProjectSystem.tsx',
]

const fileText = new Map(
  publicFiles.map((file) => [file, readFileSync(join(root, file), 'utf8')]),
)

const allPublicText = [...fileText.values()].join('\n')
const projectsText = fileText.get('src/data/projects.ts')

const checks = [
  [
    'DRA canonical slug exists',
    () => projectsText.includes("slug: 'decision-research-agent'"),
  ],
  [
    'DRA canonical title exists',
    () => projectsText.includes("title: 'Decision Research Agent'"),
  ],
  [
    'DRA canonical GitHub URL exists',
    () =>
      projectsText.includes(
        "githubUrl: 'https://github.com/iTao-AI/decision-research-agent'",
      ),
  ],
  ['DRA v0.1.0 release is visible', () => allPublicText.includes('v0.1.0')],
  ['DRA LangChain framework claim exists', () => allPublicText.includes('LangChain Agent Framework')],
  ['DRA DeepAgents harness claim exists', () => allPublicText.includes('DeepAgents research harness')],
  ['DRA LangGraph runtime claim exists', () => allPublicText.includes('LangGraph durable workflow runtime')],
  ['DRA application DB authority exists', () => allPublicText.includes('application DB business authority')],
  ['DRA ResearchRun exists', () => allPublicText.includes('ResearchRun')],
  ['DRA EvidenceLedger exists', () => allPublicText.includes('EvidenceLedger')],
  ['DRA Talent value gate exists', () => allPublicText.includes('Talent value gate')],
  ['DRA durable HITL result exists', () => allPublicText.includes('13/13 durable HITL')],
  ['DRA no bundled frontend boundary exists', () => allPublicText.includes('no bundled frontend')],
  ['DRA no public production deployment boundary exists', () => allPublicText.includes('no public production deployment')],
  ['DRA controlled features disabled boundary exists', () => allPublicText.includes('controlled features default off')],
  ['DRA fixed sample boundary exists', () => allPublicText.includes('fixed samples are not market accuracy')],
  [
    'DRA video paths match slug',
    () =>
      projectsText.includes("videoUrl: assetUrl('videos/decision-research-agent-showcase.mp4')") &&
      projectsText.includes("videoPoster: assetUrl('videos/decision-research-agent-poster.png')"),
  ],
  [
    'MKE canonical slug exists',
    () => projectsText.includes("slug: 'multimodal-knowledge-engine'"),
  ],
  [
    'MKE canonical title exists',
    () => projectsText.includes("title: 'multimodal-knowledge-engine'"),
  ],
  [
    'MKE canonical GitHub URL exists',
    () =>
      projectsText.includes(
        "githubUrl: 'https://github.com/iTao-AI/multimodal-knowledge-engine'",
      ),
  ],
  ['MKE Active Development status exists', () => allPublicText.includes('Active Development')],
  ['MKE active Publications claim exists', () => allPublicText.includes('active Publications')],
  ['MKE evidence-only Ask claim exists', () => allPublicText.includes('evidence-only Ask')],
  ['MKE CJK active scan claim exists', () => allPublicText.includes('bounded CJK active scan')],
  ['MKE no HTTP/UI boundary exists', () => allPublicText.includes('HTTP and workspace UI are not implemented')],
  [
    'MKE video paths match slug',
    () =>
      projectsText.includes("videoUrl: assetUrl('videos/multimodal-knowledge-engine-showcase.mp4')") &&
      projectsText.includes("videoPoster: assetUrl('videos/multimodal-knowledge-engine-poster.png')"),
  ],
  [
    'OpenClaw has no invented GitHub URL',
    () => /slug: 'openclaw-hr'[\s\S]*?githubUrl:/m.test(projectsText) === false,
  ],
  [
    'OpenClaw video paths match slug',
    () =>
      projectsText.includes("videoUrl: assetUrl('videos/openclaw-hr-showcase.mp4')") &&
      projectsText.includes("videoPoster: assetUrl('videos/openclaw-hr-poster.png')"),
  ],
  ['ProjectCard demo entry exists', () => fileText.get('src/components/ProjectCard.tsx').includes('观看演示')],
  ['ProjectDetailPage video poster exists', () => fileText.get('src/components/ProjectDetailPage.tsx').includes('poster={project.videoPoster}')],
]

const forbiddenPatterns = [
  ['active Deep Search Agent identity', /\bDeep Search Agent\b/],
  ['deep-search-agent link or slug', /deep-search-agent/],
  ['active RAG-OCR identity', /\bRAG-OCR\b/],
  ['multimodal-rag-ocr link or slug', /multimodal-rag-ocr/],
  ['private local path', /\/Users\/[A-Za-z0-9._-]+/],
  ['env file reference', /\.env(?:\b|_)/],
  ['likely GitHub token', /ghp_[A-Za-z0-9_]{20,}/],
  ['likely OpenAI key', /sk-[A-Za-z0-9_-]{20,}/],
  ['generic secret assignment', /\b(?:SECRET|TOKEN|PASSWORD|API_KEY)\s*[:=]\s*['"][^'"]+['"]/i],
]

const failures = []

for (const [label, check] of checks) {
  if (!check()) {
    failures.push(label)
  }
}

for (const [label, pattern] of forbiddenPatterns) {
  for (const [file, text] of fileText.entries()) {
    if (pattern.test(text)) {
      failures.push(`${label} in ${file}`)
    }
  }
}

if (failures.length > 0) {
  console.error('Public content contract failed:')
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exit(1)
}

console.log('Public content contract passed.')
