import { Request, Response } from 'express'
import { SkiersService } from '../services/skiers.service'
import { SkiersValidator } from '../validations/SkiersValidator'
import { Controller } from './base.controller'

export class SkiersController extends Controller {
  private skiersService: SkiersService
  private skiersValidator: SkiersValidator

  public constructor (skiersService: SkiersService, skiersValidator: SkiersValidator) {
    super()
    this.skiersService = skiersService
    this.skiersValidator = skiersValidator
  }

  public setRoutes () {
    this.router.post('/api/skiers/get-recommended-ski-lengths', this.skiersValidator.getRecommendedSkiLengthsInputSchema(), this.skiersValidator.validate, this.getRecommendedSkiLengths.bind(this))
  }

  public async getRecommendedSkiLengths (req: Request, res: Response) {
    const { lengthCm, age, typeOfSkies } = req.body
    const { recommendedSkiesMinLength, recommendedSkiesMaxLength } = this.skiersService.calculateLengthOfSkiesService(lengthCm, age, typeOfSkies)
    return res.status(200).json({ data: { recommendedSkiesMinLength, recommendedSkiesMaxLength } })
  }
}
