import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import AppBar from './core/appBar/appBar';
import SignUpGame from './components/signUpGame/signUpGame';

const App: FC = () => {

  return (
    <Box role="appContainer">
      <AppBar />
      <SignUpGame />
    </Box>
  );
}

export default App;
