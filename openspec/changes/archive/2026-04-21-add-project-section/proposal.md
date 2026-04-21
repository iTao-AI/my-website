## Why

当前 Projects 区域仅有占位文字"项目展示区即将上线"，缺乏实际内容。项目展示区是个人品牌站的核心价值展示部分，需要以卡片形式呈现真实项目，帮助访客快速了解技术能力和作品。

## What Changes

- 将 Projects 占位 section 替换为实际的项目卡片展示区
- 卡片包含：项目截图、项目名称、一句话简介、GitHub 链接
- 展示至少 4 个项目数据
- 鼠标悬浮卡片时触发微特效（放大、阴影增强等）
- Hero CTA 按钮锚点 `#projects` 保持不变，但目标区域从占位变为实际内容

## Capabilities

### New Capabilities

- `project-section`: 项目卡片展示区，包含卡片布局、项目数据、悬浮特效、GitHub 外链

### Modified Capabilities

<!-- CTA 按钮锚点 #projects 指向的 section 从占位变为实际内容，但 spec 级别行为不变（仍是平滑滚动到 #projects） -->

## Impact

- 替换 `src/App.tsx` 中 Projects section 的占位内容
- 新增 `src/components/ProjectSection.tsx` 组件
- 新增 `src/components/ProjectCard.tsx` 组件
- 新增 `src/data/projects.ts` 项目数据文件
- Hero CTA 按钮锚点链接无需修改（已指向 `#projects`）

## Out of Scope

- 不做项目详情页（点击卡片不跳转新页面，直接外链 GitHub）
- 不做项目搜索功能
