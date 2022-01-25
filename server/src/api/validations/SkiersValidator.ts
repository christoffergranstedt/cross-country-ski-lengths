import { body, ValidationChain } from 'express-validator'

import { InputGetRecommendedSkiLength } from '../enums/InputGetRecommendedSkiLength'
import { TypeOfSki } from '../enums/TypeOfSki'
import { BaseSkier } from '../models/skier/Skier'
import { Validator } from './Validator'

export class SkiersValidator extends Validator {
  public getRecommendedSkiLengthsInputSchema = (): ValidationChain[] => {
    return [
      body(InputGetRecommendedSkiLength.lengthCm)
        .isInt({ min: BaseSkier.MIN_LENGTH, max: BaseSkier.MAX_LENGTH }).withMessage(`Skier length has to be between ${BaseSkier.MIN_LENGTH} and ${BaseSkier.MAX_LENGTH} cm`),
      body(InputGetRecommendedSkiLength.age)
        .isInt({ min: BaseSkier.MIN_AGE, max: BaseSkier.MAX_AGE }).withMessage(`Skier age has to be between ${BaseSkier.MIN_AGE} and ${BaseSkier.MAX_AGE} years old`),
      body(InputGetRecommendedSkiLength.typeOfSki)
        .isIn([TypeOfSki.Classic, TypeOfSki.Freestyle]).withMessage(`Type of ski has to be a string either ${TypeOfSki.Classic} or ${TypeOfSki.Freestyle}`)
    ]
  }
}
