import type { ProjectVisual } from '../data/projects'

interface ProjectImageProps {
  visual: ProjectVisual
  eager?: boolean
  className?: string
  showCaption?: boolean
}

export function ProjectImage({
  visual,
  eager = false,
  className = '',
  showCaption = true,
}: ProjectImageProps) {
  return (
    <figure className={`project-image ${className}`.trim()}>
      <div className="project-image__viewport">
        <img
          src={visual.src}
          alt={visual.alt}
          width="1600"
          height="1000"
          loading={eager ? 'eager' : 'lazy'}
        />
      </div>
      {showCaption ? <figcaption>{visual.caption}</figcaption> : null}
    </figure>
  )
}
