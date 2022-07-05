/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import { store } from "./store/store";
import { Provider } from "react-redux";

import React, { useEffect, useState } from "react";
import ParentStack from "./routes/ParentStack";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";


const App = () => {
  return (
    <Provider store={store}>
      <ParentStack initialRoute="welcome-stack" />
    </Provider>)
};



export default App;
