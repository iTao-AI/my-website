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
  publicSource: {
    commit: string
    guidePath: string
    summary: string
  }
  captureCommit: string
  boundary: string
  accent: 'blue' | 'green' | 'rust'
}

const assetUrl = (path: string) => `${import.meta.env.BASE_URL}${path}`

export const publicFactsCheckedOn = '2026-11-08'

export const projects: Project[] = [
  {
    slug: 'decision-research-agent',
    title: 'Decision Research Agent',
    eyebrow: '旗舰工程项目 · 研究与交付',
    headline: '把研究问题，整理成能回查来源的方案比较与报告。',
    summary:
      '面向多轮、多来源研究，组织资料收集、方案比较与报告交付。以客服试点选型为例，既能看到推荐方案，也能打开关键结论对应的支持资料与完整报告。',
    role: '独立设计并实现研究编排、工具接入、来源引用、后端接口与报告阅读界面。',
    actions: ['比较方案', '回查来源', '查看待确认项'],
    problem:
      '做方案比较时，读者既要知道推荐什么，也要知道依据是什么、还有哪些条件未确认。只保留最后一段回答，难以逐项核对或继续研究。',
    approach:
      '先围绕研究目标确定比较维度，再调用工具收集资料，把来源片段与候选结论关联。报告阅读、来源核对与研究状态通过同一任务串起。',
    humanBoundary:
      '模型提出研究方向和工具请求，应用服务负责执行与记录。需要复核时，由人工决定是否允许交付。引用绑定用于回查原文片段，证据是否经人工核实另行记录。',
    normalPath:
      '从问题形成研究计划，经工具收集资料并整理结论；读者从报告打开对应来源，按当前审核模式确认可交付结果。',
    failurePath:
      '资料访问未确认或依据不足时，显示缺口并保留研究状态和已有资料，等待进一步核对。',
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
        body: '应用服务根据 Evidence、引用和对应审核条件决定能否交付，控制台只读取这些状态；条件未满足时保留问题并等待处理。',
      },
    ],
    stack: ['Python', 'FastAPI', 'LangChain', 'DeepAgents', 'LangGraph', 'React', 'SQL', 'Docker'],
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
        alt: 'DRA合成客服选型案例，展示知识助手与自动退款的方案比较、研究结论及支持资料',
        caption: '内置合成案例：先看客服试点推荐，再比较两种方案并阅读完整报告。',
        state: 'overview',
      },
      {
        src: assetUrl('images/decision-research-agent/research-evidence-review.png'),
        alt: 'DRA结论与支持资料并排的来源阅读界面',
        caption: '来源阅读：从一条研究结论打开对应资料，核对摘要与全文。',
        state: 'normal',
      },
      {
        src: assetUrl('images/decision-research-agent/research-blocked-recovery.png'),
        alt: 'DRA合成案例显示资料权限未确认，本次报告暂不交付',
        caption: '待确认事项：政策资料权限未确认，保留已有资料并说明下一步。',
        state: 'blocked',
      },
    ],
    githubUrl: 'https://github.com/iTao-AI/decision-research-agent',
    releaseUrl:
      'https://github.com/iTao-AI/decision-research-agent/releases/tag/v0.1.9',
    releaseLabel: 'v0.1.9',
    publicSource: {
      commit: 'f40cde0be00bf55cf32c4eadbd2e62123f9e4035',
      guidePath: 'README_CN.md',
      summary:
        '当前源码提供客服试点选型的静态演示：比较方案、打开已关联资料并阅读完整报告。真实研究通过CLI或API发起；展示图片不证明该合成结论由实时模型生成。',
    },
    captureCommit: 'f40cde0be00bf55cf32c4eadbd2e62123f9e4035',
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
      '围绕预算变化等咨询场景，保存顾问已确认的客户条件，比较留学路线并修订方案。顾问复核后，由学生或家长确认选择，形成决策回执与行动时间线。',
    role: '独立完成长期咨询流程、状态权限、记忆边界和顾问审核工作台的产品与工程实现。',
    actions: ['确认事实', '比较路线', '形成行动计划'],
    problem:
      '留学规划会持续数月甚至更久，条件会变化，参与者也不止一个。一次聊天很难分清哪些只是讨论、哪些已经确认、下一步由谁负责。',
    approach:
      '同一客户案例保留事实与方案版本。预算变化后，显式启动新一轮规划，再经过顾问审核和客户确认，把新的选择交给后续执行流程。',
    humanBoundary:
      'Agent 可以整理材料、发现矛盾并提出方案，但不会替顾问决定路线，也不会在客户确认前推进关键行动。',
    normalPath:
      '顾问核对客户条件后形成事实版本，系统据此比较路线；审核通过的判断进入客户确认，生成回执和行动时间线，再把同一客户案例交给执行流程。',
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
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Next.js', 'React', 'SSE', 'Docker'],
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
    releaseUrl: 'https://github.com/iTao-AI/night-voyager/releases/tag/v0.1.6',
    releaseLabel: 'v0.1.6',
    publicSource: {
      commit: 'd11d31808e5a5c7d16d55350d6e6e4cd98c89422',
      guidePath: 'docs/operations/customer-revision-recovery.md',
      summary:
        '在合成场景中调整同一客户案例的已确认预算，重新规划并取得新的顾问审核与家长同意；执行受阻后，可读取和复制已保存的重新评估交接摘要，原执行保持停止。',
    },
    captureCommit: 'd11d31808e5a5c7d16d55350d6e6e4cd98c89422',
    boundary:
      '页面展示使用本地确定性咨询场景，不代表真实客户、院校建议、录取结果或正式商业服务。',
    accent: 'green',
  },
  {
    slug: 'multimodal-knowledge-engine',
    title: 'Multimodal Knowledge Engine',
    eyebrow: '多模态资料工具 · 检索、读取与引用',
    headline: '让Agent找到资料、读取完整文本，并核对引用。',
    summary:
      '把本地PDF、音频和受控短视频整理成可检索、可精确读取的资料，保留页码、时间戳与来源版本。通过CLI／MCP供Agent调用，也能导出离线查看器供人阅读和复制引用。',
    role: '独立设计并实现多模态资料处理、版本发布、检索与精确读取、MCP接口和离线资料查看器。',
    actions: ['阅读与引用', '查看检索', '查看恢复'],
    problem:
      '找到一小段资料后，调用方往往还要读完整文本、确认页码和版本。预览被截断或资料重新处理时，也需要明确哪些内容仍然可用。',
    approach:
      '解析资料并保留来源位置，校验后发布可用版本；调用方先选资料，再检索与精确读取。已验证的导出快照可以生成独立HTML查看器。',
    humanBoundary:
      '调用方能够看到来源、位置和当前缺口；处理失败或信息不足时，系统返回明确边界，不用一段补写内容掩盖缺失。',
    normalPath:
      '导入并发布资料后，先发现和选择来源，再检索、精确读取与核对引用。离线查看器阅读导出快照中的文本，不重新打开原始PDF或媒体文件。',
    failurePath:
      '处理失败不替换当前有效版本；Ask 无匹配时返回证据不足，检索截断标明不完整，过期 Evidence 则提示重新搜索当前有效内容。',
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
    stack: ['Python', 'SQLite', 'PyMuPDF', 'faster-whisper', 'CLI', 'stdio MCP'],
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
        src: assetUrl('images/multimodal-knowledge-engine/compiled-library-viewer.png'),
        alt: 'MKE离线资料查看器，显示资料列表、已提取文本、页码与可复制引用',
        caption: '仓库测试资料生成的离线查看器：选资料、读完整存储文本、复制带来源的引用。',
        state: 'overview',
      },
      {
        src: assetUrl('images/multimodal-knowledge-engine/evidence-publication-search.png'),
        alt: 'Multimodal Knowledge Engine Publication 检索结果，显示来源与定位信息',
        caption: '检索与发布的独立技术演示帧：只有成功发布的内容进入结果，并保留来源与位置。',
        state: 'normal',
      },
      {
        src: assetUrl('images/multimodal-knowledge-engine/evidence-insufficient-recovery.png'),
        alt: 'Multimodal Knowledge Engine 资料不足时的恢复界面',
        caption: '失败隔离的独立技术演示帧：不完整结果不会替换当前有效内容。',
        state: 'blocked',
      },
    ],
    githubUrl: 'https://github.com/iTao-AI/multimodal-knowledge-engine',
    releaseUrl:
      'https://github.com/iTao-AI/multimodal-knowledge-engine/releases/tag/v0.1.7',
    releaseLabel: 'v0.1.7',
    publicSource: {
      commit: 'a7112a41727f27d6908191c63d5e1fe6f86f0510',
      guidePath: 'docs/how-to/view-compiled-library.md',
      summary:
        '先选择一份资料，再在该来源内查找 Evidence、读取完整文本并核对引用；无匹配时不借用其他来源补齐结果。已验证的导出快照还可生成单文件 HTML 阅读器。',
    },
    captureCommit: 'a7112a41727f27d6908191c63d5e1fe6f86f0510',
    boundary:
      '首图为用仓库测试资料生成的离线查看器；另两图为独立的检索／恢复演示帧，不能视为同一界面的连续操作。查看器只阅读已导出文本，不回读原始PDF或媒体，也不代表托管服务或真实客户部署。',
    accent: 'rust',
  },
]

export const flagshipProject = projects[0]
export const complementaryProjects = projects.slice(1)
