import { ErrorResponse } from '../interfaces/ErrorResponse'
import { CustomError } from './CustomError'

export class InputValidationError extends CustomError {
  constructor (errorMessages: ErrorResponse[]) {
    super('User input is incorrect', 400)
    if (errorMessages) this.setErrorMessages(errorMessages)
  }
}
