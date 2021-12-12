import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    const onChange = jest.fn()
    const searchValue = 'test'
    render(<Header onChange={onChange} searchValue={searchValue} />)

    expect(screen.getByRole('textbox')).toHaveValue(searchValue)
  })
})
