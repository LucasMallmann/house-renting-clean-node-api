import type { Express, RequestHandler } from 'express'

import { cors, bodyParser, contentType } from '../middlewares'

export default (app: Express): void => {
  app.use(bodyParser as RequestHandler)
  app.use(cors)
  app.use(contentType)
}
