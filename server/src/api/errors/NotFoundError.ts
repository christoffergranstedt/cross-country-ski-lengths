import { CustomError } from './CustomError'

export class NotFoundError extends CustomError {
  constructor () {
    super('Route not found', 404)
  }
}
