import { Request, Response } from 'express'
import Joi from 'joi'
import { TypeOfSkies } from '../enums/TypeOfSkies'
import { SkiersService } from '../services/skiers.service'
import { BaseController } from './base.controller'

export class SkiersController extends BaseController {
  private skiersService: SkiersService

  public constructor (skiersService: SkiersService) {
    super()
    this.skiersService = skiersService
  }

  public getRecomendedSkiLengths = async (req: Request, res: Response) => {
    try {
      const schema = Joi.object().keys({
        lengthCm: Joi.number().integer().min(0).max(300),
        age: Joi.number().integer().min(0).max(130),
        typeOfSkies: Joi.string().valid([TypeOfSkies.Classic, TypeOfSkies.Freestyle])
      })

      schema.validate(req.body)

      const { lengthCm, age, typeOfSkies } = req.body
      const { recomendedSkiesMinLength, recomendedSkiesMaxLength } = this.skiersService.calculateLengthOfSkiesService(lengthCm, age, typeOfSkies())
      return res.status(200).json({ recomendedSkiesMinLength, recomendedSkiesMaxLength })
    } catch (error) {
      console.log(error) // TODO
    }
  }
}
