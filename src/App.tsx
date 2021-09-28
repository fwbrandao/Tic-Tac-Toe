import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import AppBar from './core/appBar/appBar';
import StartGame from './components/signUpGame/signUpGame';

const App: FC = () => {

  return (
    <Box role="appContainer">
      <AppBar />
      <StartGame />
    </Box>
  );
}

export default App;
