import { ParticleCanvas } from './ParticleCanvas'

export function Hero() {
  return (
    <section id="home" className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden px-6 sm:px-12 pt-20">
      {/* Gradient background layer */}
      <div className="absolute inset-0 bg-[var(--hero-gradient-dark)] dark:bg-[var(--hero-gradient-dark)] transition-colors duration-300" />

      {/* Particle canvas overlay */}
      <ParticleCanvas />

      {/* Content layer */}
      <div className="relative z-10 flex flex-col items-center gap-6 sm:gap-8 text-center">
        <h1 className="text-4xl sm:text-7xl md:text-8xl font-bold text-white dark:text-zinc-100 tracking-tight">
          Tao
        </h1>

        <p className="text-base sm:text-xl text-zinc-300 dark:text-zinc-400 max-w-md">
          独立开发者 · AI 项目构建者
        </p>

        <a
          href="#projects"
          className="mt-2 inline-flex items-center justify-center rounded-full
                     bg-white/10 backdrop-blur-sm text-white
                     px-8 py-3 text-base font-medium
                     border border-white/20
                     transition-colors hover:bg-white/20 hover:border-white/30
                     focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50
                     sm:w-auto w-full max-w-xs"
        >
          我的项目
        </a>
      </div>

    </section>
  )
}
