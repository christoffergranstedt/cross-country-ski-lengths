import { TypeOfSkies } from '../../enums/TypeOfSkies'
import { InputValidationError } from '../../errors/InputValidationError'
import { SkiersService } from '../skiers.service'

describe('skiers', () => {
  describe('skie-length', () => {
    describe('youngest skier', () => {
      test('-1 years old should return an error', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 50
        const age = -1
        const typeOfSkies = TypeOfSkies.Classic
        expect(() => {
          skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)
        }).toThrow(InputValidationError)
      })

      test('-1 cm long should return an error', () => {
        const skierService = new SkiersService()
        const skierLengthCm = -1
        const age = 0
        const typeOfSkies = TypeOfSkies.Classic
        expect(() => {
          skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)
        }).toThrow(InputValidationError)
      })

      test('0 years old and classic skies should return same recomended skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 50
        const age = 0
        const typeOfSkies = TypeOfSkies.Classic
        const expectedSkiLength = skierLengthCm
        const { recomendedSkiesMinLength, recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('0 years old and freestyle skies should return same recomended skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 50
        const age = 0
        const typeOfSkies = TypeOfSkies.Freestyle
        const expectedSkiLength = skierLengthCm
        const { recomendedSkiesMinLength, recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('4 years old and classic skies should return same recomended skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 150
        const age = 4
        const typeOfSkies = TypeOfSkies.Classic
        const expectedSkiLength = skierLengthCm
        const { recomendedSkiesMinLength, recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('4 years old and freestyle skies should return same recomended skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 150
        const age = 4
        const typeOfSkies = TypeOfSkies.Freestyle
        const expectedSkiLength = skierLengthCm
        const { recomendedSkiesMinLength, recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('5 years old should not return same recomended skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 150
        const age = 5
        const typeOfSkies = TypeOfSkies.Freestyle
        const expectedSkiLength = skierLengthCm
        const { recomendedSkiesMinLength, recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).not.toEqual(expectedSkiLength)
        expect(recomendedSkiesMaxLength).not.toEqual(expectedSkiLength)
      })
    })

    describe('young skier', () => {
      test('5 years old and classic skies should return 10 cm more recomended min skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 100
        const age = 5
        const typeOfSkies = TypeOfSkies.Classic
        const expectedSkiLength = skierLengthCm + 10
        const { recomendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)
        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('5 years old and freestyle skies should return 10 cm more recomended min skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 100
        const age = 5
        const typeOfSkies = TypeOfSkies.Freestyle
        const expectedSkiLength = skierLengthCm + 10
        const { recomendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('5 years old and classic skies should return 20 cm more recomended max skie length as skier length 100', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 100
        const age = 5
        const typeOfSkies = TypeOfSkies.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)
        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('5 years old and freestyle skies should return 20 cm more recomended max skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 100
        const age = 5
        const typeOfSkies = TypeOfSkies.Freestyle
        const expectedSkiLength = skierLengthCm + 20
        const { recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })
      test('8 years old and classic skies should return 10 cm more recomended min skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 100
        const age = 8
        const typeOfSkies = TypeOfSkies.Classic
        const expectedSkiLength = skierLengthCm + 10
        const { recomendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)
        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('8 years old and freestyle skies should return 10 cm more recomended min skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 100
        const age = 8
        const typeOfSkies = TypeOfSkies.Freestyle
        const expectedSkiLength = skierLengthCm + 10
        const { recomendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('8 years old and classic skies should return 20 cm more recomended max skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 100
        const age = 8
        const typeOfSkies = TypeOfSkies.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)
        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('8 years old and freestyle skies should return 20 cm more recomended max skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 100
        const age = 8
        const typeOfSkies = TypeOfSkies.Freestyle
        const expectedSkiLength = skierLengthCm + 20
        const { recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })
    })

    describe('oldest skier', () => {
      test('9 years old and classic skies should return 20 cm more recomended min skie length as length when shorter than max manifactured', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 160
        const age = 9
        const typeOfSkies = TypeOfSkies.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recomendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)
        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('9 years old and freestyle skies should return 10 cm more recomended min skie length as length when shorter than max manifactured', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 160
        const age = 9
        const typeOfSkies = TypeOfSkies.Freestyle
        const expectedSkiLength = skierLengthCm + 10
        const { recomendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('9 years old and classic skies should return 20 cm more recomended max skie length as skier length when shorter than max manifactured', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 160
        const age = 9
        const typeOfSkies = TypeOfSkies.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)
        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('9 years old and freestyle skies should return 15 cm more recomended max skie length as length when shorter than max manifactured', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 160
        const age = 9
        const typeOfSkies = TypeOfSkies.Freestyle
        const expectedSkiLength = skierLengthCm + 15
        const { recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('100 years old and classic skies should return 20 cm more recomended min skie length as length when shorter than max manifactured', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 160
        const age = 100
        const typeOfSkies = TypeOfSkies.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recomendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)
        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('100 years old and freestyle skies should return 10 cm more recomended min skie length as length when shorter than max manifactured', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 160
        const age = 100
        const typeOfSkies = TypeOfSkies.Freestyle
        const expectedSkiLength = skierLengthCm + 10
        const { recomendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('100 years old and classic skies should return 20 cm more recomended max skie length as skier length 100 when shorter than max manifactured', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 160
        const age = 100
        const typeOfSkies = TypeOfSkies.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)
        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('100 years old and freestyle skies should return 15 cm more recomended max skie length as length when shorter than max manifactured', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 160
        const age = 100
        const typeOfSkies = TypeOfSkies.Freestyle
        const expectedSkiLength = skierLengthCm + 15
        const { recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('Classic skies should return 20 cm more recomended max skie length as length when 186 cm long', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 186
        const age = 100
        const typeOfSkies = TypeOfSkies.Classic
        const expectedSkiLength = skierLengthCm + 20
        const { recomendedSkiesMinLength, recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('Classic skies should return max manifactured length when skier is 188 cm long', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 188
        const age = 100
        const typeOfSkies = TypeOfSkies.Classic
        const maxManifacturedLength = 207
        const { recomendedSkiesMinLength, recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).toEqual(maxManifacturedLength)
        expect(recomendedSkiesMaxLength).toEqual(maxManifacturedLength)
      })

      test('Freestyle skies min length should return 10 cm more recomended max skie length as length when 181 cm long', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 181
        const age = 100
        const typeOfSkies = TypeOfSkies.Freestyle
        const expectedSkiLength = skierLengthCm + 10
        const { recomendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
      })

      test('Freestyle skies min length should return max manifactured length when skier is 183 cm long', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 183
        const age = 100
        const typeOfSkies = TypeOfSkies.Freestyle
        const maxManifacturedLength = 192
        const { recomendedSkiesMinLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).toEqual(maxManifacturedLength)
      })

      test('Freestyle skies max length should return 15 cm more recomended max skie length as length when 177 cm long', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 177
        const age = 100
        const typeOfSkies = TypeOfSkies.Freestyle
        const expectedSkiLength = skierLengthCm + 15
        const { recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('Freestyle skies max length should return max manifactured length when skier is 179 cm long', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 179
        const age = 100
        const typeOfSkies = TypeOfSkies.Freestyle
        const maxManifacturedLength = 192
        const { recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMaxLength).toEqual(maxManifacturedLength)
      })
    })
  })
})
