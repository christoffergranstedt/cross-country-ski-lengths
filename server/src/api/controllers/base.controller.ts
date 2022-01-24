import { Router } from 'express'

export abstract class Controller {
  protected router: Router

  public constructor () {
    this.router = Router()
    this.setRoutes()
  }

  public abstract setRoutes (): void
  public abstract getRouter (): Router
}
