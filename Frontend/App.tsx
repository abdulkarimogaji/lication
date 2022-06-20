/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, { useState } from 'react';
import RootStack from './routes/ContainerStack';
import SignUpStack from './routes/SignUpStack';

const App = () => {
  // check credential manager if user already exists
  // grab phone Number from user
  // use phone number to fetch chats
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  if (!loggedIn) return <SignUpStack setLoggedIn={setLoggedIn} />
  else  return <RootStack />;
};

export default App;
