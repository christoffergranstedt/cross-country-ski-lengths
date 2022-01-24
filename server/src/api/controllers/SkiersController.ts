import { Request, Response } from 'express'

import { SkiersService } from '../services/SkiersService'
import { SkiersValidator } from '../validations/SkiersValidator'
import { Controller } from './Controller'

export class SkiersController extends Controller {
  private skiersService: SkiersService
  private skiersValidator: SkiersValidator

  public constructor (skiersService: SkiersService, skiersValidator: SkiersValidator) {
    super()
    this.skiersService = skiersService
    this.skiersValidator = skiersValidator
  }

  public setRoutes = (): void => {
    this.router.post('/api/skiers/get-recommended-ski-lengths', this.skiersValidator.getRecommendedSkiLengthsInputSchema(), this.skiersValidator.validate, this.getRecommendedSkiLengths)
  }

  public getRecommendedSkiLengths = (req: Request, res: Response) => {
    const { lengthCm, age, typeOfSkies } = req.body
    const { recommendedSkiesMinLength, recommendedSkiesMaxLength } = this.skiersService.calculateLengthOfSkiesService(lengthCm, age, typeOfSkies)
    return res.status(200).json({ data: { recommendedSkiesMinLength, recommendedSkiesMaxLength } })
  }
}
