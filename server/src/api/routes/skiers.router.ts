import express from 'express'
import { getRecommendedSkiLengths } from '../controllers/skiers.controller'

export const router = express.Router({ mergeParams: true })

router.post('/get-recommended-ski-lengths', getRecommendedSkiLengths)
