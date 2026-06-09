import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectSection() {
  return (
    <section
      id="projects"
      className="bg-zinc-50 px-6 py-20 text-zinc-950 sm:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 max-w-3xl">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-700">
            项目案例
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            三个主项目，覆盖 Agent 工程的关键链路
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            从开放式研究、内部知识检索到业务流程编排，项目展示重点放在系统结构、
            工程实现和可复验运行记录。
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
