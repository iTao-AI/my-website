export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white px-6 pb-16 pt-28 text-zinc-950 sm:px-12 lg:pb-24 lg:pt-36"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-700">
            AI Agent 工程师
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            我主要做 AI Agent 工程
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl">
            关注怎么把大模型能力转化成可追踪、可审计、
            可接入业务系统的工程链路。
          </p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-700">
            当前作品集围绕三个方向：深度研究 Agent、多模态 RAG-OCR、
            OpenClaw 多 Agent 工作流编排。
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              查看项目
            </a>
            <a
              href="https://github.com/iTao-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:border-zinc-950"
            >
              GitHub
            </a>
          </div>
        </div>

        <aside className="rounded-lg border border-zinc-200 bg-zinc-950 p-5 text-zinc-100 shadow-2xl">
          <div className="flex items-center gap-2 border-b border-white/10 pb-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-3 font-mono text-xs text-zinc-500">agent-run.json</span>
          </div>
          <dl className="mt-5 space-y-4 font-mono text-sm">
            <div className="flex items-center justify-between gap-6">
              <dt className="text-zinc-500">状态</dt>
              <dd className="text-emerald-300">已完成</dd>
            </div>
            <div className="flex items-center justify-between gap-6">
              <dt className="text-zinc-500">审计</dt>
              <dd>ResearchRun</dd>
            </div>
            <div className="flex items-center justify-between gap-6">
              <dt className="text-zinc-500">来源</dt>
              <dd>EvidenceLedger</dd>
            </div>
            <div className="flex items-center justify-between gap-6">
              <dt className="text-zinc-500">知识</dt>
              <dd>DocumentQualityReport</dd>
            </div>
            <div className="flex items-center justify-between gap-6">
              <dt className="text-zinc-500">路由</dt>
              <dd>5/5 验证</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}
