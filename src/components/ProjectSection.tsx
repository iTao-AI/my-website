import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectSection() {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 sm:px-12 py-20
                 bg-zinc-50 dark:bg-zinc-950
                 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
            项目
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
            以下是我近期参与或独立构建的项目，每个项目都代表了一次技术探索。
          </p>
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
