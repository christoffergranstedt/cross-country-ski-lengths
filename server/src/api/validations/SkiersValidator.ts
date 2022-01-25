import { body, ValidationChain } from 'express-validator'

import { InputGetRecommendedSkiLength } from '../enums/InputGetRecommendedSkiLength'
import { TypeOfSki } from '../enums/TypeOfSki'
import { Skier } from '../models/skier/Skier'
import { Validator } from './Validator'

export class SkiersValidator extends Validator {
  public getRecommendedSkiLengthsInputSchema = (): ValidationChain[] => {
    return [
      body(InputGetRecommendedSkiLength.lengthCm)
        .isInt({ min: Skier.MIN_LENGTH, max: Skier.MAX_LENGTH }).withMessage(`Skier length has to be between ${Skier.MIN_LENGTH} and ${Skier.MAX_LENGTH} cm`),
      body(InputGetRecommendedSkiLength.age)
        .isInt({ min: Skier.MIN_AGE, max: Skier.MAX_AGE }).withMessage(`Skier age has to be between ${Skier.MIN_AGE} and ${Skier.MAX_AGE} years old`),
      body(InputGetRecommendedSkiLength.typeOfSki)
        .isIn([TypeOfSki.Classic, TypeOfSki.Freestyle]).withMessage(`Type of ski has to be a string either ${TypeOfSki.Classic} or ${TypeOfSki.Freestyle}`)
    ]
  }
}
