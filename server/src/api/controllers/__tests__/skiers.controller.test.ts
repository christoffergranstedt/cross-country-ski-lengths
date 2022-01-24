import { Application } from 'express'
import request from 'supertest'
import { App } from '../../app'
import { SkiersService } from '../../services/skiers.service'
import { Controller } from '../base.controller'
import { SkiersController } from '../skiers.controller'

describe('skiers-controller', () => {
  let app: Application

  beforeAll(() => {
    const port = Number(process.env.PORT) || 9000
    const frontendURL = process.env.FRONTEND_URL || 'http://localhost:3000'
    const controllers: Controller[] = [
      new SkiersController(new SkiersService())
    ]
    app = new App(port, frontendURL, controllers).getApp()
  })

  const getRecommendedSkiLengthsPath = '/api/skiers/get-recommended-ski-lengths'
  describe(getRecommendedSkiLengthsPath, () => {
    test('responds with a 400 status code when no body', done => {
      request(app)
        .post(getRecommendedSkiLengthsPath)
        .expect(400, done)
    })
  })
})
