import type { Project } from '../data/projects'

interface ProjectDetailPageProps {
  project: Project
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const demos =
    project.demos ??
    (project.videoUrl && project.videoPoster
      ? [
          {
            label: 'Project demo',
            title: '90 秒内看清系统链路和工程证据',
            description:
              '无音频短片，适合快速浏览；现场讲解时可以结合代码、Release 和运行记录展开。',
            videoUrl: project.videoUrl,
            posterUrl: project.videoPoster,
          },
        ]
      : [])

  return (
    <main className="overflow-x-hidden bg-white pt-24 text-zinc-950">
      <section className="px-6 pb-16 pt-8 sm:px-12">
        <div className="mx-auto max-w-7xl">
          <a
            href="#projects"
            className="inline-flex text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-950"
          >
            返回项目列表
          </a>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="min-w-0">
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-emerald-700">
                {project.eyebrow}
              </p>
              <h1 className="mt-5 break-words text-5xl font-semibold leading-tight tracking-tight [overflow-wrap:anywhere] sm:text-7xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-3xl break-words text-xl leading-9 text-zinc-700 [overflow-wrap:anywhere]">
                {project.description}
              </p>
              <p className="mt-6 max-w-3xl break-words border-l-2 border-emerald-600 pl-5 text-lg leading-8 text-zinc-800 [overflow-wrap:anywhere]">
                {project.summaryZh}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="max-w-full min-w-0 break-words rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700 [overflow-wrap:anywhere]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <aside className="min-w-0 border border-zinc-200 bg-zinc-50 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500">
                project profile
              </p>
              <dl className="mt-6 space-y-5">
                <div>
                  <dt className="text-sm font-medium text-zinc-500">角色</dt>
                  <dd className="mt-1 text-lg font-semibold text-zinc-950">
                    {project.role}
                  </dd>
                </div>
                <div className="border-t border-zinc-200 pt-5">
                  <dt className="text-sm font-medium text-zinc-500">状态</dt>
                  <dd className="mt-1 break-words text-lg font-semibold text-zinc-950 [overflow-wrap:anywhere]">
                    {project.status}
                  </dd>
                </div>
                {project.proofPoints.map((point) => (
                  <div key={point.label} className="border-t border-zinc-200 pt-5">
                    <dt className="font-mono text-xs uppercase tracking-[0.14em] text-emerald-700">
                      {point.label}
                    </dt>
                    <dd className="mt-2 text-2xl font-semibold text-zinc-950">
                      {point.value}
                    </dd>
                    <dd className="mt-1 text-sm leading-6 text-zinc-600">
                      {point.note}
                    </dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-zinc-50 px-6 py-16 sm:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-2">
          <NarrativeBlock title="问题判断" body={project.problem} />
          <NarrativeBlock title="系统架构" body={project.architecture} />
        </div>
      </section>

      <section className="px-6 py-16 sm:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <DetailList title="关键实现" items={project.built} />
          <DetailList title="验证记录" items={project.evidence} tone="dark" />
        </div>
      </section>

      {demos.length > 0 ? (
        <section className="border-t border-zinc-200 px-6 py-16 sm:px-12">
          <div className="mx-auto max-w-7xl">
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-700">
              项目演示
            </p>
            <h2 className="mt-4 max-w-3xl break-words text-3xl font-semibold tracking-tight text-zinc-950 [overflow-wrap:anywhere] sm:text-5xl">
              演示视频与技术讲解
            </h2>
            <p className="mt-4 max-w-3xl break-words text-base leading-7 text-zinc-600 [overflow-wrap:anywhere]">
              {project.demoIntro ??
                '无音频短片，适合快速浏览；现场讲解时可以结合代码、Release 和运行记录展开。'}
            </p>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
              {demos.map((demo) => (
                <article key={demo.videoUrl} className="min-w-0">
                  <p className="font-mono text-xs tracking-[0.16em] text-emerald-700">
                    {demo.label}
                  </p>
                  <h3 className="mt-3 break-words text-2xl font-semibold tracking-tight text-zinc-950 [overflow-wrap:anywhere]">
                    {demo.title}
                  </h3>
                  <p className="mt-3 break-words text-sm leading-6 text-zinc-600 [overflow-wrap:anywhere]">
                    {demo.description}
                  </p>
                  <div className="mt-5 aspect-video overflow-hidden border border-zinc-200 bg-zinc-950">
                    <video
                      src={demo.videoUrl}
                      poster={demo.posterUrl}
                      controls
                      preload="metadata"
                      className="h-full w-full"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-zinc-950 px-6 py-16 text-zinc-100 sm:px-12">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-300">
              next step
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              后续扩展方向
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-zinc-300">
              {project.boundary}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-white transition-colors hover:border-emerald-300 hover:text-emerald-200"
              >
                返回项目
              </a>
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200"
                >
                  查看源码
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function NarrativeBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="min-w-0">
      <h2 className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-700">
        {title}
      </h2>
      <p className="mt-5 break-words text-xl leading-9 text-zinc-700 [overflow-wrap:anywhere]">
        {body}
      </p>
    </section>
  )
}

function DetailList({
  title,
  items,
  tone = 'light',
}: {
  title: string
  items: string[]
  tone?: 'light' | 'dark'
}) {
  const dark = tone === 'dark'

  return (
    <section
      className={
        dark
          ? 'min-w-0 bg-zinc-950 p-6 text-zinc-100'
          : 'min-w-0 border border-zinc-200 bg-white p-6 text-zinc-950'
      }
    >
      <h2
        className={
          dark
            ? 'font-mono text-sm uppercase tracking-[0.18em] text-emerald-300'
            : 'font-mono text-sm uppercase tracking-[0.18em] text-emerald-700'
        }
      >
        {title}
      </h2>
      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className={
              dark
                ? 'break-words border-l border-emerald-400/50 pl-4 text-base leading-7 text-zinc-300 [overflow-wrap:anywhere]'
                : 'break-words border-l border-emerald-600 pl-4 text-base leading-7 text-zinc-700 [overflow-wrap:anywhere]'
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
