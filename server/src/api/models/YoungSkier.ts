import { BaseSkier } from './BaseSkier'

export class YoungSkier extends BaseSkier {
  public static MIN_AGE = 5
  public static MAX_AGE = 8
  private static CM_ADDED_FOR_MIN_LENGTH = 10
  private static CM_ADDED_FOR_MAX_LENGTH = 20

  public getRecomendedSkiesMinLengthCm (): number {
    return this.lengthCm + YoungSkier.CM_ADDED_FOR_MIN_LENGTH
  }

  public getRecomendedSkiesMaxLengthCm (): number {
    return this.lengthCm + YoungSkier.CM_ADDED_FOR_MAX_LENGTH
  }
}
