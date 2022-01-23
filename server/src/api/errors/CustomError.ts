import { ErrorResponse } from '../interfaces/ErrorResponse'

export class CustomError extends Error {
  private statusCode: number
  private messages: ErrorResponse[]

  constructor (description: string, statusCode: number) {
    super(description)
    this.statusCode = statusCode
  }

  public getErrors (): ErrorResponse[] {
    if (this.messages) {
      return this.messages
    } else {
      return [{ message: this.message }]
    }
  }

  public setErrorMessages (messages: ErrorResponse[]): void {
    this.messages = messages
  }

  getStatusCode (): number {
    return this.statusCode
  }
}
