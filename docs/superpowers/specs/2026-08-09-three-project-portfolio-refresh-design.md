# 三项目作品集展示刷新设计

## 目标

把公开作品集首页收敛为三个稳定、可核验的工程项目展示：Night Voyager 作为旗舰案例，Decision Research Agent 与 Multimodal Knowledge Engine 作为精选项目。页面保持现有黑白绿、固定浅色画布、细网格、黑色 proof 区和宽幅留白，只调整信息架构、公开内容和项目详情呈现。

## 公开事实边界

- Night Voyager 的稳定公开事实绑定 Release `v0.1.5`；受控展示升级使用 public `main` commit `54b78ebda9fea263de68b5e3f623aef31c5ffe48` 的三个本地图片来源。
- Decision Research Agent 的稳定公开事实绑定 Release `v0.1.8`；依赖维护、post-release branch 和未绑定 Release 的变化不进入能力描述。
- Multimodal Knowledge Engine 的稳定公开事实绑定 Release `v0.1.6`；公开表述限于 Release 可核验的本地 Evidence、Publication、retrieval、provenance 与 MCP 边界，不声称 production OCR、任意媒体、向量检索或托管平台。
- 公开内容不出现 OpenClaw HR、DRA `v0.1.0`、MKE `Active Development` 作为当前项目身份或状态。
- 不编造 online demo、客户评价、录取结果、真实用户、ROI 或 production claim。
- 图片只由本地确定性处理生成，不使用联网图片生成；不删除仓库中既有旧视频二进制。

## 首页信息架构

首页固定为：

1. Navigation
2. Hero
3. Night Voyager Flagship Project
4. Capability Loop：MKE Evidence & Context → DRA Research & Delivery → NV Decision & Action，并明确每一层职责与 consumer seam，不暗示生产全链路已联通
5. Selected Projects：NV / DRA / MKE
6. Engineering Proof：normal / failure / reproducible
7. AI-native Engineering
8. About
9. Contact

Hero 在 5 秒内说明人物、地点和定位；在 20 秒内说明能把检索、工具、状态、人工审批与可靠交付组合成完整工作流。CTA 必须分别进入旗舰项目、三个项目和 GitHub，不能保留无目标的演示入口。

## 组件与数据设计

`src/data/projects.ts` 是公开项目事实的单一入口。`Project` 收敛为以下一等字段：

- `slug`、`title`、`description`、`summaryZh`
- `githubUrl`、`releaseUrl`、`releaseLabel`
- `status`、`stack`、`tags`
- `normalPath`、`failurePath`、`proofPoints`
- `visual`，用于项目卡片和详情页的本地视觉证据
- `problem`、`architecture`、`built`、`evidence`、`boundary`

视频、`videoUrl`、`videoPoster`、`demos` 和视频生成脚本不再属于当前展示 contract。项目卡片与详情页改为真实的 GitHub、Release、返回和 hash route 行为。

详情页顺序为：价值与视觉证据 → 关键判断 → normal/failure → 系统如何工作 → 3 条最强工程证明 → 技术栈/关键词 → 当前边界 → GitHub/Release/返回。

## 视觉与交互约束

- 继续使用黑、白、灰、emerald 的现有视觉语言；不引入暗色模式、主题切换、外部字体/图标、analytics、CMS、后端或新依赖。
- 旗舰项目使用真实 local WebP visual evidence；社交预览为确定性本地 SVG/PNG 资源，信息只来自已绑定公开事实。
- 所有可见交互至少 44px；链接必须有 hover、focus-visible 和 visited 区分；reduced-motion 下关闭 smooth scroll 与非必要 transition。
- 页面必须在 1440、1024、768、390、320 视口无横向溢出；图片默认 lazy loading，首屏关键资源除外。
- `#/projects/<slug>` 是 canonical route，`#project/<slug>` 继续通过 `history.replaceState` 兼容并归一化。

## 验收 contract

`scripts/verify-public-content.mjs` 以公开源文件、项目数据和本地资源为输入，至少验证：

- canonical slugs、标题、GitHub、Release 存在且顺序为 NV / DRA / MKE；
- 当前公开正文不存在 OpenClaw HR、DRA `v0.1.0`、MKE `Active Development`；
- Night Voyager 旗舰、AI-native engineering、normal/failure/reproducible 路径存在；
- 旧“观看演示”CTA、`npm run videos` 和 projects video references 消失；
- canonical 与 legacy hash route 均存在；
- private path、env、token、key 模式 fail closed；
- 本地图片、Release URL 和项目 URL 可解析。

测试只锁身份、结构、边界和路径，不锁死完整营销段落。完成后运行 `npm ci`、`npm run lint`、`npm run build`、`npm run verify:public`，并执行浏览器、responsive、focus、contrast、reduced-motion、dist base、favicon 和 social preview 检查。
