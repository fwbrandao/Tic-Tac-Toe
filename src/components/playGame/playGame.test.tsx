import React from 'react';
import { render, screen } from '@testing-library/react';
import PlayGame from './playGame';

test('renders <PlayGame /> with GameBoard component', () => {
  render(<PlayGame userOne={'null'} userTwo={'null'} />);
  const gameBoard = screen.getByTestId("gameBoardId")
  expect(gameBoard).toBeInTheDocument();
});

test('renders <PlayGame /> with gameScoreBoard component', () => {
  render(<PlayGame userOne={'null'} userTwo={'null'} />);
  const gameScoreBoard = screen.getByTestId("gameScoreBoardId")
  expect(gameScoreBoard).toBeInTheDocument();
});
