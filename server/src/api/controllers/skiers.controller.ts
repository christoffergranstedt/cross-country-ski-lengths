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

  }
}
