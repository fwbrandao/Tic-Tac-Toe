import React, { FC } from 'react';
import { Box, Button } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

interface Users {
  userOne: string
  userTwo: string
}

type Cell = '' | 'X' | 'O';
type TicTacToeBoard = [
  [Cell, Cell, Cell],
  [Cell, Cell, Cell],
  [Cell, Cell, Cell],
]
let boardState: TicTacToeBoard = [
  ['','',''],
  ['','',''],
  ['','','']
]

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '1500px',
      width: '90vw',
      margin: '0 auto',
      marginTop: '4rem',
      padding: '2rem 0',
      textAlign: 'center',
      backgroundColor: 'oldlace'
    },
    gameBoard: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, auto)',
      justifyContent: 'center'
    },
    cell: {
      height: '35rem',
      width: '30rem',
      backgroundColor: 'transparent',
      border: 'none',
      fontWeight: 600,
      fontSize: '50px'
    },

  }),
);

const PlayGame: FC<Users> = ({ userOne, userTwo }) => {
  const classes = useStyles();
  const ROW_COUNT = 3;
  const COL_COUNT = 3;


  function createCell(row: number, col: number, content: Cell = "") {
    console.log('row', row)
    console.log('col', col)
    console.log('content', content)

    return (
      <>
        <Button>x</Button>
      </>
    );
  }

  function makeCell() {
    for (let i = 0; i < ROW_COUNT; i++) {
      for (let j = 0; j < COL_COUNT; j++) {
        return createCell(i, j, boardState[i][j])
      }
    }
  }

  
  return (
    <Box className={classes.root}>
      <Box className={classes.gameBoard}>
        <div className={classes.cell}>
          {makeCell()}
        </div>
      </Box>
    </Box>
  );
}

export default PlayGame;