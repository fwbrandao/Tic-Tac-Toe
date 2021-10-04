import React, { FC } from 'react';
import { Box, Paper } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { GameBoard } from './gameBoard/gameBoard';
import { useGameState } from './gameState/gameState';
import GameScoreBoard from './gameScoreBoard/gameScoreBoard';

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
    // gameState,
    current,
    nextToPlay,
    // jumpTo,
    winner,
    handleCellClick,
  } = useGameState();
  
  return (
    <>
      <Paper className={classes.root} elevation={5}>
        <Box className={classes.gameBoard} data-testid="gameBoardId">
          <GameBoard 
            board={current} 
            onClick={handleCellClick}/>
        </Box>
      </Paper>
      <Box data-testid="gameScoreBoardId">
        <GameScoreBoard 
          nextToPlay={nextToPlay}
          winner={winner}
        />
      </Box>
    </>
  );
}

export default PlayGame;