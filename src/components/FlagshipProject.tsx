import { projects } from '../data/projects'

export function FlagshipProject() {
  const project = projects[0]

  return (
    <section id="flagship" className="bg-white px-6 py-20 text-zinc-950 sm:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 border-b border-zinc-200 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-700">
              flagship project · {project.releaseLabel}
            </p>
            <h2 className="display-heading mt-4 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              {project.title}
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-zinc-500">
            复杂建议 → 多人确认 → 可执行计划
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="min-w-0">
            <p className="max-w-3xl text-2xl leading-10 text-zinc-800 sm:text-3xl sm:leading-[1.45]">
              {project.summaryZh}
            </p>
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-600">
              {project.description} 消息经顾问确认才成为事实；分歧保留理由和风险；阻塞安全停止并回到人工判断。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#/projects/night-voyager"
                className="inline-flex min-h-11 items-center justify-center bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
              >
                查看旗舰详情
              </a>
              <a
                href={project.releaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center border border-zinc-300 px-5 text-sm font-medium text-zinc-950 transition-colors hover:border-zinc-950"
              >
                Release {project.releaseLabel}
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center border border-zinc-300 px-5 text-sm font-medium text-zinc-950 transition-colors hover:border-zinc-950"
              >
                GitHub
              </a>
            </div>
          </div>

          <figure className="min-w-0 border border-zinc-200 bg-zinc-50 p-3">
            {project.visual.src ? (
              <img
                src={project.visual.src}
                alt={project.visual.alt}
                loading="lazy"
                width="1440"
                height="2534"
                className="h-auto max-h-[32rem] w-full object-cover object-top"
              />
            ) : null}
            <figcaption className="border-t border-zinc-200 px-2 pb-1 pt-4">
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-700">
                {project.visual.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {project.visual.caption}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
