import React, { FC } from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

interface Users {
  userOne: string
  getFirstUser: (arg: string) => void
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

const AddUser: FC<Users> = ({ userOne, getFirstUser }) => {
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
              onInput={ e => getFirstUser("test")}
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
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AddUser;
