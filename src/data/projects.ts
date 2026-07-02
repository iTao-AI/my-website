export interface Project {
  slug: string
  title: string
  eyebrow: string
  description: string
  summaryZh: string
  githubUrl?: string
  role: string
  status: string
  stack: string[]
  proofPoints: EvidenceMetric[]
  problem: string
  architecture: string
  built: string[]
  evidence: string[]
  boundary: string
  tags: string[]
  videoUrl?: string
  videoPoster?: string
  demoIntro?: string
  demos?: ProjectDemo[]
}

export interface EvidenceMetric {
  label: string
  value: string
  note: string
}

export interface ProjectDemo {
  label: string
  title: string
  description: string
  videoUrl: string
  posterUrl: string
  ctaLabel?: string
  primary?: boolean
}

export interface SystemLayer {
  title: string
  label: string
  description: string
  proof: string
}

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const evidenceMetrics: EvidenceMetric[] = [
  {
    label: 'Decision Research Agent',
    value: 'v0.1.0',
    note: 'backend-and-CLI release',
  },
  {
    label: 'Durable HITL',
    value: '13/13',
    note: 'single-node SQLite feasibility gates',
  },
  {
    label: 'Multimodal Knowledge Engine',
    value: 'Active Development',
    note: 'local CLI, stdio MCP, active Publications',
  },
  {
    label: 'OpenClaw HR',
    value: 'local validation',
    note: 'Router, Subagents, Skills, Memory, human escalation',
  },
]

export const systemLayers: SystemLayer[] = [
  {
    title: 'Decision Research Agent',
    label: '外部研究',
    description:
      '把开放式研究任务收敛成可审计的 ResearchRun、EvidenceLedger 和 canonical result。',
    proof: 'LangChain + DeepAgents + LangGraph',
  },
  {
    title: 'Multimodal Knowledge Engine',
    label: '内部证据',
    description:
      '将文档和媒体转成 active Publications，让 Agent 只能检索、引用和询问已发布 Evidence。',
    proof: 'CLI / MCP / evidence-only Ask',
  },
  {
    title: 'OpenClaw HR',
    label: '流程编排',
    description:
      '在本机验证 Router、HR 子 Agent、Skills、Memory、Tool Client、无依据拒答和人工升级边界。',
    proof: 'local Router + Subagents + Skills',
  },
]

