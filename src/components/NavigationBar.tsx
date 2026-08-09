const NAV_LINKS = [
  { label: '旗舰', href: '#flagship', mobile: false },
  { label: '项目', href: '#projects', mobile: true },
  { label: '关于', href: '#about', mobile: true },
  { label: '联系', href: '#contact', mobile: false },
]

export function NavigationBar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50
                 bg-white/85 backdrop-blur-md
                 border-b border-zinc-200/70
                 transition-colors duration-300"
    >
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-8">
        <a
          href="#home"
          className="inline-flex min-h-11 shrink-0 items-center text-xl font-semibold tracking-tight text-zinc-950 transition-opacity hover:opacity-70 sm:text-2xl"
        >
          Yang Tao
        </a>

        <div className="flex items-center gap-1 sm:gap-2">
          {NAV_LINKS.map(({ label, href, mobile }) => (
            <a
              key={href}
              href={href}
              className={`public-link ${mobile ? 'inline-flex' : 'hidden sm:inline-flex'} min-h-11 items-center px-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950 sm:px-3`}
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/iTao-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-md bg-zinc-950 px-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
