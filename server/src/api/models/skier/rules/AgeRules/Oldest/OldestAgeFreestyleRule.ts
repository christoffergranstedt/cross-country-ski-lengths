import { TypeOfSki } from '../../../../../enums/TypeOfSki'
import { Skier } from '../../../Skier'
import { AgeRule } from '../AgeRule'

export class OldestAgeFreestyleRule implements AgeRule {
  private static MIN_AGE = 9
  private static MAX_AGE = 130
  private static CM_TO_ADD_MIN = 10
  private static CM_TO_ADD_MAX = 15

  evaluateMinAndMaxLength (skier: Skier): Skier {
    const skierLengthAndAddedCmMin = skier.lengthCm + OldestAgeFreestyleRule.CM_TO_ADD_MIN
    const isManifacturedMaxLengthLongerThanMin = skier.maxLengthManifacturedLength < skierLengthAndAddedCmMin

    const skierLengthAndAddedCmMax = skier.lengthCm + OldestAgeFreestyleRule.CM_TO_ADD_MAX
    const isManifacturedMaxLengthLongerThanMax = skier.maxLengthManifacturedLength < skierLengthAndAddedCmMax

    if (isManifacturedMaxLengthLongerThanMin) {
      skier.recommendedSkiesMinLengthCm = skier.maxLengthManifacturedLength
    } else {
      skier.recommendedSkiesMinLengthCm = skierLengthAndAddedCmMin
    }

    if (isManifacturedMaxLengthLongerThanMax) {
      skier.recommendedSkiesMaxLengthCm = skier.maxLengthManifacturedLength
    } else {
      skier.recommendedSkiesMaxLengthCm = skierLengthAndAddedCmMax
    }

    return skier
  }

  shouldRun (skier: Skier): boolean {
    const isInAgeSpan = (skier.age >= OldestAgeFreestyleRule.MIN_AGE && skier.age <= OldestAgeFreestyleRule.MAX_AGE)
    const isFreestyle = skier.typeOfSkis === TypeOfSki.Freestyle
    return (isInAgeSpan && isFreestyle)
  }
}
