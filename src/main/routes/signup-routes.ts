import type { Router } from 'express'
import { makeSignUpController } from '../factories/signup'
import { adaptRoute } from '../adapters/express-route-adapter'

export default (router: Router) => {
  router.post('/signup', adaptRoute(makeSignUpController()))
}
