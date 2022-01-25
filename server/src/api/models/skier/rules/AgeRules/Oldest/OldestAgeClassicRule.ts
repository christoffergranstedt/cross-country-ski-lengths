import { TypeOfSki } from '../../../../../enums/TypeOfSki'
import { Skier } from '../../../Skier'
import { AgeRule } from '../AgeRule'

export class OldestAgeClassicRule implements AgeRule {
  private static MIN_AGE = 9
  private static MAX_AGE = 130
  private static CM_TO_ADD = 20

  evaluateMinAndMaxLength (skier: Skier): Skier {
    const skierLengthAndAddedCm = skier.lengthCm + OldestAgeClassicRule.CM_TO_ADD

    if (skier.maxLengthManifacturedLength < skierLengthAndAddedCm) {
      skier.recommendedSkiesMaxLengthCm = skier.maxLengthManifacturedLength
      skier.recommendedSkiesMinLengthCm = skier.maxLengthManifacturedLength
    } else {
      skier.recommendedSkiesMaxLengthCm = skierLengthAndAddedCm
      skier.recommendedSkiesMinLengthCm = skierLengthAndAddedCm
    }

    return skier
  }

  shouldRun (skier: Skier): boolean {
    const isInAgeSpan = (skier.age >= OldestAgeClassicRule.MIN_AGE && skier.age <= OldestAgeClassicRule.MAX_AGE)
    const isClassic = skier.typeOfSkis === TypeOfSki.Classic
    return (isInAgeSpan && isClassic)
  }
}
