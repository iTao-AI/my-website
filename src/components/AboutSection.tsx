export function AboutSection() {
  return (
    <section id="about" className="border-t border-zinc-200 bg-zinc-50 px-6 py-20 text-zinc-950 sm:px-12 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-700">About</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">从业务约束出发做工程</h2>
        </div>
        <div className="grid gap-8 text-lg leading-8 text-zinc-700 sm:grid-cols-3">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-500">Background</p>
            <p className="mt-3">自动化本科；有留学业务、销售与经营管理经历。</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-500">Practice</p>
            <p className="mt-3">过去一年多持续学习与实践 AI Agent、RAG、LLM 应用。</p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.14em] text-zinc-500">Responsibility</p>
            <p className="mt-3">业务经历让我重视真实约束、用户分歧、沟通协调与交付责任。</p>
          </div>
        </div>
      </div>
    </section>
  )
}
