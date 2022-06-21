/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React from "react";
import { Provider, useSelector } from "react-redux";
import RootStack from "./routes/ContainerStack";
import SignUpStack from "./routes/SignUpStack";
import { RootState, store } from "./store/store";
import { useDispatch } from "react-redux";
import { getCredentials } from "./store/globalSlice";

const App = () => {
  const dispatch = useDispatch()
  dispatch(getCredentials)

  const loggedIn = useSelector<RootState>(state => state.global.isLoggedIn)

  if (!loggedIn) return <SignUpStack />;

  else return <RootStack />;
};

const WrappedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default WrappedApp;
