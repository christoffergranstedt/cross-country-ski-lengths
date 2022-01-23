import express, { Request, Response, NextFunction, Application } from 'express'
import cors from 'cors'
import { NotFoundError } from './errors'
import { errorHandler } from './middlewares/errorHandler'

export class App {
  private app: Application
  private port: number
  private frontendURL: string

  constructor (port: number, frontendURL: string) {
    this.app = express()
    this.port = port
    this.frontendURL = frontendURL
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

    // this.app.use('/', routes)

    this.app.all('*', async (_req: Request, _res: Response, next: NextFunction) => {
      next(new NotFoundError())
    })

    this.app.use(errorHandler)
  }
}
