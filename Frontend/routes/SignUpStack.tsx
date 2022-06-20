import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import WelcomeScreen from "../screens/Welcome";
import SignUp from "../screens/SignUp";
import { View } from "react-native";



const Stack = createStackNavigator();
const SignUpStack = ({setLoggedIn}: {setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="welcome"
        screenOptions={{
          header: () => (
            <View></View>
          ),
        }}
      >
      
        <Stack.Screen name="welcome" component={WelcomeScreen}/>
        <Stack.Screen name="signup">
          {props => <SignUp {...props} setLoggedIn={setLoggedIn} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignUpStack;
