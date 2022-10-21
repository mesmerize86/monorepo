import { render, screen } from '@testing-library/react'
import Home from './home.view';

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', {
            name: 'Welcome to next js',
        })

        expect(heading).toBeInTheDocument()
    })
})