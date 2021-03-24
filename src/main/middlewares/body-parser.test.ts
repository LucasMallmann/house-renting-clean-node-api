import request from 'supertest'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
import app from '../config/app'

describe('Body Parser Middleware', () => {
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

  test('should parse body as json', async () => {
    app.post('/test-body-parser', (request, response) => {
      return response.send(request.body)
    })

    await request(app).post('/test-body-parser').send({ name: 'any_name' }).expect({ name: 'any_name' })
  })
})
