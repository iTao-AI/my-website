import { siteContent } from '../data/siteContent'

export function NavigationBar() {
  return (
    <nav className="site-nav" aria-label="主导航">
      <div className="site-nav__inner">
        <a className="site-identity" href="#home" aria-label="杨涛的作品集首页">
          <strong>杨涛</strong>
          <span>AI Agent Engineer</span>
        </a>

        <div className="site-nav__links">
          {siteContent.navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <a
            className="site-nav__github"
            href={siteContent.contact.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
