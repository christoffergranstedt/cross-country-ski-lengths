import { SkiersController } from '../controllers/skiers.controller'
import { BaseRouter } from './base.router'

export class SkiersRouter extends BaseRouter {
  private skiersController: SkiersController

  public constructor (basePath: string, skiersController: SkiersController) {
    super()
    this.skiersController = skiersController
    this.basePath = basePath
    this.router.post('/get-recommended-ski-lengths', this.skiersController.getRecommendedSkiLengths)
  }
}
