export interface ProjectPath {
  label: 'normal' | 'failure' | 'reproducible'
  title: string
  description: string
}

export interface ProjectVisual {
  kind: 'image' | 'system'
  title: string
  alt: string
  caption: string
  src?: string
  sourceCommit?: string
  gallery: string[]
  lines: string[]
}

export interface Project {
  slug: string
  title: string
  eyebrow: string
  description: string
  summaryZh: string
  githubUrl: string
  releaseUrl: string
  releaseLabel: string
  role: string
  status: string
  stack: string[]
  proofPoints: EvidenceMetric[]
  normalPath: ProjectPath
  failurePath: ProjectPath
  reproduciblePath: ProjectPath
  visual: ProjectVisual
  problem: string
  architecture: string
  built: string[]
  evidence: string[]
  boundary: string
  tags: string[]
}

export interface EvidenceMetric {
  label: string
  value: string
  note: string
}

export interface CapabilityLayer {
  title: string
  label: string
  seam: string
  description: string
  proof: string
}

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const capabilityLayers: CapabilityLayer[] = [
  {
    title: 'Multimodal Knowledge Engine',
    label: 'Evidence & Context',
    seam: 'consumer seam · 引用知识',
    description:
      '把本地文档与媒体处理成有 provenance 的 Evidence 和 Publications，供上层按上下文完整性检索与引用。',
    proof: 'Publication · Retrieval · Provenance · MCP',
  },
  {
    title: 'Decision Research Agent',
    label: 'Research & Delivery',
    seam: 'consumer seam · 研究交付',
    description:
      '把开放问题收敛成有证据、可审查的研究交付，保留 Agent Harness、Loop、Tools、evaluation 与交付边界。',
    proof: 'Agent Harness · Loop · Tools · Evaluation',
  },
  {
    title: 'Night Voyager',
    label: 'Decision & Action',
    seam: 'consumer seam · 决策行动',
    description:
      '把多人的偏好、证据、分歧与下一步放入可追踪流程，形成确认后的行动计划；不表示三项目生产级全链路已联通。',
    proof: 'State · Permissions · HITL · Recovery',
  },
]

export const evidenceMetrics: EvidenceMetric[] = [
  {
    label: 'Night Voyager',
    value: 'v0.1.5',
    note: 'stable Release · decision workflow',
  },
  {
    label: 'Decision Research Agent',
    value: 'v0.1.8',
    note: 'stable Release · research delivery',
  },
  {
    label: 'Multimodal Knowledge Engine',
    value: 'v0.1.6',
    note: 'stable Release · local Evidence',
  },
  {
    label: 'Engineering proof',
    value: '3 paths',
    note: 'normal · failure · reproducible',
  },
]

