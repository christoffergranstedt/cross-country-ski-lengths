/* eslint-disable import/first */
import dotenv from 'dotenv'
dotenv.config()

import { App } from './app'
import { Controller } from './controllers/base.controller'
import { SkiersController } from './controllers/skiers.controller'
import { SkiersService } from './services/skiers.service'

const port = Number(process.env.PORT) || 9000
const frontendURL = process.env.FRONTEND_URL || 'http://localhost:3000'

const controllers: Controller[] = [
  new SkiersController(new SkiersService())
]

const app = new App(port, frontendURL, controllers)
app.run()
