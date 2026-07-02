import { systemLayers } from '../data/projects'

export function ProjectSystem() {
  return (
    <section id="system" className="bg-white px-6 py-20 text-zinc-950 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-700">
            系统架构
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            三个项目，对应三层 Agent 工程能力
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            三个项目分别对应外部研究服务、内部 Evidence engine、
            业务工作流编排三个工程层次，形成可组合的职责边界；不代表当前最新版本已经完整联通。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {systemLayers.map((layer, index) => (
            <article
              key={layer.title}
              className="relative rounded-lg border border-zinc-200 bg-zinc-50 p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-zinc-950 px-3 py-1 font-mono text-xs text-white">
                  0{index + 1}
                </span>
                <span className="text-sm font-medium text-emerald-700">
                  {layer.label}
                </span>
              </div>
              <h3 className="mt-8 break-words text-2xl font-semibold tracking-tight [overflow-wrap:anywhere]">
                {layer.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                {layer.description}
              </p>
              <p className="mt-6 inline-flex rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 font-mono text-xs text-emerald-800">
                {layer.proof}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
