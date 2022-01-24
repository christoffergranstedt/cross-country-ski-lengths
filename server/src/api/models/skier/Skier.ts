import { TypeOfSki } from '../../enums/TypeOfSki'

export abstract class BaseSkier {
  protected static MAX_LENGTH_CM_CLASSIC_SKIES = 207
  protected static MAX_LENGTH_CM_FREESTYLE_SKIES = 192

  protected lengthCm: number
  protected age: number
  protected typeOfSkies: TypeOfSki

  public constructor (lengthCm: number, age: number, typeOfSkies: TypeOfSki) {
    this.lengthCm = lengthCm
    this.age = age
    this.typeOfSkies = typeOfSkies
  }

  protected isLengthSmallerMaxManifactured (typeOfSkies: TypeOfSki, calculatedLengthCm: number) {
    if (typeOfSkies === TypeOfSki.Classic) {
      return calculatedLengthCm < BaseSkier.MAX_LENGTH_CM_CLASSIC_SKIES
    } else {
      return calculatedLengthCm < BaseSkier.MAX_LENGTH_CM_FREESTYLE_SKIES
    }
  }

  abstract getRecommendedSkiesMinLengthCm (): number
  abstract getRecommendedSkiesMaxLengthCm (): number
}
