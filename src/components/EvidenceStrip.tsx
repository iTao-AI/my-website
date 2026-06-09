import { evidenceMetrics } from '../data/projects'

export function EvidenceStrip() {
  return (
    <section
      id="evidence"
      className="border-y border-zinc-200 bg-zinc-950 px-6 py-12 text-zinc-100 sm:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-7 max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-300">
            工程记录
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            用可复验结果说明当前工程完成度
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {evidenceMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-lg border border-emerald-400/20 bg-white/[0.03] p-5"
            >
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-300">
                {metric.label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {metric.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
