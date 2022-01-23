import express, { Router } from 'express'

export abstract class BaseRouter {
  protected router: Router
  protected basePath: string

  public constructor () {
    this.router = express.Router()
  }

  public abstract setRoutes (): void
}
