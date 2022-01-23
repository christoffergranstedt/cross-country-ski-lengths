import { BaseSkier } from './base.skier'

export class YoungestSkier extends BaseSkier {
  public static MIN_AGE = 0
  public static MAX_AGE = 4

  public getRecomendedSkiesMinLengthCm (): number {
    return this.lengthCm
  }

  public getRecomendedSkiesMaxLengthCm (): number {
    return this.lengthCm
  }
}
