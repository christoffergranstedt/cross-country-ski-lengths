import { Request, Response } from 'express'
import { SkiersService } from '../services/skiers.service'

export class SkiersController {
  private skiersService: SkiersService

  public constructor (skiersService: SkiersService) {
    this.skiersService = skiersService
  }

  public getRecomendedSkiLengths = async (req: Request, res: Response) => {

  }
}
