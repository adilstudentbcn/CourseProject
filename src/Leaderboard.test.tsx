import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import { it } from 'vitest'
import Leaderboard from './Leaderboard'

it('renders the leaderboard page', () => {
  render(<BrowserRouter><Leaderboard /></BrowserRouter>)
})