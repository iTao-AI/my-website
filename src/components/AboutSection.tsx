import { siteContent } from '../data/siteContent'
import { SectionReveal } from './SectionReveal'

export function AboutSection() {
  const { about } = siteContent

  return (
    <section id="about" className="about-section">
      <SectionReveal className="about-layout">
        <div>
          <p className="section-index">{about.eyebrow}</p>
          <h2>{about.title}</h2>
        </div>
        <div className="about-copy">
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </SectionReveal>
    </section>
  )
}
