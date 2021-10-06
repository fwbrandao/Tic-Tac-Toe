import React, { useState, FC } from 'react';
import { Box } from '@material-ui/core';
import NavBar from './core/appBar/appBar';
import SignUpGame from './components/signUpGame/signUpGame';

const App: FC = () => {

  const [gameHasPlayers, setGameHasPlayers] = useState(false);

  return (
    <Box role="appContainer">
      <NavBar setGameHasPlayers={setGameHasPlayers}/>
      <SignUpGame gameHasPlayers={gameHasPlayers} setGameHasPlayers={setGameHasPlayers}/>
    </Box>
  );
}

export default App;
