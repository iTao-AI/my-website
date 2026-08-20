# 亮色编辑型 AI Agent 作品集重设计

## 1. 决策与适用范围

本设计把个人网站从“技术概念主页”改为“候选人主导、真实项目作为视觉主体的亮色编辑型作品集”。

本文件取代
[`2026-08-20-candidate-first-portfolio-refresh-design.md`](./2026-08-20-candidate-first-portfolio-refresh-design.md)
中的首页构图、视觉系统、文案与交互动效；旧文件中以下事实边界继续有效：

- 项目顺序为 Decision Research Agent、Night Voyager、Multimodal Knowledge Engine；
- 项目能力、Release、截图和链接只来自公开且可核验的来源；
- 三个项目是互补的独立项目，不写成已经生产联通的一套平台；
- canonical / legacy hash route 与 GitHub Pages `/my-website/` base 保持兼容；
- 不新增真实客户、录取结果、ROI、SLA、生产部署或企业采用 claim。

本轮按照固定顺序推进：

```text
文案与页面叙事
-> 真实 UI 的编辑式呈现
-> 动效、空间层次与高级感
-> 响应式、可访问性和细节收口
```

不得把四个阶段同时混改。每一层都必须在上一层成立后再增加复杂度。

## 2. 目标与判断标准

网站不是通用 AI SaaS 官网，也不是工程控制台。它首先是杨涛的 AI Agent 工程作品集，用于让招聘方快速判断：

1. 候选人是谁，主要做什么；
2. 三个项目分别解决了什么问题；
3. 候选人在其中做了哪些判断和实现；
4. 项目是否有真实界面、源码、Release 和失败路径可继续核验。

阅读预算：

| 时间 | 读者应得到的结论 |
|---|---|
| 5 秒 | 杨涛是 AI Agent 工程师，页面展示的是真实项目，不是抽象概念图 |
| 30 秒 | DRA 是旗舰工程项目；Night Voyager 与 MKE 分别补充业务协作和多模态 Evidence 能力 |
| 3 分钟 | 能理解每个项目的问题、个人判断、工作过程、失败边界和公开证据 |

静态页面必须先成立。动效关闭、截图静止或设备性能较弱时，信息层级仍然完整。

## 3. 文案系统

### 3.1 语言原则

公开文案采用自然中文的因果顺序：

```text
具体问题
-> 为什么普通问答或一次生成不够
-> 我做了什么判断
-> 系统怎样推进工作
-> 人在什么位置确认
-> 有什么公开证据可以继续核验
```

《深入理解 AI Agent：设计原理与工程实践》提供概念组织方式，但不直接复制书中句子。文案吸收以下系统视角：

- 模型负责判断，Context 决定它实际看见什么，Tools 决定它能采取什么行动；
- Harness 负责组织上下文、工具、循环、状态、权限、验证与纠正；
- Evidence、Evaluation 和人工确认决定结果能否进入下一步，而不只看模型是否生成了一段完整文字；
- 记忆不是保存全部聊天记录，而是把长期有用、可更新、可审查的信息带入后续决策；
- 多模态资料只有带着来源和位置进入检索，才适合作为 Agent 的可引用上下文。

这些技术含义优先翻译成业务语言。首页首层避免出现 `consumer seam`、`projection`、`authority`、
`manifest`、`synthetic fixture`、`normal / failure / reproducible` 等内部审查词。`Agent Harness`、
`Agent Loop`、`MCP`、`HITL`、`RAG`、`Evaluation` 等岗位关键词进入项目详情和技术证据层，不堆在 Hero。

每段文案都必须能自然朗读；删除连续名词、英文直译、无主语被动句和为了显得严谨而写出的防御性长句。

### 3.2 Hero 定稿候选

身份层：

```text
杨涛
AI Agent 工程师 · 上海
```

主标题：

> 把 AI Agent 做成能推进工作的系统。

辅助说明：

> 围绕研究交付、长期决策和多模态资料处理，我独立完成了三个项目：让模型获得合适的上下文和工具，也让过程、证据与人工判断有清楚的边界。

CTA：

