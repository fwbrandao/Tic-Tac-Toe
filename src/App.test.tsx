import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders <App /> components', async () => {
  render(<App />);
  const appContainer = await screen.findByRole('appContainer');
  expect(appContainer).toBeInTheDocument();
});
