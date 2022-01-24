import express, { Request, Response, Router } from 'express'
import Joi from 'joi'
import { TypeOfSki } from '../enums/TypeOfSki'
import { SkiersService } from '../services/skiers.service'
import { Controller } from './base.controller'

export class SkiersController extends Controller {
  private skiersService: SkiersService
  private router: Router

  public constructor (skiersService: SkiersService) {
    super()
    this.skiersService = skiersService
    this.router = express.Router()
    this.setRoutes()
  }

  public setRoutes () {
    this.router.post('/api/skiers/get-recommended-ski-lengths', this.getRecommendedSkiLengths.bind(this))
  }

  public getRouter () {
    return this.router
  }

  public async getRecommendedSkiLengths (req: Request, res: Response) {
    try {
      const schema = Joi.object().keys({
        lengthCm: Joi.number().integer().min(0).max(300),
        age: Joi.number().integer().min(0).max(130),
        typeOfSkies: Joi.string().valid(TypeOfSki.Classic, TypeOfSki.Freestyle)
      })

      schema.validate(req.body)

      const { lengthCm, age, typeOfSkies } = req.body
      const { recommendedSkiesMinLength, recommendedSkiesMaxLength } = this.skiersService.calculateLengthOfSkiesService(lengthCm, age, typeOfSkies)
      return res.status(200).json({ recommendedSkiesMinLength, recommendedSkiesMaxLength })
    } catch (error) {
      console.log(error) // TODO
    }
  }
}
