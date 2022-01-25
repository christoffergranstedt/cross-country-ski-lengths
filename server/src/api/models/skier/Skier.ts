import { TypeOfSki } from '../../enums/TypeOfSki'

export abstract class BaseSkier {
  public static MIN_AGE = 0
  public static MAX_AGE = 130
  public static MIN_LENGTH = 40
  public static MAX_LENGTH = 300
  protected static MAX_LENGTH_CM_CLASSIC_SKIES = 207
  protected static MAX_LENGTH_CM_FREESTYLE_SKIES = 192

  protected lengthCm: number
  protected age: number
  protected typeOfSkies: TypeOfSki
  protected abstract cmAddedMinClassic: number
  protected abstract cmAddedMaxClassic: number
  protected abstract cmAddedMinFreestyle: number
  protected abstract cmAddedMaxFreestyle: number

  public constructor (lengthCm: number, age: number, typeOfSkies: TypeOfSki) {
    this.lengthCm = lengthCm
    this.age = age
    this.typeOfSkies = typeOfSkies
  }

  public getRecommendedSkiesMinLengthCm = (): number => {
    if (this.typeOfSkies === TypeOfSki.Classic) {
      const calculatedLength = this.lengthCm + this.cmAddedMinClassic
      return this.isLengthSmallerMaxManifactured(this.typeOfSkies, calculatedLength) ? calculatedLength : BaseSkier.MAX_LENGTH_CM_CLASSIC_SKIES
    } else {
      const calculatedLength = this.lengthCm + this.cmAddedMinFreestyle
      return this.isLengthSmallerMaxManifactured(this.typeOfSkies, calculatedLength) ? calculatedLength : BaseSkier.MAX_LENGTH_CM_FREESTYLE_SKIES
    }
  }

  public getRecommendedSkiesMaxLengthCm = (): number => {
    if (this.typeOfSkies === TypeOfSki.Classic) {
      const calculatedLength = this.lengthCm + this.cmAddedMaxClassic
      return this.isLengthSmallerMaxManifactured(this.typeOfSkies, calculatedLength) ? calculatedLength : BaseSkier.MAX_LENGTH_CM_CLASSIC_SKIES
    } else {
      const calculatedLength = this.lengthCm + this.cmAddedMaxFreestyle
      return this.isLengthSmallerMaxManifactured(this.typeOfSkies, calculatedLength) ? calculatedLength : BaseSkier.MAX_LENGTH_CM_FREESTYLE_SKIES
    }
  }

  protected isLengthSmallerMaxManifactured = (typeOfSkies: TypeOfSki, calculatedLengthCm: number): boolean => {
    if (typeOfSkies === TypeOfSki.Classic) {
      return calculatedLengthCm < BaseSkier.MAX_LENGTH_CM_CLASSIC_SKIES
    } else {
      return calculatedLengthCm < BaseSkier.MAX_LENGTH_CM_FREESTYLE_SKIES
    }
  }
}
