import { Request, Response } from 'express'
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
      console.log('test')
      const { lengthCm, age, typeOfSkies } = req.body
      const { recomendedSkiesMinLength, recomendedSkiesMaxLength } = this.skiersService.calculateLengthOfSkiesService(lengthCm, age, typeOfSkies.toLowerCase())
      return res.status(200).json({ recomendedSkiesMinLength, recomendedSkiesMaxLength })
    } catch (error) {
      console.log(error) // TODO
    }
  }
}
