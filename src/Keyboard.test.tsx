import { render } from '@testing-library/react'
import { it } from 'vitest'
import Keyboard from './Keyboard'

it('renders the keyboard component', () => {
  render(<Keyboard getState={() => 'grey'} />)
})