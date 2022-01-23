import { TypeOfSkies } from '../enums/TypeOfSkies'
import { InputValidationError } from '../errors/InputValidationError'
import { OldestSkier } from '../models/skier/oldest.skier'
import { YoungSkier } from '../models/skier/young.skier'
import { YoungestSkier } from '../models/skier/youngest.skier'

export class SkiersService {
  public calculateLengthOfSkiesService = ((lengthCm: number, age: number, typeOfSkies: TypeOfSkies) => {
    if (age < YoungestSkier.MIN_AGE) {
      throw new InputValidationError([{ message: 'Someone can not be younger than 0 years old' }])
    }

    let recomendedSkiesMinLength = 0
    let recomendedSkiesMaxLength = 0

    if (age >= YoungestSkier.MIN_AGE && age <= YoungestSkier.MAX_AGE) {
      const skier = new YoungestSkier(lengthCm, age, typeOfSkies)
      recomendedSkiesMinLength = skier.getRecomendedSkiesMinLengthCm()
      recomendedSkiesMaxLength = skier.getRecomendedSkiesMaxLengthCm()
    }

    if (age >= YoungSkier.MIN_AGE && age <= YoungSkier.MAX_AGE) {
      const skier = new YoungSkier(lengthCm, age, typeOfSkies)
      recomendedSkiesMinLength = skier.getRecomendedSkiesMinLengthCm()
      recomendedSkiesMaxLength = skier.getRecomendedSkiesMaxLengthCm()
    }

    if (age >= OldestSkier.MIN_AGE) {
      const skier = new OldestSkier(lengthCm, age, typeOfSkies)
      recomendedSkiesMinLength = skier.getRecomendedSkiesMinLengthCm()
      recomendedSkiesMaxLength = skier.getRecomendedSkiesMaxLengthCm()
    }

    return { recomendedSkiesMinLength, recomendedSkiesMaxLength }
  })
}