- 主按钮：`查看旗舰项目`
- 次按钮：`GitHub`

Hero 不重复职位，不显示测试数量、Release 版本、内部架构词或第三个无明确目的的按钮。PDF 简历包含个人联系信息，未经单独确认不作为公共下载入口。

### 3.3 三个项目的第一层表达

#### Decision Research Agent

标签：`旗舰工程项目 · 研究与交付`

标题：

> 让复杂研究不只给出答案，也留下证据和判断过程。

说明：

> 系统把开放问题拆成可执行的研究步骤，通过工具收集资料，再把结论、引用和运行状态交给人工复核。证据不足或流程异常时，结果不会被继续当成可交付答案。

首层只突出三个动作：`拆解任务`、`核对 Evidence`、`审核后交付`。

#### Night Voyager

标签：`业务协作项目 · 长期留学决策`

标题：

> 把一次咨询，变成可以持续跟进的留学决策流程。

说明：

> 学生、家长和顾问关心的条件并不总是一致。Night Voyager 把已确认的信息、路线比较、风险和下一步放进同一条流程，让 Agent 负责整理与推进，关键判断仍由顾问和客户确认。

首层只突出三个动作：`确认事实`、`比较路线`、`形成行动计划`。

#### Multimodal Knowledge Engine

标签：`多模态 Evidence · 本地知识入口`

标题：

> 让本地资料先变成可引用的证据，再交给 Agent 使用。

说明：

> MKE 处理 PDF、音频和受控短视频，把内容连同页码、时间戳和来源信息编译为可检索的 Evidence。只有成功发布的内容进入检索和调用范围，失败或不完整的结果会被隔离。

首层只突出三个动作：`处理资料`、`保留来源`、`受控检索`。

### 3.4 能力与工作方式

能力章节标题：

> 从信息进入，到任务推进，再到人工确认。

三层只表达职责，不暗示三个项目已生产集成：

1. MKE：把资料变成可定位、可引用的 Evidence；
2. DRA：围绕任务组织上下文、工具和研究过程；
3. Night Voyager：把确认后的判断接入长期业务流程。

AI-native Engineering 标题：

> AI 提高实现速度，判断和结果由我负责。

说明：

> 我长期使用 Codex、Claude Code 参与方案探索、代码实现和验证；问题定义、架构取舍、边界设计、代码审查、故障定位和最终验收由我负责。

About 候选：

> 我本科自动化，之后做过留学咨询、销售和经营管理。这些经历让我习惯先理解一项具体工作怎样运转，再判断 AI 能在哪里真正发挥作用。转向 AI Agent 开发后，我把这种方式延续到三个项目中：先定义流程和边界，再决定模型、工具与工程实现。

### 3.5 文案验收

- 首页每个段落只承担一个信息任务，不重复解释同一项目；
- 项目首层按“问题 -> 推进方式 -> 人工边界”组织，不按技术栈罗列；
- 技术关键词在详情页出现时必须紧邻具体实现或取舍；
- 稳定 Release 作为核验入口，不作为视觉卖点；
- 公开边界放在详情页末级披露，不压过已经成立的项目价值；
- 删除“赋能、闭环、抓手、全链路、技术所有权、深度融合”等空泛或生硬表达；
- 不使用书中、第三方网站或其他候选人的原句。

## 4. 信息架构

首页收敛为六个章节：

1. **Navigation**：姓名、项目、关于、GitHub；
2. **Hero**：候选人定位与 DRA 真实产品舞台；
3. **DRA Flagship Case**：全宽旗舰案例与三个连续工作状态；
4. **Complementary Work**：Night Voyager 与 MKE 双案例；
5. **Capability + AI-native Engineering**：能力链与工作方式；
6. **About + Contact**：背景、联系和三个公开项目入口。

详情页统一使用以下骨架，但不复制机械文案：

1. 项目问题、个人角色与一句话判断；
2. 三张真实产品画面；
3. 一次正常工作怎样推进；
4. 最重要的两至三项设计取舍；
5. 失败或证据不足时怎样处理；
6. 本人完成的工作；
7. 技术栈、源码、Release 与可复验入口；
8. 折叠的当前边界。

