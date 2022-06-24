import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import WelcomeScreen from "../screens/Welcome";
import SignUp from "../screens/SignUp";
import ProfileInfo from "../screens/ProfileInfo";



const Stack = createStackNavigator();
const SignUpStack = () => {
  return (
      <Stack.Navigator
      id="someId"
        initialRouteName="welcome"
        screenOptions={{
          headerShown: false
        }}
      >
      
        <Stack.Screen name="welcome" component={WelcomeScreen}/>
        <Stack.Screen name="signup-phone-number" component={SignUp}/>
        <Stack.Screen name="signup-profile-info" component={ProfileInfo} />
      </Stack.Navigator>

  );
};

export default SignUpStack;
