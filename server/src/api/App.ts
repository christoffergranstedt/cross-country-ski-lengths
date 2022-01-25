import express, { Request, Response, NextFunction, Application } from 'express'
import cors from 'cors'
import logger from 'morgan'

import { CustomError, NotFoundError } from './errors'
import { Controller } from './controllers/Controller'

interface AppArgs {
  port: number
  frontendURL: string
  controllers: Controller[]
}

export class App {
  private _app: Application
  private port: number
  private frontendURL: string
  private controllers: Controller[]

  constructor ({ port, frontendURL, controllers }: AppArgs) {
    this._app = express()
    this.port = port
    this.frontendURL = frontendURL
    this.controllers = controllers
    this.initMiddlewares()
    this.initControllersAndRoutes()
    this.initErrorHandler()
  }

  public run (): void {
    try {
      this.app.listen(this.port, async () => {
        console.log(`Server running on port ${this.port}`)
      })
    } catch (error) {
      console.log('Something went wrong when connecting to server')
    }
  }

  public get app (): Application {
    return this._app
  }

  private initMiddlewares = (): void => {
    this.app.use(express.json())

    this.app.use(logger('dev'))

    this.app.use(cors({ origin: this.frontendURL }))

    this.app.use((_req: Request, res: Response, next: NextFunction) => {
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, OPTIONS')
      next()
    })
  }

  private initControllersAndRoutes = (): void => {
    this.controllers.forEach(controller => {
      controller.setRoutes()
      this.app.use('/', controller.getRouter())
    })
  }

  private initErrorHandler = (): void => {
    this.app.all('*', async (_req: Request, _res: Response, next: NextFunction) => {
      next(new NotFoundError())
    })

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
      if (error instanceof CustomError) {
        return res.status(error.getStatusCode()).send({ errors: error.getErrors() })
      }

      return res.status(500).send({
        errors: [{ message: 'Something went wrong in the server, please try again' }]
      })
    })
  }
}
