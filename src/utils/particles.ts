export interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

const CONNECTION_DISTANCE = 120
const MOUSE_RADIUS = 150
const MAX_SPEED = 0.5

/**
 * Create a single particle with random position and velocity.
 */
function createParticle(canvas: HTMLCanvasElement): Particle {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * MAX_SPEED * 2,
    vy: (Math.random() - 0.5) * MAX_SPEED * 2,
    radius: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.5 + 0.3,
  }
}

/**
 * Determine particle count based on viewport width.
 * Desktop: ~80, Mobile: ~40
 */
function getParticleCount(): number {
  return window.innerWidth >= 768 ? 80 : 40
}

/**
 * Initialize particles.
 */
export function initParticles(canvas: HTMLCanvasElement): Particle[] {
  const count = getParticleCount()
  return Array.from({ length: count }, () => createParticle(canvas))
}

/**
 * Update particle positions, bounce off walls, handle mouse interaction.
 */
export function updateParticles(
  particles: Particle[],
  canvas: HTMLCanvasElement,
  mouse: { x: number; y: number } | null,
): void {
  for (const p of particles) {
    p.x += p.vx
    p.y += p.vy

    // Bounce off edges
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1

    // Keep within bounds
    p.x = Math.max(0, Math.min(canvas.width, p.x))
    p.y = Math.max(0, Math.min(canvas.height, p.y))

    // Mouse repulsion
    if (mouse) {
      const dx = p.x - mouse.x
      const dy = p.y - mouse.y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < MOUSE_RADIUS) {
        const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS
        p.x += (dx / dist) * force * 2
        p.y += (dy / dist) * force * 2
      }
    }
  }
}

/**
 * Draw particles and connection lines on canvas.
 */
export function drawParticles(
  ctx: CanvasRenderingContext2D,
  particles: Particle[],
  isDark: boolean,
): void {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

  const baseColor = isDark ? '255, 255, 255' : '100, 116, 139'

  // Draw connections
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x
      const dy = particles[i].y - particles[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < CONNECTION_DISTANCE) {
        const opacity = (1 - dist / CONNECTION_DISTANCE) * 0.15
        ctx.strokeStyle = `rgba(${baseColor}, ${opacity})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(particles[i].x, particles[i].y)
        ctx.lineTo(particles[j].x, particles[j].y)
        ctx.stroke()
      }
    }
  }

  // Draw particles
  for (const p of particles) {
    ctx.fillStyle = `rgba(${baseColor}, ${p.opacity})`
    ctx.beginPath()
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
    ctx.fill()
  }
}
