# Yang Tao · AI Agent Engineer

个人作品集网站，公开展示 Night Voyager、Decision Research Agent 和 Multimodal Knowledge Engine 三个可核验的工程项目。

在线访问：[itao-ai.github.io/my-website](https://itao-ai.github.io/my-website/)

## 站点结构

- Hero：上海的 AI Agent 工程师定位、应用开发方向与真实流程入口
- 旗舰项目：Night Voyager 的多人确认、决策状态和可执行计划
- Capability Loop：MKE、DRA、NV 的职责与 consumer seam
- Selected Projects：三个项目的价值、normal/failure/reproducible 路径与稳定 Release
- Engineering Proof：把正常路径、失败停止和可复现交付放在同一张图里
- AI-native Engineering：目标约束到最终交付的 AI-assisted engineering loop
- About / Contact：公开背景、源码、Release 与联系入口

## 技术栈

- React 19
- TypeScript 6
- Vite 8
- Tailwind CSS 4
- GitHub Pages

站点使用固定浅色画布。页面路由使用 URL hash，GitHub Pages base path 为 `/my-website/`。

## 本地开发

```bash
npm ci
npm run dev
```

常用检查：

```bash
npm run lint
npm run build
npm run verify:public
npm run preview
```

`npm run verify:public` 会核对三个项目的 canonical identity、Release、公开边界、hash route、本地资源和敏感信息模式。`npm run preview` 需要先完成 build。

## 目录

```text
src/components/  页面区块与项目详情组件
src/data/        公开项目内容与工程记录
src/assets/      当前站点使用的本地资源
public/          GitHub Pages 静态资源
public/images/   Night Voyager 确定性视觉证据与 social preview
scripts/         public-content contract
```

## 部署

`vite.config.ts` 将 base 设置为 `/my-website/`。推荐部署路径是 GitHub Actions Pages workflow：push 到 `main` 或手动触发 `Deploy GitHub Pages` workflow 后，CI 会执行 `npm ci`、`npm run build`、`npm run verify:public`，并将 `dist/` 作为 Pages artifact 发布。

仓库仍保留 `npm run deploy` / `gh-pages` 作为 legacy/manual fallback，但不属于本次本地验证范围。切换 GitHub Pages source 或执行发布都属于显式发布动作，需要单独授权和验证。

## 内容维护原则

- 项目事实、Release、能力和验证结果必须来自公开仓库、稳定 Release 或可复验的机器报告。
- 稳定项目事实绑定 immutable Release；post-release maintenance 不自动形成能力 claim。
- 当前边界必须与能力一起公开，不能把计划、截图、固定样本或本地实验写成真实用户结果。
- 不提交 secret、token、cookie、私有路径、未公开材料或未验证指标。
