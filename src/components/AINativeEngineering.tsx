import { siteContent } from '../data/siteContent'
import { SectionReveal } from './SectionReveal'

export function AINativeEngineering() {
  const { aiNative } = siteContent

  return (
    <section className="ai-native-section">
      <SectionReveal className="ai-native-layout">
        <header>
          <p className="section-index">{aiNative.eyebrow}</p>
          <h2>{aiNative.title}</h2>
          <p>{aiNative.description}</p>
        </header>

        <ol className="ai-native-principles">
          {aiNative.principles.map((principle) => (
            <li key={principle.index}>
              <span>{principle.index}</span>
              <div>
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </SectionReveal>
    </section>
  )
}
