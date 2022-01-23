/* eslint-disable import/first */
import dotenv from 'dotenv'
dotenv.config()

import { App } from './app'

const port = Number(process.env.PORT) || 9000
const frontendURL = process.env.FRONTEND_URL || 'http://localhost:3000'

const app = new App(port, frontendURL)
app.run()
