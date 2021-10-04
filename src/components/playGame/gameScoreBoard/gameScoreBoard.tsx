import React, { FC } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { Box, Paper, Typography } from '@material-ui/core';

interface Winner {
  winner: any | null,
  nextToPlay: boolean
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
const GameScoreBoard: FC<Winner> = ({ winner, nextToPlay }) => {
const classes = useStyles();

console.log('nextToPlay', nextToPlay);

return (
  <Box className={classes.root}>
    <Paper className={classes.scoreBoard}>
      {winner}
      {nextToPlay === true ? (
        <Typography>Next to play: X</Typography>
      ) : (
        <Typography>Next to Play: 0</Typography>
      )}
    </Paper>
  </Box>
)
}

export default GameScoreBoard;