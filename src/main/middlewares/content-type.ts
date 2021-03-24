import type { Request, Response, NextFunction } from 'express'

export const contentType = (_request: Request, response: Response, next: NextFunction) => {
  response.type('json')
  return next()
}
