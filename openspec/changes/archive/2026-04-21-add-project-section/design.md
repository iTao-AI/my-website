## Context

当前 `App.tsx` 中 Projects 区域仅有占位文字。需要将其替换为实际的项目卡片展示区，与现有 Hero（粒子背景）和 Contact（占位）区域共存。项目截图图片将托管在 GitHub Pages 上，需要考虑加载性能和 dark/light 模式适配。

## Goals / Non-Goals

**Goals:**

- 以卡片网格布局展示至少 4 个项目
- 每张卡片包含截图、名称、简介、GitHub 链接
- 鼠标悬浮时触发 CSS 微特效（放大 + 阴影增强）
- 亮/暗模式下卡片视觉效果清晰可读
- 图片使用 lazy loading，首屏不阻塞

**Non-Goals:**

- 不做项目详情页
- 不做项目搜索/筛选功能
- 不做项目分类/标签

## Decisions

### 1. 卡片布局使用 CSS Grid + 响应式列数

**Decision**: 使用 Tailwind CSS Grid，桌面端 2 列 (`grid-cols-2`)，平板 1 列，大屏 3 列 (`lg:grid-cols-3`)。

**Why**: Grid 布局天然支持等宽卡片排列，响应式列数调整无需 JS。4 个项目在桌面端 2 列 = 2x2 网格，视觉平衡。

**Alternatives considered**:
- Flexbox + wrap：列宽不均，需要额外计算
- 固定 3 列：4 个项目会多出一行空位

### 2. 悬浮特效使用纯 CSS `transition` + `transform`

**Decision**: 使用 Tailwind `hover:scale-[1.02]` + `hover:shadow-xl` + `transition-all duration-300`，无需 JS 动画库。

**Why**: CSS transform 由 GPU 加速，60fps 无卡顿。零依赖，加载开销最小。

**Alternatives considered**:
- Framer Motion：效果更丰富但增加 bundle size，当前场景过度设计
- JS `onMouseEnter` + inline style：不符合项目"禁止内联 style"标准

### 3. 项目数据存放在 `src/data/projects.ts`

**Decision**: 使用 TypeScript 数组常量，每个项目包含 `title`、`description`、`image`、`githubUrl` 四个字段。

**Why**: 简单直接，无需引入 CMS 或 API。类型安全，后续如有需要可轻松迁移到 API。

### 4. 图片使用 `loading="lazy"` + 固定宽高比容器

**Decision**: `<img>` 添加 `loading="lazy"` 属性，外层使用 `aspect-video` 容器保持 16:9 比例。

**Why**: 原生 lazy loading 零依赖，aspect-video 防止图片加载时的布局偏移（CLS）。

### 5. Projects section 背景使用纯色而非粒子

**Decision**: Projects 区域不使用粒子背景，暗色模式使用 `bg-zinc-950`，亮色模式使用 `bg-zinc-50`。

**Why**: 粒子效果已在 Hero 区域充分使用。Projects 需要干净的背景突出卡片内容，避免视觉干扰。

### 6. GitHub 链接新标签页打开

**Decision**: GitHub 链接使用 `target="_blank" rel="noopener noreferrer"`。

**Why**: 外部链接应在新标签页打开，`rel="noopener"` 防止安全漏洞（reverse tabnabbing）。

## Risks / Trade-offs

- **[图片加载慢影响性能]** → 所有图片使用 `loading="lazy"`，首屏只加载可见图片。图片文件需要压缩优化。
- **[4 个项目的数据硬编码维护成本]** → 当前阶段数据量小，硬编码最简单。项目数超过 10 个时考虑迁移到 CMS 或 JSON 文件。
- **[卡片截图在不同尺寸下变形]** → 使用 `aspect-video` + `object-cover` 保持比例不变形。
