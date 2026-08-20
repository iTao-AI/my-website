export const siteContent = {
  navigation: [
    { label: '项目', href: '#projects' },
    { label: '工作方式', href: '#approach' },
    { label: '关于', href: '#about' },
  ],
  hero: {
    name: '杨涛',
    role: 'AI Agent 工程师 · 上海',
    title: '把 AI Agent 做成能推进工作的系统。',
    description:
      '围绕研究交付、长期决策和多模态资料处理，我独立完成了三个项目：让模型获得合适的上下文和工具，也让过程、证据与人工判断有清楚的边界。',
    primaryAction: '查看旗舰项目',
    secondaryAction: 'GitHub',
    proof: [
      {
        label: '旗舰项目',
        value: 'Decision Research Agent',
        detail: '研究任务、Evidence 与人工复核',
      },
      {
        label: '三个公开项目',
        value: '源码与稳定 Release',
        detail: '正常流程和失败边界均可继续核验',
      },
    ],
  },
  capability: {
    eyebrow: '三类问题，一套工程判断',
    title: '从信息进入，到任务推进，再到人工确认。',
    description:
      '三个项目分别处理知识入口、研究交付和长期决策。它们不是已经联通上线的平台，而是我围绕 Agent 工程中三个关键问题完成的独立实践。',
    layers: [
      {
        index: '01',
        title: '让资料成为证据',
        project: 'Multimodal Knowledge Engine',
        description: '先保留来源与位置，再让成功发布的内容进入检索。',
      },
      {
        index: '02',
        title: '让任务持续推进',
        project: 'Decision Research Agent',
        description: '围绕目标组织上下文、工具与研究步骤，并留下可复核的判断过程。',
      },
      {
        index: '03',
        title: '让关键判断回到人',
        project: 'Night Voyager',
        description: '把确认后的事实、路线比较和下一步放进可长期跟进的业务流程。',
      },
    ],
  },
  aiNative: {
    eyebrow: 'AI-native Engineering',
    title: 'AI 提高实现速度，判断和结果由我负责。',
    description:
      '我长期使用 Codex、Claude Code 参与方案探索、代码实现和验证；问题定义、架构取舍、边界设计、代码审查、故障定位和最终验收由我负责。',
    principles: [
      {
        index: '01',
        title: '先把问题说清楚',
        description: '明确目标、事实来源、不能越过的边界，以及什么结果才算完成。',
      },
      {
        index: '02',
        title: '让实现可以被检查',
        description: '用测试、浏览器验证和代码审查核对行为，不把生成速度当作完成质量。',
      },
      {
        index: '03',
        title: '对最终结果负责',
        description: '发现问题就定位根因、修复并重新验证，最终结论由我判断。',
      },
    ],
  },
  about: {
    eyebrow: 'About',
    title: '先理解工作，再决定 AI 能做什么。',
    paragraphs: [
      '我本科自动化，之后做过留学咨询、销售和经营管理。这些经历让我习惯先理解一项具体工作怎样运转，再判断 AI 能在哪里真正发挥作用。',
      '转向 AI Agent 开发后，我把这种方式延续到三个项目中：先定义流程和边界，再决定模型、工具与工程实现。',
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: '如果你正在寻找能把 Agent 落到具体工作中的工程师，欢迎联系我。',
    description: '可以从旗舰项目、公开源码和稳定 Release 开始了解我的工作。',
    email: 'tao.i@outlook.com',
    github: 'https://github.com/iTao-AI',
  },
} as const
