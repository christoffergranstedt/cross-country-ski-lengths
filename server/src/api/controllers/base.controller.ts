import { Router } from 'express'

export abstract class Controller {
  protected router: Router

  public constructor () {
    this.router = Router()
  }

  public abstract setRoutes (): void

  public getRouter (): Router {
    return this.router
  }
}
