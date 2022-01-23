/* eslint-disable import/first */
import dotenv from 'dotenv'
dotenv.config()

import { App } from './app'
import { SkiersController } from './controllers/skiers.controller'
import { BaseRouter } from './routes/base.router'
import { SkiersRouter } from './routes/skiers.router'
import { SkiersService } from './services/skiers.service'

const port = Number(process.env.PORT) || 9000
const frontendURL = process.env.FRONTEND_URL || 'http://localhost:3000'

const skiersController = new SkiersController(new SkiersService())

const routes: BaseRouter[] = [
  new SkiersRouter('/api/skiers', skiersController)
]

const app = new App(port, frontendURL, routes)
app.run()
