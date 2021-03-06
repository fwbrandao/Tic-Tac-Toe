import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { AppBar, Button, Toolbar, Typography }from '@material-ui/core';

interface GamePlayers {
  setGameHasPlayers: any
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const NavBar: FC<GamePlayers> = ({ setGameHasPlayers }) => {
  const classes = useStyles();

  const handleSetGameHasPlayers = () => {
    setGameHasPlayers(false);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography className={classes.title} variant="h6" color="inherit">
            Tic-Tac-Toe
          </Typography>
          <Button color="inherit" onClick={handleSetGameHasPlayers}>Change players</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
