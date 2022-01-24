import { Request, Response, NextFunction } from 'express'
import { validationResult } from 'express-validator'

import { InputValidationError } from '../errors/InputValidationError'
import { ErrorResponse } from '../interfaces/ErrorResponse'

export abstract class Validator {
  public validate = (req: Request, _res: Response, next: NextFunction): void => {
    const errors = validationResult(req)

    if (errors.isEmpty()) {
      return next()
    }

    const extractedErrors: ErrorResponse[] = []
    errors.array().map(error => extractedErrors.push({ message: error.msg }))
    throw new InputValidationError(extractedErrors)
  }
}
