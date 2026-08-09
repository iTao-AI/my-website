import type { Project, ProjectPath } from '../data/projects'

interface ProjectDetailPageProps {
  project: Project
}

const pathFields: Array<keyof Pick<Project, 'normalPath' | 'failurePath' | 'reproduciblePath'>> = [
  'normalPath',
  'failurePath',
  'reproduciblePath',
]

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <main className="overflow-x-hidden bg-white pt-24 text-zinc-950">
      <section className="px-6 pb-16 pt-8 sm:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <a
            href="#projects"
            className="public-link inline-flex min-h-11 items-center text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
          >
            ← 返回项目列表
          </a>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div className="min-w-0">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-700">
                {project.eyebrow}
              </p>
              <h1 className="display-heading mt-5 break-words text-5xl font-semibold leading-tight tracking-tight [overflow-wrap:anywhere] sm:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl break-words text-xl leading-9 text-zinc-700 [overflow-wrap:anywhere]">
                {project.description}
              </p>
              <p className="mt-6 max-w-3xl break-words border-l-2 border-emerald-600 pl-5 text-lg leading-8 text-zinc-800 [overflow-wrap:anywhere]">
                {project.summaryZh}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="border border-zinc-200 px-3 py-2 text-xs font-medium text-zinc-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <ProjectVisual project={project} />
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50 px-6 py-16 sm:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:gap-20">
          <NarrativeBlock eyebrow="关键判断" title="为什么这个项目值得做" body={project.problem} />
          <NarrativeBlock eyebrow="系统如何工作" title="职责边界先于功能列表" body={project.architecture} />
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-700">normal / failure</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">同一系统，三种可复核路径</h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              正常交付、失败停机和再次复核不是附加说明，而是项目 contract 的一部分。
            </p>
          </div>
          <div className="mt-10 grid gap-px border border-zinc-300 bg-zinc-300 lg:grid-cols-3">
            {pathFields.map((field) => (
              <PathBlock key={field} path={project[field]} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-16 sm:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <DetailList title="关键实现" items={project.built} />
          <DetailList title="3 条最强工程证明" items={project.evidence} tone="dark" />
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-700">stack / keywords</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">工程关键词</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {project.stack.map((item) => (
              <div key={item} className="border-t-2 border-emerald-600 pt-4 text-base font-medium text-zinc-800">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-16 text-zinc-100 sm:px-12 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-300">current boundary</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-5xl">当前边界</h2>
          </div>
          <div>
            <p className="max-w-3xl text-lg leading-8 text-zinc-300">{project.boundary}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center bg-white px-5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
              >
                GitHub
              </a>
              <a
                href={project.releaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center justify-center border border-white/20 px-5 text-sm font-medium text-white transition-colors hover:border-emerald-300 hover:text-emerald-200"
              >
                Release {project.releaseLabel}
              </a>
              <a
                href="#projects"
                className="inline-flex min-h-11 items-center justify-center border border-white/20 px-5 text-sm font-medium text-white transition-colors hover:border-emerald-300 hover:text-emerald-200"
              >
                返回项目
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <figure className="min-w-0 border border-zinc-200 bg-zinc-50 p-3">
      {project.visual.src ? (
        <img
          src={project.visual.src}
          alt={project.visual.alt}
          loading="lazy"
          width="1440"
          height="2534"
          className="h-auto max-h-[34rem] w-full object-cover object-top"
        />
      ) : (
        <div className="border border-zinc-200 bg-white p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-700">{project.visual.title}</p>
          <div className="mt-8 divide-y divide-zinc-200 border-y border-zinc-200">
            {project.visual.lines.map((line, index) => (
              <div key={line} className="flex min-h-14 items-center gap-4 py-3">
                <span className="font-mono text-xs text-zinc-400">0{index + 1}</span>
                <span className="text-base font-medium text-zinc-800">{line}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      <figcaption className="border-t border-zinc-200 px-2 pb-1 pt-4">
        <p className="text-sm leading-6 text-zinc-600">{project.visual.caption}</p>
        {project.visual.sourceCommit ? (
          <p className="mt-3 break-all font-mono text-xs leading-5 text-zinc-400">
            source commit · {project.visual.sourceCommit}
          </p>
        ) : null}
      </figcaption>
      {project.visual.gallery.length > 1 ? (
        <div className="mt-3 grid grid-cols-2 gap-3 border-t border-zinc-200 pt-3 sm:grid-cols-3">
          {project.visual.gallery.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              className="h-24 w-full object-cover object-top sm:h-32"
            />
          ))}
        </div>
      ) : null}
    </figure>
  )
}

function NarrativeBlock({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <section className="min-w-0">
      <p className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-700">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-5 break-words text-xl leading-9 text-zinc-700 [overflow-wrap:anywhere]">{body}</p>
    </section>
  )
}

function PathBlock({ path }: { path: ProjectPath }) {
  return (
    <article className="min-w-0 bg-white p-6 sm:p-8">
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-emerald-700">{path.label}</p>
      <h3 className="mt-8 break-words text-2xl font-semibold tracking-tight [overflow-wrap:anywhere]">{path.title}</h3>
      <p className="mt-4 break-words text-base leading-7 text-zinc-600 [overflow-wrap:anywhere]">{path.description}</p>
    </article>
  )
}

function DetailList({ title, items, tone = 'light' }: { title: string; items: string[]; tone?: 'light' | 'dark' }) {
  const dark = tone === 'dark'

  return (
    <section className={dark ? 'min-w-0 bg-zinc-950 p-6 text-zinc-100 sm:p-8' : 'min-w-0 border border-zinc-200 bg-white p-6 text-zinc-950 sm:p-8'}>
      <h2 className={dark ? 'font-mono text-sm uppercase tracking-[0.18em] text-emerald-300' : 'font-mono text-sm uppercase tracking-[0.18em] text-emerald-700'}>
        {title}
      </h2>
      <ul className="mt-6 space-y-5">
        {items.map((item) => (
          <li key={item} className={dark ? 'break-words border-l border-emerald-400/50 pl-4 text-base leading-7 text-zinc-300 [overflow-wrap:anywhere]' : 'break-words border-l border-emerald-600 pl-4 text-base leading-7 text-zinc-700 [overflow-wrap:anywhere]'}>
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
