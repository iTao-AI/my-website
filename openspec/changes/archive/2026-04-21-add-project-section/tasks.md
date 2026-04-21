## 1. 项目数据

- [x] 1.1 创建 `src/data/projects.ts`，定义 Project 类型和至少 4 个项目数据（title, description, image, githubUrl）
- [x] 1.2 准备 4 张项目截图图片，放置在 `public/images/projects/` 目录

## 2. ProjectCard 组件

- [x] 2.1 创建 `src/components/ProjectCard.tsx`，实现卡片基础结构（截图区域 + 文字区域 + GitHub 链接）
- [x] 2.2 为截图添加 `aspect-video` + `object-cover` + `loading="lazy"`
- [x] 2.3 为卡片添加悬浮特效：`hover:scale-[1.02]` + `hover:shadow-xl` + `transition-all duration-300`
- [x] 2.4 实现亮/暗模式下的卡片样式适配（背景色、文字颜色、边框）
- [x] 2.5 GitHub 链接使用 `target="_blank" rel="noopener noreferrer"` 新标签页打开

## 3. ProjectSection 组件

- [x] 3.1 创建 `src/components/ProjectSection.tsx`，实现响应式网格布局（`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`）
- [x] 3.2 添加 section 标题"项目"和副标题
- [x] 3.3 实现亮/暗模式下 section 背景色（`bg-zinc-50 dark:bg-zinc-950`）
- [x] 3.4 设置 section `id="projects"` 作为导航锚点目标

## 4. App 集成

- [x] 4.1 在 `App.tsx` 中用 `<ProjectSection />` 替换 Projects 占位 section
- [x] 4.2 验证 Hero CTA 按钮 `#projects` 锚点正确滚动到 ProjectSection
- [x] 4.3 确认 Contact section 仍保留在 Projects 之后

## 5. 验证与打磨

- [x] 5.1 在浏览器中验证 4 张卡片均正确渲染
- [x] 5.2 验证悬浮特效（放大 + 阴影）在桌面端正常触发
- [x] 5.3 验证亮色/暗色模式下卡片可读性
- [x] 5.4 验证移动端单列布局
- [x] 5.5 验证 GitHub 链接在新标签页打开
