import { Controller, HttpRequest, HttpResponse } from './signup-protocols'

export class SignUpController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }

    return new Promise(resolve => resolve(null as HttpResponse))
  }
}
