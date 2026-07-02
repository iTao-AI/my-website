# 个人网站仓库清理设计

## 背景

当前仓库已经是 React 19、TypeScript 6、Vite 8 和 Tailwind CSS 4 驱动的固定浅色个人作品集，但仓库规则与历史实现仍保留早期 OpenSpec、暗色主题、粒子背景和 Vite 模板资产。现有 `AGENTS.md` 与 `CLAUDE.md` 还存在相互冲突的两套规则：前者要求固定浅色，后者仍要求暗色模式。

本变更只清理仓库规则、过期工作流、未引用模板代码和项目文档，不改变当前项目事实或页面信息架构。

## 目标

- 将 `AGENTS.md` 建立为仓库唯一规则源，并让 `CLAUDE.md` 通过 Git symlink 指向它。
- 明确个人作品集的公开边界、当前技术规范、固定浅色约束、验证要求和 Git / deploy 安全边界。
- 删除与当前站点行为冲突且没有 active change 的整个 `openspec/`。
- 删除未进入当前渲染树的主题、粒子背景、脚手架样式和模板资产。
- 更新 `README.md`，准确记录站点结构、技术栈、开发命令、GitHub Pages 边界和内容维护原则。
- 保持现有页面结构、文案、项目事实和视觉设计不变，并通过 desktop 与 mobile 轻量视觉检查确认无回归。

## 非目标

- 不更新 Deep Search Agent、RAG-OCR 或 OpenClaw 的项目事实、指标、链接或展示文案。
- 不迁移旧 checkout 中的 workflow、agent 配置或 OpenSpec 文件。
- 不新增页面、组件能力、后端、依赖、测试框架、主题切换或暗色模式。
- 不重做视觉设计，不替换当前已使用的 `hero.png` 或 `favicon.svg`。
- 不删除 ignored 的 `node_modules/` 或 `dist/`。
- 不 push、不创建 PR、不 merge、不 deploy，也不归档任何旧 checkout。

## 当前状态与证据

- `main`、`origin/main` 与本次基线均为 `ebd17b581ca86b86ffe972d447d0bee19f61ca23`。
- 当前 Codex worktree 起始状态 clean，现已在 `codex/website-repository-cleanup` 分支工作。
- `openspec/changes/` 只有 `archive/`，不存在 active change。
- `CLAUDE.md` 当前是普通文件，且其暗色模式规则与 `AGENTS.md` 的固定浅色规则冲突。
- `ThemeToggle.tsx` 只引用 `utils/theme.ts`；当前导航和页面组件均不渲染 `ThemeToggle`。
- `main.tsx` 是主题初始化链路的唯一运行时入口。
- `ParticleCanvas.tsx` 未被任何运行时组件导入，`utils/particles.ts` 只被该未使用组件导入。
- `App.css` 未被导入；`public/icons.svg`、`react.svg`、`vite.svg` 和 `project-1.svg` 至 `project-4.svg` 未被当前站点引用。
- `hero.png` 被 `Hero.tsx` 使用，`favicon.svg` 被 `index.html` 使用，因此二者保留。
- 基线已实际运行 `npm ci`、`npm run lint` 和 `npm run build`；lint 与 build 成功。`npm ci` 报告 4 个依赖审计项，本变更不通过自动升级或 `npm audit fix` 扩大范围。

## 设计决策

### 1. 单一规则源

`AGENTS.md` 保存完整仓库规则；`CLAUDE.md` 改为目标为 `AGENTS.md` 的相对 Git symlink。这样不同 agent 入口读取相同内容，同时避免复制规则再次漂移。

规则至少覆盖：

- 仓库是公开个人作品集，内容必须保持公开中性。
- 项目事实只能来自公开仓库、release、README 或可复验的机器报告。
- 禁止写入私有本机路径、私人动机、secret、凭证和未验证指标。
- React + TypeScript 函数式组件、PascalCase 文件名和 Tailwind CSS 样式规范。
- 固定浅色画布；除非未来用户明确要求，不引入暗色模式或主题切换。
- `npm ci`、`npm run lint`、`npm run build`、`npm run dev`、`npm run preview`。
- 文档、视觉 QA、Git、PR 和 deploy 的验证与授权边界。
- 小改动不强制 spec；重要视觉或架构变更使用简洁 design / plan。

