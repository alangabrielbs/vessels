import { render } from '@testing-library/react'

import { Container } from '.'

describe('<Container />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Container>
        <span>vessel</span>
      </Container>
    )

    expect(container.firstChild).toHaveStyleRule('max-width', '1200px')
  })
})
