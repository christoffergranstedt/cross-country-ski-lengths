import { TypeOfSki } from '../../enums/TypeOfSki'
import { InputValidationError } from '../../errors/InputValidationError'
import { SkiersService } from '../skiers.service'

describe('skiers', () => {
  describe('skie-length', () => {
    describe('youngest skier', () => {
      test('-1 years old should return an error', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 50
        const age = -1
        const typeOfSki = TypeOfSki.Classic
        expect(() => {
          skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        }).toThrow(InputValidationError)
      })

      test('0 years old and classic skies should return same recomended skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 50
        const age = 0
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm
        const { recommendedSkiesMinLength, recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('0 years old and freestyle skies should return same recomended skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 50
        const age = 0
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm
        const { recommendedSkiesMinLength, recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('4 years old and classic skies should return same recomended skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 150
        const age = 4
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm
        const { recommendedSkiesMinLength, recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('4 years old and freestyle skies should return same recomended skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 150
        const age = 4
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm
        const { recommendedSkiesMinLength, recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('5 years old should not return same recomended skie length as length', () => {
        const skierService = new SkiersService()
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
        const skierService = new SkiersService()
        const skierLengthCm = 100
        const age = 5
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 10
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('5 years old and freestyle skies should return 10 cm more recomended min skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 100
        const age = 5
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 10
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('5 years old and classic skies should return 20 cm more recomended max skie length as skier length 100', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 100
        const age = 5
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('5 years old and freestyle skies should return 20 cm more recomended max skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 100
        const age = 5
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 20
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })
      test('8 years old and classic skies should return 10 cm more recomended min skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 100
        const age = 8
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 10
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('8 years old and freestyle skies should return 10 cm more recomended min skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 100
        const age = 8
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 10
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('8 years old and classic skies should return 20 cm more recomended max skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 100
        const age = 8
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('8 years old and freestyle skies should return 20 cm more recomended max skie length as length', () => {
        const skierService = new SkiersService()
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
        const skierService = new SkiersService()
        const skierLengthCm = 160
        const age = 9
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('9 years old and freestyle skies should return 10 cm more recomended min skie length as length when shorter than max manifactured', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 160
        const age = 9
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 10
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('9 years old and classic skies should return 20 cm more recomended max skie length as skier length when shorter than max manifactured', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 160
        const age = 9
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('9 years old and freestyle skies should return 15 cm more recomended max skie length as length when shorter than max manifactured', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 160
        const age = 9
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 15
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('100 years old and classic skies should return 20 cm more recomended min skie length as length when shorter than max manifactured', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 160
        const age = 100
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('100 years old and freestyle skies should return 10 cm more recomended min skie length as length when shorter than max manifactured', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 160
        const age = 100
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 10
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('100 years old and classic skies should return 20 cm more recomended max skie length as skier length 100 when shorter than max manifactured', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 160
        const age = 100
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('100 years old and freestyle skies should return 15 cm more recomended max skie length as length when shorter than max manifactured', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 160
        const age = 100
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 15
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('Classic skies should return 20 cm more recomended max skie length as length when 186 cm long', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 186
        const age = 100
        const typeOfSki = TypeOfSki.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recommendedSkiesMinLength, recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('Classic skies should return max manifactured length when skier is 188 cm long', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 188
        const age = 100
        const typeOfSki = TypeOfSki.Classic
        const maxManifacturedLength = 207
        const { recommendedSkiesMinLength, recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(maxManifacturedLength)
        expect(recommendedSkiesMaxLength).toEqual(maxManifacturedLength)
      })

      test('Freestyle skies min length should return 10 cm more recomended max skie length as length when 181 cm long', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 181
        const age = 100
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 10
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('Freestyle skies min length should return max manifactured length when skier is 183 cm long', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 183
        const age = 100
        const typeOfSki = TypeOfSki.Freestyle
        const maxManifacturedLength = 192
        const { recommendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMinLength).toEqual(maxManifacturedLength)
      })

      test('Freestyle skies max length should return 15 cm more recomended max skie length as length when 177 cm long', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 177
        const age = 100
        const typeOfSki = TypeOfSki.Freestyle
        const expectedSkiLength = skierLengthCm + 15
        const { recommendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSki)

        expect(recommendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('Freestyle skies max length should return max manifactured length when skier is 179 cm long', () => {
        const skierService = new SkiersService()
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
