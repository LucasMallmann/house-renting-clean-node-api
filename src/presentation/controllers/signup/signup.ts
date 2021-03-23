import { IController, IHttpRequest, IHttpResponse } from './signup-protocols'
import { badRequest } from '../../helpers/http-helper'
import { MissingParamError } from '../../errors'

export class SignUpController implements IController {
  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    return new Promise(resolve => resolve(null as IHttpResponse))
  }
}
