import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeTabs from "./HomeTabs";
import MainHeader from "../components/MainHeader";
import ChatDetails from "../screens/ChatDetails";
import { ChatType, Message } from "../store/api/apiSlice";

export type RootStackParamList = {
  ChatTabs: {};
  ChatDetails: { chat: ChatType};
};

const Stack = createStackNavigator<RootStackParamList>();
const RootStack = () => {
  return (
      <Stack.Navigator
        initialRouteName="ChatTabs"
        screenOptions={{
          header: ({ navigation}) => (
            <MainHeader navigation={navigation}/>
          ),
        }}
      >
        <Stack.Screen name="ChatTabs" component={HomeTabs} />
        <Stack.Screen name="ChatDetails" component={ChatDetails} />
      </Stack.Navigator>
  );
};

export default RootStack;
