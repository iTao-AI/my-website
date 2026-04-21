import { useEffect, useRef } from 'react'
import {
  initParticles,
  updateParticles,
  drawParticles,
  type Particle,
} from '../utils/particles'

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Set canvas size to match viewport
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particlesRef.current = initParticles(canvas)
    }

    resize()

    // Mouse tracking
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    const onMouseLeave = () => {
      mouseRef.current = null
    }

    // Animation loop
    let active = true
    function render() {
      if (!active || !canvas) return

      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light'

      updateParticles(particlesRef.current, canvas, mouseRef.current)
      drawParticles(ctx, particlesRef.current, isDark)

      animationRef.current = requestAnimationFrame(render)
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseleave', onMouseLeave)

    animationRef.current = requestAnimationFrame(render)

    return () => {
      active = false
      cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  )
}
