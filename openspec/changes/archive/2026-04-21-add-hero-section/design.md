## Context

当前 `src/App.tsx` 是 Vite 默认模板（计数器 + 欢迎文案），需要完全重写为 Hero 区域。项目使用 React 19 + Vite 7 + TypeScript + Tailwind CSS v4，部署到 GitHub Pages，base path 为 `/my-website/`。

约束：首屏加载 < 2s，默认暗色模式，科技感粒子风。

## Goals / Non-Goals

**Goals:**
- 全屏 Hero 区域，包含昵称、定位文案、CTA 按钮
- CSS 渐变背景 + Canvas 粒子叠加
- 亮/暗色模式切换，首次跟随系统偏好，之后持久化
- 粒子脚本不阻塞首屏渲染

**Non-Goals:**
- 不做动画效果（文字动画、滚动动画等）
- 不做导航栏
- 不做后端/API
- 不做其他页面区块

## Decisions

### 1. 粒子实现：Canvas 2D + useEffect 延迟初始化

使用原生 Canvas 2D API 手写粒子，不引入第三方库。在 `useEffect` 中初始化，确保不阻塞 React 首屏渲染。粒子数量默认 ~80 个，移动端降级到 ~40 个。

**替代方案**：`particles.js`（~60KB 过大）、CSS 动画（效果受限）。手写方案 < 2KB，可控性强。

### 2. 主题管理：CSS 变量 + data-theme 属性 + localStorage

通过 `<html data-theme="dark">` 或 `data-theme="light"` 控制，Tailwind 使用 `darkMode: 'class'` 模式。首次访问检测 `prefers-color-scheme`，用户切换后存到 localStorage。

**替代方案**：CSS media query 切换（无法持久化用户偏好）。

### 3. 主题切换按钮：Hero 区域右上角固定

在 Hero 区域右上角放一个切换按钮（太阳/月亮图标），后续导航栏实现后移到导航栏内。

### 4. CSS 渐变底：暗色用深蓝→黑色，亮色用白→浅灰

暗色模式：`linear-gradient(135deg, #0f0c29, #302b63, #24243e)`
亮色模式：`linear-gradient(135deg, #ffffff, #f0f4f8, #e2e8f0)`

### 5. Canvas 覆盖层使用 fixed 定位 + pointer-events: none

Canvas 使用 `position: fixed` 覆盖整个视口，`pointer-events: none` 确保不拦截鼠标事件。背景渐变放在 Canvas 下层。

### 6. 不引入 react-router

单页应用 MVP 阶段不需要路由。CTA 按钮通过锚点或后续实现的项目区域定位。

## Risks / Trade-offs

| 风险 | 缓解措施 |
|------|----------|
| Canvas 粒子可能影响低端设备性能 | 移动端降级到 40 个粒子，使用 `requestAnimationFrame` 而非 `setInterval` |
| localStorage 在某些浏览器隐身模式不可用 | 用 try-catch 包裹 localStorage 读写，失败时静默降级为会话级 |
| Tailwind v4 的 darkMode 配置方式与 v3 不同 | Tailwind v4 使用 `@theme` 和 CSS media 自动检测，需确认 class 模式的正确用法 |
| Canvas 粒子在 SSR/SSG 环境下可能报错 | 在 useEffect 中初始化（仅客户端），SSR 阶段只渲染渐变底 |
