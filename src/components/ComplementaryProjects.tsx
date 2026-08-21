import { useState } from 'react'
import type { Project } from '../data/projects'
import { ProjectImage } from './ProjectImage'
import { SectionReveal } from './SectionReveal'

interface ComplementaryProjectsProps {
  projects: readonly Project[]
}

function ComplementaryCase({ project, index }: { project: Project; index: number }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeVisual = project.visuals[activeIndex]

  return (
    <article className={`complementary-case complementary-case--${project.accent}`}>
      <div className="complementary-case__copy">
        <p className="section-index">0{index + 2} / {project.eyebrow}</p>
        <h3>{project.headline}</h3>
        <p>{project.summary}</p>

        <ol className="project-actions" aria-label={`${project.title} 的三个关键动作`}>
          {project.actions.map((action, actionIndex) => (
            <li key={action}>
              <button
                type="button"
                aria-pressed={activeIndex === actionIndex}
                onClick={() => setActiveIndex(actionIndex)}
              >
                <span>0{actionIndex + 1}</span>
                {action}
              </button>
            </li>
          ))}
        </ol>

        <div className="casebook-links">
          <a href={`#/projects/${project.slug}`}>查看完整案例</a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <div className="complementary-case__stage" aria-live="polite">
        <ProjectImage key={activeVisual.src} visual={activeVisual} showCaption={false} />
        <p className="complementary-case__state">
          <span>{project.actions[activeIndex]}</span>
          {activeVisual.caption}
        </p>
      </div>
    </article>
  )
}

export function ComplementaryProjects({ projects }: ComplementaryProjectsProps) {
  return (
    <section id="projects" className="complementary-section">
      <SectionReveal className="section-heading section-heading--split">
        <div>
          <p className="section-index">Selected work</p>
          <h2>另外两个项目，补齐业务流程与知识入口。</h2>
        </div>
        <p>
          一个处理长期协作中的事实、路线与人工确认；一个处理本地资料进入 Agent 前的来源、发布与检索。
        </p>
      </SectionReveal>

      <div className="complementary-list">
        {projects.map((project, index) => (
          <SectionReveal key={project.slug}>
            <ComplementaryCase project={project} index={index} />
          </SectionReveal>
        ))}
      </div>
    </section>
  )
}
