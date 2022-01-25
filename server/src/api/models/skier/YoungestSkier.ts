import { BaseSkier } from './Skier'

export class YoungestSkier extends BaseSkier {
  public static MIN_AGE = 0
  public static MAX_AGE = 4
  protected cmAddedMinClassic = 0
  protected cmAddedMaxClassic = 0
  protected cmAddedMinFreestyle = 0
  protected cmAddedMaxFreestyle = 0
}
