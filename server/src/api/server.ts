/* eslint-disable import/first */
import dotenv from 'dotenv'
dotenv.config()

import { App } from './App'
import { Controller } from './controllers/Controller'
import { SkiersController } from './controllers/SkiersController'
import { SkiersService } from './services/SkiersService'
import { SkiersValidator } from './validations/SkiersValidator'

const port = Number(process.env.PORT) || 9000
const frontendURL = process.env.FRONTEND_URL || 'http://localhost:3000'

const controllers: Controller[] = [
  new SkiersController(new SkiersService(), new SkiersValidator())
]

const app = new App(port, frontendURL, controllers)
app.run()
