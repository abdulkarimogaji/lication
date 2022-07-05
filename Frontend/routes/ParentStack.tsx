import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootStack from "./ContainerStack";
import SignUpStack from "./SignUpStack";



const Stack = createStackNavigator();
const ParentStack = ({initialRoute}: {initialRoute: string}) => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
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
