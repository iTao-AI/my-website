# Feature Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan.

**Goal:** 把现有个人网站改造成以 Decision Research Agent 为旗舰、以三个真实项目界面为视觉证据的浅色编辑型 AI Agent 工程作品集。

**Architecture:** 保留现有 React + TypeScript + Vite 单页应用、GitHub Pages base、canonical / legacy hash route 与零新增依赖边界。公开文案和项目事实集中在 `src/data/`，首页使用专门的编辑型案例组件，详情页复用同一项目数据；所有项目截图由公开项目仓库的已核验 manifest 派生，并由网站自己的 provenance manifest 与校验脚本锁定。

**Tech Stack:** React 19、TypeScript 6、Vite 8、CSS、Node.js 标准库、现有 ESLint；浏览器验证使用现有本地 Chromium / GStack 能力，不新增 npm 依赖。

**Spec:** `docs/superpowers/specs/2026-08-21-light-editorial-casebook-redesign-design.md`

## Global Constraints

- 本阶段只修改本仓库；三个公开项目仓库只读。
- 不新增依赖、第三方字体、头像、人物素材、虚构界面、虚构数据或生产使用 claim。
- 不改变 GitHub Pages `/my-website/` base、canonical / legacy hash route、GitHub / Release 链接语义。
- 项目固定顺序为 DRA、Night Voyager、MKE；三者是互补的独立项目，不写成已生产集成的平台。
- 真实截图必须来自项目公开仓库的 canonical showcase manifest；网站 manifest 记录源项目、源提交、原始路径、SHA-256、页面用途和公开披露。
- 先让静态文案和布局成立，再增加动效；`prefers-reduced-motion` 下不得丢失内容或可达入口。
- 本阶段只创建本地语义原子 commit；不 push、不创建 PR、不部署。

---

## Task 1: 冻结公开文案、项目顺序与事实 contract

**Files:**

- Modify: `scripts/verify-public-content.mjs`
- Modify: `src/data/projects.ts`
- Create: `src/data/siteContent.ts`
- Modify: `src/App.tsx`

### Step 1: 让现有公开内容验证先 RED

扩展 `scripts/verify-public-content.mjs`，先锁定以下失败条件：

- canonical 项目顺序必须是 `decision-research-agent`、`night-voyager`、`multimodal-knowledge-engine`；
- Hero 必须出现“把 AI Agent 做成能推进工作的系统”；
- DRA 首层必须出现“拆解任务 / 核对 Evidence / 审核后交付”；
- Night Voyager 首层必须出现“确认事实 / 比较路线 / 形成行动计划”；
- MKE 首层必须出现“处理资料 / 保留来源 / 受控检索”；
- `consumer seam`、`synthetic fixture`、`projection`、`Engineering Proof`、`normal / failure / reproducible` 不得出现在首页第一层文案；
- 每个项目必须有角色、问题、判断、正常推进、失败处理、个人工作、技术关键词和三张真实截图；
- legacy / canonical hash route 必须继续存在。

Run:

```bash
npm run verify:public
```

Expected: FAIL，至少报告旧项目顺序、旧 Hero、旧内部审查词和缺少真实截图 provenance。

### Step 2: 重构项目数据模型

把 `src/data/projects.ts` 改成面向招聘阅读的 `Project` 模型，至少包含：

```ts
type ProjectVisual = {
  src: string
  alt: string
  caption: string
  state: 'overview' | 'normal' | 'blocked'
}

type Project = {
  slug: string
  title: string
  eyebrow: string
  headline: string
  summary: string
  role: string
  actions: readonly string[]
  problem: string
  approach: string
  humanBoundary: string
  normalPath: string
  failurePath: string
  personalWork: readonly string[]
  decisions: readonly { title: string; body: string }[]
  stack: readonly string[]
  keywords: readonly string[]
  visuals: readonly ProjectVisual[]
  githubUrl: string
  releaseUrl: string
  releaseLabel: string
  captureCommit: string
}
```

