import { ErrorRequestHandler, Request, Response, NextFunction } from 'express'
import { CustomError } from '../errors'

export const errorHandler: ErrorRequestHandler = (error: Error, _req: Request, res: Response, next: NextFunction) => {
  if (error instanceof CustomError) {
    return res.status(error.getStatusCode()).send({ errors: error.getErrors() })
  }

  return res.status(500).send({
    errors: [{ message: 'Something went wrong in the server, please try again' }]
  })
}