export const projects: Project[] = [
  {
    slug: 'night-voyager',
    title: 'Night Voyager',
    eyebrow: '旗舰项目 · 多人决策工作流',
    description:
      '把复杂建议转成多人确认、可执行计划和可追踪回执的 durable workflow。',
    summaryZh:
      '学生偏好日本，家庭更关心排名、预算和确定性。系统不替用户选择国家，而是把条件、证据、取舍和下一步放进可回看的确认流程。',
    githubUrl: 'https://github.com/iTao-AI/night-voyager',
    releaseUrl: 'https://github.com/iTao-AI/night-voyager/releases/tag/v0.1.5',
    releaseLabel: 'v0.1.5',
    role: '独立开发 / workflow engineering',
    status: 'stable Release',
    stack: [
      'Durable workflow',
      'State authority',
      'Permissions',
      'HITL',
      'Recovery',
      'Decision ledger',
    ],
    proofPoints: [
      {
        label: 'normal path',
        value: '确认 → 计划',
        note: '顾问确认后形成事实与行动节点',
      },
      {
        label: 'failure path',
        value: '安全停止',
        note: '阻塞回到人工判断，不静默推进',
      },
      {
        label: 'reproducible',
        value: '回执 / 时间线',
        note: '家庭决定保留理由、风险和后续节点',
      },
    ],
    normalPath: {
      label: 'normal',
      title: '从偏好到可执行计划',
      description:
        '顾问核对学生与家庭条件，确认后的事实进入 decision ledger，再生成有 owner 和下一步的计划。',
    },
    failurePath: {
      label: 'failure',
      title: '阻塞时停在人工判断',
      description:
        '证据不足、权限不匹配或多人意见冲突时保留原因与风险，停止自动推进并回到人工判断。',
    },
    reproduciblePath: {
      label: 'reproducible',
      title: '决定变成回执与时间线',
      description:
        '每个确认节点都有可回看的状态、参与者、理由和下一步，复核者可以沿相同路径重现上下文。',
    },
    visual: {
      kind: 'image',
      title: '受控演示展示升级',
      alt: 'Night Voyager 家庭协作与事实确认流程截图',
      caption: '来自 public main 的确定性流程展示，保留确认、事实 authority 与行动计划边界。',
      src: assetUrl('images/night-voyager/collaboration-confirmed-fact.webp'),
      sourceCommit: '54b78ebda9fea263de68b5e3f623aef31c5ffe48',
      gallery: [
        assetUrl('images/night-voyager/collaboration-confirmed-fact.webp'),
        assetUrl('images/night-voyager/m5-advisor-ledger.webp'),
        assetUrl('images/night-voyager/m5-family-receipt-timeline.webp'),
      ],
      lines: ['family collaboration', 'confirmed fact', 'action plan'],
    },
    problem:
      '复杂建议的难点不只是给出选项，而是让学生、家庭和顾问对“这条事实是谁确认的、为何取舍、下一步由谁负责”保持同一份上下文。',
    architecture:
      '状态、权限、durable workflow、HITL 和 recovery 共同围绕 decision ledger 工作。消息经顾问确认才成为事实；分歧保留理由与风险；家庭决定形成回执和时间线。',
    built: [
      '把学生偏好、家庭约束、排名、预算和确定性组织为可复核的 decision context',
      '将顾问确认、多人分歧、权限边界和下一步 owner 保留在 durable state 中',
      '在阻塞、权限不足和未确认事实时安全停止，并把控制权交回人工',
    ],
    evidence: [
      '公开 Release v0.1.5 绑定稳定项目事实与可复验工程边界',
      'public main commit 54b78eb... 提供 collaboration、advisor ledger、family receipt 的展示来源',
      '项目展示使用本地确定性 WebP，不把截图当作真实用户结果或录取证明',
    ],
    boundary:
      '当前展示聚焦 durable workflow、多人确认和人工治理边界；不声称自动替用户选国家、不声称真实用户结果，也不暗示 NV、DRA、MKE 已组成生产级全链路产品。',
    tags: ['Durable workflow', 'HITL', 'Permissions', 'Recovery'],
  },
  {
    slug: 'decision-research-agent',
    title: 'Decision Research Agent',
    eyebrow: '研究交付 · Agent Harness',
    description:
      '把开放问题转成有证据、可审查、可交付的研究工作流。',
    summaryZh:
      '工程重点是让研究运行、证据、工具调用、evaluation 和交付状态各自可回看，而不是只生成一次性答案。',
    githubUrl: 'https://github.com/iTao-AI/decision-research-agent',
    releaseUrl:
      'https://github.com/iTao-AI/decision-research-agent/releases/tag/v0.1.8',
    releaseLabel: 'v0.1.8',
    role: '独立开发 / research workflow engineering',
    status: 'stable Release',
    stack: [
      'Agent Harness',
      'Agent Loop',
      'Tool Use',
      'Evidence',
      'Evaluation',
      'Delivery',
    ],
    proofPoints: [
      {
        label: 'normal path',
        value: '问题 → 交付',
        note: '研究过程和证据一并进入可审查结果',
      },
      {
        label: 'failure path',
        value: '缺证据即停',
        note: '不把不确定结论包装成事实',
      },
      {
        label: 'reproducible',
        value: 'Run / Evidence',
        note: '运行、来源和交付状态可复核',
      },
    ],
    normalPath: {
      label: 'normal',
      title: '研究循环收敛到交付',
      description:
        'Agent Loop 通过 tools 获取信息，将证据与运行状态绑定，再形成面向交付的研究结果。',
    },
    failurePath: {
      label: 'failure',
      title: '证据不足时保留不确定性',
      description:
        '工具失败、证据缺口或验证未完成时停止升级结论，保留缺口供后续审查。',
    },
    reproduciblePath: {
      label: 'reproducible',
      title: '运行和证据能再次核对',
      description:
        '研究交付关联运行记录、证据引用和 evaluation 结果，复核者可以按记录重建判断。',
    },
    visual: {
      kind: 'system',
      title: 'Research & Delivery trace',
      alt: 'Decision Research Agent 研究与交付流程示意',
      caption: '以 Agent Harness、Loop、Tools、Evidence、evaluation 和 delivery 组成清晰职责链。',
      gallery: [],
      lines: ['question', 'agent loop → tools', 'evidence → evaluation', 'review → delivery'],
    },
    problem:
      '开放问题通常跨越检索、工具、判断和交付；如果运行状态和证据被一次性文本覆盖，审查者很难知道结论如何形成。',
    architecture:
      'Agent Harness 负责运行边界，Agent Loop 负责迭代，Tools 负责外部动作，Evidence 负责可引用来源，evaluation 负责检验，delivery 负责把结果交给下一步工作流。',
    built: [
      '将 Agent Harness、Loop、Tools、Evidence、evaluation 和 delivery 拆成可审查职责',
      '把研究运行与证据引用绑定到可回看的交付结果',
      '保留缺证据、工具失败和验证未完成的 failure path，不自动升级结论',
    ],
    evidence: [
      '公开 Release v0.1.8 作为稳定事实来源',
      '公开仓库 README、architecture 和 release 文档提供 Agent Harness、Tools、Evidence 与 delivery 边界',
      '站点只描述公开 Release 绑定的能力，不把 post-release maintenance 当作产品能力',
    ],
    boundary:
      '当前展示聚焦研究工作流和可审查交付；不声称固定样本代表市场准确率、不声称生产部署，也不把依赖维护写成产品能力。',
    tags: ['Agent Harness', 'Agent Loop', 'Evidence', 'Evaluation'],
  },
  {
    slug: 'multimodal-knowledge-engine',
    title: 'Multimodal Knowledge Engine',
    eyebrow: '知识入口 · Evidence & Context',
    description:
      '把本地文档与媒体处理成 Agent 可引用、可追溯的 Evidence。',
    summaryZh:
      '先保证成功发布的内容可被稳定检索、引用和询问；失败、部分或过期结果不进入 active surface。',
    githubUrl: 'https://github.com/iTao-AI/multimodal-knowledge-engine',
    releaseUrl:
      'https://github.com/iTao-AI/multimodal-knowledge-engine/releases/tag/v0.1.6',
    releaseLabel: 'v0.1.6',
    role: '独立开发 / evidence pipeline engineering',
    status: 'stable Release',
    stack: [
      'Multimodal intake',
      'Publication',
      'Retrieval',
      'Provenance',
      'MCP',
      'Context completeness',
    ],
    proofPoints: [
      {
        label: 'normal path',
        value: 'Source → Publication',
        note: '成功发布后进入可引用知识面',
      },
      {
        label: 'failure path',
        value: '不进入 active',
        note: '失败或部分处理结果保持隔离',
      },
      {
        label: 'reproducible',
        value: 'Evidence locator',
        note: '来源、位置和上下文完整性可追溯',
      },
    ],
    normalPath: {
      label: 'normal',
      title: '从 intake 到可引用 Publication',
      description:
        '本地文档与媒体经过 intake、处理和校验，只有成功发布的 Evidence 进入检索与引用面。',
    },
    failurePath: {
      label: 'failure',
      title: '失败结果不会污染 active surface',
      description:
        '处理失败、部分结果或来源不完整时不切换 active Publication，调用方收到边界清晰的缺口。',
    },
    reproduciblePath: {
      label: 'reproducible',
      title: '引用带着 provenance 和 context',
      description:
        'Search、Ask 和 MCP 返回可定位 Evidence，并保留来源、位置和 context completeness。',
    },
    visual: {
      kind: 'system',
      title: 'Evidence & Context trace',
      alt: 'Multimodal Knowledge Engine 证据发布与检索流程示意',
      caption: '以 intake、Publication、retrieval、provenance 和 context completeness 收敛本地知识入口。',
      gallery: [],
      lines: ['multimodal intake', 'validated Publication', 'retrieval + provenance', 'context completeness'],
    },
    problem:
      'Agent 可调用的知识入口不能把失败、过期或来源不明的中间结果当作事实；检索必须知道内容是否成功发布以及引用位置。',
    architecture:
      'multimodal intake 产生可观察处理过程，Publication 控制 active surface，retrieval 读取已发布 Evidence，provenance 保留来源，MCP 提供受控 consumer seam，context completeness 让缺口可见。',
    built: [
      '定义 intake、Publication、retrieval、provenance 和 MCP 的职责边界',
      '让失败、部分和过期结果停留在 active surface 之外',
      '让 Agent 通过引用位置与 context completeness 判断知识是否足够',
    ],
    evidence: [
      '公开 Release v0.1.6 作为稳定事实来源',
      '公开 README 与架构文档记录本地 Evidence、Publication、retrieval、provenance 和 MCP 边界',
      '当前展示不声称 production OCR、任意媒体、向量检索或托管平台',
    ],
    boundary:
      '当前公开边界是本地 Evidence pipeline 与受控 consumer seam；不声称 production OCR、任意媒体支持、向量检索、混合检索、托管平台或完整三项目联通。',
    tags: ['Multimodal intake', 'Publication', 'Retrieval', 'MCP'],
  },
]
