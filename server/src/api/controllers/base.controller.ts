import { Router } from 'express'

export abstract class Controller {
  public abstract setRoutes (): void
  public abstract getRouter (): Router
}
