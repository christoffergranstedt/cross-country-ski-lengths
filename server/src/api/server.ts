/* eslint-disable import/first */
import dotenv from 'dotenv'
dotenv.config()

import { App } from './App'
import { Controller } from './controllers/Controller'
import { SkiersController } from './controllers/SkiersController'
import { OldestAgeClassicRule } from './models/skier/rules/AgeRules/Oldest/OldestAgeClassicRule'
import { OldestAgeFreestyleRule } from './models/skier/rules/AgeRules/Oldest/OldestAgeFreestyleRule'
import { YoungAgeRule } from './models/skier/rules/AgeRules/Young/YoungAgeRule'
import { YoungestAgeRule } from './models/skier/rules/AgeRules/Youngest/YoungestAgeRule'
import { SkiersService } from './services/SkiersService'
import { SkiersValidator } from './validations/SkiersValidator'

const port = Number(process.env.PORT) || 9000
const frontendURL = process.env.FRONTEND_URL || 'http://localhost:3000'

const ageRules = [new OldestAgeClassicRule(), new OldestAgeFreestyleRule(), new YoungAgeRule(), new YoungestAgeRule()]

const controllers: Controller[] = [
  new SkiersController(new SkiersService(ageRules), new SkiersValidator())
]

const app = new App({ port, frontendURL, controllers })
app.run()
