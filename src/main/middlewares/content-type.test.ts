import request from 'supertest'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import app from '../config/app'

describe('Content Type Middleware', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL as string)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    const accountsCollection = await MongoHelper.getCollection('accounts')
    await accountsCollection.deleteMany({})
  })

  test('should return default content type as JSON', async () => {
    app.get('/test-content-type-json', (request, response) => {
      return response.send('')
    })

    await request(app).get('/test-content-type-json').expect('content-type', /json/)
  })

  test('should return XML content type when forced', async () => {
    app.get('/test-content-type-xml', (request, response) => {
      response.type('xml')
      return response.send('')
    })

    await request(app).get('/test-content-type-xml').expect('content-type', /xml/)
  })
})
