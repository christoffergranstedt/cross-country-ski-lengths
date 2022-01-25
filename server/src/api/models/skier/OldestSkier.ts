import { BaseSkier } from './Skier'

export class OldestSkier extends BaseSkier {
  public static MIN_AGE = 9
  public static MAX_AGE = 130
  protected cmAddedMinClassic = 20
  protected cmAddedMaxClassic = 20
  protected cmAddedMinFreestyle = 10
  protected cmAddedMaxFreestyle = 15
}
