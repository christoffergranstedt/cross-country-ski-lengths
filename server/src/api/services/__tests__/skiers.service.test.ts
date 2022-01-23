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
        expect(skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)).toThrow(InputValidationError)
      })

      test('0 years old and classic skies should return same recomended skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 50
        const age = 0
        const typeOfSkies = TypeOfSkies.Classic
        const expectedSkiLength = 50
        const { recomendedSkiesMinLength, recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('0 years old and freestyle skies should return same recomended skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 50
        const age = 0
        const typeOfSkies = TypeOfSkies.Freestyle
        const expectedSkiLength = 50
        const { recomendedSkiesMinLength, recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('4 years old and classic skies should return same recomended skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 150
        const age = 4
        const typeOfSkies = TypeOfSkies.Classic
        const expectedSkiLength = 150
        const { recomendedSkiesMinLength, recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('4 years old and freestyle skies should return same recomended skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 150
        const age = 4
        const typeOfSkies = TypeOfSkies.Freestyle
        const expectedSkiLength = 150
        const { recomendedSkiesMinLength, recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).toEqual(expectedSkiLength)
        expect(recomendedSkiesMaxLength).toEqual(expectedSkiLength)
      })

      test('5 years old should not return same recomended skie length as length', () => {
        const skierService = new SkiersService()
        const skierLengthCm = 150
        const age = 5
        const typeOfSkies = TypeOfSkies.Freestyle
        const expectedSkiLength = 150
        const { recomendedSkiesMinLength, recomendedSkiesMaxLength } = skierService.calculateLengthOfSkiesService(skierLengthCm, age, typeOfSkies)

        expect(recomendedSkiesMinLength).not.toEqual(expectedSkiLength)
        expect(recomendedSkiesMaxLength).not.toEqual(expectedSkiLength)
      })
    })
  })
})