按 spec 中定稿文案填入三个项目；不把 Release 作为首层卖点，不写测试数量、真实客户、ROI 或部署 claim。

### Step 3: 建立全站文案单一入口

新增 `src/data/siteContent.ts`，集中维护：

- 导航；
- Hero 身份、标题、说明和 CTA；
- 能力链三段；
- AI-native Engineering；
- About 与 Contact。

文案必须可以自然朗读，技术词只在与具体实现或取舍相邻时出现。

### Step 4: 暂时让 App 使用新顺序

更新 `src/App.tsx` 的数据入口与 route 解析，保持 canonical / legacy route 兼容；此步不要求视觉完成，只要求新数据能够编译。

### Step 5: 验证并提交内容阶段

Run:

```bash
npm run verify:public
npm run lint
npm run build
git diff --check
```

Expected: 公开内容 contract、lint、build 全部通过。

Commit:

```bash
git add scripts/verify-public-content.mjs src/data/projects.ts src/data/siteContent.ts src/App.tsx
git commit -m "feat(website): establish editorial portfolio content"
```

---

## Task 2: 引入三项目真实展示资产与 provenance

**Files:**

- Create: `public/images/decision-research-agent/research-workspace-overview.png`
- Create: `public/images/decision-research-agent/research-evidence-review.png`
- Create: `public/images/decision-research-agent/research-blocked-recovery.png`
- Create: `public/images/night-voyager/advisor-workspace-overview.png`
- Create: `public/images/night-voyager/advisor-normal-path.png`
- Create: `public/images/night-voyager/advisor-blocked-recovery.png`
- Create: `public/images/multimodal-knowledge-engine/evidence-workspace-overview.png`
- Create: `public/images/multimodal-knowledge-engine/evidence-publication-search.png`
- Create: `public/images/multimodal-knowledge-engine/evidence-insufficient-recovery.png`
- Create: `public/images/project-showcase-manifest.json`
- Modify: `scripts/verify-public-content.mjs`

### Step 1: 从 canonical manifest 核对源资产

核对三个项目 manifest 中的 capture commit、文件名、尺寸和 SHA-256：

- DRA: `331ba24cc2ac8ab22bf9ea2867f6e6c7d6bc236e`
- Night Voyager: `01de938af2faa06f129be581154cb61f51eed5e4`
- MKE: `7880757bfdbc80fb684292ff552fddddfd858f1d`

任何文件或 hash 不匹配时停止该资产复制，不用重新截图或自行生成替代图。

### Step 2: 原字节复制公开 PNG

把九张 canonical PNG 原字节复制到网站 `public/images/<project>/`。不压缩、不裁切、不重绘，编辑式裁切只通过前端容器完成。

### Step 3: 建立网站 provenance manifest

`public/images/project-showcase-manifest.json` 每项记录：

```json
{
  "project": "decision-research-agent",
  "source_commit": "...",
  "source_path": "...",
  "public_path": "...",
  "sha256": "...",
  "width": 1600,
  "height": 1000,
  "state": "overview",
  "disclosure": "公开项目的确定性演示界面"
}
```

### Step 4: 让 verifier 校验真实资产

扩展验证器：

- manifest 精确包含九项；
- 项目顺序、state 和 public path 唯一；
- public 文件存在；
- SHA-256 与 manifest 一致；
- PNG IHDR 尺寸为 1600×1000；
- source commit 与项目数据一致；
- 不包含本机路径或私有目录。

### Step 5: 验证并提交资产阶段

Run:

```bash
npm run verify:public
git diff --check
```

Commit:

```bash
git add public/images scripts/verify-public-content.mjs src/data/projects.ts
git commit -m "feat(website): add verified project showcase assets"
```

---

## Task 3: 实现浅色编辑型首页与案例层级

**Files:**

