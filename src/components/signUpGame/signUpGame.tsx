import React, { FC, useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Button, Paper } from '@material-ui/core';
import AddUser from '../../core/addUser/addUser';
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
  const [userOne, setUserOne] = useState('me');
  const [userTwo, setUserTwo] = useState('me too');
  const [gameHasPlayers, setGameHasPlayers] = useState(false);

  const getUserName = (user: string, name: any):void => {
    if (user === 'userOne') {
      setUserOne(name);
    } else if (user === 'userTwo') {
      setUserTwo(name);
    } else {
      return;
    }
  }

  console.log('user1', userOne)
  console.log('user2', userTwo)

  const handleGameStart = () => {
    if (userOne !== null && userTwo !== null) {
      setGameHasPlayers(true)
    }
  }

  return (
    <Box>
      {!gameHasPlayers ? (
        <>
          <Paper elevation={3} className={classes.root}>
            <AddUser 
              userOne={userOne} 
              userTwo={userTwo} 
              getUserName={getUserName}
            />
          </Paper>
          <Box className={classes.startButton}>
            <Button 
              variant="contained" 
              color="primary"
              onClick={handleGameStart}
            >
              Start Game
            </Button>
          </Box>
        </>
      ) : (
        <PlayGame 
          userOne={userOne} 
          userTwo={userTwo}
        />
      )}
    </Box>
  );
}

export default SignUpGame;
