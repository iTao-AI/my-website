import { siteContent } from '../data/siteContent'
import { SectionReveal } from './SectionReveal'

export function CapabilityMap() {
  const { capability } = siteContent

  return (
    <section id="approach" className="capability-section">
      <SectionReveal className="capability-layout">
        <header className="capability-intro">
          <p className="section-index">{capability.eyebrow}</p>
          <h2>{capability.title}</h2>
          <p>{capability.description}</p>
        </header>

        <ol className="capability-map">
          {capability.layers.map((layer) => (
            <li key={layer.index}>
              <span className="capability-map__index">{layer.index}</span>
              <div>
                <p className="capability-map__project">{layer.project}</p>
                <h3>{layer.title}</h3>
                <p>{layer.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </SectionReveal>
    </section>
  )
}