- Modify: `src/App.tsx`
- Modify: `src/index.css`
- Modify: `src/components/NavigationBar.tsx`
- Rewrite: `src/components/Hero.tsx`
- Create: `src/components/ProjectImage.tsx`
- Create: `src/components/FlagshipCaseStudy.tsx`
- Create: `src/components/ComplementaryProjects.tsx`
- Create: `src/components/CapabilityMap.tsx`

### Step 1: 建立静态四层 surface ladder

在 `src/index.css` 定义 paper、ink、muted、line、DRA blue、NV green、MKE rust token，以及统一容器、标题、正文、按钮、focus 与 project stage 规则。

禁止：

- 全页深色背景；
- 网格、代码雨、节点图和抽象 AI 装饰；
- 多层玻璃卡片；
- 大量 pill、徽章或同权卡片墙；
- serif 大标题和夸张 letter-spacing。

### Step 2: 重写 Hero

Hero 桌面按约 42/58 组织：

- 左侧身份、主张、说明、两个 CTA；
- 右侧使用 DRA overview 原图作为单一主视觉；
- 产品图可通过宽画布、低饱和蓝灰色场、1px 边线、克制阴影形成层次；
- 不加假浏览器 chrome、假浮层或虚构 UI。

移动端重排为身份 → 标题 → 说明 → CTA → 产品图，不能把桌面两列直接缩小。

### Step 3: 实现 DRA 旗舰案例

`FlagshipCaseStudy` 使用三张 DRA 真实界面组织连续叙事：

1. 拆解任务；
2. 核对 Evidence；
3. 证据不足时停止交付。

桌面以宽幅主舞台 + 侧边阶段说明呈现；移动端按阅读顺序变成三段。每次只突出一个状态，不能把三张图压成画廊缩略图。

### Step 4: 实现 Night Voyager 与 MKE 互补案例

`ComplementaryProjects` 为两个案例使用不同节奏但同一系统：

- Night Voyager 重点展示事实、路线、人工确认；
- MKE 重点展示资料、来源、发布与失败隔离；
- 每个案例最多一张主图 + 两张状态缩略入口；
- 文案权重低于 DRA，但不能退化成普通项目卡。

### Step 5: 重写能力链

`CapabilityMap` 用三段清楚文字解释 Evidence → Research → Decision 的职责关系，并显式写明它们是三个互补项目，不声称生产集成。

### Step 6: 静态验证

Run:

```bash
npm run verify:public
npm run lint
npm run build
git diff --check
```

Commit:

```bash
git add src/App.tsx src/index.css src/components
git commit -m "feat(website): build light editorial project casebook"
```

---

## Task 4: 重写详情页、工作方式与结尾

**Files:**

- Rewrite: `src/components/ProjectDetailPage.tsx`
- Rewrite: `src/components/AINativeEngineering.tsx`
- Rewrite: `src/components/AboutSection.tsx`
- Rewrite: `src/components/ContactSection.tsx`
- Modify: `README.md`

### Step 1: 统一项目详情骨架

每个详情页按以下顺序使用同一数据模型：

1. 问题、角色和一句话判断；
2. 三张真实产品画面；
3. 正常工作如何推进；
4. 两至三项设计取舍；
5. 失败或证据不足时如何处理；
6. 本人完成的工作；
7. 技术关键词、源码、Release；
8. 折叠的当前边界。

技术关键词必须紧邻具体实现，不单独堆一面标签墙。

### Step 2: 自然表达 AI-native Engineering

使用“AI 用来加速实现，判断和结果由我负责”，用三段事实说明：问题与架构、实现与审查、验证与交付。避免“技术所有权”等生硬直译。

### Step 3: 重写 About 与 Contact

About 用用户真实经历解释“先理解工作，再决定 AI 能做什么”，不把一年时长或非传统背景写成防御性自述。Contact 只保留 GitHub、邮箱和项目入口，不加入未经确认的 PDF 简历公开下载。

### Step 4: 更新 README

README 说明新的页面目标、项目顺序、真实截图 provenance、内容验证和本地运行方式；不复制内部求职动机或 Career 路径。

