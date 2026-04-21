## ADDED Requirements

### Requirement: Hero 全屏布局
Hero 区域 SHALL 占据至少 100vh 的全屏高度，内容垂直水平居中。

#### Scenario: 桌面端渲染
- **WHEN** 用户在桌面端（视口宽度 >= 768px）打开页面
- **THEN** Hero 区域高度为 100vh，内容居中

#### Scenario: 移动端渲染
- **WHEN** 用户在移动端（视口宽度 < 768px）打开页面
- **THEN** Hero 区域高度为 100dvh（动态视口高度），内容居中

### Requirement: Hero 内容
Hero 区域 SHALL 包含：昵称 "Tao"（大字号标题）、定位文案（副标题）、CTA 按钮（"我的项目"）。

#### Scenario: 渲染 Hero 内容
- **WHEN** 页面加载完成
- **THEN** 显示昵称 "Tao"、定位文案、"我的项目" 按钮，三者垂直排列

#### Scenario: CTA 按钮点击
- **WHEN** 用户点击 "我的项目" 按钮
- **THEN** 页面平滑滚动到 Projects 区域（如果存在），否则无操作

### Requirement: Canvas 粒子背景
页面 SHALL 有一个 Canvas 2D 粒子层覆盖在 CSS 渐变背景上方，粒子数量桌面端 ~80 个，移动端 ~40 个。

#### Scenario: 正常渲染粒子
- **WHEN** 页面加载且视口宽度 >= 768px
- **THEN** Canvas 上渲染约 80 个粒子

#### Scenario: 移动端降级粒子
- **WHEN** 页面加载且视口宽度 < 768px
- **THEN** Canvas 上渲染约 40 个粒子

#### Scenario: Canvas 不拦截鼠标事件
- **WHEN** 用户尝试点击 Hero 区域内的按钮或链接
- **THEN** 点击事件穿透 Canvas，正确触发下层元素

### Requirement: CSS 渐变背景
页面 SHALL 有一个 CSS 渐变背景，暗色模式和亮色模式使用不同的渐变配色。

#### Scenario: 暗色模式渐变
- **WHEN** 页面处于暗色模式
- **THEN** 背景为从深蓝到黑色的渐变（#0f0c29 → #302b63 → #24243e）

#### Scenario: 亮色模式渐变
- **WHEN** 页面处于亮色模式
- **THEN** 背景为从白到浅灰的渐变（#ffffff → #f0f4f8 → #e2e8f0）

### Requirement: 响应式适配
Hero 区域 SHALL 在不同屏幕尺寸下正确显示，字号和间距响应式调整。

#### Scenario: 小屏幕适配
- **WHEN** 视口宽度 < 480px
- **THEN** 标题字号缩小，CTA 按钮全宽显示，左右 padding 减小

#### Scenario: 横向屏幕适配
- **WHEN** 设备处于横屏模式（高度 < 宽度）
- **THEN** 内容仍然居中，不溢出视口
