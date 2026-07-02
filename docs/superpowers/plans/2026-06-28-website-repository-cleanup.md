# 个人网站仓库清理 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:executing-plans` 在当前 Codex worktree 内逐项执行；本任务明确禁止 subagent。每个 Phase 结束后停止并等待用户 review。

**Goal:** 建立公开中性的单一仓库规则源，删除过期 OpenSpec、主题和模板残留，同时保持现有固定浅色作品集的页面行为与项目事实不变。

**Architecture:** 规则层以 `AGENTS.md` 为唯一内容源，`CLAUDE.md` 使用相对 Git symlink。运行时移除未使用的主题与粒子链路，仅保留显式浅色根样式；文档和资产清理通过全仓引用扫描、构建与浏览器回归验证收口。

**Tech Stack:** React 19、TypeScript 6、Vite 8、Tailwind CSS 4、GitHub Pages

---

## 执行约束

- Worktree：当前 Codex 链接 worktree。
- Branch：`codex/website-repository-cleanup`。
- Base：`ebd17b581ca86b86ffe972d447d0bee19f61ca23`。
- 只执行 PR1；不读取或迁移任何旧 checkout 内容。
- 不修改 `src/data/projects.ts`，不更新项目事实、指标或展示视频。
- 不安装新依赖、workflow、plugin、skill 或测试框架。
- 用户明确批准本计划后，在全部验证通过时创建一个本地 PR1 commit，以满足 clean branch / worktree 要求。
- 不 push、创建 PR、merge、deploy 或归档旧 checkout，除非用户另行明确授权。
- 每个 Phase 完成后汇报实际 diff 与验证结果，并等待用户确认后再进入下一 Phase。

## 文件结构

**创建并保留：**

- `docs/superpowers/specs/2026-06-28-website-repository-cleanup-design.md`：PR1 的公开中性设计与验收边界。
- `docs/superpowers/plans/2026-06-28-website-repository-cleanup.md`：本执行计划与检查点。

**修改：**

- `AGENTS.md`：唯一仓库规则源。
- `CLAUDE.md`：从普通文件改为指向 `AGENTS.md` 的相对 Git symlink。
- `README.md`：真实站点、开发、部署与内容维护说明。
- `src/main.tsx`：删除主题初始化，保留 React 挂载。
- `src/index.css`：删除主题 variant / selector，显式固定浅色 color scheme。
- `index.html`：删除失去语义的 `data-theme` 属性。

**删除：**

- `openspec/`：全部过期配置、spec 和 archive。
- `src/components/ThemeToggle.tsx`
- `src/utils/theme.ts`
- `src/components/ParticleCanvas.tsx`
- `src/utils/particles.ts`
- `src/App.css`
- `src/assets/react.svg`
- `src/assets/vite.svg`
- `public/icons.svg`
- `public/images/projects/project-1.svg`
- `public/images/projects/project-2.svg`
- `public/images/projects/project-3.svg`
- `public/images/projects/project-4.svg`

## Phase 1：Canonical rules 与 README

### Task 1：重写唯一规则源

**Files:**

- Modify: `AGENTS.md`

- [ ] **Step 1：用以下完整内容替换 `AGENTS.md`**

````markdown
# AGENTS.md — 个人作品集仓库规则

## 仓库定位与公开边界

- 本仓库是公开的个人作品集网站，展示已经公开且可核验的工程项目。
- 项目事实、版本、能力、指标和验证结果只能来自公开仓库、release、README 或可复验的机器报告。
- 禁止写入私有本机路径、私人动机、secret、token、cookie、账号信息、未公开材料和未验证指标。
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
````

- [ ] **Step 2：检查规则内容完整且没有两套主题约束**

Run:

```bash
rg -n '公开边界|React|TypeScript|Tailwind|固定浅色|npm ci|npm run lint|npm run build|npm run dev|npm run preview|GitHub Pages|commit|push|deploy' AGENTS.md
```

Expected：每个必需主题至少有一个清晰命中；没有要求支持暗色模式的语句。

### Task 2：将 `CLAUDE.md` 改为 Git symlink

**Files:**

- Delete and recreate as symlink: `CLAUDE.md`

- [ ] **Step 1：用相对 symlink 替换普通文件**

先使用 `apply_patch` 删除当前普通文件 `CLAUDE.md`，再创建 symlink：

Run:

