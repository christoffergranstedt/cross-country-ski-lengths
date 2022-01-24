import express, { Request, Response, NextFunction, Application } from 'express'
import cors from 'cors'
import logger from 'morgan'

import { NotFoundError } from './errors'
import { errorHandler } from './middlewares/errorHandler'
import { Controller } from './controllers/base.controller'

export class App {
  private app: Application
  private port: number
  private frontendURL: string
  private controllers: Controller[]

  constructor (port: number, frontendURL: string, controllers: Controller[]) {
    this.app = express()
    this.port = port
    this.frontendURL = frontendURL
    this.controllers = controllers
    this.initialiseMiddlewares()
    this.initControllersAndRoutes()
    this.initErrorHandler()
  }

  public run () {
    try {
      this.app.listen(this.port, async () => {
        console.log(`Server running on port ${this.port}`)
      })
    } catch (error) {
      console.log('Something went wrong when connecting to database or server')
    }
  }

  private initialiseMiddlewares () {
    this.app.use(express.json())

    this.app.use(logger('dev'))

    this.app.use(cors({ origin: this.frontendURL }))

    this.app.use((_req: Request, res: Response, next: NextFunction) => {
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, OPTIONS')
      next()
    })
  }

  private initControllersAndRoutes () {
    this.controllers.forEach(controller => {
      this.app.use('/', controller.getRouter())
    })
  }

  private initErrorHandler () {
    this.app.all('*', async (_req: Request, _res: Response, next: NextFunction) => {
      next(new NotFoundError())
    })
    this.app.use(errorHandler)
  }
}
