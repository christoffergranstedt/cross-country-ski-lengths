import express, { Router } from 'express'

export abstract class BaseRouter {
  protected router: Router
  protected basePath: string

  public constructor () {
    this.router = express.Router()
  }

  public getRoutes (): Router {
    return this.router
  }

  public getBasePath (): string {
    return this.basePath
  }
}
