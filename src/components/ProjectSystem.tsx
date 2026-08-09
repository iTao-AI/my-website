import { CapabilityLoop } from './CapabilityLoop'

/**
 * Compatibility entry point for callers that still import the former system section.
 * The homepage uses CapabilityLoop directly so the consumer seams remain visible.
 */
export function ProjectSystem() {
  return <CapabilityLoop />
}
