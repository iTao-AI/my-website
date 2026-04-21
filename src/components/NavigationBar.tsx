import { ThemeToggle } from './ThemeToggle'

const NAV_LINKS = [
  { label: '首页', href: '#home' },
  { label: '项目', href: '#projects' },
  { label: '联系我', href: '#contact' },
]

export function NavigationBar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50
                 backdrop-blur-md
                 bg-white/80 dark:bg-zinc-900/80
                 border-b border-zinc-200/50 dark:border-zinc-700/50
                 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between
                      h-14 sm:h-16 px-4 sm:px-8">
        {/* Brand */}
        <a
          href="#home"
          className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100
                     tracking-tight hover:opacity-80 transition-opacity"
        >
          Tao
        </a>

        {/* Nav links + ThemeToggle */}
        <div className="flex items-center gap-4 sm:gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-sm sm:text-base font-medium text-zinc-600 dark:text-zinc-300
                         hover:text-zinc-900 dark:hover:text-zinc-100
                         transition-colors"
            >
              {label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
