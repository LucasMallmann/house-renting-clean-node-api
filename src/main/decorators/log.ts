import { Controller, HttpRequest, HttpResponse } from '../../presentation/protocols'

export class LogControllerDecorator implements Controller {
  private readonly controller: Controller

  constructor (controller: Controller) {
    this.controller = controller
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    const httpResponse = await this.controller.handle(request)
    return httpResponse
  }
}
