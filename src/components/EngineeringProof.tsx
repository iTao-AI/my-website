import type { Project, ProjectPath } from '../data/projects'
import { evidenceMetrics, projects } from '../data/projects'

const pathFields: Array<keyof Pick<Project, 'normalPath' | 'failurePath' | 'reproduciblePath'>> = [
  'normalPath',
  'failurePath',
  'reproduciblePath',
]

function PathCell({ path }: { path: ProjectPath }) {
  return (
    <div className="min-w-0 border-t border-white/15 pt-4">
      <p className="font-mono text-xs uppercase tracking-[0.15em] text-emerald-300">
        {path.label}
      </p>
      <h3 className="mt-3 break-words text-lg font-semibold text-white [overflow-wrap:anywhere]">
        {path.title}
      </h3>
      <p className="mt-2 break-words text-sm leading-6 text-zinc-400 [overflow-wrap:anywhere]">
        {path.description}
      </p>
    </div>
  )
}

export function EngineeringProof() {
  return (
    <section id="proof" className="bg-zinc-950 px-6 py-20 text-zinc-100 sm:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-b border-white/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-300">
              Engineering Proof
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              正常路径、失败路径、可复现路径
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-400">
              可靠性不只体现在 happy path。每个项目都把失败如何停止、证据如何保留、交付如何复核放在同一张图里。
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-4 lg:max-w-xl">
            {evidenceMetrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-emerald-300">
                  {metric.label}
                </p>
                <p className="mt-2 text-xl font-semibold text-white">{metric.value}</p>
                <p className="mt-1 text-xs leading-5 text-zinc-500">{metric.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 divide-y divide-white/15">
          {projects.map((project) => (
            <article key={project.slug} className="grid gap-6 py-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-300">
                  {project.releaseLabel}
                </p>
                <h3 className="mt-3 break-words text-2xl font-semibold text-white [overflow-wrap:anywhere]">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{project.eyebrow}</p>
              </div>
              <div className="grid gap-6 sm:grid-cols-3">
                {pathFields.map((field) => (
                  <PathCell key={field} path={project[field]} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
