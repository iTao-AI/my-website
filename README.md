# Yang Tao · AI Agent Engineer

个人作品集网站，公开展示 AI Agent、RAG 和多 Agent 工作流方向的工程项目，并提供系统拆解与可复验工程记录。

在线访问：[itao-ai.github.io/my-website](https://itao-ai.github.io/my-website/)

## 站点结构

- Hero：工程方向与核心能力概览
- 工程记录：当前公开项目的验证摘要
- 系统架构：外部研究、内部知识检索与工作流编排的关系
- 项目案例：Deep Search Agent、RAG-OCR、OpenClaw HR 多 Agent 编排与 Skills 工具体系
- 项目详情：问题、架构、关键实现、验证记录和公开边界
- 联系方式：Email、GitHub 与公开项目入口

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
npm run preview
```

`npm run preview` 需要先完成 build。

## 目录

```text
src/components/  页面区块与项目详情组件
src/data/        公开项目内容与工程记录
src/assets/      当前站点使用的本地资源
public/          GitHub Pages 静态资源
```

## 部署

`vite.config.ts` 将 base 设置为 `/my-website/`。`npm run build` 生成 `dist/`，`npm run deploy` 通过 `gh-pages` 发布该目录。

部署是显式发布动作：本地验证成功后，仅在获得发布授权并确认目标仓库、分支和凭证边界后执行。

## 内容维护原则

- 项目事实、release、指标和验证结果必须来自公开仓库、公开 README 或可复验的机器报告。
- 不提交 secret、token、cookie、私有路径、未公开材料或未验证指标。
- 内容更新与视觉或架构变更分开 review，避免在仓库清理中混入项目事实改写。
