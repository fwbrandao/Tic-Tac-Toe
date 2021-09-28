import React from 'react';
import { render, screen } from '@testing-library/react';
import AddUser from './addUser';

test('renders AddUser with textFields', async () => {
  render(<AddUser userOne={null} getUserName={function (arg: string): void {
    throw new Error('Function not implemented.');
  } } userTwo={null} />);
  const textFieldUserOne = await screen.findByRole("textFieldUserOne")
  const textFieldUserTwo = await screen.findByRole("textFieldUserTwo")

  expect(textFieldUserOne).toBeInTheDocument();
  expect(textFieldUserTwo).toBeInTheDocument();
});
