import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router'
import { expect, it } from 'vitest'
import Home from './Home'

it('renders the welcome message and navigation links', () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  )
  
  // Checks if the main title is visible
  expect(screen.getByText(/Welcome/i)).toBeInTheDocument()
  
  // Checks if the "Play Wordlish" link is there
  expect(screen.getByText(/Play Wordlish/i)).toBeInTheDocument()
  
  // Checks if the "View Leaderboards" link is there
  expect(screen.getByText(/View Leaderboards/i)).toBeInTheDocument()
})