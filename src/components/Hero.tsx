import { flagshipProject } from '../data/projects'
import { siteContent } from '../data/siteContent'

export function Hero() {
  const { hero } = siteContent
  const [overview, evidence] = flagshipProject.visuals

  return (
    <section id="home" className="hero-section">
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-role">
            <span aria-hidden="true" />
            {hero.role}
          </p>
          <p className="hero-name">{hero.name}</p>
          <h1>{hero.title}</h1>
          <p className="hero-description">{hero.description}</p>

          <div className="hero-actions">
            <a className="button button--primary" href="#flagship">
              {hero.primaryAction}
            </a>
            <a
              className="button button--secondary"
              href={siteContent.contact.github}
              target="_blank"
              rel="noreferrer"
            >
              {hero.secondaryAction}
            </a>
          </div>

          <dl className="hero-proof" aria-label="作品集概览">
            {hero.proof.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>
                  <strong>{item.value}</strong>
                  <span>{item.detail}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="hero-product-stage" aria-label="旗舰项目真实界面">
          <div className="hero-product-stage__meta">
            <span>01 · {flagshipProject.title}</span>
            <span>旗舰工程项目</span>
          </div>
          <figure className="hero-product-stage__main">
            <a href={overview.src} target="_blank" rel="noreferrer" aria-label={`${overview.alt}，打开原图`} title="打开原图">
              <img
                src={overview.src}
                alt={overview.alt}
                width="1600"
                height="1000"
                fetchPriority="high"
              />
            </a>
          </figure>
          <figure className="hero-product-stage__detail">
            <a href={evidence.src} target="_blank" rel="noreferrer" aria-label={`${evidence.alt}，打开原图`} title="打开原图">
              <img src={evidence.src} alt={evidence.alt} width="1600" height="1000" loading="lazy" />
            </a>
          </figure>
          <div className="hero-product-stage__caption">
            <strong>从研究问题到方案比较与报告</strong>
            <span>看推荐方案，读支持资料，继续核对每条结论。</span>
          </div>
        </div>
      </div>
    </section>
  )
}
