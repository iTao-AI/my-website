const NAV_LINKS = [
  { label: '工程证据', href: '#evidence' },
  { label: '系统架构', href: '#system' },
  { label: '项目', href: '#projects' },
  { label: '联系', href: '#contact' },
]

export function NavigationBar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50
                 bg-white/85 backdrop-blur-md
                 border-b border-zinc-200/70
                 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between
                      h-14 sm:h-16 px-4 sm:px-8">
        {/* Brand */}
        <a
          href="#home"
          className="text-xl sm:text-2xl font-semibold text-zinc-950
                     tracking-tight hover:opacity-80 transition-opacity"
        >
          Yang Tao
        </a>

        <div className="flex items-center gap-4 sm:gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="hidden text-sm font-medium text-zinc-600
                         transition-colors hover:text-zinc-950 sm:inline-flex"
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/iTao-AI"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-zinc-950 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  )
}
