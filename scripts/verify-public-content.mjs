import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')

const read = (file) => {
  const path = join(root, file)
  return existsSync(path) ? readFileSync(path, 'utf8') : ''
}

const publicFiles = [
  'README.md',
  'index.html',
  'package.json',
  'src/App.tsx',
  'src/index.css',
  'src/data/projects.ts',
  'src/data/siteContent.ts',
  'src/components/NavigationBar.tsx',
  'src/components/Hero.tsx',
  'src/components/FlagshipCaseStudy.tsx',
  'src/components/ComplementaryProjects.tsx',
  'src/components/CapabilityMap.tsx',
  'src/components/ProjectDetailPage.tsx',
  'src/components/AINativeEngineering.tsx',
  'src/components/AboutSection.tsx',
  'src/components/ContactSection.tsx',
]

const fileText = new Map(publicFiles.map((file) => [file, read(file)]))
const allPublicText = [...fileText.values()].join('\n')
const projectsText = fileText.get('src/data/projects.ts')
const siteContentText = fileText.get('src/data/siteContent.ts')
const appText = fileText.get('src/App.tsx')
const packageText = fileText.get('package.json')
const firstLayerText = [
  'src/components/Hero.tsx',
  'src/components/FlagshipCaseStudy.tsx',
  'src/components/ComplementaryProjects.tsx',
  'src/components/CapabilityMap.tsx',
  'src/components/AINativeEngineering.tsx',
  'src/components/AboutSection.tsx',
  'src/components/ContactSection.tsx',
]
  .map((file) => fileText.get(file))
  .join('\n')

const expectedProjects = [
  {
    slug: 'decision-research-agent',
    title: 'Decision Research Agent',
    githubUrl: 'https://github.com/iTao-AI/decision-research-agent',
    releaseUrl:
      'https://github.com/iTao-AI/decision-research-agent/releases/tag/v0.1.8',
    releaseLabel: 'v0.1.8',
    captureCommit: '331ba24cc2ac8ab22bf9ea2867f6e6c7d6bc236e',
    actions: ['拆解任务', '核对 Evidence', '审核后交付'],
    assets: [
      ['overview', 'images/decision-research-agent/research-workspace-overview.png'],
      ['normal', 'images/decision-research-agent/research-evidence-review.png'],
      ['blocked', 'images/decision-research-agent/research-blocked-recovery.png'],
    ],
  },
  {
    slug: 'night-voyager',
    title: 'Night Voyager',
    githubUrl: 'https://github.com/iTao-AI/night-voyager',
    releaseUrl: 'https://github.com/iTao-AI/night-voyager/releases/tag/v0.1.5',
    releaseLabel: 'v0.1.5',
    captureCommit: '01de938af2faa06f129be581154cb61f51eed5e4',
    actions: ['确认事实', '比较路线', '形成行动计划'],
    assets: [
      ['overview', 'images/night-voyager/advisor-workspace-overview.png'],
      ['normal', 'images/night-voyager/advisor-normal-path.png'],
      ['blocked', 'images/night-voyager/advisor-blocked-recovery.png'],
    ],
  },
  {
    slug: 'multimodal-knowledge-engine',
    title: 'Multimodal Knowledge Engine',
    githubUrl: 'https://github.com/iTao-AI/multimodal-knowledge-engine',
    releaseUrl:
      'https://github.com/iTao-AI/multimodal-knowledge-engine/releases/tag/v0.1.6',
    releaseLabel: 'v0.1.6',
    captureCommit: '7880757bfdbc80fb684292ff552fddddfd858f1d',
    actions: ['处理资料', '保留来源', '受控检索'],
    assets: [
      ['overview', 'images/multimodal-knowledge-engine/evidence-workspace-overview.png'],
      ['normal', 'images/multimodal-knowledge-engine/evidence-publication-search.png'],
      ['blocked', 'images/multimodal-knowledge-engine/evidence-insufficient-recovery.png'],
    ],
  },
]

