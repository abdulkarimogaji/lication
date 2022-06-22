import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import WelcomeScreen from "../screens/Welcome";
import SignUp from "../screens/SignUp";
import { View } from "react-native";
import ProfileInfo from "../screens/ProfileInfo";



const Stack = createStackNavigator();
const SignUpStack = () => {
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
        <Stack.Screen name="signup-phone-number" component={SignUp}/>
        <Stack.Screen name="signup-profile-info" component={ProfileInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SignUpStack;