### Step 5: 验证并提交

Run:

```bash
npm run verify:public
npm run lint
npm run build
git diff --check
```

Commit:

```bash
git add src/components/ProjectDetailPage.tsx src/components/AINativeEngineering.tsx src/components/AboutSection.tsx src/components/ContactSection.tsx README.md
git commit -m "feat(website): complete portfolio narrative and details"
```

---

## Task 5: 增加克制动效、交互状态与响应式细节

**Files:**

- Create: `src/components/SectionReveal.tsx`
- Modify: `src/components/FlagshipCaseStudy.tsx`
- Modify: `src/components/ComplementaryProjects.tsx`
- Modify: `src/index.css`

### Step 1: 实现 progressive enhancement

新增无依赖 `SectionReveal`：

- 初始 HTML 内容可见；
- JavaScript 激活后仅对进入视口的章节增加短距离 opacity / translate；
- IntersectionObserver 不可用时直接显示；
- `prefers-reduced-motion` 下无位移、无等待。

### Step 2: 旗舰项目状态交互

DRA 三个状态可以点击切换，桌面滚动时也可更新当前状态；状态按钮具备 `aria-pressed` 或对应语义，键盘可操作。截图切换使用 opacity / transform，不使用 blur/filter 动画。

### Step 3: 细节打磨

统一：

- hover / focus / active；
- 44px 最小交互目标；
- 导航在浅色内容和项目色场上的可读性；
- 1440、1280、1024、768、390、320 六档布局；
- 长中文标题的语义断行；
- 图片加载占位与错误回退；
- mobile 不出现横向滚动。

### Step 4: 验证并提交

Run:

```bash
npm run verify:public
npm run lint
npm run build
git diff --check
```

Commit:

```bash
git add src/components/SectionReveal.tsx src/components/FlagshipCaseStudy.tsx src/components/ComplementaryProjects.tsx src/index.css
git commit -m "fix(website): polish portfolio motion and responsive details"
```

---

## Task 6: 真实浏览器验收、视觉复审与本地收口

**Files:**

- Modify: `docs/superpowers/plans/2026-08-21-light-editorial-casebook-redesign.md`
- Create: `docs/assets/portfolio-home-desktop.png`
- Create: `docs/assets/portfolio-flagship-desktop.png`
- Create: `docs/assets/portfolio-project-detail-desktop.png`
- Create: `docs/assets/portfolio-home-mobile.png`

### Step 1: 完整本地验证

Run:

```bash
npm ci
npm run verify:public
npm run lint
npm run build
git diff --check
```

确认 `package-lock.json` 没有无关变化。

### Step 2: 浏览器矩阵

使用真实浏览器检查首页、三个详情页和 legacy route：

- 1440×1000；
- 1280×900；
- 1024×900；
- 768×1024；
- 390×844；
- 320×844。

逐项确认：

- 页面无横向 overflow；
- 可见交互目标 ≥44px；
- focus ring 清楚；
- console / page error 为 0；
- Hero 5 秒内能读出候选人、岗位和真实项目；
- DRA 视觉权重明显高于另外两个项目；
- 三个项目的标题、正常路径与失败路径和源事实一致；
- 动效关闭后内容、顺序和 CTA 不变；
- 真实项目图没有被裁成无法理解的装饰块。

### Step 3: 运行视觉设计复审

按以下问题做一次只针对最终实现的 design review：

- 是否仍像通用 SaaS 模板或 AI 生成作品；
- 真实 UI 是否是视觉主体；
- 浅色页面是否有足够层次但没有卡片墙；
- 文案是否自然、具体、能口头复述；
- 移动端是否是重新编排而非桌面压缩；
- 是否存在为“高级感”增加但没有信息职责的装饰。

同范围 finding 直接修复并重跑 targeted browser check；不重开已批准的产品方向。

### Step 4: 保存最终截图与关闭计划

