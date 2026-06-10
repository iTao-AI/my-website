export interface Project {
  slug: string
  title: string
  eyebrow: string
  description: string
  summaryZh: string
  githubUrl?: string
  role: string
  stack: string[]
  proofPoints: EvidenceMetric[]
  problem: string
  architecture: string
  built: string[]
  evidence: string[]
  boundary: string
  tags: string[]
  videoUrl?: string
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

export const evidenceMetrics: EvidenceMetric[] = [
  {
    label: 'Deep Search Agent',
    value: '46 文件 / 325 项通过',
    note: 'ResearchRun、EvidenceLedger、超时审计',
  },
  {
    label: 'RAG-OCR',
    value: '55 通过 / 6 跳过',
    note: 'DocumentQualityReport 和低置信拒答',
  },
  {
    label: '知识库样本',
    value: '761 个 chunks',
    note: '5 个样本，100 条 Top5 检索记录',
  },
  {
    label: '路由验证',
    value: '5/5 路由',
    note: 'OpenClaw HR：五类请求均路由到预期子 Agent',
  },
]

export const systemLayers: SystemLayer[] = [
  {
    title: 'Deep Search Agent',
    label: '外部研究',
    description: '把开放式研究任务转成可审计的执行记录，包含状态、来源证据、fallback 和 token 使用情况。',
    proof: 'ResearchRun + EvidenceLedger',
  },
  {
    title: 'RAG-OCR',
    label: '内部知识',
    description: '解析文档、检索来源片段，并在低置信场景下先拒答，避免无依据调用 LLM。',
    proof: 'DocumentQualityReport',
  },
  {
    title: 'OpenClaw HR 多 Agent 编排与 Skills 工具体系',
    label: '流程编排',
    description: '设计 Router + 5 业务子 Agent 编排，通过 Skills 工具体系连接内部知识检索与外部研究工具。',
    proof: 'Router + Skills E2E',
  },
]

export const projects: Project[] = [
  {
    slug: 'deep-search-agent',
    title: 'Deep Search Agent',
    eyebrow: '可审计研究 Agent',
    description: '多 Agent 深度研究系统，把复杂问题转成可追踪的任务执行、来源证据和结构化报告。',
    summaryZh: '工程重心不在"能回答"，而在回答可追踪、可审计、失败可诊断。',
    githubUrl: 'https://github.com/iTao-AI/deep-search-agent',
    role: '独立开发 / 核心开发',
    stack: ['LangGraph', 'DeepAgents', 'FastAPI', 'WebSocket', 'SQLite', 'Tavily', 'RAGFlow'],
    proofPoints: [
      {
        label: '测试证据',
        value: '46 文件 / 325 项通过',
        note: '后端回归测试',
      },
      {
        label: '运行审计',
        value: 'ResearchRun',
        note: '任务状态、token、超时',
      },
      {
        label: '来源链路',
        value: 'EvidenceLedger',
        note: 'URL、片段、引用状态',
      },
    ],
    problem: '开放式研究 Agent 很容易做出一次看起来不错的结果，但难点在于持续可信：任务状态、来源证据、失败诊断和可查询审计链路都必须补齐。',
    architecture: '主 Agent 负责拆解和委派任务，网络搜索、数据库和知识库子 Agent 负责不同能力。后端提供任务 API、WebSocket 状态事件、健康检查和 research-run 查询接口。',
    built: [
      '实现 ResearchRun 和 EvidenceLedger 持久化，记录任务状态、token 使用、fallback、超时、来源 URL、引用状态和质量门禁',
      '使用 ContextVar 隔离并发请求中的 thread、workspace 和 callback 状态',
      '通过 SharedContext 扩展子 Agent 搜索证据采集，并对 URL 做去重',
    ],
    evidence: [
      '本地后端测试：46 个测试文件，325 项通过',
      '已准备 benchmark runner 和 5 条查询快照，用于重复分析延迟、成本和 fallback',
      '已验证上游编排器通过 Tool Client 调用 research-run API 的链路',
    ],
    boundary: '当前定位是可重复测量的评测框架，下一步会扩展更多查询样本和多轮运行对比。',
    tags: ['Agent', '证据链', '工具调用', 'FastAPI'],
  },
  {
    slug: 'rag-ocr',
    title: 'RAG-OCR',
    eyebrow: 'Agent 可调用知识工具',
    description: '多模态文档检索服务，支持 PDF、扫描件、Markdown chunk、来源元数据和低置信拒答。',
    summaryZh: '不止检索，更关注来源质量、何时拒答、以及如何被 Agent 安全调用。',
    githubUrl: 'https://github.com/iTao-AI/multimodal-rag-ocr',
    role: '独立开发 / 核心开发',
    stack: ['FastAPI', 'Milvus', 'BM25', 'RRF', 'Reranker', 'Redis', 'OCR/VLM'],
    proofPoints: [
      {
        label: '测试证据',
        value: '55 项通过',
        note: '6 项因环境跳过',
      },
      {
        label: '质量门禁',
        value: '拒答链路',
        note: '弱检索不调用 LLM',
      },
      {
        label: '知识库样本',
        value: '761 个 chunks',
        note: '5 个样本文档',
      },
    ],
    problem: '很多 RAG 系统在检索结果很弱时仍然会回答。作为 Agent 工具，它必须暴露来源质量，并且知道什么时候不该回答。',
    architecture: '文档解析和 chunking 进入 Milvus 检索链路。问答侧组合 query rewrite、向量召回、BM25 融合、RRF、可选 rerank、缓存和生成前置信门禁。',
    built: [
      '实现 Header-Recursive chunking，保留标题路径、页码标记、跨页桥接 chunk 和来源元数据',
      '新增 DocumentQualityReport 和独立 min_confidence_threshold，覆盖空召回、弱召回和缓存低置信场景',
      '把解析和检索包装成安全 HTTP Tool Service，加入 API key 鉴权和文件系统根目录约束',
    ],
    evidence: [
      '本地测试 55 项通过，6 项因环境跳过',
      '5 个样本处理为 761 个 chunks',
      '记录 100 条 Top5 检索结果，并保留弱命中边界',
    ],
    boundary: '下一步扩展复杂扫描件回归覆盖，并继续补充更多文档类型的检索质量记录。',
    tags: ['RAG', 'OCR', '质量门禁', 'Milvus'],
  },
  {
    slug: 'openclaw-hr',
    title: 'OpenClaw HR 多 Agent 编排与 Skills 工具体系',
    eyebrow: '多 Agent 编排与工具接入',
    description: '基于 OpenClaw 设计 HR 场景多 Agent 编排方案，围绕 Router、业务子 Agent、Skills、内部知识工具和外部研究工具构建可验证的本机工作流。',
    summaryZh: '不只编排，更关注路由正确性、Skills 工具设计和人工升级边界。',
    role: 'Agent 编排设计 / Skills 开发 / 工具接入验证',
    stack: ['OpenClaw', 'Multi-Agent', 'Skills', 'Lobster', 'Cron', 'Python', 'RAG-OCR'],
    proofPoints: [
      {
        label: '路由检查',
        value: '5/5 路由',
        note: '子会话验证',
      },
      {
        label: '工具链',
        value: 'API auth',
        note: '健康检查和任务创建',
      },
      {
        label: '边界',
        value: 'HiTL',
        note: '需要时升级给人工',
      },
    ],
    problem: '业务 Agent 不能只靠一个大助手回答所有问题，需要设计路由策略、Skills 工具体系、内外部知识工具接入和人工升级边界。',
    architecture: 'Router 统一入口分发到招聘、入职、培训、绩效、行政 5 个业务子 Agent。RAG-OCR 通过 er-admin Skill 提供内部知识检索，Deep Search Agent 通过 external research Skill 提供外部研究能力。',
    built: [
      '设计 Router + 5 业务子 Agent 编排，配置本机隔离 profile 和路由规则',
      '设计 er-admin Skill，将 RAG-OCR 封装为内部知识工具，支持政策检索、来源引用和无依据拒答',
      '设计 external research Skill，将 Deep Search Agent 接入 Router，完成鉴权、任务创建和 ResearchRun 审计',
      '使用"脚本管数字、LLM 管语义"方式约束风险：月报由 CSV 生成并回核，360 反馈只聚合不定级',
    ],
    evidence: [
      '5/5 类 HR 请求通过 childSessionKey 路由到预期子 Agent',
      '本机 E2E 验证覆盖 Router、内部知识工具和外部研究工具接入',
      '保留人工升级、合规红线、来源引用和无依据拒答机制',
    ],
    boundary: '已完成本机多 Agent 集成验证，后续可扩展到企业知识库和流程自动化。',
    tags: ['OpenClaw', 'Skills', '编排', 'Tool E2E'],
  },
]
