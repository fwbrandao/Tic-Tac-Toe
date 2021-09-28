import React, { FC, useState } from 'react';
import { Box } from '@material-ui/core';
import AddUser from '../core/addUser/addUser';

const StartGame: FC = () => {
  const [userOne, setUserOne] = useState("");

  const getFirstUser = (name: string):void => {
    setUserOne(name);
  }

  console.log('user1', userOne)

  return (
    <Box>
      <AddUser userOne={userOne} getFirstUser={getFirstUser}/>
    </Box>
  );
}

export default StartGame;
