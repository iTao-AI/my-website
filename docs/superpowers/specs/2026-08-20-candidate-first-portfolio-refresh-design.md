# 候选人优先的个人作品集刷新设计

## 1. 目标

把当前偏工程说明书的长页面，改造成一个面向招聘场景的候选人主页：先让 HR 与业务负责人快速理解“杨涛能做什么”，再让技术面试官通过真实产品界面、项目案例、源码与 Release 继续核验。

本轮成功标准按阅读时长分层：

- **5 秒：** 看清姓名、目标岗位和一句话能力定位，并看到真实产品界面，而不是抽象终端或关键词墙。
- **30 秒：** 理解三个项目分别证明复杂任务执行、业务协作和多模态 Evidence 能力，知道它们是三个互补的独立项目。
- **3 分钟：** 能进入任一项目案例，理解问题、关键判断、正常与失败路径、个人贡献及公开证据。

首页的首要受众是 HR 与业务负责人，技术面试官是第二受众。项目详情页承担技术深挖，不把全部防御性边界和工程术语堆在首页。

## 2. 事实与公开边界

- 项目顺序与当前 AI Agent 主投简历保持一致：`Decision Research Agent -> Night Voyager -> Multimodal Knowledge Engine`。
- 项目能力、源码、Release 与展示图只来自对应公开仓库的当前可核验内容。
- 稳定能力表述继续绑定 DRA `v0.1.8`、Night Voyager `v0.1.5`、MKE `v0.1.6`；原生展示图可以来自之后的公开 presentation commit，但只能证明对应的静态展示状态，不能反向改写 Release 能力。
- DRA 主要证明 Agent Harness、长任务执行、工具使用、Evidence、Evaluation、人工审核与失败恢复。
- Night Voyager 主要证明业务建模、长期协作、Context / Memory、权限、HITL、任务状态与行动闭环。
- MKE 主要证明本地多模态资料处理、Publication、Retrieval、Evidence provenance、MCP 与拒答边界。
- 三个项目是互补的能力证据，不写成已经生产联通的统一平台。
- 不新增真实用户、录取结果、客户采用、ROI、SLA、线上生产部署或企业落地 claim。
- 不公开电话号码、私有 Career 路径、内部工作流名称、工具会话信息或未发布材料。
- 旧项目 hash 路由 `#project/<slug>` 继续归一化到 `#/projects/<slug>`；GitHub Pages `/my-website/` base 保持不变。

## 3. 核心叙事

### 3.1 一句话定位

首页主定位使用自然中文，不以关键词开场：

> 我把大模型能力做成可运行、可恢复、能经人工确认的 Agent 系统。

辅助说明只补充岗位匹配与技术范围：

> 聚焦复杂任务执行、RAG / Evidence 与业务工作流，独立完成从需求拆解、系统设计到测试、审查和公开交付。

标题只出现一次 `AI Agent 工程师`，不再使用当前 `AI Agent 工程师 / AI Agent 应用开发` 的四行重复大字。

### 3.2 三项目角色

首页不再反复使用 `consumer seam`、`normal / failure / reproducible` 等内部审查语言，而是把三个项目翻译成招聘者容易理解的责任：

1. **Decision Research Agent — 复杂任务如何可靠执行**
2. **Night Voyager — Agent 如何进入长期业务协作**
3. **Multimodal Knowledge Engine — 资料如何变成可引用 Evidence**

工程术语保留在项目短标签与详情页，用于关键词命中，但不打断第一层阅读。

## 4. 首页信息架构

首页从当前八个长章节收敛为六个章节。

### 4.1 Navigation

- 左侧：`Yang Tao` 与小号 `AI Agent Engineer`。
- 右侧：`项目`、`能力`、`关于`、`GitHub`。
- 桌面端使用单一半透明浅色导航面；这是全站唯一允许使用 `backdrop-filter` 的区域。
- 移动端保留姓名、项目、关于、GitHub 四个入口，不增加汉堡菜单。

### 4.2 Hero：候选人定位 + 真实产品舞台

桌面端采用约 `42 / 58` 分栏：

- 左侧包含地点、姓名、唯一职位标题、一句话定位、两行说明和两个 CTA。
- 主 CTA 为 `查看项目案例`，次 CTA 为 `GitHub`；不提供没有明确目的的演示按钮。
- 右侧为真实产品舞台，默认展示 DRA 的 `research-workspace-overview.png`。
- 产品舞台上方提供三个短标签：`复杂任务执行`、`长期业务协作`、`多模态 Evidence`。点击后切换 DRA、NV、MKE 的真实首张展示图；不自动轮播。
- 产品图保持真实 1600×1000 比例，不添加虚构浏览器地址栏、终端窗口或透视变形。
- 产品舞台下方显示一条简短证明：`独立开发 · 公开源码 · 稳定 Release`。

