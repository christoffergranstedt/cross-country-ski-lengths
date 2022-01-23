import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'

import { router as routes } from './routes/routes'
import { NotFoundError } from './errors'
import { errorHandler } from './middlewares/errorHandler'

const frontendURL = process.env.FRONTEND_URL || 'http://localhost:3000'

export const app = express()

app.use(express.json())

app.use(cors({ origin: frontendURL }))
app.use((_req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, HEAD, OPTIONS')
  next()
})

app.use('/api', routes)

app.all('*', async (_req: Request, _res: Response, next: NextFunction) => {
  next(new NotFoundError())
})

app.use(errorHandler)
