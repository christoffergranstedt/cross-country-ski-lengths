import { TypeOfSki } from '../enums/TypeOfSki'
import { InputValidationError } from '../errors/InputValidationError'
import { OldestSkier } from '../models/skier/OldestSkier'
import { BaseSkier } from '../models/skier/Skier'
import { YoungestSkier } from '../models/skier/YoungestSkier'
import { YoungSkier } from '../models/skier/YoungSkier'

export class SkiersService {
  public calculateLengthOfSkiesService = ((lengthCm: number, age: number, typeOfSki: TypeOfSki): { recommendedSkiesMinLength: number, recommendedSkiesMaxLength: number } => {
    if (!age || age < BaseSkier.MIN_AGE || age > BaseSkier.MAX_AGE) {
      throw new InputValidationError([{ message: `Skier has to be between ${BaseSkier.MIN_AGE} and ${BaseSkier.MAX_AGE} years old` }])
    }

    if (!lengthCm || lengthCm < BaseSkier.MIN_LENGTH || lengthCm > BaseSkier.MAX_LENGTH) {
      throw new InputValidationError([{ message: `Skier has to be between ${BaseSkier.MIN_LENGTH} and ${BaseSkier.MAX_LENGTH} cm` }])
    }

    if (!typeOfSki || (typeOfSki !== TypeOfSki.Classic && typeOfSki !== TypeOfSki.Freestyle)) {
      throw new InputValidationError([{ message: `Skies has to be either ${TypeOfSki.Classic} or ${TypeOfSki.Freestyle}` }])
    }

    let recommendedSkiesMinLength = 0
    let recommendedSkiesMaxLength = 0

    if (age >= YoungestSkier.MIN_AGE && age <= YoungestSkier.MAX_AGE) {
      const skier = new YoungestSkier(lengthCm, age, typeOfSki)
      recommendedSkiesMinLength = skier.getRecommendedSkiesMinLengthCm()
      recommendedSkiesMaxLength = skier.getRecommendedSkiesMaxLengthCm()
    }

    if (age >= YoungSkier.MIN_AGE && age <= YoungSkier.MAX_AGE) {
      const skier = new YoungSkier(lengthCm, age, typeOfSki)
      recommendedSkiesMinLength = skier.getRecommendedSkiesMinLengthCm()
      recommendedSkiesMaxLength = skier.getRecommendedSkiesMaxLengthCm()
    }

    if (age >= OldestSkier.MIN_AGE) {
      const skier = new OldestSkier(lengthCm, age, typeOfSki)
      recommendedSkiesMinLength = skier.getRecommendedSkiesMinLengthCm()
      recommendedSkiesMaxLength = skier.getRecommendedSkiesMaxLengthCm()
    }

    return { recommendedSkiesMinLength, recommendedSkiesMaxLength }
  })
}
