import { BaseSkier } from './Skier'

export class YoungSkier extends BaseSkier {
  public static MIN_AGE = 5
  public static MAX_AGE = 8
  protected cmAddedMinClassic = 10
  protected cmAddedMaxClassic = 20
  protected cmAddedMinFreestyle = 10
  protected cmAddedMaxFreestyle = 20
}
