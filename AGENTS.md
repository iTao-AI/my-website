# AGENTS.md — 个人作品集仓库规则

## 仓库定位与公开边界

- 本仓库是公开的个人作品集网站，展示已经公开且可核验的工程项目。
- 项目事实、版本、能力、指标和验证结果只能来自公开仓库、release、README 或可复验的机器报告。
- 禁止写入私有本机路径、求职包装话术、secret、token、cookie、账号信息、未公开材料和未验证指标。
- 不确定的公开事实先核对来源；无法核实时省略或明确标注边界，不做推测。

## 技术与代码规范

- 当前技术栈：React、TypeScript、Vite、Tailwind CSS。
- React 组件使用 TypeScript 函数式组件；组件文件名使用 PascalCase。
- 页面样式使用 Tailwind CSS class，禁止内联 `style`。
- 当前作品集固定浅色画布；除非用户未来明确要求，不引入暗色模式、主题切换或主题持久化。
- 图片默认使用 `loading="lazy"`；只有经验证的首屏关键图片可以例外。
- 遵循现有结构、命名与格式，只修改任务需要的最小范围。

## 常用命令

```bash
npm ci
npm run lint
npm run build
npm run dev
npm run preview
```

- 使用 `npm ci` 按 lockfile 安装依赖，不手工改写 lockfile。
- 交付前至少运行与改动相关的 lint 和 build；没有实际运行成功时不得声称通过。

## 变更流程

- 开始前读取 `AGENTS.md`、相关源码、`README.md`、`package.json` 和现有 design / plan，并检查 `git status`。
- 小型、局部、行为明确的改动不强制创建 spec。
- 重要视觉、信息架构、依赖、部署或跨组件变更，先在 `docs/superpowers/specs/` 和 `docs/superpowers/plans/` 写简洁 design / plan，确认范围后再实现。
- 不恢复强制 OpenSpec 工作流，不引入新的 workflow、plugin、skill 或依赖，除非用户明确批准。

## 文档与内容

- README 和站点文案只描述当前仓库中真实存在的能力、结构、命令和部署方式。
- 更新项目内容时保留来源证据；公开文案优先写可验证的系统能力和工程结果。
- 不把计划、愿景或本机实验写成已经发布的事实。
- 不复制任何私有材料或绝对路径到公开仓库。

## 视觉 QA

- 修改可见页面、样式或资源后，至少检查 desktop 与 mobile 视口。
- 确认首页、项目详情、导航和外部链接没有回归，页面保持固定浅色根画布。
- 浏览器截图、日志和报告不得包含账号、凭证、本机私有路径或未公开内容。

## Git、PR 与 deploy 安全

- 修改前后检查 `git status` 和 diff；不得覆盖、回滚或删除用户已有改动。
- 明确区分 base diff 与当前任务 diff，避免把无关修改带入 PR。
- commit、push、创建 PR、merge 和 deploy 均需用户明确授权。
- PR 正文只写实际完成项和实际验证结果；未运行的检查必须明确说明。
- GitHub Pages 使用 `/my-website/` base path。`npm run deploy` 会发布 `dist/`，未经明确授权不得运行。
- 登录、token、secret、权限变更、发布和归档属于高风险动作，执行前说明影响并等待确认。
