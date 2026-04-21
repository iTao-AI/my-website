## ADDED Requirements

### Requirement: 默认暗色模式
页面首次加载时 SHALL 默认使用暗色模式，除非用户之前手动切换过主题。

#### Scenario: 首次访问暗色模式
- **WHEN** 用户首次访问页面且 localStorage 中无主题记录
- **THEN** 页面使用暗色模式

#### Scenario: 有缓存的主题偏好
- **WHEN** 用户之前切换过主题（localStorage 中有记录）
- **THEN** 页面使用 localStorage 中存储的主题

### Requirement: 系统偏好回退
当 localStorage 中无主题记录时，SHALL 检测 `prefers-color-scheme` 媒体查询，自动匹配系统主题偏好。

#### Scenario: 系统偏好亮色
- **WHEN** localStorage 无记录且系统 `prefers-color-scheme` 为 light
- **THEN** 页面使用亮色模式

#### Scenario: 系统偏好暗色
- **WHEN** localStorage 无记录且系统 `prefers-color-scheme` 为 dark
- **THEN** 页面使用暗色模式

### Requirement: 主题切换交互
页面 SHALL 提供一个切换按钮，用户点击后在亮色/暗色模式间切换。

#### Scenario: 用户点击切换按钮
- **WHEN** 用户点击主题切换按钮
- **THEN** 主题在亮色和暗色之间切换，页面立即反映变化

#### Scenario: 切换后持久化
- **WHEN** 用户切换主题后刷新页面
- **THEN** 页面保持上次用户选择的主题

#### Scenario: localStorage 不可用时降级
- **WHEN** localStorage 不可用（如浏览器隐私模式）
- **THEN** 主题切换在当次会话内有效，刷新后回退到系统偏好

### Requirement: 主题切换按钮
主题切换按钮 SHALL 固定在 Hero 区域右上角，使用太阳/月亮图标分别表示亮色/暗色模式。

#### Scenario: 暗色模式下显示
- **WHEN** 当前主题为暗色
- **THEN** 按钮显示月亮图标（暗示可切换到亮色）

#### Scenario: 亮色模式下显示
- **WHEN** 当前主题为亮色
- **THEN** 按钮显示太阳图标（暗示可切换到暗色）
