import { TypeOfSki } from '../../enums/TypeOfSki'
import { InputValidationError } from '../../errors/InputValidationError'

export class Skier {
  public static MIN_AGE = 0
  public static MAX_AGE = 130
  public static MIN_LENGTH = 40
  public static MAX_LENGTH = 300
  private static MAX_LENGTH_CM_CLASSIC_SKIES = 207
  private static MAX_LENGTH_CM_FREESTYLE_SKIES = 192

  private _lengthCm: number
  private _age: number
  private _typeOfSkis: TypeOfSki
  private _maxLengthManifacturedLength: number
  private _recommendedSkiesMinLengthCm: number
  private _recommendedSkiesMaxLengthCm: number

  public constructor (lengthCm: number, age: number, typeOfSkis: TypeOfSki) {
    this.lengthCm = lengthCm
    this.age = age
    this.typeOfSkis = typeOfSkis
    if (typeOfSkis === TypeOfSki.Freestyle) {
      this.maxLengthManifacturedLength = Skier.MAX_LENGTH_CM_FREESTYLE_SKIES
    } else {
      this.maxLengthManifacturedLength = Skier.MAX_LENGTH_CM_CLASSIC_SKIES
    }
  }

  public get age (): number {
    return this._age
  }

  public set age (value) {
    if (value === null || value < Skier.MIN_AGE || value > Skier.MAX_AGE) {
      throw new InputValidationError([{ message: `Skier has to be between ${Skier.MIN_AGE} and ${Skier.MAX_AGE} years old` }])
    }
    this._age = value
  }

  public get lengthCm (): number {
    return this._lengthCm
  }

  public set lengthCm (value) {
    if (!value || value < Skier.MIN_LENGTH || value > Skier.MAX_LENGTH) {
      throw new InputValidationError([{ message: `Skier has to be between ${Skier.MIN_LENGTH} and ${Skier.MAX_LENGTH} cm` }])
    }
    this._lengthCm = value
  }

  public get typeOfSkis (): TypeOfSki {
    return this._typeOfSkis
  }

  public set typeOfSkis (value) {
    if (!value || (value !== TypeOfSki.Classic && value !== TypeOfSki.Freestyle)) {
      throw new InputValidationError([{ message: `Skies has to be either ${TypeOfSki.Classic} or ${TypeOfSki.Freestyle}` }])
    }
    this._typeOfSkis = value
  }

  public get maxLengthManifacturedLength (): number {
    return this._maxLengthManifacturedLength
  }

  public set maxLengthManifacturedLength (value) {
    this._maxLengthManifacturedLength = value
  }

  public get recommendedSkiesMinLengthCm (): number {
    return this._recommendedSkiesMinLengthCm
  }

  public set recommendedSkiesMinLengthCm (value) {
    this._recommendedSkiesMinLengthCm = value
  }

  public get recommendedSkiesMaxLengthCm (): number {
    return this._recommendedSkiesMaxLengthCm
  }

  public set recommendedSkiesMaxLengthCm (value) {
    this._recommendedSkiesMaxLengthCm = value
  }
}
