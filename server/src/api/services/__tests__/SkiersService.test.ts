import { TypeOfSki } from '../../enums/TypeOfSki'
import { InputValidationError } from '../../errors/InputValidationError'
import { OldestAgeClassicRule } from '../../models/skier/rules/AgeRules/Oldest/OldestAgeClassicRule'
import { OldestAgeFreestyleRule } from '../../models/skier/rules/AgeRules/Oldest/OldestAgeFreestyleRule'
import { YoungAgeRule } from '../../models/skier/rules/AgeRules/Young/YoungAgeRule'
import { YoungestAgeRule } from '../../models/skier/rules/AgeRules/Youngest/YoungestAgeRule'
import { SkiersService } from '../SkiersService'

describe('skiers', () => {
  describe('skie-length', () => {
    let skierService: SkiersService

    beforeAll(() => {
      const ageRules = [new OldestAgeClassicRule(), new OldestAgeFreestyleRule(), new YoungAgeRule(), new YoungestAgeRule()]
      skierService = new SkiersService(ageRules)
    })

    describe('youngest skier', () => {
      test('-1 years old should return an error', () => {
        const skierLengthCm = 50
        const age = -1
        const typeOfSki = TypeOfSki.Classic
        expect(() => {
          skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        }).toThrow(InputValidationError)
      })

      test('-1 length cm old should return an error', () => {
        const skierLengthCm = -1
        const age = 50
        const typeOfSki = TypeOfSki.Classic
        expect(() => {
          skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        }).toThrow(InputValidationError)
      })

      test('No length provided should return an error', () => {
        const skierLengthCm: number = null
        const age = 50
        const typeOfSki = TypeOfSki.Classic
        expect(() => {
          skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        }).toThrow(InputValidationError)
      })

      test('No age provided should return an error', () => {
        const skierLengthCm = 50
        const age: number = null
        const typeOfSki = TypeOfSki.Classic
        expect(() => {
          skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        }).toThrow(InputValidationError)
      })

      test('No type of ski provided should return an error', () => {
        const skierLengthCm = 50
        const age = 50
        const typeOfSki: TypeOfSki = null
        expect(() => {
          skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        }).toThrow(InputValidationError)
      })

      test('0 years old and classic skies should return same recomended skie length as length', () => {
        const skierLengthCm = 50
        const age = 0
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm
        const { recommendedSkiesMinLength, recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('0 years old and freestyle skies should return same recomended skie length as length', () => {
        const skierLengthCm = 50
        const age = 0
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm
        const { recommendedSkiesMinLength, recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('4 years old and classic skies should return same recomended skie length as length', () => {
        const skierLengthCm = 150
        const age = 4
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm
        const { recommendedSkiesMinLength, recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('4 years old and freestyle skies should return same recomended skie length as length', () => {
        const skierLengthCm = 150
        const age = 4
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm
        const { recommendedSkiesMinLength, recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('5 years old should not return same recomended skie length as length', () => {
        const skierLengthCm = 150
        const age = 5
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm
        const { recommendedSkiesMinLength, recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).not.toEqual(expectedSkiLength)
        expect(recommendedSkiesMaxLength).not.toEqual(expectedSkiLength)
      })
    })

    describe('young skier', () => {
      test('5 years old and classic skies should return 10 cm more recomended min skie length as length', () => {
        const skierLengthCm = 100
        const age = 5
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 10
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('5 years old and freestyle skies should return 10 cm more recomended min skie length as length', () => {
        const skierLengthCm = 100
        const age = 5
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 10
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('5 years old and classic skies should return 20 cm more recomended max skie length as skier length 100', () => {
        const skierLengthCm = 100
        const age = 5
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('5 years old and freestyle skies should return 20 cm more recomended max skie length as length', () => {
        const skierLengthCm = 100
        const age = 5
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 20
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })
      test('8 years old and classic skies should return 10 cm more recomended min skie length as length', () => {
        const skierLengthCm = 100
        const age = 8
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 10
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('8 years old and freestyle skies should return 10 cm more recomended min skie length as length', () => {
        const skierLengthCm = 100
        const age = 8
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 10
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('8 years old and classic skies should return 20 cm more recomended max skie length as length', () => {
        const skierLengthCm = 100
        const age = 8
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('8 years old and freestyle skies should return 20 cm more recomended max skie length as length', () => {
        const skierLengthCm = 100
        const age = 8
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 20
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })
    })

    describe('oldest skier', () => {
      test('9 years old and classic skies should return 20 cm more recomended min skie length as length when shorter than max manifactured', () => {
        const skierLengthCm = 160
        const age = 9
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('9 years old and freestyle skies should return 10 cm more recomended min skie length as length when shorter than max manifactured', () => {
        const skierLengthCm = 160
        const age = 9
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 10
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('9 years old and classic skies should return 20 cm more recomended max skie length as skier length when shorter than max manifactured', () => {
        const skierLengthCm = 160
        const age = 9
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('9 years old and freestyle skies should return 15 cm more recomended max skie length as length when shorter than max manifactured', () => {
        const skierLengthCm = 160
        const age = 9
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 15
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('100 years old and classic skies should return 20 cm more recomended min skie length as length when shorter than max manifactured', () => {
        const skierLengthCm = 160
        const age = 100
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('100 years old and freestyle skis should return 10 cm more recomended min skie length as length when shorter than max manifactured', () => {
        const skierLengthCm = 160
        const age = 100
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 10
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('100 years old and classic skis should return 20 cm more recomended max ski length as skier length 100 when shorter than max manifactured', () => {
        const skierLengthCm = 160
        const age = 100
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('100 years old and freestyle skis should return 15 cm more recomended max ski length as length when shorter than max manifactured', () => {
        const skierLengthCm = 160
        const age = 100
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 15
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('Classic skis should return 20 cm more recomended max ski length as length when 186 cm long', () => {
        const skierLengthCm = 186
        const age = 100
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recommendedSkiesMinLength, recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('Classic skis should return max manifactured length when skier is 188 cm long', () => {
        const skierLengthCm = 188
        const age = 100
        const typeOfSki = TypeOfSki.Classic
        const maxManifacturedLength = 207
        const { recommendedSkiesMinLength, recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(maxManifacturedLength)
        expect(recommendedSkiesMaxLength).toEqual(maxManifacturedLength)
      })

      test('Freestyle skis min length should return 10 cm more recomended max ski length as length when 181 cm long', () => {
        const skierLengthCm = 181
        const age = 100
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 10
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('Freestyle skis min length should return max manifactured length when skier is 183 cm long', () => {
        const skierLengthCm = 183
        const age = 100
        const typeOfSki = TypeOfSki.Freestyle
        const maxManifacturedLength = 192
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(maxManifacturedLength)
      })

      test('Freestyle skis max length should return 15 cm more recomended max skielength as length when 177 cm long', () => {
        const skierLengthCm = 177
        const age = 100
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 15
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('Freestyle skis max length should return max manifactured length when skier is 179 cm long', () => {
        const skierLengthCm = 179
        const age = 100
        const typeOfSki = TypeOfSki.Freestyle
        const maxManifacturedLength = 192
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMaxLength).toEqual(maxManifacturedLength)
      })
    })
  })
})