```bash
ln -s AGENTS.md CLAUDE.md
```

Expected：`CLAUDE.md` 指向同目录下的 `AGENTS.md`，不复制第二份规则内容。

- [ ] **Step 2：验证文件系统和 Git diff 中的 symlink**

Run:

```bash
test -L CLAUDE.md
test "$(readlink CLAUDE.md)" = "AGENTS.md"
cmp -s AGENTS.md CLAUDE.md
git diff --summary -- CLAUDE.md
```

Expected：前三条命令退出码均为 0；diff summary 显示 `CLAUDE.md` mode 从 `100644` 变为 `120000`。

### Task 3：更新 README

**Files:**

- Modify: `README.md`

- [ ] **Step 1：用以下完整内容替换 `README.md`**

````markdown
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
````

- [ ] **Step 2：核对 README 与代码配置一致**

Run:

```bash
rg -n 'React 19|TypeScript 6|Vite 8|Tailwind CSS 4|/my-website/|npm ci|npm run dev|npm run lint|npm run build|npm run preview|npm run deploy' README.md package.json vite.config.ts
```

Expected：README 中的版本、命令和 base path 均能在 `package.json` 或 `vite.config.ts` 找到对应依据。

### Phase 1 Checkpoint

- [ ] 运行 `git diff -- AGENTS.md CLAUDE.md README.md` 与 `git diff --summary`。
- [ ] 汇报三个文件的实际变化、symlink mode 和核对结果。
- [ ] 停止，等待用户明确批准进入 Phase 2。

## Phase 2：移除过期 workflow、主题链路与模板残留

### Task 4：删除 OpenSpec 与确认未引用文件

**Files:**

- Delete: `openspec/`
- Delete: `src/components/ThemeToggle.tsx`
- Delete: `src/utils/theme.ts`
- Delete: `src/components/ParticleCanvas.tsx`
- Delete: `src/utils/particles.ts`
- Delete: `src/App.css`
- Delete: `src/assets/react.svg`
- Delete: `src/assets/vite.svg`
- Delete: `public/icons.svg`
- Delete: `public/images/projects/project-1.svg`
- Delete: `public/images/projects/project-2.svg`
- Delete: `public/images/projects/project-3.svg`
- Delete: `public/images/projects/project-4.svg`

- [ ] **Step 1：再次验证运行时引用边界**

Run:

```bash
rg -n --hidden -g '!node_modules/**' -g '!dist/**' -g '!.git' -g '!.git/**' 'ThemeToggle|utils/theme|ParticleCanvas|utils/particles|App\.css|react\.svg|vite\.svg|icons\.svg|project-[1-4]\.svg' .
```

Expected：命中只来自待删文件、`openspec/`、design / plan 或 `main.tsx` 的已知主题入口；没有其他运行时消费者。

- [ ] **Step 2：删除批准范围内的文件**

使用 `apply_patch` 的 `*** Delete File` 操作删除文件结构中列出的全部 `openspec/` tracked 文件和确认未引用文件。不要使用递归 shell 删除，也不要触碰未列出的路径。

Expected：只删除文件结构表列出的 tracked 文件；`node_modules/`、`dist/`、`hero.png` 和 `favicon.svg` 保持不变。

### Task 5：收敛到固定浅色运行时

**Files:**

- Modify: `src/main.tsx`
- Modify: `src/index.css`
- Modify: `index.html`

- [ ] **Step 1：将 `src/main.tsx` 改为以下完整内容**

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- [ ] **Step 2：将 `src/index.css` 改为以下完整内容**

```css
@import "tailwindcss";

:root {
  background: #ffffff;
  color: #09090b;
  color-scheme: light;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: #ffffff;
  color: #09090b;
}
```

- [ ] **Step 3：从 `index.html` 根元素删除主题属性**

Replace:

```html
<html lang="zh-CN" data-theme="light">
```

with:

```html
<html lang="zh-CN">
```

- [ ] **Step 4：验证旧主题运行时标识已清除**

Run:

```bash
rg -n 'data-theme|@custom-variant dark|ThemeToggle|getInitialTheme|setTheme|toggleTheme|theme-preference|prefers-color-scheme' src index.html
```

Expected：无命中，命令退出码为 1。

### Task 6：运行 Phase 2 工程检查

- [ ] **Step 1：安装 lockfile 依赖并运行静态检查**

Run:

```bash
npm ci
npm run lint
npm run build
```

