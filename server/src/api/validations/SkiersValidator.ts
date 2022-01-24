import { body, ValidationChain } from 'express-validator'

import { InputGetRecommendedSkiLength } from '../enums/InputGetRecommendedSkiLength'
import { TypeOfSki } from '../enums/TypeOfSki'
import { Validator } from './Validator'

export class SkiersValidator extends Validator {
  public getRecommendedSkiLengthsInputSchema = (): ValidationChain[] => {
    return [
      body(InputGetRecommendedSkiLength.lengthCm)
        .isInt({ min: 0, max: 300 }).withMessage('Skier length in cm has to be between 0 and 300'),
      body(InputGetRecommendedSkiLength.age)
        .isInt({ min: 0, max: 130 }).withMessage('Skier age has to be between 0 and 130'),
      body(InputGetRecommendedSkiLength.typeOfSki)
        .isIn([TypeOfSki.Classic, TypeOfSki.Freestyle]).withMessage(`Type of ski has to be a string either ${TypeOfSki.Classic} or ${TypeOfSki.Freestyle}`)
    ]
  }
}