移动端重排为定位、CTA、标签、完整产品图；首个 1000px 视口内必须同时看到一句话定位和至少半张真实产品界面。

### 4.3 Selected Work：三个项目案例

- DRA 使用一个横向主案例，产品图约占 `58%`，文案约占 `42%`。
- Night Voyager 与 MKE 使用两个等宽次案例，但仍各有一张可读的原生界面。
- 每个案例只保留：解决的问题、一项最关键判断、三个能力标签，以及 `查看案例` / `GitHub`。
- Release 版本不作为首页视觉主信息，只在详情或辅助元数据中出现。
- 不再在首页重复三套 normal / failure / reproducible 卡片。

### 4.4 Capability Map：我能负责什么

把当前 `CapabilityLoop` 与 `EngineeringProof` 合并为一张紧凑能力图：

```text
资料与 Evidence -> 研究与工具执行 -> 人工确认与业务行动
       MKE                 DRA                 Night Voyager
```

每一层只回答两个问题：能处理什么、我负责什么。图下注明三个项目独立成立，避免暗示生产集成。

### 4.5 AI-native Engineering：AI 提速，判断由我负责

- 保留 AI Coding 优势，但不使用“技术所有权”等生硬表达。
- 用四个阶段代替当前六格流程：`定义问题 -> 设计与实现 -> 验证与修复 -> 发布与复盘`。
- 正文说明 Codex、Claude Code 用于探索和实现；本人负责需求边界、架构取舍、代码审查、异常诊断、验收与最终交付。
- 不公开 Career 内部编排、模型档位、token 使用或私有审核流程。

### 4.6 About + Contact

- About 使用第一人称自然中文，连接自动化本科、留学咨询、经营管理经历与 Agent 产品理解。
- 不强调“一年多”作为竞争优势，也不把转型经历写成自我辩解。
- Contact 与 About 合并成一个收尾章节，保留 Email、GitHub 与三个项目入口。

## 5. 项目详情页

三个详情页使用同一叙事骨架，但内容不机械同构。

1. **项目定位：** 一句话说明解决的问题与个人角色。
2. **真实产品画廊：** 三张原生截图分别覆盖概览、关键证明、失败或恢复路径；移动端横向可控滚动，桌面端使用显式标签切换，不自动播放。
3. **为什么这样设计：** 三项最重要的工程或产品判断，用自然语言解释取舍。
4. **系统如何工作：** 用现有结构化数据展示流程与核心边界，不新增虚构架构图。
5. **正常与失败路径：** 合并为一张对照，不在三个页面重复固定模板文案。
6. **我完成的工作：** 只保留最有辨识度的三至五项个人动作。
7. **技术与证据：** 关键词、GitHub、稳定 Release、公开 README / docs 入口。
8. **边界说明：** 使用折叠式次级披露，保留真实性但不压过项目价值。

## 6. 视觉系统

### 6.1 视觉性格

目标是“成熟、克制、可信的 AI 工程作品集”，不是通用 SaaS 营销页、内部工程控制台或设计实验。

- **真实产品优先：** 截图是页面最大的视觉对象。
- **候选人优先：** 姓名、定位和个人判断始终比版本号、测试数量和内部术语更高一级。
- **少而有层次：** 通过尺寸、留白、深浅表面与边缘对比建立层次，不依赖卡片墙、发光、3D 或大量毛玻璃。

### 6.2 色彩与材质

- 页面画布：暖灰白 `#F6F5F1`。
- 主文字：深墨色 `#101820`。
- 次文字：灰蓝 `#56636D`。
- 品牌强调：克制的深青绿，建议在 `#087568` 附近校准。
- 产品舞台：深墨蓝 `#0B1720`，用于承托三套不同色彩的真实产品截图。
- 边线：低对比暖灰，不继续使用覆盖全页的细网格。
- 状态色只来自产品截图或交互状态，不把红黄绿装饰点当成品牌元素。

### 6.3 字体与排版

- 使用跨平台系统字体栈，中文优先 `PingFang SC / Microsoft YaHei / Noto Sans CJK SC`，不依赖境外字体 CDN。
- 首页 H1 桌面端控制在约 `64–76px`，移动端约 `42–50px`；不再使用占满两屏的重复 serif 标题。
- 英文项目名可保留更紧的字距，但中文正文不使用过度 letter-spacing。
- 正文最大阅读宽度约 `42em`，首层说明不超过三行。

