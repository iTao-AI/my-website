const links = [
  { label: 'Email', href: 'mailto:tao.i@outlook.com' },
  { label: 'GitHub', href: 'https://github.com/iTao-AI' },
  { label: 'Decision Research Agent', href: 'https://github.com/iTao-AI/decision-research-agent' },
  { label: 'Multimodal Knowledge Engine', href: 'https://github.com/iTao-AI/multimodal-knowledge-engine' },
]

export function ContactSection() {
  return (
    <section id="contact" className="bg-zinc-950 px-6 py-20 text-zinc-100 sm:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-300">
            联系
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            我更关注可验证、可复现、能接入真实流程的 Agent 系统
          </h2>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.03] p-6">
          <p className="text-base leading-7 text-zinc-300">
            如果需要进一步了解项目，我更倾向于从系统链路、
            关键代码和运行记录开始。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="rounded-md border border-white/15 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:border-emerald-300 hover:text-emerald-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
