import { Skier } from '../../../Skier'
import { AgeRule } from '../AgeRule'

export class YoungAgeRule implements AgeRule {
  private static MIN_AGE = 5
  private static MAX_AGE = 8
  private static CM_TO_ADD_MIN = 10
  private static CM_TO_ADD_MAX = 20

  evaluateMinAndMaxLength (skier: Skier): Skier {
    const skierLengthAndAddedCmMin = skier.lengthCm + YoungAgeRule.CM_TO_ADD_MIN
    const skierLengthAndAddedCmMax = skier.lengthCm + YoungAgeRule.CM_TO_ADD_MAX

    if (skier.maxLengthManifacturedLength < skierLengthAndAddedCmMin) {
      skier.recommendedSkiesMinLengthCm = skier.maxLengthManifacturedLength
    } else {
      skier.recommendedSkiesMinLengthCm = skierLengthAndAddedCmMin
    }

    if (skier.maxLengthManifacturedLength < skierLengthAndAddedCmMax) {
      skier.recommendedSkiesMaxLengthCm = skier.maxLengthManifacturedLength
    } else {
      skier.recommendedSkiesMaxLengthCm = skierLengthAndAddedCmMax
    }

    return skier
  }

  shouldRun (skier: Skier): boolean {
    const isInAgeSpan = (skier.age >= YoungAgeRule.MIN_AGE && skier.age <= YoungAgeRule.MAX_AGE)
    return isInAgeSpan
  }
}
