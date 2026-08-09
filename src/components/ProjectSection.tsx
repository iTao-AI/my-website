import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectSection() {
  return (
    <section
      id="projects"
      className="bg-zinc-50 px-6 py-20 text-zinc-950 sm:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-700">
            selected projects
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            三个项目，三种工程责任
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            从多人决策、研究交付到本地知识入口，按价值、判断和边界快速进入源码与 Release。
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
