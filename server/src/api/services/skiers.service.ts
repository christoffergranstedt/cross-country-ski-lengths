import { TypeOfSkies } from '../enums/TypeOfSkies'
import { InputValidationError } from '../errors/InputValidationError'
import { OldestSkier } from '../models/skier/oldest.skier'
import { YoungSkier } from '../models/skier/young.skier'
import { YoungestSkier } from '../models/skier/youngest.skier'

export class SkiersService {
  public calculateLengthOfSkiesService = ((lengthCm: number, age: number, typeOfSkies: TypeOfSkies): { recommendedSkiesMinLength: number, recommendedSkiesMaxLength: number } => {
    if (age < YoungestSkier.MIN_AGE) {
      throw new InputValidationError([{ message: 'Someone can not be younger than 0 years old' }])
    }

    let recommendedSkiesMinLength = 0
    let recommendedSkiesMaxLength = 0

    if (age >= YoungestSkier.MIN_AGE && age <= YoungestSkier.MAX_AGE) {
      const skier = new YoungestSkier(lengthCm, age, typeOfSkies)
      recommendedSkiesMinLength = skier.getRecommendedSkiesMinLengthCm()
      recommendedSkiesMaxLength = skier.getRecommendedSkiesMaxLengthCm()
    }

    if (age >= YoungSkier.MIN_AGE && age <= YoungSkier.MAX_AGE) {
      const skier = new YoungSkier(lengthCm, age, typeOfSkies)
      recommendedSkiesMinLength = skier.getRecommendedSkiesMinLengthCm()
      recommendedSkiesMaxLength = skier.getRecommendedSkiesMaxLengthCm()
    }

    if (age >= OldestSkier.MIN_AGE) {
      const skier = new OldestSkier(lengthCm, age, typeOfSkies)
      recommendedSkiesMinLength = skier.getRecommendedSkiesMinLengthCm()
      recommendedSkiesMaxLength = skier.getRecommendedSkiesMaxLengthCm()
    }

    return { recommendedSkiesMinLength, recommendedSkiesMaxLength }
  })
}
