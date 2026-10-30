import { publicFactsCheckedOn, type Project } from '../data/projects'
import { ProjectImage } from './ProjectImage'
import { SectionReveal } from './SectionReveal'

interface ProjectDetailPageProps {
  project: Project
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  return (
    <main className={`project-detail project-detail--${project.accent}`}>
      <header className="project-detail__hero">
        <div className="project-detail__hero-copy">
          <a className="back-link" href="#home">
            <span aria-hidden="true">←</span> 返回作品集
          </a>
          <p className="section-index">{project.eyebrow}</p>
          <h1>{project.headline}</h1>
          <p className="project-detail__summary">{project.summary}</p>
          <p className="project-detail__role">
            <strong>我的职责</strong>
            {project.role}
          </p>
          <div className="project-detail__actions">
            <a className="button button--primary" href={project.githubUrl} target="_blank" rel="noreferrer">
              查看 GitHub
            </a>
            <a className="button button--secondary" href={project.releaseUrl} target="_blank" rel="noreferrer">
              Release {project.releaseLabel}
            </a>
          </div>
        </div>

        <ProjectImage visual={project.visuals[0]} eager className="project-detail__hero-image" />
      </header>

      <SectionReveal className="project-detail__problem">
        <div>
          <p className="section-index">Problem</p>
          <h2>这个项目要解决什么问题</h2>
        </div>
        <div>
          <p>{project.problem}</p>
          <p>{project.approach}</p>
        </div>
      </SectionReveal>

      <SectionReveal className="project-detail__workflow">
        <article>
          <span>01</span>
          <h2>工作怎样向前推进</h2>
          <p>{project.normalPath}</p>
        </article>
        <article>
          <span>02</span>
          <h2>失败时怎样停下来</h2>
          <p>{project.failurePath}</p>
        </article>
        <article>
          <span>03</span>
          <h2>人工判断在哪里</h2>
          <p>{project.humanBoundary}</p>
        </article>
      </SectionReveal>

      <SectionReveal className="project-detail__gallery">
        {project.visuals.slice(1).map((visual) => (
          <ProjectImage key={visual.src} visual={visual} />
        ))}
      </SectionReveal>

      <section className="project-detail__decisions">
        <SectionReveal className="section-heading section-heading--split">
          <div>
            <p className="section-index">Key decisions</p>
            <h2>我做的关键取舍</h2>
          </div>
          <p>这些取舍决定了模型能看见什么、能做什么，以及结果在什么条件下才可以进入下一步。</p>
        </SectionReveal>

        <div className="decision-list">
          {project.decisions.map((decision, index) => (
            <SectionReveal key={decision.title}>
              <article>
                <span>0{index + 1}</span>
                <h3>{decision.title}</h3>
                <p>{decision.body}</p>
              </article>
            </SectionReveal>
          ))}
        </div>
      </section>

      <SectionReveal className="project-detail__built">
        <div>
          <p className="section-index">My work</p>
          <h2>我实际完成的工作</h2>
        </div>
        <ol>
          {project.personalWork.map((item, index) => (
            <li key={item}>
              <span>0{index + 1}</span>
              {item}
            </li>
          ))}
        </ol>
      </SectionReveal>

      <SectionReveal className="project-detail__technical">
        <div>
          <p className="section-index">Engineering</p>
          <h2>技术实现与可核验入口</h2>
        </div>
        <div className="technical-columns">
          <div>
            <h3>技术栈</h3>
            <ul>
              {project.stack.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3>Agent 工程关键词</h3>
            <ul>
              {project.keywords.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3>公开源码的新流程</h3>
            <p>以下流程来自 {project.releaseLabel} 之后的公开源码。</p>
            <p>{project.publicSource.summary}</p>
            <a href={project.githubUrl} target="_blank" rel="noreferrer">公开源码 ↗</a>
            <a href={`${project.githubUrl}/blob/${project.publicSource.commit}/${project.publicSource.guidePath}`} target="_blank" rel="noreferrer">阅读当前流程指南 ↗</a>
            <a href={project.releaseUrl} target="_blank" rel="noreferrer">稳定 Release {project.releaseLabel} ↗</a>
          </div>
        </div>
      </SectionReveal>

      <details className="project-detail__boundary">
        <summary>当前展示边界</summary>
        <p>{project.boundary}</p>
        <p>截图用于说明基础流程；Release 之后的源码新流程请以上方指南为准。</p>
        <p>截图来源提交：<code>{project.captureCommit}</code></p>
        <p>公开内容核对：{publicFactsCheckedOn}；源码提交：<code>{project.publicSource.commit}</code></p>
      </details>
    </main>
  )
}
