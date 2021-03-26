import { ServerError } from '../errors/server-error'
import { HttpResponse } from '../protocols'

export const badRequest = (error: Error): HttpResponse => {
  return {
    statusCode: 400,
    body: error
  }
}

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(error.stack)
})

export const ok = <T>(data: T): HttpResponse => ({
  statusCode: 200,
  body: data
})
