import { ErrorRequestHandler, Request, Response } from 'express'
import { CustomError } from '../errors'

export const errorHandler: ErrorRequestHandler = (error: Error, _req: Request, res: Response) => {
  if (error instanceof CustomError) {
    return res.status(error.getStatusCode()).send({ errors: error.getErrors() })
  }

  return res.status(500).send({
    errors: [{ message: 'Something went wrong in the server, please try again' }]
  })
}
