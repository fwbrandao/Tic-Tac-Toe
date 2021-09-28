import React from 'react';
import { render, screen } from '@testing-library/react';
import SignUpGame from './signUpGame';

test('renders <SignUpGame /> with a button', async () => {
  render(<SignUpGame />);
  const button = await screen.findByRole("button")
  expect(button).toBeInTheDocument();
});