### 2. 移除过期 OpenSpec

删除整个 `openspec/`。该目录没有 active change，其 specs 仍要求暗色主题、粒子背景、旧项目卡片结构和 Vite 7，与当前固定浅色页面、Vite 8 及真实站点结构冲突。后续重要变更使用 `docs/superpowers/specs/` 与 `docs/superpowers/plans/` 下的简洁文档，不恢复强制 OpenSpec 工作流。

### 3. 清除主题链路并显式固定浅色

- 删除 `ThemeToggle.tsx` 和 `utils/theme.ts`。
- 从 `main.tsx` 删除主题 import、读取和写入；React 挂载逻辑保持不变。
- 从 `index.html` 删除 `data-theme="light"`，避免保留已经没有切换语义的主题状态属性。
- 从 `index.css` 删除 `dark` custom variant 和 `[data-theme]` 选择器，在 `:root` 中声明 `color-scheme: light`，继续使用现有白色背景和深色正文。

页面中的 `bg-zinc-950` 等深色内容区是固定浅色设计中的对比区块，不属于暗色主题，保持不变。

### 4. 删除确认未引用的模板残留

删除以下文件：

- `src/assets/react.svg`
- `src/assets/vite.svg`
- `public/images/projects/project-1.svg` 至 `project-4.svg`
- `src/components/ParticleCanvas.tsx`
- `src/utils/particles.ts`
- `src/App.css`
- `public/icons.svg`

这些文件均无当前运行时引用；其中粒子文件对应已过期 OpenSpec 行为，其余是脚手架或旧占位资产。保留所有有真实引用的资源。

### 5. README 只描述当前公开事实

README 记录当前站点定位、页面结构、现有技术栈、开发命令、目录结构、GitHub Pages 的 `/my-website/` base path 和手动部署边界。项目名称保持现状，不在本变更校正项目事实或指标。

## 验收标准

### 仓库规则与文档

- `AGENTS.md` 包含本设计要求的公开边界、工程规范、常用命令和安全门禁。
- `CLAUDE.md` 的 Git mode 为 `120000`，`readlink CLAUDE.md` 输出 `AGENTS.md`，读取内容与 `AGENTS.md` 相同。
- `README.md` 与当前代码、`package.json` 和 `vite.config.ts` 一致。
- `openspec/` 不存在。

### 代码与资产

- 主题和粒子初始化不再存在，页面仍使用固定浅色根画布。
- 所有批准删除的文件均不再 tracked，现有运行时引用没有断裂。
- 不修改 `src/data/projects.ts` 或其他项目事实来源。
- 不修改页面组件的内容结构或现有视觉 class，除主题入口和根级固定浅色 CSS 清理外。

### 验证

- 重新运行 `npm ci`、`npm run lint`、`npm run build` 并记录真实结果。
- `git diff --check` 通过。
- 扫描 OpenSpec、旧主题标识、双规则、私有绝对路径和高置信 secret 模式；只允许 design / plan 或规则中的解释性文字命中，运行时代码不得残留主题链路。
- 使用本地浏览器检查 desktop 与 mobile：主页可渲染、项目详情可打开、导航可用、根画布保持浅色、控制台无新增错误。
- focused diff review 确认只包含 PR1 文件，明确区分基线状态与 PR1 工作区 diff。

## 风险与控制

- **误删仍在使用的资产**：删除前后都使用 tracked 全仓引用扫描，并以 lint、TypeScript build 和浏览器检查复验。
- **symlink 在 Git 中记录错误**：同时检查 `readlink`、`git diff --summary` 和 index mode。
- **固定浅色清理造成样式回归**：保留现有页面 Tailwind class，只收敛根级主题状态，并检查 desktop / mobile。
- **文档引入私有信息或未验证事实**：README 与规则仅使用当前公开仓库内容；对绝对路径和 secret-like 文本做扫描。
- **依赖审计项诱发范围扩张**：只记录基线结果，不在 PR1 升级依赖或自动修复。
