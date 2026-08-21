import { projects } from '../data/projects'
import { siteContent } from '../data/siteContent'

export function ContactSection() {
  const { contact } = siteContent

  return (
    <footer id="contact" className="contact-section">
      <div className="contact-layout">
        <div>
          <p className="section-index">{contact.eyebrow}</p>
          <h2>{contact.title}</h2>
          <p>{contact.description}</p>
        </div>

        <div className="contact-actions">
          <a className="button button--primary" href={`mailto:${contact.email}`}>
            {contact.email}
          </a>
          <a
            className="button button--secondary"
            href={contact.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="contact-projects" aria-label="公开项目">
        {projects.map((project, index) => (
          <a key={project.slug} href={`#/projects/${project.slug}`}>
            <span>0{index + 1}</span>
            {project.title}
          </a>
        ))}
      </div>

      <div className="site-footer-note">
        <span>Yang Tao · AI Agent Engineer</span>
        <span>Shanghai · 2026</span>
      </div>
    </footer>
  )
}
