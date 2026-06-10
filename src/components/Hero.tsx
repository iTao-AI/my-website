import heroGraphic from '../assets/hero.png'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white px-6 pb-16 pt-28 text-zinc-950 sm:px-12 lg:pb-24 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:72px_72px] opacity-35" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-emerald-50/70" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-4xl">
          <p className="font-mono text-sm uppercase tracking-[0.22em] text-emerald-700">
            Yang Tao · AI Agent Engineer
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
            AI Agent
            <span className="block text-emerald-700">Engineering</span>
          </h1>
          <p className="mt-7 max-w-3xl break-words text-lg leading-8 text-zinc-700 sm:text-2xl sm:leading-9">
            把大模型能力转化成可追踪的任务执行、可验证的来源记录、
            可拒答的知识检索和可编排的业务流程。
          </p>

          <div className="mt-8 grid max-w-3xl grid-cols-1 gap-3 text-sm font-medium text-zinc-700 sm:grid-cols-3">
            <span className="border-l-2 border-emerald-600 bg-white/75 px-4 py-3">
              深度研究 Agent
            </span>
            <span className="border-l-2 border-emerald-600 bg-white/75 px-4 py-3">
              多模态 RAG-OCR
            </span>
            <span className="border-l-2 border-emerald-600 bg-white/75 px-4 py-3">
              多 Agent 工作流
            </span>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
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

        <aside className="relative overflow-hidden rounded-lg border border-zinc-200 bg-zinc-950 p-5 text-zinc-100 shadow-2xl">
          <img
            src={heroGraphic}
            alt=""
            loading="lazy"
            className="absolute -right-10 -top-12 w-44 opacity-55"
          />
          <div className="flex items-center gap-2 border-b border-white/10 pb-4">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-amber-400" />
            <span className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="ml-3 font-mono text-xs text-zinc-500">agent-system.trace</span>
          </div>
          <div className="relative mt-6">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-300">
              execution chain
            </p>
            <h2 className="mt-3 break-words text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              从任务到报告，每一步都能回看
            </h2>
          </div>
          <dl className="relative mt-7 space-y-4 font-mono text-sm">
            <div className="flex min-w-0 items-center justify-between gap-4">
              <dt className="shrink-0 text-zinc-500">01. run state</dt>
              <dd className="min-w-0 break-words text-right text-emerald-300">ResearchRun</dd>
            </div>
            <div className="flex min-w-0 items-center justify-between gap-4">
              <dt className="shrink-0 text-zinc-500">02. source log</dt>
              <dd className="min-w-0 break-words text-right">EvidenceLedger</dd>
            </div>
            <div className="flex min-w-0 items-center justify-between gap-4">
              <dt className="shrink-0 text-zinc-500">03. knowledge gate</dt>
              <dd className="min-w-0 break-words text-right">DocumentQualityReport</dd>
            </div>
            <div className="flex min-w-0 items-center justify-between gap-4">
              <dt className="shrink-0 text-zinc-500">04. workflow</dt>
              <dd className="min-w-0 break-words text-right">Router / HiTL</dd>
            </div>
          </dl>
          <dl className="relative mt-8 grid grid-cols-3 border-t border-white/10 pt-5 text-center">
            <div>
              <dt className="sr-only">Deep Search Agent 测试：46 个测试文件，325 项通过</dt>
              <dd>
                <span className="block text-2xl font-semibold text-white">325</span>
                <span className="mt-1 block text-xs text-zinc-500">passed · 46 files</span>
              </dd>
            </div>
            <div>
              <dt className="sr-only">RAG-OCR 测试：55 项通过，6 项因环境跳过</dt>
              <dd>
                <span className="block text-2xl font-semibold text-white">55</span>
                <span className="mt-1 block text-xs text-zinc-500">passed · 6 skipped</span>
              </dd>
            </div>
            <div>
              <dt className="sr-only">OpenClaw 路由验证</dt>
              <dd>
                <span className="block text-2xl font-semibold text-white">5/5</span>
                <span className="mt-1 block text-xs text-zinc-500">routes</span>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  )
}
