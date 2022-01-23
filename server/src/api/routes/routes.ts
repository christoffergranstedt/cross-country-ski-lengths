import express from 'express'
import { router as skierRoutes } from './skiers.router'

export const router = express.Router()

router.use('/skiers', skierRoutes)
