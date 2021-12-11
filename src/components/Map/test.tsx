import { render, screen } from '@testing-library/react'

import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', { name: /a js library for interactive maps/i })
    ).toBeInTheDocument()
  })

  it('should render with the marker in correct place', () => {
    const vessel = {
      complete: '73.75%',
      country: 'Eritrea',
      from: 'Madagascar',
      id: '8269764b-1bb5-4948-be08-0fc56f439e08',
      latitude: 31.32217553803138,
      longitude: 32.239130538031375,
      name: 'Chang-Fisher',
      size: 214,
      speed: '25 MPH',
      to: 'Libyan Arab Jamahiriya',
      type: 'tanker'
    }

    const vesselTwo = {
      complete: '82.52%',
      country: 'Lesotho',
      from: 'Guinea-Bissau',
      id: '916be57d-48f0-4ee3-82ca-156160398074',
      latitude: 31.324851524573937,
      longitude: 32.34378252457394,
      name: 'Hull-Gallegos',
      size: 150,
      speed: '71 MPH',
      to: 'Mozambique',
      type: 'fishing'
    }

    render(<Map vessels={[vessel, vesselTwo]} />)

    expect(screen.getByTitle(/Chang-Fisher/i)).toBeInTheDocument()
    expect(screen.getByTitle(/Hull-Gallegos/i)).toBeInTheDocument()
  })
})
