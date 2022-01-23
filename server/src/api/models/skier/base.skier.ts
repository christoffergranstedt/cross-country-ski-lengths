import { TypeOfSkies } from '../../enums/TypeOfSkies'

export abstract class BaseSkier {
  protected static MAX_LENGTH_CM_CLASSIC_SKIES = 207
  protected static MAX_LENGTH_CM_FREESTYLE_SKIES = 192

  protected lengthCm: number
  protected age: number
  protected typeOfSkies: TypeOfSkies

  public constructor (lengthCm: number, age: number, typeOfSkies: TypeOfSkies) {
    this.lengthCm = lengthCm
    this.age = age
    this.typeOfSkies = typeOfSkies
  }

  protected isLengthSmallerMaxManifactured (typeOfSkies: TypeOfSkies, calculatedLengthCm: number) {
    if (typeOfSkies === TypeOfSkies.Classic) {
      return calculatedLengthCm < BaseSkier.MAX_LENGTH_CM_CLASSIC_SKIES
    } else {
      return calculatedLengthCm < BaseSkier.MAX_LENGTH_CM_FREESTYLE_SKIES
    }
  }

  abstract getRecommendedSkiesMinLengthCm (): number
  abstract getRecommendedSkiesMaxLengthCm (): number
}
