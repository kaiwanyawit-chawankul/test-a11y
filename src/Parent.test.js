import React from 'react';
import { render, screen } from '@testing-library/react';
import Parent from './Parent';

// Step 1: Mock the Child component by default (can be toggled per test)
jest.mock('./Child', () => () => <div>Mock Child</div>);

describe('Parent component tests', () => {
  afterEach(() => {
    // Restore the original implementation after each test to avoid leaking mocks
    jest.resetModules();
  });

  test('renders Parent with mocked Child', () => {
    // Because of jest.mock at the top, Child is mocked here
    render(<Parent />);
    expect(screen.getByText('Parent Component')).toBeInTheDocument();
    expect(screen.getByText('Mock Child')).toBeInTheDocument();
  });

  test('renders Parent with real Child', async () => {
    // Remove the mock dynamically to use the real Child in this test
    jest.unmock('./Child');

    // Need to re-import Parent after unmocking to get real Child inside
    const ParentReal = (await import('./Parent')).default;

    render(<ParentReal />);
    expect(screen.getByText('Parent Component')).toBeInTheDocument();
    expect(screen.getByText('Real Child')).toBeInTheDocument();
  });
});