Expected：三条命令退出码均为 0；记录 `npm ci` 的审计摘要，不执行 `npm audit fix`。

- [ ] **Step 2：检查删除与范围**

Run:

```bash
test ! -e openspec
test -f src/assets/hero.png
test -f public/favicon.svg
git diff --name-status ebd17b581ca86b86ffe972d447d0bee19f61ca23 --
git diff --check
```

Expected：OpenSpec 不存在，保留资源存在；name-status 只包含 PR1 设计、规则、文档、主题入口和批准删除项；`git diff --check` 退出码为 0。

### Phase 2 Checkpoint

- [ ] 汇报实际删除文件、三个运行时文件的变化、lint / build 结果和范围检查。
- [ ] 明确说明项目事实文件未修改，PR2 未启动。
- [ ] 停止，等待用户明确批准进入 Phase 3。

## Phase 3：完整验证、视觉 QA 与 focused review

### Task 7：执行仓库扫描

- [ ] **Step 1：扫描 OpenSpec 与旧主题残留**

Run:

```bash
rg -n --hidden -g '!node_modules/**' -g '!dist/**' -g '!.git' -g '!.git/**' 'OpenSpec|openspec|data-theme|ThemeToggle|theme-preference|prefers-color-scheme|@custom-variant dark' .
```

Expected：OpenSpec 只在 `AGENTS.md`、design 和 plan 的移除说明中命中；旧主题运行时标识只允许在 design / plan 的历史说明或验证命令中命中，`src/` 与 `index.html` 无命中。

- [ ] **Step 2：验证单一规则源与固定浅色声明**

Run:

```bash
test -L CLAUDE.md
test "$(readlink CLAUDE.md)" = "AGENTS.md"
cmp -s AGENTS.md CLAUDE.md
rg -n '固定浅色|color-scheme: light|background: #ffffff' AGENTS.md README.md src/index.css
```

Expected：symlink 三项检查通过；固定浅色策略与根级实现均有依据。

- [ ] **Step 3：扫描私有绝对路径**

Run:

```bash
private_path_pattern="$(printf '%s' 'KC9Vc2Vycy98L2hvbWUvfFtBLVphLXpdOlxcVXNlcnNcXCk=' | base64 -D)"
rg -n --hidden -g '!node_modules/**' -g '!dist/**' -g '!.git' -g '!.git/**' "$private_path_pattern" .
```

Expected：无命中，命令退出码为 1。

- [ ] **Step 4：扫描高置信 secret 模式并人工复核敏感词**

Run:

```bash
high_confidence_secret_pattern="$(printf '%s' 'KEFLSUFbMC05QS1aXXsxNn18LS0tLS1CRUdJTiAoUlNBfE9QRU5TU0h8RUN8RFNBKSBQUklWQVRFIEtFWS0tLS0tfGdoW3BvdXNyXV9bQS1aYS16MC05XXszNix9fGdpdGh1Yl9wYXRfW0EtWmEtejAtOV9dezIwLH18c2stW0EtWmEtejAtOV17MjAsfXx4b3hbYmFwcnNdLVtBLVphLXowLTktXSsp' | base64 -D)"
sensitive_term_pattern="$(printf '%s' 'KGFwaVtfLV0/a2V5fGNsaWVudFtfLV0/c2VjcmV0fHBhc3N3b3JkfGF1dGhvcml6YXRpb246W1s6c3BhY2U6XV0qYmVhcmVyfHByaXZhdGUga2V5KQ==' | base64 -D)"
rg -n --hidden -g '!node_modules/**' -g '!dist/**' -g '!.git' -g '!.git/**' "$high_confidence_secret_pattern" .
rg -n -i --hidden -g '!node_modules/**' -g '!dist/**' -g '!.git' -g '!.git/**' -g '!package-lock.json' "$sensitive_term_pattern" .
```

Expected：第一条无命中；第二条只允许公开项目描述或规则中的一般术语，逐条确认没有凭证值、赋值或认证 header。

### Task 8：desktop 与 mobile 轻量视觉检查

**Required skill:** `browser:control-in-app-browser`

- [ ] **Step 1：启动本地开发服务器**

Run:

```bash
npm run dev -- --host 127.0.0.1
```

Expected：Vite 输出本地 URL，进程保持运行供浏览器检查。

- [ ] **Step 2：desktop 检查**