## 5. 视觉方向：Light Editorial Casebook

### 5.1 页面性格

目标是专业、清楚、有编辑判断的工程作品集。高级感来自比例、留白、真实产品、文字节奏和材质层级，而不是黑色背景、抽象 AI 图形或大量特效。

固定原则：

- 暖白 / 浅灰占页面绝大部分；
- 候选人身份先建立，真实项目界面是第一视觉主体；
- DRA 的视觉权重显著高于另外两个项目；
- 同一屏只保留一个主要视觉对象；
- 不使用头像、个人 Logo、人物素材、星空、节点图、代码雨、模拟终端或假浏览器；
- 不把三张高密度工作台缩成同权卡片。

### 5.2 色彩与字体

基础 token：

```text
paper          #F4F3EF
paper-strong   #FBFAF7
ink            #161A1C
muted          #5A6267
line           rgba(22, 26, 28, 0.14)
line-strong    rgba(22, 26, 28, 0.23)
DRA blue       #1D5FA8
DRA field      #DCE8EF
NV green       #1F6762
MKE rust       #AD5F42
```

实现使用本地可用系统字体栈，不依赖境外字体 CDN。中文正文优先 `PingFang SC / Microsoft YaHei / Noto Sans CJK SC`；英文和数字使用与中文高度协调的系统 sans。不得用 serif 大标题重新制造杂志模板感。

标题靠字号、行距、行宽和位置建立性格，不使用大幅 letter-spacing。正文最大阅读宽度约 `42em`。

### 5.3 空间层次

统一采用四层 surface ladder：

```text
暖白页面
-> 低饱和项目色场
-> 真实产品主体
-> 最多两个抬高的关键细节
```

每层都有明确职责：

- 页面层提供阅读节奏；
- 项目色场区分案例，不承载虚构 UI；
- 产品主体保持真实结构与可识别信息；
- 抬高细节只放大当前章节真正要解释的 Evidence、审核或恢复状态。

深度优先使用尺寸差、遮挡、边缘高光、1px 边线和一层克制阴影。`backdrop-filter` 只允许用于导航，或经浏览器对比证明不可替代的单个局部表面；不得扩展成玻璃卡片墙。

### 5.4 首屏与项目布局

桌面 Hero 约为 `42 / 58`：

- 左侧是身份、主张、说明和两个 CTA；
- 右侧是 DRA `research-workspace-overview` 的大型产品舞台；
- Evidence 细节可以部分覆盖主图，但不得遮住任务阶段和人工审核信息；
- 首屏下缘露出旗舰案例的下一段，避免产品画面成为装饰封面。

DRA 使用全宽编辑式案例。桌面端可以采用左侧短叙事、右侧稳定产品视口；Night Voyager 与 MKE 在下一章节形成不等高的双案例，而不是两张完全相同的卡片。

移动端按“身份 -> 主张 -> CTA -> 产品主体 -> 项目说明”重新排版。产品主体必须在首个 `844–1000px` 内出现，不能把桌面画面压成不可读缩略图。

### 5.5 公开参照的机制边界

实现只迁移成熟网站的设计机制，不复制其资产、字体、组件、客户叙事或具体版式：

