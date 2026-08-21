import { useState } from 'react'
import type { Project } from '../data/projects'
import { ProjectImage } from './ProjectImage'
import { SectionReveal } from './SectionReveal'

interface FlagshipCaseStudyProps {
  project: Project
}

export function FlagshipCaseStudy({ project }: FlagshipCaseStudyProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeVisual = project.visuals[activeIndex]

  return (
    <section id="flagship" className="flagship-section project-field project-field--blue">
      <SectionReveal className="casebook-shell">
        <div className="casebook-copy">
          <p className="section-index">01 / 旗舰工程项目</p>
          <h2>{project.headline}</h2>
          <p className="casebook-summary">{project.summary}</p>

          <dl className="casebook-facts">
            <div>
              <dt>我的职责</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>怎样推进</dt>
              <dd>{project.normalPath}</dd>
            </div>
            <div>
              <dt>什么时候停下</dt>
              <dd>{project.failurePath}</dd>
            </div>
          </dl>

          <div className="casebook-links">
            <a href={`#/projects/${project.slug}`}>查看完整案例</a>
            <a href={project.githubUrl} target="_blank" rel="noreferrer">
              查看 GitHub
            </a>
            <a href={project.releaseUrl} target="_blank" rel="noreferrer">
              Release {project.releaseLabel}
            </a>
          </div>
        </div>

        <div className="flagship-stage">
          <div className="flagship-stage__controls" aria-label="研究流程状态">
            {project.actions.map((action, index) => (
              <button
                key={action}
                type="button"
                aria-pressed={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              >
                <span>0{index + 1}</span>
                {action}
              </button>
            ))}
          </div>

          <div className="flagship-stage__surface" aria-live="polite">
            <ProjectImage key={activeVisual.src} visual={activeVisual} eager={activeIndex === 0} />
            {activeVisual.state === 'blocked' ? (
              <p className="flagship-stage__note flagship-stage__note--blocked">
                <strong>证据不足时，交付停在人工复核。</strong>
                <span>缺口仍然可见，不用完整语气掩盖不确定性。</span>
              </p>
            ) : null}
          </div>
        </div>
      </SectionReveal>
    </section>
  )
}
