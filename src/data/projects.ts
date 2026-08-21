export type ProjectVisualState = 'overview' | 'normal' | 'blocked'

export interface ProjectVisual {
  src: string
  alt: string
  caption: string
  state: ProjectVisualState
}

export interface ProjectDecision {
  title: string
  body: string
}

export interface Project {
  slug: string
  title: string
  eyebrow: string
  headline: string
  summary: string
  role: string
  actions: readonly string[]
  problem: string
  approach: string
  humanBoundary: string
  normalPath: string
  failurePath: string
  personalWork: readonly string[]
  decisions: readonly ProjectDecision[]
  stack: readonly string[]
  keywords: readonly string[]
  visuals: readonly ProjectVisual[]
  githubUrl: string
  releaseUrl: string
  releaseLabel: string
  captureCommit: string
  boundary: string
  accent: 'blue' | 'green' | 'rust'
}

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const projects: Project[] = [
  {
    slug: 'decision-research-agent',
    title: 'Decision Research Agent',
    eyebrow: '旗舰工程项目 · 研究与交付',
    headline: '让复杂研究不只给出答案，也留下证据和判断过程。',
    summary:
      '系统把开放问题拆成可执行的研究步骤，通过工具收集资料，再把结论、引用和运行状态交给人工复核。证据不足或流程异常时，结果不会被继续当成可交付答案。',
    role: '独立完成研究编排、Evidence 模型、人工复核和交付边界的设计与实现。',
    actions: ['拆解任务', '核对 Evidence', '审核后交付'],
    problem:
      '开放式研究往往跨越检索、工具调用、判断和交付。只保留最终回答，很难解释结论从哪里来，也无法在证据不足时可靠地停下来。',
    approach:
      '我把一次研究拆成有状态的循环：围绕目标组织 Context，按需调用 Tools，把来源编译为 Evidence，再通过 Evaluation 与人工审核决定能否交付。',
    humanBoundary:
      '模型可以提出研究方向和工具请求，但工具执行、证据是否足够、结果是否进入交付，都由 Harness 中的规则和人工复核共同控制。',
    normalPath:
      '问题被拆成研究步骤，工具返回的材料进入 Evidence；完成引用核对和交付前审核后，研究结果才进入已交付状态。',
    failurePath:
      '工具失败、来源缺失或审核未完成时，系统保留缺口与当前状态，并把结果停在待复核位置，不把完整语气误当成可靠结论。',
    personalWork: [
      '设计研究任务、Evidence、审核与交付之间的状态关系',
      '实现工具调用、来源引用、失败恢复和人工复核流程',
      '建立正常路径、证据审查和受阻恢复的确定性展示与验证',
    ],
    decisions: [
      {
        title: 'Context 只保留当前判断真正需要的信息',
        body: '研究目标、已有证据、待验证问题和工具结果按阶段进入上下文，避免把全部历史直接堆给模型。',
      },
      {
        title: '工具请求与真实执行分开',
        body: '模型负责提出调用意图，应用层负责校验参数、执行工具并把结果带回循环，权限不交给模型自行解释。',
      },
      {
        title: '交付是独立状态，不等于回答已经生成',
        body: '只有 Evidence、引用和审核条件都满足时才允许交付；否则保留问题并等待人工处理。',
      },
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'React', 'SQL', 'Docker'],
    keywords: [
      'Agent Harness',
      'Agent Loop',
      'Tool Use',
      'Context Engineering',
      'Evidence',
      'Evaluation',
      'HITL',
    ],
    visuals: [
      {
        src: assetUrl('images/decision-research-agent/research-workspace-overview.png'),
        alt: 'Decision Research Agent 研究工作台总览，显示任务状态、研究进度和交付区域',
        caption: '研究工作台：任务、Evidence 与交付状态位于同一条可复核流程中。',
        state: 'overview',
      },
      {
        src: assetUrl('images/decision-research-agent/research-evidence-review.png'),
        alt: 'Decision Research Agent Evidence 审查界面，显示来源引用与人工复核',
        caption: 'Evidence 审查：结论与来源一起进入交付前复核。',
        state: 'normal',
      },
      {
        src: assetUrl('images/decision-research-agent/research-blocked-recovery.png'),
        alt: 'Decision Research Agent 受阻恢复界面，显示证据不足时停止交付',
        caption: '受阻恢复：证据不够时保留缺口并停止交付。',
        state: 'blocked',
      },
    ],
    githubUrl: 'https://github.com/iTao-AI/decision-research-agent',
    releaseUrl:
      'https://github.com/iTao-AI/decision-research-agent/releases/tag/v0.1.8',
    releaseLabel: 'v0.1.8',
    captureCommit: '868dc2fc621f02e40cb341547dc65c5311a78f54',
    boundary:
      '页面展示来自公开仓库内的确定性演示，不代表线上服务、真实客户研究或市场准确率。',
    accent: 'blue',
  },
  {
    slug: 'night-voyager',
    title: 'Night Voyager',
    eyebrow: '业务协作项目 · 长期留学决策',
    headline: '把一次咨询，变成可以持续跟进的留学决策流程。',
    summary:
      '学生、家长和顾问关心的条件并不总是一致。Night Voyager 把已确认的信息、路线比较、风险和下一步放进同一条流程，让 Agent 负责整理与推进，关键判断仍由顾问和客户确认。',
    role: '独立完成长期咨询流程、状态权限、记忆边界和顾问审核工作台的产品与工程实现。',
    actions: ['确认事实', '比较路线', '形成行动计划'],
    problem:
      '留学规划会持续数月甚至更久，条件会变化，参与者也不止一个。一次聊天很难分清哪些只是讨论、哪些已经确认、下一步由谁负责。',
    approach:
      '系统把对话中的有效信息整理为可更新的客户事实，再围绕预算、方向和风险比较路线。顾问审核后，确认结果转成后续任务和时间线。',
    humanBoundary:
      'Agent 可以整理材料、发现矛盾并提出方案，但不会替顾问决定路线，也不会在客户确认前推进关键行动。',
    normalPath:
      '顾问核对客户条件后形成事实版本，系统据此比较路线；审核通过的判断进入客户确认，随后生成行动时间线。',
    failurePath:
      '预算变化、事实冲突或必要依据不足时，原方案停止推进，页面保留受阻原因并回到重新评估。',
    personalWork: [
      '把咨询、事实确认、路线研判和行动跟进拆成可持续的业务状态',
      '设计学生、家长、顾问与 Agent 之间的权限和确认关系',
      '实现长期记忆候选、人工审核、决策回执和受阻恢复界面',
    ],
    decisions: [
      {
        title: '长期记忆保存事实，不保存全部对话',
        body: '只有经过确认、后续仍有用的信息才进入客户档案；偏好变化时保留版本和来源。',
      },
      {
        title: '顾问对关键判断负责',
        body: 'Agent 提供信息整理与路线比较，顾问确认事实、风险和建议，客户再决定是否进入执行。',
      },
      {
        title: '计划变化必须能安全回退',
        body: '预算或条件变化时，系统停止原计划并重新评估，不在旧前提上继续生成看似完整的下一步。',
      },
    ],
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'SSE', 'Docker'],
    keywords: [
      'State Management',
      'Long-term Memory',
      'Permissions',
      'HITL',
      'Durable Workflow',
      'Recovery',
    ],
    visuals: [
      {
        src: assetUrl('images/night-voyager/advisor-workspace-overview.png'),
        alt: 'Night Voyager 顾问工作台总览，显示客户事实、路线比较和人工判断区域',
        caption: '顾问工作台：从已确认的客户条件进入路线比较与人工判断。',
        state: 'overview',
      },
      {
        src: assetUrl('images/night-voyager/advisor-normal-path.png'),
        alt: 'Night Voyager 正常决策流程，显示决策回执和行动时间线',
        caption: '确认后的结果：路线判断转成决策回执和行动时间线。',
        state: 'normal',
      },
      {
        src: assetUrl('images/night-voyager/advisor-blocked-recovery.png'),
        alt: 'Night Voyager 预算变化后的受阻恢复界面',
        caption: '条件变化时：原计划停止，保留原因并重新评估。',
        state: 'blocked',
      },
    ],
    githubUrl: 'https://github.com/iTao-AI/night-voyager',
    releaseUrl: 'https://github.com/iTao-AI/night-voyager/releases/tag/v0.1.5',
    releaseLabel: 'v0.1.5',
    captureCommit: 'e4a13ebe2c3e49b222bbfca593eb75db309b6451',
    boundary:
      '页面展示使用本地确定性咨询场景，不代表真实客户、院校建议、录取结果或正式商业服务。',
    accent: 'green',
  },
  {
    slug: 'multimodal-knowledge-engine',
    title: 'Multimodal Knowledge Engine',
    eyebrow: '多模态 Evidence · 本地知识入口',
    headline: '让本地资料先变成可引用的证据，再交给 Agent 使用。',
    summary:
      'MKE 处理 PDF、音频和受控短视频，把内容连同页码、时间戳和来源信息编译为可检索的 Evidence。只有成功发布的内容进入检索和调用范围，失败或不完整的结果会被隔离。',
    role: '独立完成多模态资料处理、Publication、检索引用和 MCP 调用边界的设计与实现。',
    actions: ['处理资料', '保留来源', '受控检索'],
    problem:
      'Agent 能找到一段文字并不等于这段内容可以被相信。PDF 页码、音频时间戳、来源版本和处理状态一旦丢失，检索结果就很难被复核。',
    approach:
      '资料进入系统后先完成解析与定位，再编译为带来源信息的 Evidence。只有通过校验并成功发布的版本，才会出现在 Search、Ask、Export 和 MCP 的调用结果中。',
    humanBoundary:
      '调用方能够看到来源、位置和当前缺口；处理失败或信息不足时，系统返回明确边界，不用一段补写内容掩盖缺失。',
    normalPath:
      'PDF 或受控媒体完成处理后生成带页码或时间戳的 Evidence；成功发布的版本进入搜索，并可通过 MCP 提供给外部 Agent。',
    failurePath:
      '解析失败、来源不完整或结果超过可交付边界时，当前有效版本保持不变，失败结果留在隔离状态等待处理。',
    personalWork: [
      '设计 intake、Evidence、Publication 与 active search 之间的状态边界',
      '实现 PDF 与受控媒体处理、来源定位、检索、导出和 MCP 接口',
      '建立失败隔离、版本切换和外部 Agent 调用的确定性验证',
    ],
    decisions: [
      {
        title: 'Evidence 必须带着来源和位置',
        body: '正文、页码或时间戳、来源版本一起进入结果，外部 Agent 才能继续引用和核对。',
      },
      {
        title: '发布决定什么可以被检索',
        body: '处理完成不等于立即可用；只有成功 Publication 才能替换 active 版本。',
      },
      {
        title: '缺口应当被暴露，而不是被补写',
        body: '资料不足、解析失败或上下文不完整时返回明确状态，让调用方决定补充资料或停止回答。',
      },
    ],
    stack: ['Python', 'FastAPI', 'SQLite', 'MCP', 'FFmpeg', 'Docker'],
    keywords: [
      'Multimodal RAG',
      'Evidence Provenance',
      'Publication',
      'Retrieval',
      'Context Completeness',
      'MCP',
    ],
    visuals: [
      {
        src: assetUrl('images/multimodal-knowledge-engine/evidence-workspace-overview.png'),
        alt: 'Multimodal Knowledge Engine Evidence 工作区总览',
        caption: 'Evidence 工作区：资料处理、发布状态与来源信息在同一入口可见。',
        state: 'overview',
      },
      {
        src: assetUrl('images/multimodal-knowledge-engine/evidence-publication-search.png'),
        alt: 'Multimodal Knowledge Engine Publication 检索结果，显示来源与定位信息',
        caption: '受控检索：只有成功发布的内容进入结果，并保留来源与位置。',
        state: 'normal',
      },
      {
        src: assetUrl('images/multimodal-knowledge-engine/evidence-insufficient-recovery.png'),
        alt: 'Multimodal Knowledge Engine 资料不足时的恢复界面',
        caption: '失败隔离：不完整结果不会替换当前有效内容。',
        state: 'blocked',
      },
    ],
    githubUrl: 'https://github.com/iTao-AI/multimodal-knowledge-engine',
    releaseUrl:
      'https://github.com/iTao-AI/multimodal-knowledge-engine/releases/tag/v0.1.6',
    releaseLabel: 'v0.1.6',
    captureCommit: '3a24370df064add49286b3474f20a5f86c32cae9',
    boundary:
      '页面展示来自公开仓库内的确定性资料场景，不代表托管服务、任意媒体支持或生产数据处理。',
    accent: 'rust',
  },
]

export const flagshipProject = projects[0]
export const complementaryProjects = projects.slice(1)
