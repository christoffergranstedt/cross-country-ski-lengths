/* eslint-disable testing-library/no-unnecessary-act */
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { HomePage } from '../HomePage/HomePage'
import { act } from 'react-dom/test-utils'

const server = setupServer(
  rest.post('http://localhost:9000/api/skiers/get-recommended-ski-lengths', (req, res, ctx) => {
    return res(ctx.json({ data: { recommendedSkiesMinLength: 160, recommendedSkiesMaxLength: 165 } }))
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('HomePage', () => {
    test('button should be disabled on page load', () => {
      render(<HomePage />)
      expect(screen.getByRole('button')).toBeDisabled()
    })

    test('button should be disabled when length is not filled in', async () => {
      render(<HomePage />)
      const ageInput = screen.getByLabelText('Age')
      fireEvent.change(ageInput, { target: { value: 36 }})
      userEvent.selectOptions(screen.getByLabelText('Type of skis'), 'classic')  
      expect(screen.getByRole('button')).toBeDisabled()
    })
  
    test('button should be disabled when age is not filled in', () => {
      render(<HomePage />)
      const lengthInput = screen.getByLabelText('Skiers length in cm')
      fireEvent.change(lengthInput, { target: { value: 150 }})
      userEvent.selectOptions(screen.getByLabelText('Type of skis'), 'classic')  
      expect(screen.getByRole('button')).toBeDisabled()
    })

    test('button should be enabled when all fields are filled in', async () => {
      render(<HomePage />)
      await act(async () => {
        fireEvent.blur(screen.getByLabelText('Age'), {
          target: {
            value: '50',
          }
        })
        fireEvent.blur(screen.getByLabelText('Skiers length in cm'), {
          target: {
            value: '150',
          }
        })

        userEvent.selectOptions(screen.getByLabelText('Type of skis'), 'classic')  
      })

      expect(screen.getByRole('button')).toBeEnabled()
    })

    test('Warning text should be visible when filling in -1 as age and blur out', async () => {
      render(<HomePage />)
      await act(async () => {
        fireEvent.blur(screen.getByLabelText('Age'), {
          target: {
            value: '-1',
          }
        })
      })

      expect(screen.getByText('Minimum 0 years is accepted')).toBeVisible()
    })

    test('Warning text should be visible when filling in a string as age and blur out', async () => {
      render(<HomePage />)
      await act(async () => {
        fireEvent.blur(screen.getByLabelText('Age'), {
          target: {
            value: 'hello',
          }
        })
      })

      expect(screen.getByText('It has to be a number')).toBeVisible()
    })

    test('Warning text should be visible when filling in 131 as age and blur out', async () => {
      render(<HomePage />)
      await act(async () => {
        fireEvent.blur(screen.getByLabelText('Age'), {
          target: {
            value: '131',
          }
        })
      })

      expect(screen.getByText('Maximum 130 years is accepted')).toBeVisible()
    })

    test('Warning text should be visible when filling in 39 as length and blur out', async () => {
      render(<HomePage />)
      await act(async () => {
        fireEvent.blur(screen.getByLabelText('Skiers length in cm'), {
          target: {
            value: '39',
          }
        })
      })

      expect(screen.getByText('Minimum 40 cm is accepted')).toBeVisible()
    })

    test('Warning text should be visible when filling in 301 as length and blur out', async () => {
      render(<HomePage />)
      await act(async () => {
        fireEvent.blur(screen.getByLabelText('Skiers length in cm'), {
          target: {
            value: '301',
          }
        })
      })

      expect(screen.getByText('Maximum 300 cm is accepted')).toBeVisible()
    })

    test('Warning text should be visible when filling in a string as length and blur out', async () => {
      render(<HomePage />)
      await act(async () => {
        fireEvent.blur(screen.getByLabelText('Skiers length in cm'), {
          target: {
            value: 'hello',
          }
        })
      })

      expect(screen.getByText('It has to be a number')).toBeVisible()
    })

    test('Should return recommended ski length between 160 and 165 cm when filling in 150 cm long, 50 years old and freestyle as type of skis', async () => {
      render(<HomePage />)

      await act(async () => {
        fireEvent.blur(screen.getByLabelText('Age'), {
          target: {
            value: '50',
          }
        })
        fireEvent.blur(screen.getByLabelText('Skiers length in cm'), {
          target: {
            value: '150',
          }
        })

        userEvent.selectOptions(screen.getByLabelText('Type of skis'), 'freestyle')
      })

      await act(async () => {
        userEvent.click(screen.getByRole('button'))
      })

      await screen.findByText('Your recommended ski length is between 160 and 165 cm long');
      expect(screen.getByLabelText('Age')).toHaveValue(50)
      expect(screen.getByLabelText('Skiers length in cm')).toHaveValue(150)
      expect(screen.getByLabelText('Type of skis')).toHaveValue('freestyle')

    })
})

export {}