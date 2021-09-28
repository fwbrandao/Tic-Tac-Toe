import React from 'react';
import { render, screen } from '@testing-library/react';
import AppBar from './appBar';

test('renders <AppBar with Tic-Tac-Toe title', async () => {
  render(<AppBar />);
  const title = await screen.findByText("Tic-Tac-Toe")
  expect(title).toBeInTheDocument();
});
