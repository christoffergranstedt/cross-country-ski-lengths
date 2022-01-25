import * as yup from 'yup'
import { TypeOfSki } from '../Constants/TypeOfSki'

const MIN_AGE = 0
const MAX_AGE = 130
const MIN_LENGTH = 40
const MAX_LENGTH = 300

export const skierInputSchema = yup.object({
  lengthCm: yup.number()
  .typeError('It has to be a number')
  .integer('It has to be an integer')
  .min(MIN_LENGTH, `Minimum ${MIN_LENGTH} cm is accpeted`)
  .max(MAX_LENGTH, `Maximum ${MAX_LENGTH} cm is accpeted`)
  .required('This field is required'),
  age: yup.number()
  .typeError('It has to be a number')
  .integer('It has to be an integer')
  .min(MIN_AGE, `Minimum ${MIN_AGE} years is accpeted`)
  .max(MAX_AGE, `Maximum ${MAX_AGE} years is accpeted`)
  .required('This field is required'),
	typeOfSki: yup.string()
    .typeError('It has to be a string')
    .oneOf([TypeOfSki.Classic, TypeOfSki.Freestyle], `It has to be either ${TypeOfSki.Classic} or ${TypeOfSki.Freestyle}`)
    .required('This field is required')
}).required()