import { BaseSkier } from './Skier'

export class YoungestSkier extends BaseSkier {
  public static MIN_AGE = 0
  public static MAX_AGE = 4

  public getRecommendedSkiesMinLengthCm = (): number => {
    return this.lengthCm
  }

  public getRecommendedSkiesMaxLengthCm = (): number => {
    return this.lengthCm
  }
}
