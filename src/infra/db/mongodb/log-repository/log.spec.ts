import { Collection } from 'mongodb'
import { MongoHelper } from '../helpers/mongo-helper'
import { LogMongoRepository } from './log'

describe('Log Mongo Repository', () => {
  let logErrorCollection: Collection

  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  beforeEach(async () => {
    logErrorCollection = await MongoHelper.getCollection('errors')
    await logErrorCollection.deleteMany({})
  })

  test('Should create a log error on success', async () => {
    const sut = new LogMongoRepository()
    await sut.logError('any_error_stack')
    const count = await logErrorCollection.countDocuments()
    expect(count).toBe(1)
  })
})
