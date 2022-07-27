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

import React from "react";
import ParentStack from "./routes/ParentStack";

const App = () => {
  return (
    <Provider store={store}>
      <ParentStack initialRoute="welcome-stack" />
    </Provider>
  );
};

export default App;
