## ADDED Requirements

### Requirement: 项目卡片展示区布局
Projects section SHALL 使用响应式网格布局展示项目卡片，最少展示 4 个项目。

#### Scenario: 桌面端网格布局
- **WHEN** 页面加载且视口宽度 >= 1024px
- **THEN** 项目卡片以 3 列网格排列

#### Scenario: 平板端网格布局
- **WHEN** 页面加载且视口宽度 >= 768px 且 < 1024px
- **THEN** 项目卡片以 2 列网格排列

#### Scenario: 移动端布局
- **WHEN** 页面加载且视口宽度 < 768px
- **THEN** 项目卡片以单列垂直排列

#### Scenario: 最少展示数量
- **WHEN** 项目数据加载完成
- **THEN** 页面至少展示 4 个项目卡片

### Requirement: 项目卡片内容
每张项目卡片 SHALL 包含项目截图、项目名称、一句话简介和 GitHub 链接。

#### Scenario: 卡片完整内容渲染
- **WHEN** 单个项目卡片渲染完成
- **THEN** 卡片从上到下依次显示：截图区域、项目名称、简介文字、GitHub 链接图标

#### Scenario: 项目截图显示
- **WHEN** 项目卡片渲染
- **THEN** 截图以 16:9 宽高比显示，使用 `object-cover` 裁剪，添加 `loading="lazy"` 延迟加载

#### Scenario: GitHub 链接行为
- **WHEN** 用户点击卡片中的 GitHub 链接
- **THEN** 在新浏览器标签页中打开该项目的 GitHub 仓库页面

### Requirement: 卡片悬浮特效
项目卡片 SHALL 在鼠标悬浮时触发视觉微特效，离开时恢复原状。

#### Scenario: 鼠标悬浮时放大效果
- **WHEN** 用户鼠标悬停在项目卡片上
- **THEN** 卡片轻微放大（scale 约 1.02），过渡动画时长约 300ms

#### Scenario: 鼠标悬浮时阴影增强
- **WHEN** 用户鼠标悬停在项目卡片上
- **THEN** 卡片阴影加深，增强立体感

#### Scenario: 鼠标离开时恢复
- **WHEN** 用户鼠标离开项目卡片
- **THEN** 卡片恢复原始大小和阴影，过渡动画平滑

### Requirement: 主题模式适配
项目展示区 SHALL 在亮色和暗色模式下均清晰可读。

#### Scenario: 暗色模式下卡片显示
- **WHEN** 页面处于暗色模式
- **THEN** 项目展示区背景为深色，卡片背景略浅于区域背景，文字为浅色

#### Scenario: 亮色模式下卡片显示
- **WHEN** 页面处于亮色模式
- **THEN** 项目展示区背景为浅色，卡片背景为白色，文字为深色

### Requirement: Hero CTA 按钮锚点
Hero 区域的 CTA 按钮（"我的项目"）点击后 SHALL 平滑滚动至 Projects section 顶部。

#### Scenario: 点击 CTA 滚动到项目区
- **WHEN** 用户点击 Hero 区域的 "我的项目" 按钮
- **THEN** 页面平滑滚动至 `#projects` section 顶部
