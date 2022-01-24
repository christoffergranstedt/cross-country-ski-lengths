import { TypeOfSki } from '../../enums/TypeOfSki'
import { BaseSkier } from './Skier'

export class OldestSkier extends BaseSkier {
  public static MIN_AGE = 9
  private static CM_ADDED_CLASSIC = 20
  private static MIN_CM_ADDED_FREESTYLE = 10
  private static MAX_CM_ADDED_FREESTYLE = 15

  public getRecommendedSkiesMinLengthCm = (): number => {
    if (this.typeOfSkies === TypeOfSki.Classic) {
      const calculatedLength = this.lengthCm + OldestSkier.CM_ADDED_CLASSIC
      return this.isLengthSmallerMaxManifactured(this.typeOfSkies, calculatedLength) ? calculatedLength : BaseSkier.MAX_LENGTH_CM_CLASSIC_SKIES
    } else {
      const calculatedLength = this.lengthCm + OldestSkier.MIN_CM_ADDED_FREESTYLE
      return this.isLengthSmallerMaxManifactured(this.typeOfSkies, calculatedLength) ? calculatedLength : BaseSkier.MAX_LENGTH_CM_FREESTYLE_SKIES
    }
  }

  public getRecommendedSkiesMaxLengthCm = (): number => {
    if (this.typeOfSkies === TypeOfSki.Classic) {
      const calculatedLength = this.lengthCm + OldestSkier.CM_ADDED_CLASSIC
      return this.isLengthSmallerMaxManifactured(this.typeOfSkies, calculatedLength) ? calculatedLength : BaseSkier.MAX_LENGTH_CM_CLASSIC_SKIES
    } else {
      const calculatedLength = this.lengthCm + OldestSkier.MAX_CM_ADDED_FREESTYLE
      return this.isLengthSmallerMaxManifactured(this.typeOfSkies, calculatedLength) ? calculatedLength : BaseSkier.MAX_LENGTH_CM_FREESTYLE_SKIES
    }
  }
}
