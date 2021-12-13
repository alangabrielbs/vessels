import { render, screen, waitFor } from '@testing-library/react'

import Home from '.'

jest.mock('components/Map', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Map"></div>
    }
  }
})

jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>
    }
  }
})

jest.mock('components/VideoStream', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock VideoStream"></div>
    }
  }
})

describe('<Home />', () => {
  it('should render correctly all components', async () => {
    render(<Home vessels={[]} />)

    await waitFor(() => {
      expect(screen.getByTestId(/mock Map/i)).toBeInTheDocument()
    })
    expect(screen.getByTestId(/mock Header/i)).toBeInTheDocument()
    expect(screen.getByTestId(/mock VideoStream/i)).toBeInTheDocument()
  })
})
