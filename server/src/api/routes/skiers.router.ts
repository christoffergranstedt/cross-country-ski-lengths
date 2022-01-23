import { SkiersController } from '../controllers/skiers.controller'
import { BaseRouter } from './base.router'

export class SkiersRouter extends BaseRouter {
  private skiersController: SkiersController

  public constructor (basePath: string, skiersController: SkiersController) {
    super()
    this.skiersController = skiersController
    this.basePath = basePath
  }

  public setRoutes (): void {
    this.router.post(`${this.basePath}/get-recomended-ski-lengths`, this.skiersController.getRecomendedSkiLengths)
  }
}
