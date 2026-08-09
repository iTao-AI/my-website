import { existsSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')

const publicFiles = [
  'README.md',
  'index.html',
  'package.json',
  'src/App.tsx',
  'src/index.css',
  'src/data/projects.ts',
  'src/components/NavigationBar.tsx',
  'src/components/Hero.tsx',
  'src/components/FlagshipProject.tsx',
  'src/components/CapabilityLoop.tsx',
  'src/components/ProjectCard.tsx',
  'src/components/ProjectDetailPage.tsx',
  'src/components/ProjectSection.tsx',
  'src/components/EngineeringProof.tsx',
  'src/components/AINativeEngineering.tsx',
  'src/components/AboutSection.tsx',
  'src/components/ContactSection.tsx',
]

const fileText = new Map(
  publicFiles.map((file) => {
    const path = join(root, file)
    return [file, existsSync(path) ? readFileSync(path, 'utf8') : '']
  }),
)

const allPublicText = [...fileText.values()].join('\n')
const projectsText = fileText.get('src/data/projects.ts')
const appText = fileText.get('src/App.tsx')
const packageText = fileText.get('package.json')

const expectedProjects = [
  {
    slug: 'night-voyager',
    title: 'Night Voyager',
    githubUrl: 'https://github.com/iTao-AI/night-voyager',
    releaseUrl: 'https://github.com/iTao-AI/night-voyager/releases/tag/v0.1.5',
    releaseLabel: 'v0.1.5',
  },
  {
    slug: 'decision-research-agent',
    title: 'Decision Research Agent',
    githubUrl: 'https://github.com/iTao-AI/decision-research-agent',
    releaseUrl:
      'https://github.com/iTao-AI/decision-research-agent/releases/tag/v0.1.8',
    releaseLabel: 'v0.1.8',
  },
  {
    slug: 'multimodal-knowledge-engine',
    title: 'Multimodal Knowledge Engine',
    githubUrl: 'https://github.com/iTao-AI/multimodal-knowledge-engine',
    releaseUrl:
      'https://github.com/iTao-AI/multimodal-knowledge-engine/releases/tag/v0.1.6',
    releaseLabel: 'v0.1.6',
  },
]

const checks = [
  [
    'canonical project order is Night Voyager, DRA, MKE',
    () => {
      const slugs = [...projectsText.matchAll(/slug:\s*'([^']+)'/g)].map(
        ([, slug]) => slug,
      )
      return JSON.stringify(slugs) === JSON.stringify(expectedProjects.map(({ slug }) => slug))
    },
  ],
  ...expectedProjects.flatMap((project) => [
    [`${project.title} canonical title exists`, () => projectsText.includes(`title: '${project.title}'`)],
    [`${project.title} GitHub URL exists`, () => projectsText.includes(project.githubUrl)],
    [`${project.title} Release URL exists`, () => projectsText.includes(project.releaseUrl)],
    [`${project.title} stable Release label exists`, () => projectsText.includes(project.releaseLabel)],
  ]),
  [
    'all projects have first-class normal/failure/reproducible paths',
    () =>
      expectedProjects.every(({ slug }) => {
        const start = projectsText.indexOf(`slug: '${slug}'`)
        const end = projectsText.indexOf('\n  },', start)
        const block = projectsText.slice(start, end)
        return ['normalPath', 'failurePath', 'reproduciblePath'].every((field) =>
          block.includes(`${field}:`),
        )
      }),
  ],
  [
    'Night Voyager flagship and AI-native sections exist',
    () =>
      ['id="flagship"', '旗舰项目', 'AI-native Engineering', '目标约束', '最终交付'].every(
        (marker) => allPublicText.includes(marker),
      ),
  ],
  [
    'capability loop names duties and consumer seams',
    () =>
      ['Evidence & Context', 'Research & Delivery', 'Decision & Action', 'consumer seam'].every(
        (marker) => allPublicText.includes(marker),
      ),
  ],
  [
    'engineering proof names normal, failure, reproducible',
    () =>
      ['normal', 'failure', 'reproducible', 'Engineering Proof'].every((marker) =>
        allPublicText.includes(marker),
      ),
  ],
  [
    'legacy and canonical project hash routes remain supported',
    () => appText.includes('#/projects/') && appText.includes('#project/'),
  ],
  [
    'old video CTA and npm script are gone',
    () =>
      !allPublicText.includes('观看演示') &&
      !allPublicText.includes('npm run videos') &&
      !packageText.includes('"videos"') &&
      !projectsText.includes('videoUrl') &&
      !projectsText.includes('videoPoster') &&
      !projectsText.includes('demos'),
  ],
  [
    'Night Voyager visual records exact public source commit',
    () =>
      projectsText.includes('54b78ebda9fea263de68b5e3f623aef31c5ffe48') &&
      projectsText.includes('collaboration-confirmed-fact.webp') &&
      projectsText.includes('m5-advisor-ledger.webp') &&
      projectsText.includes('m5-family-receipt-timeline.webp'),
  ],
  [
    'social preview and favicon are declared',
    () =>
      allPublicText.includes('social-preview.svg') &&
      allPublicText.includes('/favicon.svg'),
  ],
]

const forbiddenPatterns = [
  ['OpenClaw HR current identity', /\bOpenClaw HR\b/],
  ['DRA v0.1.0 current status', /\bv0\.1\.0\b/],
  ['MKE Active Development current status', /\bActive Development\b/],
  ['old Deep Search Agent identity', /\bDeep Search Agent\b/],
  ['old deep-search-agent slug', /deep-search-agent/],
  ['old RAG-OCR identity', /\bRAG-OCR\b/],
  ['old multimodal-rag-ocr slug', /multimodal-rag-ocr/],
  ['private local path', /\/Users\/[A-Za-z0-9._-]+|\/home\/[A-Za-z0-9._-]+/],
  ['env file reference', /(^|[^A-Za-z0-9_.])\.env(?:\b|_)/],
  ['likely GitHub token', /gh[pousr]_[A-Za-z0-9_]{20,}/],
  ['likely OpenAI key', /sk-[A-Za-z0-9_-]{20,}/],
  [
    'generic secret assignment',
    /\b(?:SECRET|TOKEN|PASSWORD|API_KEY)\s*[:=]\s*['"][^'"]+['"]/i,
  ],
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

const visualPaths = [...projectsText.matchAll(/src:\s*assetUrl\('([^']+\.webp)'\)/g)].map(
  ([, path]) => path,
)
for (const path of visualPaths) {
  if (!existsSync(join(root, 'public', path))) {
    failures.push(`missing local visual asset public/${path}`)
  }
}

for (const project of expectedProjects) {
  for (const url of [project.githubUrl, project.releaseUrl]) {
    try {
      const parsed = new URL(url)
      if (parsed.protocol !== 'https:' || parsed.hostname !== 'github.com') {
        failures.push(`non-public URL ${url}`)
      }
    } catch {
      failures.push(`invalid URL ${url}`)
    }
  }
}

if (!existsSync(join(root, 'public', 'social-preview.svg'))) {
  failures.push('missing local social preview public/social-preview.svg')
}

if (failures.length > 0) {
  console.error('Public content contract failed:')
  for (const failure of failures) {
    console.error(`- ${failure}`)
  }
  process.exit(1)
}

console.log('Public content contract passed.')
