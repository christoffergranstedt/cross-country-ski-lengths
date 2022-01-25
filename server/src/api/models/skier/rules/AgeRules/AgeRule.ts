import { Skier } from '../../Skier'

export interface AgeRule {
  evaluateMinAndMaxLength (skier: Skier): Skier
  shouldRun (skier: Skier): boolean
}
