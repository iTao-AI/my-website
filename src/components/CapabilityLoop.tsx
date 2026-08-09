import { capabilityLayers } from '../data/projects'

export function CapabilityLoop() {
  return (
    <section id="capability-loop" className="border-y border-zinc-200 bg-zinc-50 px-6 py-20 text-zinc-950 sm:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-700">
            capability loop
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            三个项目，沿 consumer seam 组合
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            这是职责地图，不是生产全链路联通声明。每一层都能独立验证，也能把清晰的输入输出交给下一层。
          </p>
        </div>

        <div className="mt-12 grid gap-px border border-zinc-300 bg-zinc-300 lg:grid-cols-3">
          {capabilityLayers.map((layer, index) => (
            <article key={layer.title} className="relative bg-white p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono text-sm text-emerald-700">0{index + 1}</span>
                <span className="text-right text-sm font-medium text-zinc-500">{layer.label}</span>
              </div>
              <h3 className="mt-12 break-words text-2xl font-semibold tracking-tight [overflow-wrap:anywhere]">
                {layer.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600">{layer.description}</p>
              <p className="mt-6 border-t border-zinc-200 pt-4 font-mono text-xs leading-5 text-emerald-800">
                {layer.seam}
              </p>
              <p className="mt-3 text-sm font-medium text-zinc-800">{layer.proof}</p>
              {index < capabilityLayers.length - 1 ? (
                <span className="absolute -right-5 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center border border-zinc-300 bg-white font-mono text-lg text-emerald-700 lg:flex">
                  →
                </span>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
