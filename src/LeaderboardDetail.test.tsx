import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import { it } from 'vitest'
import LeaderboardDetail from './LeaderboardDetail'

it('renders the leaderboard detail page', () => {
  render(<BrowserRouter><LeaderboardDetail /></BrowserRouter>)
})