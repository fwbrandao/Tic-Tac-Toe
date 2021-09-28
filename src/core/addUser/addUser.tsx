import React, { FC } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

interface Users {
  userOne: string
  userTwo: string
  getUserName: (arg1: string, arg2: string) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

const AddUser: FC<Users> = ({ userOne, userTwo, getUserName }) => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField 
              role="textFieldUserOne"
              id="input-with-icon-grid" 
              label="Add user #1" 
              value={userOne}
              onChange={(e) => getUserName('userOne', e.target.value)}
            />
          </Grid>
        </Grid>
      </div>
      <div className={classes.margin}>
        <Grid container spacing={1} alignItems="flex-end">
          <Grid item>
            <AccountCircle />
          </Grid>
          <Grid item>
            <TextField 
              role="textFieldUserTwo"
              id="input-with-icon-grid" 
              label="Add user #2" 
              value={userTwo}
              onChange={(e) => getUserName('userTwo', e.target.value)}
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AddUser;
