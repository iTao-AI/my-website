export interface Project {
  title: string
  description: string
  image: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    title: 'AI Chat App',
    description: '基于大语言模型的智能对话应用，支持多轮对话与上下文记忆',
    image: '/my-website/images/projects/project-1.svg',
    githubUrl: 'https://github.com/yourusername/ai-chat-app',
  },
  {
    title: 'Task Manager',
    description: '轻量级任务管理工具，支持看板视图与团队协作',
    image: '/my-website/images/projects/project-2.svg',
    githubUrl: 'https://github.com/yourusername/task-manager',
  },
  {
    title: 'Blog Engine',
    description: 'Markdown 驱动的博客引擎，支持主题切换与 RSS 订阅',
    image: '/my-website/images/projects/project-3.svg',
    githubUrl: 'https://github.com/yourusername/blog-engine',
  },
  {
    title: 'Data Dashboard',
    description: '实时数据可视化仪表盘，支持自定义图表与数据源接入',
    image: '/my-website/images/projects/project-4.svg',
    githubUrl: 'https://github.com/yourusername/data-dashboard',
  },
]
