import express, { Application, Router } from 'express'

export abstract class BaseRouter {
  protected router: Router

  public constructor () {
    this.router = express.Router()
  }

  public abstract setRoutes (): void

}