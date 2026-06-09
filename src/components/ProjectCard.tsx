import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm"
    >
      <div className="flex flex-col gap-6">
        <div>
          <p className="font-mono text-xs tracking-[0.18em] text-emerald-700">
            {project.eyebrow}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
            {project.title}
          </h3>
          <p className="mt-3 text-base leading-7 text-zinc-600">
            {project.description}
          </p>
          <p className="mt-3 rounded-md bg-zinc-50 px-4 py-3 text-base leading-7 text-zinc-800">
            {project.summaryZh}
          </p>
          <p className="mt-4 text-sm font-medium text-zinc-500">
            {project.role}
          </p>
        </div>

        <EvidencePanel project={project} />

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <InfoBlock title="问题" body={project.problem} />
          <InfoBlock title="架构" body={project.architecture} />
        </div>

        <ListBlock title="实现" items={project.built} />
        <ListBlock title="验证证据" items={project.evidence} tone="dark" />

        <div className="rounded-md border border-amber-200 bg-amber-50 p-4">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-amber-700">
            边界
          </p>
          <p className="mt-2 text-sm leading-6 text-amber-950">
            {project.boundary}
          </p>
        </div>

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
            aria-label={`在 GitHub 打开 ${project.title} 的源码`}
          >
            查看源码
          </a>
        ) : null}
      </div>
    </article>
  )
}

function EvidencePanel({ project }: { project: Project }) {
  return (
    <section className="rounded-md border border-zinc-900 bg-zinc-950 p-4 text-zinc-100">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {project.proofPoints.map((point) => (
          <div
            key={`${project.title}-${point.label}`}
            className="rounded-md border border-white/10 bg-white/[0.03] p-4"
          >
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-500">
              {point.label}
            </p>
            <p className="mt-3 text-xl font-semibold text-white">
              {point.value}
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              {point.note}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

function InfoBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="rounded-md border border-zinc-200 bg-zinc-50 p-4">
      <h4 className="font-mono text-sm uppercase tracking-[0.16em] text-zinc-500">
        {title}
      </h4>
      <p className="mt-3 text-sm leading-6 text-zinc-700">{body}</p>
    </section>
  )
}

function ListBlock({
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
          ? 'rounded-md border border-emerald-400/20 bg-zinc-950 p-4 text-zinc-100'
          : 'rounded-md border border-zinc-200 bg-white p-4 text-zinc-950'
      }
    >
      <h4
        className={
          dark
            ? 'font-mono text-sm uppercase tracking-[0.16em] text-emerald-300'
            : 'font-mono text-sm uppercase tracking-[0.16em] text-zinc-500'
        }
      >
        {title}
      </h4>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li
            key={item}
            className={dark ? 'text-sm leading-6 text-zinc-300' : 'text-sm leading-6 text-zinc-700'}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