Open：`http://127.0.0.1:5173/my-website/`

Verify：

- 根画布为白色，页面不存在主题切换按钮。
- Hero、工程记录、系统架构、项目案例、联系区均正常渲染。
- 顶部导航固定且锚点可用。
- 打开至少一个 `#/projects/<slug>` 项目详情后可返回项目列表。
- 浏览器 console 无由本次删除引入的 module、asset 或 runtime error。

- [ ] **Step 3：mobile 检查**

使用约 390 × 844 的 mobile viewport 重新检查首页和一个项目详情。

Verify：页面无横向溢出、标题与按钮未被截断、导航保持可用、根画布仍为白色、没有主题闪烁。

- [ ] **Step 4：停止开发服务器并记录证据**

记录检查 URL、视口、页面与 console 结果；不提交浏览器缓存、截图中的私有信息或临时运行文件。

### Task 9：区分 base diff 与 PR1 diff，执行 focused review

- [ ] **Step 1：确认 base 没有漂移**

Run:

```bash
git rev-parse main
git rev-parse origin/main
git diff --name-status main...origin/main
```

Expected：两个 commit 均为 `ebd17b581ca86b86ffe972d447d0bee19f61ca23`，base diff 为空。

- [ ] **Step 2：列出 PR1 工作区 diff**

Run:

```bash
git status --short --branch
git diff --name-status ebd17b581ca86b86ffe972d447d0bee19f61ca23 --
git diff --stat ebd17b581ca86b86ffe972d447d0bee19f61ca23 --
git diff --summary ebd17b581ca86b86ffe972d447d0bee19f61ca23 --
git diff --check
```

Expected：PR1 diff 只包含本计划列出的文件；symlink mode、删除范围与新增 design / plan 都可见；没有空白错误。

- [ ] **Step 3：focused diff review**

Review：

- `AGENTS.md` 与 `README.md` 没有规则冲突、私有路径、未验证指标或 PR2 事实更新。
- `CLAUDE.md` 是 symlink，不是第二份内容副本。
- 删除项都有未引用证据，`hero.png`、`favicon.svg` 和当前页面组件没有误删。
- `src/main.tsx`、`src/index.css`、`index.html` 只清理主题入口，没有重做视觉或页面结构。
- `src/data/projects.ts` 与所有项目展示文案没有变化。
- npm、浏览器、扫描与 diff 结果都来自本次实际运行。

- [ ] **Step 4：在完整验证通过后创建本地 PR1 commit**

先只 stage 已 review 的 PR1 路径：

```bash
git add -A -- AGENTS.md CLAUDE.md README.md index.html src/main.tsx src/index.css openspec src/App.css src/assets/react.svg src/assets/vite.svg src/components/ThemeToggle.tsx src/components/ParticleCanvas.tsx src/utils/theme.ts src/utils/particles.ts public/icons.svg public/images/projects docs/superpowers/specs/2026-06-28-website-repository-cleanup-design.md docs/superpowers/plans/2026-06-28-website-repository-cleanup.md
git diff --cached --name-status
git diff --cached --check
```

Expected：staged diff 只包含本计划文件，`git diff --cached --check` 退出码为 0。

使用项目现有 Conventional Commits 风格创建一个本地 commit：

```bash
git commit \
  -m "chore(website): clean up repository workflow" \
  -m $'Summary\n- 问题：仓库仍保留冲突的双规则、过期 OpenSpec 和未引用主题/模板残留。\n- 方案：建立单一规则源，清理过期 workflow 与无引用代码，并更新公开仓库文档。\n- 价值：降低规则漂移和公开内容污染风险。\n\n技术细节\n- 将 CLAUDE.md 改为指向 AGENTS.md 的 Git symlink。\n- 删除 OpenSpec、主题链路、粒子代码和未引用模板资产。\n- 保留固定浅色页面并更新 README。\n\nTest plan\n- Ran npm ci.\n- Ran npm run lint.\n- Ran npm run build.\n- Manually verified desktop and mobile layouts.'
```

- [ ] **Step 5：确认 clean 并保持发布边界**

Run:

```bash
git status --short --branch
git log -1 --oneline
```

Expected：worktree clean，最新 commit 是本地 PR1 commit。不要 push、创建 PR、merge、deploy，不启动 PR2，不归档旧 checkout。汇报 branch、worktree、实际验证与剩余风险，等待用户下一条明确授权。
