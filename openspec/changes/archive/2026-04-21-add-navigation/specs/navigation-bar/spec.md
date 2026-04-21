## ADDED Requirements

### Requirement: 固定顶部导航栏
导航栏 SHALL 固定在页面顶部，不随页面滚动而消失，宽度占满整个视口。

#### Scenario: 桌面端渲染导航栏
- **WHEN** 页面加载且视口宽度 >= 768px
- **THEN** 导航栏固定在顶部，宽度 100%，高度约 64px

#### Scenario: 滚动时保持固定
- **WHEN** 用户向下滚动页面
- **THEN** 导航栏始终保持在视口顶部可见

#### Scenario: 移动端渲染导航栏
- **WHEN** 页面加载且视口宽度 < 768px
- **THEN** 导航栏固定在顶部，内容紧凑排列，高度约 56px

### Requirement: 品牌标识
导航栏左侧 SHALL 显示个人品牌标识 "Tao"，点击后平滑滚动至页面顶部（首页）。

#### Scenario: 品牌标识渲染
- **WHEN** 导航栏加载完成
- **THEN** 左侧显示 "Tao" 文字，字号大于导航链接，可点击

#### Scenario: 点击品牌标识
- **WHEN** 用户点击 "Tao" 标识
- **THEN** 页面平滑滚动至首页 section 顶部

### Requirement: 导航链接
导航栏右侧 SHALL 包含三个导航链接：首页、项目、联系我。点击后平滑滚动至对应 section。

#### Scenario: 导航链接渲染
- **WHEN** 导航栏加载完成
- **THEN** 右侧依次显示 "首页"、"项目"、"联系我" 三个链接

#### Scenario: 点击首页链接
- **WHEN** 用户点击 "首页" 导航链接
- **THEN** 页面平滑滚动至 `#home` section 顶部

#### Scenario: 点击项目链接
- **WHEN** 用户点击 "项目" 导航链接
- **THEN** 页面平滑滚动至 `#projects` section 顶部

#### Scenario: 点击联系我链接
- **WHEN** 用户点击 "联系我" 导航链接
- **THEN** 页面平滑滚动至 `#contact` section 顶部

### Requirement: 毛玻璃背景效果
导航栏背景 SHALL 使用毛玻璃（backdrop-blur）效果，同时透出下层内容。

#### Scenario: 暗色模式下毛玻璃效果
- **WHEN** 页面处于暗色模式
- **THEN** 导航栏背景使用半透明深色 + `backdrop-blur-md`

#### Scenario: 亮色模式下毛玻璃效果
- **WHEN** 页面处于亮色模式
- **THEN** 导航栏背景使用半透明浅色 + `backdrop-blur-md`

#### Scenario: 不支持 backdrop-filter 时的降级
- **WHEN** 浏览器不支持 `backdrop-filter` CSS 属性
- **THEN** 导航栏背景降级为不透明的纯色背景，导航功能正常

### Requirement: 主题切换按钮集成
主题切换按钮 SHALL 放置在导航栏右侧（导航链接旁边），从 Hero 区域迁移至此。

#### Scenario: 主题切换按钮在导航栏中渲染
- **WHEN** 导航栏加载完成
- **THEN** 主题切换按钮出现在导航栏右侧最末端

#### Scenario: Hero 区域不再包含主题切换按钮
- **WHEN** Hero 区域渲染
- **THEN** Hero 区域右上角不再显示主题切换按钮

### Requirement: 响应式布局
导航栏 SHALL 在不同屏幕尺寸下正确显示，移动端使用紧凑布局。

#### Scenario: 小屏幕导航适配
- **WHEN** 视口宽度 < 480px
- **THEN** 导航链接字号缩小，间距减小，品牌标识字号相应缩小

## REMOVED Requirements

### Requirement: 主题切换按钮固定在 Hero 区域右上角
**Reason**: 主题切换按钮已迁移至顶部导航栏，作为全局控制项
**Migration**: 从 Hero 组件中移除 ThemeToggle，改由 NavigationBar 组件渲染
