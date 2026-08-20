# Yang Tao · AI Agent Engineer

杨涛的个人工程作品集。网站以真实项目界面和自然中文说明，展示三个可以继续核验的 AI Agent 项目：

1. **Decision Research Agent**：围绕研究任务组织 Context、Tools、Evidence、Evaluation 与人工复核；
2. **Night Voyager**：把长期留学咨询中的事实、路线、风险与行动放进可持续跟进的决策流程；
3. **Multimodal Knowledge Engine**：把本地 PDF 与受控媒体处理成带来源位置、可发布和可检索的 Evidence。

在线访问：[itao-ai.github.io/my-website](https://itao-ai.github.io/my-website/)

## 页面结构

- 候选人定位与 DRA 真实产品舞台；
- DRA 旗舰案例：任务拆解、Evidence 复核与受阻恢复；
- Night Voyager / MKE 两个互补案例；
- Evidence、研究推进与人工确认三层能力关系；
- AI-native 工作方式、个人背景和公开联系入口；
- 三个项目各自的完整案例页、源码和稳定 Release。

## 真实展示资产

页面中的项目界面来自三个公开仓库各自的 canonical showcase manifest，没有重新生成或改写项目 UI。
网站使用 [`public/images/project-showcase-manifest.json`](public/images/project-showcase-manifest.json)
记录源项目、源提交、源路径、SHA-256、尺寸、页面用途和公开披露，并由内容验证脚本逐项核对。

这些图片是确定性演示界面，用于说明产品结构和失败边界；它们不代表真实客户、生产部署或业务结果。

## 技术栈

- React 19
- TypeScript 6
- Vite 8
- CSS / Tailwind CSS 4
- GitHub Pages

站点保持固定浅色画布，不依赖境外字体 CDN，不新增运行时 UI 依赖。页面路由使用 URL hash；canonical
路径为 `#/projects/<slug>`，旧 `#project/<slug>` 链接会继续归一化，GitHub Pages base 为
`/my-website/`。

## 本地运行与验证

```bash
npm ci
npm run dev
```

完整静态检查：

```bash
npm run verify:public
npm run lint
npm run build
```

`npm run verify:public` 会检查项目顺序、公开文案、GitHub / Release 链接、hash route、九张展示图片的
provenance 与 SHA-256、PNG 尺寸、旧身份残留和敏感信息模式。

## 内容边界

- 个人经历和项目能力只使用已确认事实与公开项目证据；
- 稳定项目事实绑定公开 Release，后续维护不自动变成新的产品 claim；
- 三个项目是互补的独立实践，不表述为已经生产集成的平台；
- 不提交 secret、token、cookie、私有路径、真实客户资料或未验证指标。