保存三张实际实现截图：桌面 Hero、桌面 DRA 旗舰段、移动首页。更新本计划中的完成状态与实际验证摘要。

### Step 5: 最终 diff 与本地 commit

Run:

```bash
git status --short --branch
git diff --stat HEAD~4..HEAD
git diff --check
git log --oneline -8
```

确认没有本机路径、临时浏览器文件、token、cookie、构建目录或无关资产进入 diff。

Commit:

```bash
git add docs/superpowers/plans/2026-08-21-light-editorial-casebook-redesign.md docs/assets/portfolio-*.png
git commit -m "docs(website): close out editorial portfolio redesign"
```

## Completion Gate

只有以下条件全部满足，才可向用户展示最终结果：

- 新文案、项目顺序、真实截图与 provenance contract 全部通过；
- lint、build、公开内容验证成功；
- 六档浏览器矩阵与 reduced-motion 验证通过；
- 最终实现经过视觉复审且无同范围 P0/P1 finding；
- worktree clean；
- 所有改动已经形成可独立审查和回滚的本地语义原子 commit；
- 未 push、未创建 PR、未部署。

---

## Implementation Readback — 2026-08-21

### 实际完成

- 首页已经按浅色编辑型案例集重做，DRA 为旗舰，Night Voyager 与 MKE 为互补项目；不使用头像、人物素材、抽象 AI 装饰或虚构界面。
- 九张产品图均从三个公开项目的 canonical showcase 原字节复制，并由 `public/images/project-showcase-manifest.json` 锁定源提交、源路径、SHA-256 和 1600×1000 尺寸。
- 首页、三个项目详情页、canonical / legacy hash route、AI-native 工作方式、About、Contact 与 GitHub README 已同步完成。
- 动效保持 progressive enhancement；正常环境按章节进入，`prefers-reduced-motion` 下立即显示全部内容且无位移或等待。
- 设计复审关闭两个同范围 finding：详情页继承旧滚动位置、补充项目重复说明和微型可读性问题合并为 `FINDING-001`；移动详情画廊的隐性横向宽度问题为 `FINDING-002`。

### 最终验证

- `npm ci`：通过；没有修改依赖或 lockfile。
- `npm run verify:public`：通过。
- `npm run lint`：通过。
- `npm run build`：通过。
- `git diff --check`：通过。
- 真实 Chromium 在 1440×1000、1280×900、1024×900、768×1024、390×844、320×844 六档检查首页与三个详情页：全部横向 overflow 为 0、最小可见字号 12px、交互目标均不小于 44×44、每页恰好一个 `h1`、console / page error 为 0。
- DRA、Night Voyager、MKE 的状态切换均核对 `aria-pressed`、对应图片和失败说明；canonical route、旧 `#project/<slug>` 归一化与详情页回到顶部均通过。
- 在 1440 和 390 两档滚动加载全部页面图片后，所有项目图均完整读取为 1600×1000；无加载失败。
- Chromium `reducedMotion: reduce` 实测命中：全部 reveal 为 `opacity: 1`、`transform: none`，Hero 产品舞台动画为 `none`。
- 最终设计复审无剩余同范围 P0 / P1 finding；保留的视觉选择均承担信息层级或真实产品证明职责。

### 本地提交

- `12fe8a9` — `feat(website): build light editorial project casebook`
- `a297bd7` — `style(design): FINDING-001 — close portfolio QA gaps`
- `2a2f158` — `style(design): FINDING-002 — constrain mobile project gallery`

### 停止边界

- 未 push、未创建 PR、未部署、未新增依赖。
- `npm audit --omit=dev` 仍报告既有 `Vite → PostCSS → nanoid 3.3.16` 构建链告警；最终浏览器 bundle 不包含 `nanoid`、`postcss` 或 `vite`。本阶段按“无依赖变更”边界保留，后续由独立依赖维护处理。
- 当前阶段只保留后续用户基于最终成品提出的定向微调，不再重开整体视觉方向。
