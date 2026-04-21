## Phase 1: 项目基础配置

- [x] 1.1 配置 vite.config.ts 的 base path 为 `/my-website/`
- [x] 1.2 更新 index.html 的 meta 标签（标题、描述、favicon）
- [x] 1.3 配置 Tailwind CSS v4 的 darkMode 支持（确认是否需要额外配置）
- [x] 1.4 清理 App.tsx 中的默认模板代码（计数器、默认文案）

## Phase 2: CSS 渐变背景 + 主题切换基础

- [x] 2.1 在 index.css 中定义暗色/亮色模式的 CSS 渐变变量
- [x] 2.2 创建主题切换工具函数（src/utils/theme.ts）：读取/设置 localStorage、检测 prefers-color-scheme、切换 data-theme 属性
- [x] 2.3 在 main.tsx 中初始化主题（在 React 渲染前设置 data-theme，避免闪烁）
- [x] 2.4 在 Hero 右上角实现主题切换按钮（太阳/月亮图标切换）

## Phase 3: Hero 内容布局

- [x] 3.1 创建 Hero 组件（src/components/Hero.tsx）：全屏容器、居中布局
- [x] 3.2 实现昵称 "Tao" 标题（响应式字号）
- [x] 3.3 实现定位文案副标题
- [x] 3.4 实现 "我的项目" CTA 按钮样式
- [x] 3.5 实现响应式适配（移动端 < 480px 样式调整）

## Phase 4: Canvas 粒子背景

- [x] 4.1 创建粒子工具文件（src/utils/particles.ts）：粒子类定义、初始化逻辑、渲染循环
- [x] 4.2 创建 ParticleCanvas 组件（src/components/ParticleCanvas.tsx）：Canvas DOM 元素、useEffect 初始化、useEffect 清理
- [x] 4.3 实现移动端粒子降级（检测视口宽度，调整粒子数量）
- [x] 4.4 将 ParticleCanvas 集成到 Hero 组件中（渐变底 + Canvas 叠加层）
- [x] 4.5 验证 Canvas pointer-events: none 不拦截按钮点击

## Phase 5: 集成与验证

- [x] 5.1 将 Hero 组件作为 App.tsx 的唯一内容
- [x] 5.2 验证暗色/亮色切换在 Hero 区域正常工作
- [x] 5.3 验证主题持久化（刷新页面后保持选择）
- [x] 5.4 验证移动端响应式布局
- [x] 5.5 运行 `npm run build` 确认构建无错误无警告
