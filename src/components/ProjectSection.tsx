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
            不只展示功能，更展示可靠性、证据和边界
          </h2>
          <p className="mt-5 text-lg leading-8 text-zinc-600">
            这三个主项目不是简单罗列功能，而是分别对应外部研究、内部知识检索、
            业务流程编排三个工程层次。每个项目都尽量把「怎么做、怎么验证、下一步是什么」
            讲清楚。
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
