import { NextFunction, Request, Response } from 'express'
import Joi from 'joi'
import { TypeOfSki } from '../enums/TypeOfSki'
import { calculateLengthOfSkiesService } from '../services/skiers.service'

export const getRecommendedSkiLengths = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const schema = Joi.object().keys({
      lengthCm: Joi.number().integer().min(0).max(300),
      age: Joi.number().integer().min(0).max(130),
      typeOfSkies: Joi.string().valid(TypeOfSki.Classic, TypeOfSki.Freestyle)
    })

    schema.validate(req.body)

    const { lengthCm, age, typeOfSki } = req.body
    const { recommendedSkiesMinLength, recommendedSkiesMaxLength } = calculateLengthOfSkiesService(lengthCm, age, typeOfSki)
    return res.status(200).json({ recommendedSkiesMinLength, recommendedSkiesMaxLength })
  } catch (error) {
    next(error)
    console.log(error) // TODO
  }
}
