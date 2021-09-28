import React from 'react';
import { render, screen } from '@testing-library/react';
import PlayGame from './playGame';

test('renders <AppBar /> with Tic-Tac-Toe title', async () => {
  render(<PlayGame userOne={null} userTwo={null} />);
  const title = await screen.findByText("Tic Tac Toe")
  expect(title).toBeInTheDocument();
});
