import React, { FC } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Button, Paper, Typography } from '@material-ui/core';

interface Winner {
  winner: any | null,
  nextToPlay: boolean,
  playerOne: string,
  playerTwo: string,
  reasetGame: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: '30px',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
    scoreBoard: {
      width: '300px',
      height: '200px'
    },
  }),
);
const GameScoreBoard: FC<Winner> = ({ winner, nextToPlay, playerOne, playerTwo, reasetGame }) => {
const classes = useStyles();

console.log('nextToPlay', nextToPlay);

return (
  <Box className={classes.root}>
    <Paper className={classes.scoreBoard}>
      <Box >
        <Typography>
          {winner ? `Winner is ${winner}` : null}
        </Typography>
        <Typography>
          Next to play: {nextToPlay === true ? playerOne : playerTwo}
        </Typography>
      </Box>
      <Button 
        variant="outlined" 
        color="primary"
        onClick={reasetGame}
        >
          Restart Game
      </Button>
    </Paper>
  </Box>
)
}

export default GameScoreBoard;