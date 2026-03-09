import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import { it } from 'vitest'
import App from './App'

it('renders the App without crashing', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
})