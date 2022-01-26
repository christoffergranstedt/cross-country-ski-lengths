import { Skier } from '../../../Skier'
import { AgeRule } from '../AgeRule'

export class YoungestAgeRule implements AgeRule {
  private static MIN_AGE = 0
  private static MAX_AGE = 4

  evaluateMinAndMaxLength (skier: Skier): Skier {
    const skierLengthAndAddedCm = skier.lengthCm
    const isManifacturedMaxLengthLonger = skier.maxLengthManifacturedLength < skierLengthAndAddedCm

    if (isManifacturedMaxLengthLonger) {
      skier.recommendedSkiesMaxLengthCm = skier.maxLengthManifacturedLength
      skier.recommendedSkiesMinLengthCm = skier.maxLengthManifacturedLength
    } else {
      skier.recommendedSkiesMaxLengthCm = skierLengthAndAddedCm
      skier.recommendedSkiesMinLengthCm = skierLengthAndAddedCm
    }

    return skier
  }

  shouldRun (skier: Skier): boolean {
    const isInAgeSpan = (skier.age >= YoungestAgeRule.MIN_AGE && skier.age <= YoungestAgeRule.MAX_AGE)
    return isInAgeSpan
  }
}
