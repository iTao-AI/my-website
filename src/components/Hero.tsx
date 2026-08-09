export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white px-6 pb-20 pt-28 text-zinc-950 sm:px-12 lg:pb-28 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 page-grid opacity-60" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-emerald-50/70" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-4xl">
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-emerald-700">
            上海 · Yang Tao
          </p>
          <h1 className="display-heading mt-5 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            AI Agent 工程师
            <span className="block text-emerald-700">AI Agent 应用开发</span>
          </h1>
          <p className="mt-8 max-w-3xl break-words text-lg leading-8 text-zinc-700 sm:text-2xl sm:leading-9">
            把大模型能力接入真实业务流程，让 Agent 的检索、工具调用、状态流转和人工决策可验证。
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg">
            关注 RAG / Evidence 与企业提效，从场景和架构完成实现、测试、审查与交付。
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#flagship"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            >
              查看旗舰项目
            </a>
            <a
              href="#projects"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-zinc-300 px-5 text-sm font-medium text-zinc-950 transition-colors hover:border-zinc-950"
            >
              查看三个项目
            </a>
            <a
              href="https://github.com/iTao-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-zinc-300 px-5 text-sm font-medium text-zinc-950 transition-colors hover:border-zinc-950"
            >
              GitHub
            </a>
          </div>
        </div>

        <aside className="relative overflow-hidden border border-zinc-200 bg-zinc-950 p-5 text-zinc-100 shadow-2xl">
          <div className="flex items-center gap-2 border-b border-white/10 pb-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-3 font-mono text-xs text-zinc-500">agent-system.trace</span>
          </div>
          <div className="relative mt-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-300">
              workflow / trace
            </p>
            <h2 className="mt-3 break-words text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              让判断有上下文，让交付能回看
            </h2>
          </div>
          <dl className="relative mt-7 space-y-4 font-mono text-sm">
            <div className="flex min-w-0 items-center justify-between gap-4">
              <dt className="shrink-0 text-zinc-500">01. context</dt>
              <dd className="min-w-0 break-words text-right text-emerald-300">Evidence</dd>
            </div>
            <div className="flex min-w-0 items-center justify-between gap-4">
              <dt className="shrink-0 text-zinc-500">02. action</dt>
              <dd className="min-w-0 break-words text-right">Tool Use / MCP</dd>
            </div>
            <div className="flex min-w-0 items-center justify-between gap-4">
              <dt className="shrink-0 text-zinc-500">03. state</dt>
              <dd className="min-w-0 break-words text-right">Agent Loop</dd>
            </div>
            <div className="flex min-w-0 items-center justify-between gap-4">
              <dt className="shrink-0 text-zinc-500">04. decision</dt>
              <dd className="min-w-0 break-words text-right">HITL / Delivery</dd>
            </div>
          </dl>
          <dl className="relative mt-8 grid grid-cols-3 border-t border-white/10 pt-5 text-center">
            <div>
              <dt className="sr-only">Night Voyager stable Release</dt>
              <dd>
                <span className="block text-2xl font-semibold text-white">NV</span>
                <span className="mt-1 block text-xs text-zinc-500">decision</span>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Decision Research Agent stable Release</dt>
              <dd>
                <span className="block text-2xl font-semibold text-white">DRA</span>
                <span className="mt-1 block text-xs text-zinc-500">research</span>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Multimodal Knowledge Engine stable Release</dt>
              <dd>
                <span className="block text-2xl font-semibold text-white">MKE</span>
                <span className="mt-1 block text-xs text-zinc-500">evidence</span>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}