const checks = [
  [
    'canonical project order is DRA, Night Voyager, MKE',
    () => {
      const slugs = [...projectsText.matchAll(/slug:\s*'([^']+)'/g)].map(
        ([, slug]) => slug,
      )
      return JSON.stringify(slugs) === JSON.stringify(expectedProjects.map(({ slug }) => slug))
    },
  ],
  [
    'candidate-first hero copy exists',
    () =>
      ['杨涛', 'AI Agent 工程师 · 上海', '把 AI Agent 做成能推进工作的系统。', '查看旗舰项目'].every(
        (marker) => siteContentText.includes(marker),
      ),
  ],
  ...expectedProjects.flatMap((project) => [
    [`${project.title} canonical title exists`, () => projectsText.includes(`title: '${project.title}'`)],
    [`${project.title} GitHub URL exists`, () => projectsText.includes(project.githubUrl)],
    [`${project.title} Release URL exists`, () => projectsText.includes(project.releaseUrl)],
    [`${project.title} stable Release label exists`, () => projectsText.includes(project.releaseLabel)],
    [`${project.title} capture commit exists`, () => projectsText.includes(project.captureCommit)],
    [
      `${project.title} first-layer action language exists`,
      () => project.actions.every((action) => projectsText.includes(action)),
    ],
    [
      `${project.title} has role, problem, decisions, failure handling and personal work`,
      () => {
        const start = projectsText.indexOf(`slug: '${project.slug}'`)
        const next = expectedProjects
          .map(({ slug }) => projectsText.indexOf(`slug: '${slug}'`, start + 1))
          .filter((index) => index > start)
          .sort((a, b) => a - b)[0]
        const block = projectsText.slice(start, next ?? projectsText.length)
        return [
          'role:',
          'problem:',
          'approach:',
          'humanBoundary:',
          'normalPath:',
          'failurePath:',
          'personalWork:',
          'decisions:',
          'keywords:',
          'visuals:',
        ].every((field) => block.includes(field))
      },
    ],
  ]),
  [
    'homepage sections use editorial case-study components',
    () =>
      ['FlagshipCaseStudy', 'ComplementaryProjects', 'CapabilityMap'].every((marker) =>
        appText.includes(marker),
      ),
  ],
  [
    'legacy and canonical project hash routes remain supported',
    () =>
      appText.includes('canonicalMatch') &&
      appText.includes('legacyMatch') &&
      appText.includes('history.replaceState'),
  ],
  [
    'first-layer internal audit language is absent',
    () =>
      [
        'consumer seam',
        'synthetic fixture',
        'projection',
        'Engineering Proof',
        'normal path',
        'failure path',
        'reproducible',
      ].every((marker) => !firstLayerText.toLowerCase().includes(marker.toLowerCase())),
  ],
  [
    'AI-native, capability and background language is natural',
    () =>
      [
        'AI 提高实现速度，判断和结果由我负责。',
        '从信息进入，到任务推进，再到人工确认。',
        '先理解一项具体工作怎样运转',
      ].every((marker) => allPublicText.includes(marker)),
  ],
  [
    'old video CTA and npm script are gone',
    () =>
      !allPublicText.includes('观看演示') &&
      !allPublicText.includes('npm run videos') &&
      !packageText.includes('"videos"') &&
      !projectsText.includes('videoUrl') &&
      !projectsText.includes('videoPoster'),
  ],
  [
    'social preview and favicon are declared',
    () =>
      allPublicText.includes('social-preview.svg') &&
      allPublicText.includes('%BASE_URL%favicon.svg'),
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
  if (!check()) failures.push(label)
}

for (const [label, pattern] of forbiddenPatterns) {
  for (const [file, text] of fileText.entries()) {
    if (pattern.test(text)) failures.push(`${label} in ${file}`)
  }
}

const manifestPath = join(root, 'public', 'images', 'project-showcase-manifest.json')
if (!existsSync(manifestPath)) {
  failures.push('missing public/images/project-showcase-manifest.json')
} else {
  try {
    const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
    const expectedAssets = expectedProjects.flatMap((project) =>
      project.assets.map(([state, publicPath]) => ({
        project: project.slug,
        state,
        publicPath,
        sourceCommit: project.captureCommit,
      })),
    )

    if (!Array.isArray(manifest.assets) || manifest.assets.length !== expectedAssets.length) {
      failures.push('project showcase manifest must contain exactly nine assets')
    } else {
      for (const expected of expectedAssets) {
        const asset = manifest.assets.find(
          (candidate) =>
            candidate.project === expected.project && candidate.state === expected.state,
        )
        if (!asset) {
          failures.push(`missing manifest asset ${expected.project}/${expected.state}`)
          continue
        }
        if (asset.public_path !== expected.publicPath) {
          failures.push(`public path mismatch ${expected.project}/${expected.state}`)
        }
        if (asset.source_commit !== expected.sourceCommit) {
          failures.push(`source commit mismatch ${expected.project}/${expected.state}`)
        }
        if (asset.width !== 1600 || asset.height !== 1000) {
          failures.push(`unexpected PNG dimensions ${expected.project}/${expected.state}`)
        }
        if (typeof asset.source_path !== 'string' || asset.source_path.startsWith('/')) {
          failures.push(`invalid source path ${expected.project}/${expected.state}`)
        }
        if (typeof asset.disclosure !== 'string' || asset.disclosure.length < 8) {
          failures.push(`missing disclosure ${expected.project}/${expected.state}`)
        }

        const assetPath = join(root, 'public', asset.public_path)
        if (!existsSync(assetPath)) {
          failures.push(`missing local visual asset public/${asset.public_path}`)
          continue
        }
        const buffer = readFileSync(assetPath)
        const digest = createHash('sha256').update(buffer).digest('hex')
        if (digest !== asset.sha256) {
          failures.push(`sha256 mismatch ${expected.project}/${expected.state}`)
        }
        if (
          buffer.length < 24 ||
          buffer.toString('hex', 0, 8) !== '89504e470d0a1a0a' ||
          buffer.readUInt32BE(16) !== 1600 ||
          buffer.readUInt32BE(20) !== 1000
        ) {
          failures.push(`PNG header mismatch ${expected.project}/${expected.state}`)
        }
      }
    }
  } catch (error) {
    failures.push(`invalid project showcase manifest: ${error.message}`)
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
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}

console.log('Public content contract passed.')
