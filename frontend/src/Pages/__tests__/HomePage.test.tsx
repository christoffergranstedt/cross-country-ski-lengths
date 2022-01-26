/* eslint-disable testing-library/no-unnecessary-act */
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { HomePage } from '../HomePage/HomePage'
import { act } from 'react-dom/test-utils'

const server = setupServer(
  rest.get(`${process.env.REACT_APP_BACKEND_URL}/api/skiers/get-recommended-ski-lengths`, (req, res, ctx) => {
    return res(ctx.json({ data: { recommendedSkiesMinLength: 150, recommendedSkiesMaxLength: 150 } }))
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
      expect(screen.getByRole('button')).toBeDisabled()
    })
  
    test('button should be disabled when age is not filled in', () => {
      render(<HomePage />)
      const lengthInput = screen.getByLabelText('Skiers length in cm')
      fireEvent.change(lengthInput, { target: { value: 150 }})
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

    test('return dsa', () => {
      server.use(
        rest.get(`${process.env.REACT_APP_BACKEND_URL}/api/skiers/get-recommended-ski-lengths`, (req, res, ctx) => {
          return res(ctx.json({ data: { recommendedSkiesMinLength: 150, recommendedSkiesMaxLength: 150 } }))
        })
      )
      render(<HomePage />)
      
      expect(screen.getByRole('button')).toBeDisabled()
    })
})

export {}