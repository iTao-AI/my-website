## Why

个人品牌站当前是 Vite 默认模板页面（计数器 + 欢迎文案），无法用于求职展示。需要添加 Hero 区域作为站点的第一屏，建立个人品牌印象，引导访问者了解项目。

## What Changes

- 将默认模板页面替换为全屏 Hero 区域
- Hero 包含：昵称 "Tao"、定位文案、CTA 按钮（"我的项目"）
- 背景采用 CSS 渐变 + Canvas 粒子叠加
- 支持亮色/暗色模式切换，首次访问跟随系统 `prefers-color-scheme`，切换后持久化到 localStorage

## Capabilities

### New Capabilities

- `hero-section`: Hero 区域的 UI、粒子背景、主题切换
- `theme-management`: 亮/暗色模式的切换、持久化和系统偏好检测

### Modified Capabilities

<!-- 无现有 spec 需要修改 -->

## Impact

- `src/App.tsx`：从模板计数器页面完全重写为 Hero 组件
- `src/index.css`：可能需要新增全局主题相关样式
- `vite.config.ts`：需配置 GitHub Pages base path `/my-website/`
- `index.html`：可能需要更新 meta 标签

**对现有功能的影响**：当前项目只有模板代码，无用户功能，此变更是替代性重写，不影响任何现有功能。

## Out of Scope

- 不做动画效果（文字动画、滚动动画等）
- 不做导航栏（后续变更单独实现）
- 不做后端/API 相关功能
- 不做多语言支持
- 不做其他页面区块（About、Skills、Projects、Contact 等后续变更实现）
