const loop = [
  '目标约束',
  'spec / plan',
  'AI-assisted implementation',
  'tests / CI / browser proof',
  'review / repair',
  '最终交付 / release / readback',
]

export function AINativeEngineering() {
  return (
    <section id="ai-native" className="bg-white px-6 py-20 text-zinc-950 sm:px-12 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-emerald-700">
            AI-native engineering
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            AI 提高探索速度，工程判断仍由我负责
          </h2>
        </div>
        <div>
          <p className="text-xl leading-9 text-zinc-800">
            长期高强度使用 Codex、Claude Code 等 coding agents 加速资料核对、方案比较、实现、测试和审查；我负责问题定义、架构取舍、事实边界、验收标准、失败诊断与最终交付。
          </p>
          <div className="mt-10 grid border-t border-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
            {loop.map((step, index) => (
              <div key={step} className="border-b border-r border-zinc-200 px-4 py-5 first:pl-0 sm:nth-[2n+1]:pl-0 lg:nth-[3n+1]:pl-0">
                <p className="font-mono text-xs text-emerald-700">0{index + 1}</p>
                <p className="mt-2 text-sm font-medium leading-6 text-zinc-800">{step}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 text-base leading-7 text-zinc-600">
            这套闭环让每次最终交付都能回答：目标是什么、证据在哪里、失败怎么处理、结果是否真的保存下来。
          </p>
        </div>
      </div>
    </section>
  )
}
