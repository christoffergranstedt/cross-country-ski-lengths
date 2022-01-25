import { TypeOfSki } from '../enums/TypeOfSki'

export interface InputGetRecommendedSkiLengthBody {
  lengthCm: number
  age: number
  typeOfSki: TypeOfSki.Classic | TypeOfSki.Freestyle
}
