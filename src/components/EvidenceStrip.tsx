import { EngineeringProof } from './EngineeringProof'

/**
 * Compatibility entry point for callers that still import the former evidence strip.
 * The homepage uses EngineeringProof directly so the section order stays explicit.
 */
export function EvidenceStrip() {
  return <EngineeringProof />
}
