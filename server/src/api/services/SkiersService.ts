import { TypeOfSki } from '../enums/TypeOfSki'
import { AgeRule } from '../models/skier/rules/AgeRules/AgeRule'
import { Skier } from '../models/skier/Skier'

export class SkiersService {
  public static MIN_AGE = 0
  public static MAX_AGE = 130
  public static MIN_LENGTH = 40
  public static MAX_LENGTH = 300

  private ageRules: AgeRule[]

  public constructor (ageRules: AgeRule[]) {
    this.ageRules = ageRules
  }

  public calculateLengthOfSkiesService = ((lengthCm: number, age: number, typeOfSki: TypeOfSki): { recommendedSkiesMinLength: number, recommendedSkiesMaxLength: number } => {
    const skier = new Skier(lengthCm, age, typeOfSki)
    this.evaluateMinAndMaxLengthRule(skier)

    return {
      recommendedSkiesMinLength: skier.recommendedSkiesMinLengthCm,
      recommendedSkiesMaxLength: skier.recommendedSkiesMaxLengthCm
    }
  })

  private evaluateMinAndMaxLengthRule = (skier: Skier): void => {
    this.ageRules.forEach(ageRule => {
      if (ageRule.shouldRun(skier)) ageRule.evaluateMinAndMaxLength(skier)
    })
  }
}
