import React from 'react';
import { screen, render } from '@testing-library/react';
import { CellButton } from './cellButton';

describe('<CellButton />', () => {
  test('should have a button', () => {
  render(<CellButton 
            value={null} 
            onClick={function (): void {
            throw new Error('Function not implemented.');
          } } 
        />
      );

  const button = screen.getByRole('button');

  expect(button).toBeInTheDocument();

  })
})