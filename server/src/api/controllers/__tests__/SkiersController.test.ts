import { Application } from 'express'
import request from 'supertest'

import { App } from '../../app'
import { SkiersService } from '../../services/SkiersService'
import { SkiersValidator } from '../../validations/SkiersValidator'
import { Controller } from '../Controller'
import { SkiersController } from '../SkiersController'

describe('skiers-controller', () => {
  let app: Application

  beforeAll(() => {
    const port = Number(process.env.PORT) || 9000
    const frontendURL = process.env.FRONTEND_URL || 'http://localhost:3000'
    const controllers: Controller[] = [
      new SkiersController(new SkiersService(), new SkiersValidator())
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

    test('responds with a 400 status code when lengthCm is missing', done => {
      request(app)
        .post(getRecommendedSkiLengthsPath)
        .send({ age: 50, typeOfSki: 'classic' })
        .expect(400, done)
    })

    test('responds with a 400 status code when age is missing', done => {
      request(app)
        .post(getRecommendedSkiLengthsPath)
        .send({ lengthCm: 150, typeOfSki: 'classic' })
        .expect(400, done)
    })

    test('responds with a 400 status code when typeOfSki is missing', done => {
      request(app)
        .post(getRecommendedSkiLengthsPath)
        .send({ lengthCm: 150, age: 50 })
        .expect(400, done)
    })

    test('responds with a 200 status code when correct body', done => {
      request(app)
        .post(getRecommendedSkiLengthsPath)
        .send({ lengthCm: 150, age: 50, typeOfSki: 'classic' })
        .expect(200, done)
    })

    test('responds with a 200 status code when correct body except an extra field', done => {
      request(app)
        .post(getRecommendedSkiLengthsPath)
        .send({ lengthCm: 150, age: 50, typeOfSki: 'classic', extra: 'hello' })
        .expect(200, done)
    })

    test('responds with a 400 status code when lengthCm is under 0 cm', done => {
      request(app)
        .post(getRecommendedSkiLengthsPath)
        .send({ lengthCm: -1, age: 50, typeOfSki: 'classic' })
        .expect(400, done)
    })

    test('responds with a 400 status code when age is minus', done => {
      request(app)
        .post(getRecommendedSkiLengthsPath)
        .send({ lengthCm: 150, age: -1, typeOfSki: 'classic' })
        .expect(400, done)
    })

    test('responds with a 400 status code when typeOfSki is something other than classic or freestyle', done => {
      request(app)
        .post(getRecommendedSkiLengthsPath)
        .send({ lengthCm: 150, age: -1, typeOfSki: 'classico' })
        .expect(400, done)
    })

    test('responds with a 200 status code and recomended min ski length of 160 and max length of 165 when freestyle, 50 years old and 150 cm long', done => {
      request(app)
        .post(getRecommendedSkiLengthsPath)
        .send({ lengthCm: 150, age: 50, typeOfSki: 'classic' })
        .expect(200)
        .end(function (err, res) {
          if (err) return done(err)
          expect(res.body).toMatchObject({
            data: {
              recommendedSkiesMinLength: 160,
              recommendedSkiesMaxLength: 165
            }
          })
          done()
        })
    })
  })
})
