import { render, screen } from '@testing-library/react'
import {Home} from './index'
import { sum } from "./utils";

describe('Home', () => {
    it('renders a heading', () => {
        render(<Home />)

        const heading = screen.getByRole('heading', {
            name: 'Welcome to next js',
        })

        expect(heading).toBeInTheDocument()
    })

    it('sum', () => {
        const a = 10;
        const b = 20;

        const total = sum(a, b);

        expect(total).toEqual(30);
    })
})