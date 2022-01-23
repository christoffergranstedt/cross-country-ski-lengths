import * as yup from 'yup'
import { TypeOfSki } from '../Constants/TypeOfSki'

export const skierInputSchema = yup.object({
  lengthCm: yup.number().integer().min(0).max(300).required(),
  age: yup.number().integer().min(0).max(300).required(),
	typeOfSki: yup.string().oneOf([TypeOfSki.Classic, TypeOfSki.Freestyle]).required()
}).required()