export const projects: Project[] = [
  {
    slug: 'decision-research-agent',
    title: 'Decision Research Agent',
    eyebrow: '可审计研究服务',
    description:
      '基于 LangChain Agent Framework、DeepAgents research harness 和 LangGraph durable workflow runtime 的研究服务。',
    summaryZh:
      '工程重点是把开放式研究变成可追踪运行、可复核证据、可审查交付，而不是只生成一次性答案。',
    githubUrl: 'https://github.com/iTao-AI/decision-research-agent',
    role: '独立开发 / 核心开发',
    status: 'v0.1.0 backend-and-CLI release',
    stack: [
      'LangChain Agent Framework',
      'DeepAgents research harness',
      'LangGraph durable workflow runtime',
      'FastAPI',
      'SQLite',
      'LangSmith diagnostics',
    ],
    proofPoints: [
      {
        label: 'Release',
        value: 'v0.1.0',
        note: 'backend-and-CLI surface',
      },
      {
        label: 'State authority',
        value: 'application DB',
        note: 'ResearchRun / EvidenceLedger',
      },
      {
        label: 'Durable HITL',
        value: '13/13',
        note: 'controlled single-node gate',
      },
    ],
    problem:
      '研究型 Agent 的风险不只是答错，还包括运行状态不可回看、证据链丢失、人工审查结果和业务交付状态混在运行框架里。',
    architecture:
      'FastAPI 和 Tool Client 进入 ResearchExecutionService；DeepAgents research harness 执行研究，LangChain 负责 agent framework，LangGraph 提供 durable workflow runtime。application DB business authority 持有 ResearchRun、EvidenceLedger、review、verification、publication 和 canonical result state，LangSmith 只做 privacy-first diagnostics。Agent-first research capability service 的展示重点是 evidence-led execution、canonical result 和 human-governed delivery。',
    built: [
      '定义 LangChain Agent Framework、DeepAgents research harness、LangGraph durable workflow runtime、application DB business authority 的分层边界',
      '实现 canonical run_id scoped execution、ResearchRun / EvidenceLedger persistence 和 GET /api/runs/{run_id}/result canonical result delivery',
      '交付 Talent Hiring Signal 作为 bounded research profile，并通过 Talent value gate 验证固定样本流程',
      '将 durable review 和 evidence verification 保持为 controlled features default off，限定在 single-node SQLite feasibility boundary',
    ],
    evidence: [
      'Public v0.1.0 GitHub Release and repository VERSION record the backend-and-CLI release',
      'docs/architecture.md records framework/runtime/service ownership and application DB authority',
      'docs/evidence/README.md records 13/13 durable HITL gate scope and the fixed-sample proof boundary',
    ],
    boundary:
      'v0.1.0 has no bundled frontend, no public production deployment, and controlled features default off. Talent and real-source fixed samples are not market accuracy, production readiness, or automatic truth verification. The videos are deterministic loopback contract demo assets for portfolio review, not a real provider run or live research recording.',
    tags: ['Agent', 'ResearchRun', 'EvidenceLedger', 'HiTL'],
    videoUrl: assetUrl('videos/decision-research-agent-hr-demo-720p.mp4'),
    videoPoster: assetUrl('videos/decision-research-agent-hr-demo-poster.png'),
    demoIntro:
      '这组视频用于作品集展示，呈现 Agent-first research capability service 如何围绕 EvidenceLedger、canonical result 和 human-governed delivery 收敛研究交付。它们是 deterministic loopback contract demo，不是真实 provider 运行或 live research 录屏。',
    demos: [
      {
        label: 'HR / portfolio demo',
        title: '90 秒作品集演示',
        description:
          '面向作品集浏览的快速版本，突出 ResearchRun、EvidenceLedger、canonical result 与人工治理交付边界。',
        videoUrl: assetUrl('videos/decision-research-agent-hr-demo-720p.mp4'),
        posterUrl: assetUrl('videos/decision-research-agent-hr-demo-poster.png'),
        ctaLabel: '观看 90 秒演示',
        primary: true,
      },
      {
        label: '技术讲解 / Technical walkthrough',
        title: '技术讲解：120 秒系统 walkthrough',
        description:
          '面向技术讨论的 walkthrough，展开 LangChain、DeepAgents、LangGraph、application DB authority 和 contract proof 的职责边界。',
        videoUrl: assetUrl(
          'videos/decision-research-agent-technical-walkthrough-720p.mp4',
        ),
        posterUrl: assetUrl(
          'videos/decision-research-agent-technical-walkthrough-poster.png',
        ),
        ctaLabel: '技术讲解 / Technical walkthrough',
      },
    ],
  },
  {
    slug: 'multimodal-knowledge-engine',
    title: 'Multimodal Knowledge Engine',
    eyebrow: '本地优先 Evidence engine',
    description:
      'local-first Evidence engine，用 observable Runs、active Publications、Search 和 evidence-only Ask 支撑 Agent 可引用知识。',
    summaryZh:
      '它不是泛化问答平台，而是先保证成功发布的 Evidence 能被稳定检索、引用和询问，失败或部分处理结果不会进入 active surface。',
    githubUrl: 'https://github.com/iTao-AI/multimodal-knowledge-engine',
    role: '独立开发 / 核心开发',
    status: 'Active Development',
    stack: [
      'Python',
      'SQLite',
      'FTS5',
      'PyMuPDF',
      'stdio MCP',
      'CLI',
      'local transcription',
    ],
    proofPoints: [
      {
        label: 'Status',
        value: 'Active Development',
        note: 'merged public main only',
      },
      {
        label: 'Surface',
        value: 'CLI + MCP',
        note: 'HTTP and workspace UI are not implemented',
      },
      {
        label: 'Evidence',
        value: 'active Publications',
        note: 'page / timestamp locators',
      },
    ],
    problem:
      'Agent 可调用知识工具不能把失败、过期或来源不明的中间结果暴露给上层工作流；Search 和 Ask 只能读取已成功发布的 Evidence。',
    architecture:
      'Source 经 immutable Asset、observable Run、candidate Evidence、validated Run 和 atomic Publication switch 进入 active Search projection。SQLite 是 domain truth，FTS5 是 rebuildable projection；CLI 和 stdio MCP 共用同一 application contract。',
    built: [
      '实现 text-layer PDF 和 documented short local video fixture 的 ingest、Run inspection、active Evidence Search 与 evidence-only Ask',
      '保证 failed、partial、superseded output 不进入 active Publications，retry 生成新的 immutable Run',
      '交付 deterministic local product proof、offline retrieval evaluation、numeric grouping query policy，以及 bounded CJK active scan owner-startup strategy',
      '实现可选 cache-only local transcription runtime；model acquisition 仍是显式 opt-in preparation step',
    ],
    evidence: [
      'README records deterministic local product proof for PDF/video lifecycle and stdio MCP interface',
      'docs/explanation/architecture.md records Publication semantics, transcript protocol, retrieval evaluation, numeric grouping, and bounded CJK active scan',
      'docs/README.md links the current proof, MCP, retrieval, numeric, Chinese, and CJK operation guides',
    ],
    boundary:
      'Active Development claims are limited to merged public main. HTTP and workspace UI are not implemented, and the current proof does not claim scanned-PDF OCR, arbitrary video support, hosted coordination, bundled model weights, embeddings, vector search, hybrid retrieval, reranking, or broad CJK retrieval quality.',
    tags: ['Evidence', 'MCP', 'Publication', 'Retrieval'],
    videoUrl: assetUrl('videos/multimodal-knowledge-engine-showcase.mp4'),
    videoPoster: assetUrl('videos/multimodal-knowledge-engine-poster.png'),
  },
  {
    slug: 'openclaw-hr',
    title: 'OpenClaw HR',
    eyebrow: '本机多 Agent 编排与工具接入验证',
    description:
      '基于现有 OpenClaw HR 材料完成的本机部署、配置与集成验证，覆盖 Router、业务子 Agent、Skills、Memory、Tool Client 和人工升级边界。',
    summaryZh:
      '展示重点是业务请求如何被路由、知识检索何时应拒答、工具如何接入，以及哪些高影响决策必须交给人工；不把课程或示例基线包装成从零原创平台。',
    role: '本机部署 / 配置 / Skills 与工具接入验证',
    status: 'local validation project',
    stack: [
      'OpenClaw',
      'Multi-Agent',
      'Skills',
      'Router',
      'Memory',
      'Tool Client',
      'HiTL',
    ],
    proofPoints: [
      {
        label: 'Layer',
        value: 'local orchestration',
        note: 'Router + five HR subagents',
      },
      {
        label: 'Tools',
        value: 'Skills / Memory',
        note: 'Tool Client integration validation',
      },
      {
        label: 'Boundary',
        value: 'HiTL',
        note: 'human escalation remains explicit',
      },
    ],
    problem:
      'HR Agent 不能把所有问题交给一个通用助手；招聘、入职、培训、绩效和行政流程需要不同子工作流、工具权限和人工升级规则。',
    architecture:
      '在隔离的本机 OpenClaw profile 中，Router 负责识别请求类型并选择业务子 Agent；Skills、Memory 和 Tool Client 承担知识检索与工具接入；无依据问题安全拒答，合规、定级和高影响决策升级人工。当前不声称已与最新 Decision Research Agent 和 multimodal-knowledge-engine 完整重联调。',
    built: [
      '在隔离 profile 中部署并验证 Router 与招聘、入职、培训、绩效、行政五类 HR 子 Agent 路由',
      '验证 Skills、Memory、Tool Client、知识检索和本机工具接入路径',
      '使用 synthetic demo data 验证无依据拒答、红线升级和“脚本管数字、LLM 管语义”的风险边界',
    ],
    evidence: [
      'The portfolio presents OpenClaw HR as a bounded local deployment and integration validation project',
      'Decision Research Agent and Multimodal Knowledge Engine are presented separately; this case does not claim a current three-project end-to-end proof',
      'No public repository URL is advertised because this local validation layer has no independent public repository',
    ],
    boundary:
      'OpenClaw HR starts from existing course/demo material and is presented only as local deployment, configuration, and integration validation with synthetic data. It is not a from-scratch original platform, production HR system, real enterprise adoption claim, or proof that the latest DRA, MKE, and OpenClaw versions are fully connected. Without a public repository, the site does not invent a GitHub link.',
    tags: ['OpenClaw', 'Router', 'Skills', 'HiTL'],
    videoUrl: assetUrl('videos/openclaw-hr-showcase.mp4'),
    videoPoster: assetUrl('videos/openclaw-hr-poster.png'),
    demoIntro:
      '无音频短片，展示本机 Router、HR 子 Agent 与人工升级边界；它是 local validation walkthrough，不对应公开 Release 或当前三项目完整联调。',
    demos: [
      {
        label: 'Local validation demo',
        title: '本机 HR 工作流编排验证',
        description:
          '快速浏览 Router-led HR workflow、子 Agent 分工和人工升级边界，不作为生产系统或原创平台证明。',
        videoUrl: assetUrl('videos/openclaw-hr-showcase.mp4'),
        posterUrl: assetUrl('videos/openclaw-hr-poster.png'),
      },
    ],
  },
]
