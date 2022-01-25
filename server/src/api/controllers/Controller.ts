import { Application, Router } from 'express'

export abstract class Controller {
  protected router: Router
  protected appContainer: Application

  public constructor () {
    this.router = Router()
  }

  public setApp (app: Application): void {
    this.appContainer = app
  }

  public getRouter = (): Router => {
    return this.router
  }

  public abstract setRoutes (): void
}
