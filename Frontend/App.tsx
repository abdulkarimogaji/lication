/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import RootStack from "./routes/ContainerStack";
import SignUpStack from "./routes/SignUpStack";
import { RootState, store } from "./store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { getCredentials } from "./store/globalSlice";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import React from "react";


const App = () => {
  type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;
  const dispatch: AppDispatch = useDispatch();
  var flag = ""
  dispatch(getCredentials()).unwrap().then(r => flag = r || "");

  if (flag === "") return <SignUpStack />;
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
