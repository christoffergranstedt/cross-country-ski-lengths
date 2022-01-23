import express, { Request, Response, NextFunction, Application } from 'express'
import cors from 'cors'
import { NotFoundError } from './errors'
import { errorHandler } from './middlewares/errorHandler'
import { BaseRouter } from './routes/base.router'

export class App {
  private app: Application
  private port: number
  private frontendURL: string
  private routes: BaseRouter[]

  constructor (port: number, frontendURL: string, routes: BaseRouter[]) {
    this.app = express()
    this.port = port
    this.frontendURL = frontendURL
    this.routes = routes
    this.setRoutes()
    this.configureApp()
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

  private configureApp () {
    this.app.use(express.json())

    this.app.use(cors({ origin: this.frontendURL }))

    this.app.use((_req: Request, res: Response, next: NextFunction) => {
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, OPTIONS')
      next()
    })

    this.app.use(errorHandler)
  }

  private setRoutes () {
    this.routes.forEach(route => {
      this.app.use(route.getBasePath, route.getRoutes)
    })

    this.app.all('*', async (_req: Request, _res: Response, next: NextFunction) => {
      next(new NotFoundError())
    })
  }
}
