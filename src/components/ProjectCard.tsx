import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="grid gap-6 border-t border-zinc-200 py-8 first:border-t-0 lg:grid-cols-[0.85fr_1.15fr]">
      <div>
        <p className="font-mono text-xs tracking-[0.18em] text-emerald-700">
          {project.eyebrow}
        </p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
          {project.title}
        </h3>
        <p className="mt-4 text-base leading-7 text-zinc-600">
          {project.description}
        </p>
        <p className="mt-5 text-sm font-medium text-zinc-500">
          {project.role}
        </p>
      </div>

      <div>
        <p className="max-w-2xl text-lg leading-8 text-zinc-800">
          {project.summaryZh}
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {project.proofPoints.map((point) => (
            <section
              key={`${project.title}-${point.label}`}
              className="border-l-2 border-emerald-600 pl-4"
            >
              <p className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-500">
                {point.label}
              </p>
              <p className="mt-2 text-xl font-semibold text-zinc-950">
                {point.value}
              </p>
              <p className="mt-1 text-sm leading-6 text-zinc-600">
                {point.note}
              </p>
            </section>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={`#/projects/${project.slug}`}
            className="inline-flex items-center justify-center rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            查看系统拆解
          </a>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:border-zinc-950"
              aria-label={`在 GitHub 打开 ${project.title} 的源码`}
            >
              查看源码
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
