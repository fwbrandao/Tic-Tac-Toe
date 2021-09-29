import * as React from 'react';
import { BoardState } from './gameState';
import { SquareProps, Square } from './square';
import { Box } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    row: {
      display: 'flex',
      flexDirection: 'row',
      margin: theme.spacing(1)
    },
    col: {
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(1)
    },
  }),
);

type BoardProps = {
  board: BoardState;
  onClick: (square: number) => void;
};

export function Board({ board, onClick }: BoardProps) {
  const classes = useStyles();

  const createProps = (square: number): SquareProps => {
    return {
      value: board[square],
      onClick: () => onClick(square),
    };
  };
  return (
    <Box className={classes.col}>
      <Box className={classes.row}>
        <Square {...createProps(0)} />
        <Square {...createProps(1)} />
        <Square {...createProps(2)} />
      </Box>
      <Box className={classes.row}>
        <Square {...createProps(3)} />
        <Square {...createProps(4)} />
        <Square {...createProps(5)} />
      </Box>
      <Box className={classes.row}>
        <Square {...createProps(6)} />
        <Square {...createProps(7)} />
        <Square {...createProps(8)} />
      </Box>
    </Box>
  );
}