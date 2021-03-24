import request from 'supertest'
import app from '../config/app'

describe('Body Parser Middleware', () => {
  test('should parse body as json', async () => {
    app.post('/test-body-parser', (request, response) => {
      return response.send(request.body)
    })

    await request(app).post('/test-body-parser').send({ name: 'any_name' }).expect({ name: 'any_name' })
  })
})
