# React Accessibility Testing Demo

This project demonstrates how to implement and test accessibility features in React components using Jest and jest-axe.

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- macOS, Linux, or Windows

## Installation

```bash
npm install
```

## Running Tests

```bash
npm test
```

## Project Structure

```
test-a11y/
├── src/
│   ├── SomeComponent.js
│   ├── SomeComponent.test.js
│   └── setupTests.js
├── jest.config.js
├── package.json
└── .gitignore
```

## Testing Stack

- Jest - Test runner
- React Testing Library - Component testing
- jest-axe - Accessibility testing
- @testing-library/user-event - User interaction simulation

## Test Coverage Requirements

- Branches: 80%
- Functions: 80%
- Lines: 80%
- Statements: 80%

## Available Scripts

- `npm test` - Run tests with coverage reporting
- `npm test -- --watch` - Run tests in watch mode

## Accessibility Testing

This project uses jest-axe for automated accessibility testing. Example:

```javascript
it('meets accessibility requirements', async () => {
  const { container } = render(<SomeComponent />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

## Dependencies

- react: ^19.1.0
- @testing-library/react: ^16.3.0
- @testing-library/jest-dom: ^6.6.3
- jest-axe: ^10.0.0

## License

ISC

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request