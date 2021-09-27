import React, { FC } from 'react';
import { Box } from '@material-ui/core';
import AppBar from './core/appBar';
import StartGame from './components/startGame';


const App: FC = () => {

  return (
    <Box>
      <AppBar />
      <StartGame />
    </Box>
  );
}

export default App;
