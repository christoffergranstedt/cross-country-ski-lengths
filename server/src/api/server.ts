/* eslint-disable import/first */
import dotenv from 'dotenv'
dotenv.config()

import { app } from './app'

const port = Number(process.env.PORT) || 9000

try {
  app.listen(port, async () => {
    console.log(`Server running on port ${port}`)
  })
} catch (error) {
  console.log('Something went wrong when connecting to database or server')
}
