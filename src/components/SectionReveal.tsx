import { type ReactNode, useEffect, useRef, useState } from 'react'

interface SectionRevealProps {
  children: ReactNode
  className?: string
}

export function SectionReveal({ children, className = '' }: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(
    () =>
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window),
  )

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (visible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        observer.disconnect()
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [visible])

  return (
    <div
      ref={ref}
      className={`section-reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
    >
      {children}
    </div>
  )
}
