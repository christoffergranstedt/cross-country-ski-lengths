import { SkiersController } from '../controllers/skiers.controller'
import { BaseRouter } from './base.router'

export abstract class SkierRouter extends BaseRouter {
  private skiersController: SkiersController

  public constructor (skiersController: SkiersController, basePath: string) {
    super()
    this.skiersController = skiersController
    this.basePath = basePath
  }

  public setRoutes (): void {
    this.router.post('/get-recomended-ski-lengths', this.skiersController.getRecomendedSkiLengths)
  }
}
