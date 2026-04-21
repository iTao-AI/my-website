## 1. 项目结构与 CSS 基础

- [x] 1.1 在 `src/index.css` 中为根元素添加 `scroll-behavior: smooth`
- [x] 1.2 在 `src/App.tsx` 中添加 `#home`、`#projects`、`#contact` 三个 section 的布局框架

## 2. NavigationBar 组件

- [x] 2.1 创建 `src/components/NavigationBar.tsx`，实现固定顶部导航栏的骨架（fixed 定位、宽度、z-index）
- [x] 2.2 实现左侧品牌标识 "Tao"，点击后平滑滚动至 `#home`
- [x] 2.3 实现右侧三个导航链接（首页 → `#home`，项目 → `#projects`，联系我 → `#contact`）
- [x] 2.4 添加 `backdrop-blur-md` 毛玻璃背景，区分亮色/暗色模式
- [x] 2.5 将 ThemeToggle 组件迁移至 NavigationBar 右侧
- [x] 2.6 实现响应式布局：小屏幕下紧凑排列、字号缩小

## 3. Hero 适配与清理

- [x] 3.1 从 `Hero.tsx` 中移除 ThemeToggle 组件引用
- [x] 3.2 为 Hero 的 `<section>` 添加 `pt-20` 顶部 padding，避免被固定导航栏遮挡
- [x] 3.3 确保 Hero 区域锚点 ID 为 `#home`

## 4. 验证与打磨

- [x] 4.1 在浏览器中验证所有导航链接的平滑滚动行为
- [x] 4.2 验证亮色/暗色模式下导航栏的视觉效果（毛玻璃、文字对比度）
- [x] 4.3 验证移动端（窄视口）响应式布局
- [x] 4.4 确认滚动页面时导航栏始终固定在顶部
