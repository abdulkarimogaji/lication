import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootStack from "./ContainerStack";
import SignUpStack from "./SignUpStack";
import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import { useState } from "react";


const Stack = createStackNavigator();
const ParentStack = () => {
  const { getItem, removeItem } = useAsyncStorage("@lication_credentials")
  const [saved, setSaved] = useState(false)
  removeItem()
  const checkCredentials = async() => {
    const cred = await getItem()
    if (cred) {
      setSaved(true)
      console.log("state changed", saved);
    }
    console.log(cred);
  }
  useEffect(() => {
    checkCredentials()
  }, [])
  console.log("rendered already");
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName={saved ? "main-app" : "welcome-stack"}
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="main-app" component={RootStack} />
        <Stack.Screen name="welcome-stack" component={SignUpStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ParentStack;
