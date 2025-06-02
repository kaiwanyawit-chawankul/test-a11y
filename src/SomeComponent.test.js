import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import SomeComponent from './SomeComponent';

expect.extend(toHaveNoViolations);

describe('SomeComponent', () => {
    it('renders without crashing', () => {
        render(<SomeComponent />);
    });

    it('displays correct content', () => {
        render(<SomeComponent />);
        expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('meets accessibility requirements', async () => {
        const { container } = render(<SomeComponent />);
        const results = await axe(container, {
            rules: {
                'aria-roles': { enabled: true },
                'button-name': { enabled: true },
                'image-alt': { enabled: true }
            }
        });
        expect(results).toHaveNoViolations();
    });

    it('handles user interactions', async () => {
        const user = userEvent.setup();
        render(<SomeComponent />);
        const button = screen.getByRole('button');
        await user.click(button);
        expect(screen.getByText('Click me')).toBeInTheDocument();
    });

    it('matches snapshot', () => {
        const { container } = render(<SomeComponent />);
        expect(container).toMatchSnapshot();
    });
});