- [Apple MacBook Air](https://www.apple.com/macbook-air/)：同一屏只有一个主要产品对象，每个章节只讲一个状态，静态关键帧先成立；
- [Attio](https://attio.com/)：首屏立即给出大比例真实产品证明，后续叙事维持稳定产品视口；
- [Harvey](https://www.harvey.ai/)：暖白编辑排版、克制的专业服务语气和产品空间层次；
- [Mike Matas](https://mikematas.com/) 与 [Jonathan Wang](https://www.jonathanwang.studio/)：让项目本身成为页面主角，身份信息简洁但清楚；
- [DeepSeek Harness](https://deepseek.com/harness/)：只借用“一个核心机制对应一张可读画面”的详情页纪律，不采用其深色工程官网风格。

任何参照若与真实项目画面、中文阅读节奏或候选人身份发生冲突，以本设计的作品集目标为准。

## 6. 真实 UI 的编辑式呈现

### 6.1 来源资产

网站只使用三个公开项目已经冻结的原生展示资产：

- DRA capture commit `331ba24cc2ac8ab22bf9ea2867f6e6c7d6bc236e`：
  `research-workspace-overview`、`research-evidence-review`、`research-blocked-recovery`；
- Night Voyager capture commit `01de938af2faa06f129be581154cb61f51eed5e4`：
  `advisor-workspace-overview`、`advisor-normal-path`、`advisor-blocked-recovery`，以及移动端 overview；
- MKE capture commit `7880757bfdbc80fb684292ff552fddddfd858f1d`：
  `evidence-workspace-overview`、`evidence-publication-search`、`evidence-insufficient-recovery`。

实现时从公开 manifest 读取文件、尺寸、状态和 SHA-256，生成网站自己的 public-neutral asset manifest。网站不根据项目 later `main` 自动替换截图。

### 6.2 允许的处理

- 无损复制源图，或生成保持比例和清晰度的本地 WebP；
- 使用 CSS `object-position`、clip 或明确的派生裁切突出真实区域；
- 在同一张源图上最多放大两个真实细节；
- 在页面外层添加项目色场、标题、标注和来源说明；
- 为移动端选择更窄的真实区域，或使用项目已经提供的移动端捕获。

### 6.3 禁止的处理

- 重绘、补写或生成截图中不存在的产品数据和控件；
- 把不同运行、不同案例或不同时间点拼成一次连续业务结果；
- 给截图添加虚构浏览器地址、客户名称、学校、人物、指标或录取结果；
- 透视变形、强模糊、强发光或遮盖到无法核对原始界面；
- 用 AI 生成图替代真实项目界面。

## 7. 动效与高级感

动效只解释层级和过程，不承担装饰。

### 7.1 三类允许的动效

1. **Hero 进入**：文案与产品主体分别使用 `opacity + translateY(10–16px)` 进入，时长约 `420–560ms`；两个真实细节以短延迟落位。
2. **DRA 章节推进**：桌面端使用稳定产品视口，随三个短叙事节点切换 overview、Evidence review、blocked recovery；移动端改为线性三段，不使用 sticky 长页。
3. **局部反馈**：链接、按钮和项目入口只使用颜色、边线与最多 `2px` 位移；不使用弹跳、磁吸、追随鼠标或持续浮动。

### 7.2 动效边界

- 不引入动画库；优先 CSS 与少量 `IntersectionObserver`；
- 不做自动轮播、粒子、无意义视差、无限循环或滚动劫持；
- 单次转场不超过约 `600ms`，同一屏不同时运行多组竞争动效；
- `prefers-reduced-motion` 下所有内容直接呈现终态；
- 动效失败、JavaScript 禁用或资源未加载时，内容顺序仍然正确。

### 7.3 高级感验收

- 产品主体的面积、对比和细节清晰度明显高于装饰层；
- 页面至少有“背景、项目色场、产品主体、细节”三个可辨深度，不靠玻璃和阴影数量；
- 1440px 截图不呈现模板化卡片墙；390px 不退化为长篇后台截图列表；
- 无效装饰移除后，页面仍能靠构图和真实产品成立。

## 8. 组件与数据边界

`src/data/projects.ts` 继续作为公开项目事实单一入口，但把内部审查字段与面向招聘者的第一层字段分开：

- `headline`、`intro`、`readerActions`：首页自然表达；
- `gallery`：源项目、capture commit、source path、hash、状态、alt 与裁切策略；
- `decisions`：详情页两至三项关键判断；
- `normalFlow`、`blockedFlow`：自然中文的正常和受阻路径；
- `proofLinks`：GitHub、Release 与公开文档；
- `boundary`：末级真实性披露。

组件职责：

- `Hero` / `HeroProductStage`：身份与旗舰产品主体；
- `FlagshipCaseStudy`：DRA 三状态叙事；
- `ProjectCaseStudy`：Night Voyager 与 MKE；
- `ProjectGallery`：真实资产、切换、alt 与来源；
- `CapabilityMap`：三个项目的互补关系；
- `ProjectDetailPage`：统一骨架，不复制项目事实；
- `AboutSection`：背景与 AI-native 工作方式；
- `NavigationBar` / `ContactSection`：导航与收尾。

不引入 CMS、路由框架、动画库、图标库、外部字体、后端或新依赖。

## 9. 分阶段实施与门禁

### Phase 1：文案与内容 contract

- 更新三项目面向招聘者的字段；
- 为 Hero、项目顺序、标题、公开链接、禁用词和真实性边界建立 RED -> GREEN contract；
- 在无新视觉代码的情况下审查整页文字，确认自然、无重复、可朗读。

Exit：文案单独阅读已经能说明候选人价值与三项目差异。

### Phase 2：视觉基础与 DRA 旗舰

- 落地页面 token、排版、Hero、DRA 产品舞台和真实资产 manifest；
- 对齐已批准的 desktop Hero、DRA flagship 与 mobile Hero 关键帧；
- 静态画面通过后才进入动效。

Exit：在 1440、768、390 下，首屏和 DRA 章节不依赖动效已经成立。

### Phase 3：两项补充项目与详情页

- 完成 Night Voyager、MKE 编辑式案例；
- 重构三个项目详情页；
- 保留 canonical / legacy route 和全部公开核验入口。

Exit：三个项目各自可理解，层级不同但视觉语言一致。

### Phase 4：动效与空间层次

- 加入 Hero 进入、DRA 三状态推进和局部反馈；
- 完成 reduced-motion、键盘、触控和性能回归；
- 用实际浏览器截图判断层次，不用 CSS 参数数量代替视觉验收。

Exit：动效使工作过程更易理解，关闭后不损失信息。

### Phase 5：细节收口

- 校准中文断行、英文项目名、按钮、焦点、visited link、图片加载和空白节奏；
- 检查 1440、1280、1024、768、390、320；
- 完成构建产物、GitHub Pages base、控制台和外链回归。

Exit：无新的同范围视觉 finding，且没有为了微调重新打开平行设计方向。

## 10. 验收

### 内容与事实

- 首页 5 秒内可识别姓名、岗位和真实项目；
- DRA、Night Voyager、MKE 的问题和差异无需理解内部术语即可读懂；
- 项目关键词与真实实现相邻，不形成关键词墙；
- 所有项目图、GitHub、Release、版本和能力可回到公开来源；
- 不出现旧 OpenClaw HR 主叙事、过时版本、私有路径或未验证 claim。

### 视觉与交互

- 首屏、DRA、Night Voyager、MKE 和详情页使用同一亮色编辑语言；
- 真实项目 UI 是视觉主体，三项目不是同权卡片；
- `1440`、`1280`、`1024`、`768`、`390`、`320` 无横向溢出；
- 可见文字不小于 `12px`，触控目标不小于 `44×44px`；
- 关键文字对比度符合 WCAG AA，键盘 focus 清晰；
- `prefers-reduced-motion`、资源失败和静态终态可用；
- 浏览器控制台无 error，图片无明显布局抖动。

### 工程验证

- `npm ci`
- `npm run lint`
- `npm run build`
- `npm run verify:public`
- `git diff --check`
- 构建后浏览器核验首页、三项目详情、legacy hash、外链和 Pages base。

## 11. 非目标与停止边界

- 不修改 DRA、Night Voyager 或 MKE 源码、README、Release 和产品 UI；
- 不增加博客、登录、聊天、后端、analytics、在线 demo、视频、PPT 或 PDF 作品集；
- 不公开包含个人联系方式的简历 PDF，除非后续单独授权；
- 不生成头像、人物照片、品牌 Logo 或新的 AI 图片；
- 不重新探索暗色、抽象 AI、黑金、玻璃墙、3D 或 SaaS 营销页方向；
- 不因为“高级感”增加新依赖或不可解释的动效；
- 完成本文件的五个 Phase、通过浏览器与公开事实验收后停止，后续只接受真实招聘反馈驱动的修改。
