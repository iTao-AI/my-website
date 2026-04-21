import type { Project } from '../data/projects'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className="group rounded-xl overflow-hidden
                 bg-white dark:bg-zinc-800
                 border border-zinc-200 dark:border-zinc-700
                 shadow-sm
                 transition-all duration-300
                 hover:scale-[1.02] hover:shadow-xl"
    >
      {/* Screenshot */}
      <div className="aspect-video overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 flex flex-col gap-3">
        <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-zinc-500 dark:text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        {/* GitHub link */}
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2
                     text-sm font-medium text-zinc-600 dark:text-zinc-300
                     hover:text-zinc-900 dark:hover:text-zinc-100
                     transition-colors self-start"
          aria-label={`在 GitHub 上查看 ${project.title}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
          GitHub
        </a>
      </div>
    </article>
  )
}
