## Context

当前页面仅包含 Hero 区域（全屏粒子背景 + 居中内容），无全局导航。Hero 顶部右上角有一个 ThemeToggle 按钮。需要新增顶部固定导航栏，同时保证不破坏现有 Hero 的视觉效果。

## Goals / Non-Goals

**Goals:**

- 提供固定在页面顶部的导航栏，亮/暗模式下均清晰可读
- 导航链接点击后平滑滚动至对应 section
- 背景毛玻璃效果，透出下层内容滚动
- 与现有粒子背景、主题切换功能无缝集成

**Non-Goals:**

- 不做搜索功能
- 不做多级下拉菜单
- 不做用户登录/注册
- 不做路由跳转（纯锚点滚动，SPA 路由不变）

## Decisions

### 1. 导航栏使用 `fixed` 定位 + `backdrop-blur`

**Decision**: 使用 `fixed top-0 left-0 right-0` 定位，背景使用 `backdrop-blur-md` + 半透明背景色。

**Why**: `fixed` 确保导航栏始终可见，不随内容滚动。`backdrop-blur` 在毛玻璃效果下透出下层粒子动画，保持科技感设计风格。

**Alternatives considered**:
- `sticky` 定位：需要父容器配合，滚动前不固定，不符合需求
- 纯色背景：遮挡粒子效果，破坏视觉风格

### 2. 平滑滚动使用原生 CSS `scroll-behavior: smooth`

**Decision**: 在根元素上设置 `scroll-behavior: smooth`，导航链接使用 `<a href="#section-id">` 锚点方式。

**Why**: 零依赖，浏览器原生支持，性能最优。不需要额外的 JS 滚动库。

**Alternatives considered**:
- JS 手动滚动（`window.scrollTo({ behavior: 'smooth' })`）：更可控但增加代码量，当前场景无此必要

### 3. Hero 顶部增加 `pt-20` padding

**Decision**: Hero 区域的 `<section id="home">` 增加 `pt-20`（约 80px）的顶部 padding，为固定导航栏留出空间。同时将锚点 `id="home"` 直接放在 Hero section 上，确保导航链接精确滚动到 Hero 顶部。

**Why**: 简单直接，导航栏高度约 64px，`pt-20` 留有额外余量。

### 4. 导航栏包含品牌标识 + 导航链接 + ThemeToggle 迁移

**Decision**: 将现有的 ThemeToggle 从 Hero 右上角迁移至导航栏右侧（导航链接旁边）。左侧显示 "Tao" 文字标识。

**Why**: 导航栏作为全局控制区，放置主题切换按钮更符合用户预期。

### 5. 新增 Projects 和 Contact 占位 section

**Decision**: 在 App 中添加 `<section id="projects">` 和 `<section id="contact">` 占位区块，供导航锚点使用。

**Why**: 锚点滚动需要目标元素存在。占位 section 后续可以填充实际内容。

## Risks / Trade-offs

- **[导航栏遮挡 Hero 内容]** → Hero 增加 `pt-20` padding 解决。需要在不同屏幕尺寸下验证效果。
- **[毛玻璃效果在低端浏览器不支持]** → `backdrop-filter` 在旧浏览器降级为纯色半透明背景，不影响功能。
- **[锚点滚动与浏览器默认 hash 行为冲突]** → 使用 `scroll-behavior: smooth` 是浏览器原生行为，不会冲突。但需要注意如果 URL hash 变化不应触发页面跳转（纯单页滚动）。
