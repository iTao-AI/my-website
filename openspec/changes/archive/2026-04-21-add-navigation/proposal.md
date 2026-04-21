## Why

当前页面只有 Hero 区域，缺少全局导航。随着后续添加 Projects、Contact 等区块，用户需要一种快速在页面各 section 间跳转的方式。顶部固定导航栏提供基础的路由锚点，是个人品牌站的标准配置。

## What Changes

- 新增固定在页面顶部的导航栏组件
- 左侧显示个人品牌标识（文字 "Tao"）
- 右侧包含三个导航链接：首页、项目、联系我
- 点击导航链接平滑滚动至对应 section
- 导航栏背景使用毛玻璃（backdrop-blur）效果
- 导航栏在亮/暗模式下分别适配样式

## Capabilities

### New Capabilities

- `navigation-bar`: 顶部固定导航栏，包含品牌标识、导航链接、平滑滚动和毛玻璃背景效果

### Modified Capabilities

- `hero-section`: Hero 区域顶部需要为固定导航栏预留 padding-top，避免内容被导航栏遮挡

## Impact

- 新增 `src/components/NavigationBar.tsx` 组件
- 修改 `src/App.tsx`：引入 NavigationBar，新增 Projects 和 Contact 区域的占位 section
- 修改 `src/components/Hero.tsx`：顶部增加 padding 避免被固定导航栏遮挡，锚点 ID 设为 `#home`
