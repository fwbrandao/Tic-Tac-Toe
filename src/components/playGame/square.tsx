import * as React from 'react';
// import styled from 'styled-components';
import { Value } from './gameState';
import { Button, Typography } from '@material-ui/core';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      height: '100px',
      width: '100px',
      marginLeft: theme.spacing(1)
    }
  }));

export type SquareProps = {
  value: Value;
  onClick: () => void;
};

export function Square(props: SquareProps) {
  const classes = useStyles();

  return (
    <Button 
      className={classes.button}
      variant="contained" 
      color="primary" 
      onClick={props.onClick}
    >
      <Typography variant="h3">{props.value}</Typography>
    </Button>
  );
}