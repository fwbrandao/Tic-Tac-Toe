import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Board } from './board';
import { useGameState } from './gameState';

interface Users {
  userOne: string
  userTwo: string
}

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
  }),
);

const PlayGame: FC<Users> = ({ userOne, userTwo }) => {
  const classes = useStyles();

  const {
    gameState,
    current,
    xIsNext,
    jumpTo,
    winner,
    handleClick,
  } = useGameState();
  
  return (
    <Box className={classes.root}>
      <Box className={classes.gameBoard}>
        <Board board={current} onClick={handleClick}/>
      </Box>
    </Box>
  );
}

export default PlayGame;