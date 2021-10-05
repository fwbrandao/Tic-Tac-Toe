import React, { FC, useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Button, Paper } from '@material-ui/core';
import AddPlayers from '../../core/addPlayer/addPlayer';
import PlayGame from '../playGame/playGame'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      width: '300px',
      flexWrap: 'wrap',
      margin: '100px auto 0 auto',
    },
    startButton: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '20px'
    }
  }),
);

const SignUpGame: FC = () => {
  const classes = useStyles();
  const [playerOne, setPlayerOne] = useState('me');
  const [playerTwo, setPlayerTwo] = useState('me too');
  const [gameHasPlayers, setGameHasPlayers] = useState(false);

  const getPlayerName = (player: string, name: any):void => {
    if (player === 'playerOne') {
      setPlayerOne(name);
    } else if (player === 'playertwo') {
      setPlayerTwo(name);
    } else {
      return;
    }
  }

  console.log('user1', playerOne)
  console.log('user2', playerTwo)

  const handleGameStart = () => {
    if (playerOne !== null && playerTwo !== null) {
      setGameHasPlayers(true)
    }
  }

  return (
    <Box>
      {!gameHasPlayers ? (
        <>
          <Paper elevation={3} className={classes.root}>
            <AddPlayers 
              playerOne={playerOne} 
              playerTwo={playerTwo} 
              getPlayerName={getPlayerName}
            />
          </Paper>
          <Box className={classes.startButton}>
            <Button 
              variant="outlined" 
              color="primary"
              onClick={handleGameStart}
            >
              Start Game
            </Button>
          </Box>
        </>
      ) : (
        <PlayGame 
          playerOne={playerOne} 
          playerTwo={playerTwo}
        />
      )}
    </Box>
  );
}

export default SignUpGame;
