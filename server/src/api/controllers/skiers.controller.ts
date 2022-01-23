import { Request, Response } from 'express'
import { SkiesService } from '../services/skies.services'

export class SkiersController {
  private skiesService: SkiesService

  public constructor (skiesService: SkiesService) {
    this.skiesService = skiesService
  }

  public getRecomendedSkiLengths = async (req: Request, res: Response) => {

  }
}
