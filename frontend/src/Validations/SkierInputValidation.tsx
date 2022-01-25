import * as yup from 'yup'
import { TypeOfSki } from '../Constants/TypeOfSki'

export const skierInputSchema = yup.object({
  lengthCm: yup.number()
  .typeError('It has to be a number')
  .integer('It has to be an integer')
  .min(0, 'Minimum 0 cm is accepted')
  .max(300, 'Maximum 300 cm is accepted')
  .required('This field is required'),
  age: yup.number()
  .typeError('It has to be a number')
  .integer('It has to be an integer')
  .min(0, 'Minimum 0 years is accepted')
  .max(130, 'Maximum 130 years is accepted')
  .required('This field is required'),
	typeOfSki: yup.string()
    .typeError('It has to be a string')
    .oneOf([TypeOfSki.Classic, TypeOfSki.Freestyle], `It has to be either ${TypeOfSki.Classic} or ${TypeOfSki.Freestyle}`)
    .required('This field is required')
}).required()