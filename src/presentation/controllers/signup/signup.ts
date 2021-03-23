import { IController, IHttpRequest, IHttpResponse } from './signup-protocols'
import { IEmailValidator } from '../../protocols/email-validator'
import { badRequest, serverError } from '../../helpers/http-helper'
import { InvalidParamError, MissingParamError } from '../../errors'

export class SignUpController implements IController {
  private readonly emailValidator: IEmailValidator

  constructor (
    emailValidator: IEmailValidator
  ) {
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']

      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const { email, password, passwordConfirmation } = httpRequest.body

      const isEmailValid = this.emailValidator.isValid(email)

      if (!isEmailValid) {
        return badRequest(new InvalidParamError('email'))
      }

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }

      return new Promise(resolve => resolve(null as IHttpResponse))
    } catch (error) {
      return serverError(error)
    }
  }
}
