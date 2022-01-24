import { BaseSkier } from './Skier'

export class YoungSkier extends BaseSkier {
  public static MIN_AGE = 5
  public static MAX_AGE = 8
  private static CM_ADDED_FOR_MIN_LENGTH = 10
  private static CM_ADDED_FOR_MAX_LENGTH = 20

  public getRecommendedSkiesMinLengthCm (): number {
    return this.lengthCm + YoungSkier.CM_ADDED_FOR_MIN_LENGTH
  }

  public getRecommendedSkiesMaxLengthCm (): number {
    return this.lengthCm + YoungSkier.CM_ADDED_FOR_MAX_LENGTH
  }
}
