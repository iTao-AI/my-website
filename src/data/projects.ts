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
}

export interface EvidenceMetric {
  label: string
  value: string
  note: string
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
    label: 'multimodal-knowledge-engine',
    value: 'Active Development',
    note: 'local CLI, stdio MCP, active Publications',
  },
  {
    label: 'OpenClaw HR',
    value: 'orchestration layer',
    note: 'Router, Skills, human escalation boundary',
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
    title: 'multimodal-knowledge-engine',
    label: '内部证据',
    description:
      '将文档和媒体转成 active Publications，让 Agent 只能检索、引用和询问已发布 Evidence。',
    proof: 'CLI / MCP / evidence-only Ask',
  },
  {
    title: 'OpenClaw HR',
    label: '流程编排',
    description:
      '用 Router 和 Skills 把业务请求分配到 HR 子工作流，并连接研究服务、证据检索和人工升级边界。',
    proof: 'Router + Skills + HiTL',
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
      'FastAPI 和 Tool Client 进入 ResearchExecutionService；DeepAgents research harness 执行研究，LangChain 负责 agent framework，LangGraph 提供 durable workflow runtime。application DB business authority 持有 ResearchRun、EvidenceLedger、review、verification、publication 和 canonical result state，LangSmith 只做 privacy-first diagnostics。',
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
      'v0.1.0 has no bundled frontend, no public production deployment, and controlled features default off. Talent and real-source fixed samples are not market accuracy, production readiness, or automatic truth verification.',
    tags: ['Agent', 'ResearchRun', 'EvidenceLedger', 'HiTL'],
    videoUrl: assetUrl('videos/decision-research-agent-showcase.mp4'),
    videoPoster: assetUrl('videos/decision-research-agent-poster.png'),
  },
  {
    slug: 'multimodal-knowledge-engine',
    title: 'multimodal-knowledge-engine',
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
    eyebrow: '多 Agent 编排与工具接入',
    description:
      'HR 场景编排层项目，用 Router、业务子 Agent、Skills 和人工升级边界连接研究服务与证据检索工具。',
    summaryZh:
      '展示重点是业务请求如何被路由、何时调用内部 Evidence 或外部研究工具，以及哪些决策必须交给人工。',
    role: 'Agent 编排设计 / Skills 开发 / 工具接入验证',
    status: 'local orchestration proof',
    stack: [
      'OpenClaw',
      'Multi-Agent',
      'Skills',
      'Router',
      'HiTL',
      'Decision Research Agent',
      'multimodal-knowledge-engine',
    ],
    proofPoints: [
      {
        label: 'Layer',
        value: 'orchestration',
        note: 'not a production platform',
      },
      {
        label: 'Tools',
        value: 'DRA / MKE',
        note: 'research and Evidence services',
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
      'Router 负责识别请求类型并选择业务子 Agent；Skills 层封装 Decision Research Agent 的外部研究能力和 multimodal-knowledge-engine 的内部 Evidence 检索能力；人工升级边界用于合规、定级和高影响决策。',
    built: [
      '设计 Router + HR 子 Agent 编排，把研究服务、Evidence 检索和人工升级拆成明确职责',
      '更新工具引用到 Decision Research Agent 和 multimodal-knowledge-engine 的 canonical identities',
      '保留脚本管数字、LLM 管语义的风险边界，避免把自动生成文本当作最终业务判断',
    ],
    evidence: [
      'This website presents OpenClaw HR as an orchestration layer, not as a hosted production platform',
      'Tool-layer references point to the public DRA and MKE repositories when a public code source exists',
      'No public repository URL is advertised for OpenClaw HR because no public repository is available for this layer',
    ],
    boundary:
      'OpenClaw HR is not expanded into a production platform, real enterprise adoption claim, or complete original product. Without a public repository, the site does not invent a GitHub link for this orchestration layer.',
    tags: ['OpenClaw', 'Router', 'Skills', 'HiTL'],
    videoUrl: assetUrl('videos/openclaw-hr-showcase.mp4'),
    videoPoster: assetUrl('videos/openclaw-hr-poster.png'),
  },
]
