import { Controller, HttpRequest, HttpResponse } from './signup-protocols'
import { badRequest } from '../../helpers/http-helper'
import { InvalidParamError } from '../../errors/invalid-param-error'

export class SignUpController implements Controller {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    if (!httpRequest.body.name) {
      return badRequest(new InvalidParamError('name'))
    }

    if (!httpRequest.body.email) {
      return badRequest(new InvalidParamError('email'))
    }

    if (!httpRequest.body.password) {
      return badRequest(new InvalidParamError('password'))
    }

    return new Promise(resolve => resolve(null as HttpResponse))
  }
}