### 6.4 间距与容器

- 页面最大内容宽度约 `1280px`。
- 桌面章节垂直间距约 `112–144px`，移动端约 `72–88px`。
- 产品截图容器使用小圆角、细边缘高光和一层克制阴影；不叠加多层玻璃卡片。
- 首页完整长度目标约为当前页面的 `55–65%`，避免重复说明造成长页疲劳。

## 7. 交互与响应式

- Hero 产品标签、详情画廊标签均由用户主动切换，不自动轮播。
- 切换只使用 `opacity + transform` 的短过渡；`prefers-reduced-motion` 下直接切换终态。
- 所有交互目标至少 `44×44px`，键盘 focus 清晰可见。
- 断点至少验证 `1440`、`1024`、`768`、`390`、`320`。
- `768px` 不压缩为三列小卡片，而是重排为单列产品图与双列文字。
- 页面不依赖 hover 才能看见关键信息。

## 8. 展示资产与来源

从三个公开项目当前主分支引入原生展示图的本地 WebP 派生版本：

- DRA：`research-workspace-overview`、`research-evidence-review`、`research-blocked-recovery`。
- Night Voyager：`advisor-workspace-overview`、`advisor-normal-path`、`advisor-blocked-recovery`，并保留移动端图用于响应式核验，不作为桌面画廊第四主图。
- MKE：`evidence-workspace-overview`、`evidence-publication-search`、`evidence-insufficient-recovery`。

实现时固定读取现有公开 manifest 中的来源身份：DRA capture commit `331ba24cc2ac8ab22bf9ea2867f6e6c7d6bc236e`，Night Voyager capture commit `01de938af2faa06f129be581154cb61f51eed5e4`，MKE capture commit `7880757bfdbc80fb684292ff552fddddfd858f1d`。若源仓库 later main 已前进，不自动把截图来源改写成 later HEAD。

新增一个 public-neutral 资产 manifest，记录项目、上述源仓库公开 commit、源路径、原始尺寸、派生尺寸与 SHA-256。网页只消费本地资源，不跨仓库运行时读取，也不把截图写成生产结果。

## 9. 代码与组件边界

- `src/data/projects.ts` 继续作为公开项目事实单一入口，扩展为三张画廊资源和面向招聘者的短字段。
- 新增或重构 `HeroProductStage`、`ProjectCaseStudy`、`ProjectGallery` 与 `CapabilityMap`；每个组件只处理一种展示职责。
- 删除首页对 `EngineeringProof` 的独立渲染，并将必要内容并入项目案例与 Capability Map；不需要立即删除兼容组件文件，先确认无引用再裁决。
- `ProjectDetailPage` 只消费项目数据，不在 JSX 中复制三套项目事实。
- 不引入新依赖、CMS、analytics、图标库、外部字体、路由框架、动画库或后端。

## 10. 验收

### 10.1 内容与事实

- 首页项目顺序为 DRA、Night Voyager、MKE。
- 三个项目均有来自当前公开仓库的真实原生截图和可核验来源。
- 首屏没有模拟终端、虚构浏览器、旧 Night Voyager 家庭协作图或重复职位标题。
- 不出现旧项目、过时版本身份、私有路径、生产采用、真实用户或业务结果 claim。
- canonical / legacy hash route、GitHub、Release 与 GitHub Pages base 均保持可用。

### 10.2 视觉与交互

- 5 秒内能识别候选人、岗位和真实项目产品界面。
- 首页三个项目不再被 capability、selected projects、engineering proof 重复讲三次。
- 在 `1440`、`1024`、`768`、`390`、`320` 无横向溢出。
- 桌面与移动端的产品图文字仍可辨认，不把整张工作台压缩成不可读缩略图。
- 键盘、focus、对比度、触控目标和 reduced-motion 通过。

### 10.3 工程验证

- `npm ci`
- `npm run lint`
- `npm run build`
- `npm run verify:public`
- `git diff --check`
- 浏览器检查首页、三个详情页、legacy hash、外部链接、控制台、响应式和构建后 Pages base。

## 11. 非目标与停止边界

- 本轮不增加博客、文章系统、登录、留言、在线聊天、下载简历、真实在线 demo 或动态后端。
- 不重新设计三个公开项目本身，也不修改其源码、README 或 Release。
- 不制作演示视频、PPT、PDF 作品集或新的 AI 图片。
- 不为追求“高级感”继续探索平行视觉方向；按本设计实施并通过浏览器审查后停止。
- 如果真实项目图在页面中无法形成足够视觉层次，只允许调整裁切、容器比例、背景与排版，不回到模拟 UI 或虚构产品图。
