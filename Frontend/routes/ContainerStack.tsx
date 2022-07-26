import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeTabs from "./HomeTabs";
import MainHeader from "../components/MainHeader";
import ChatDetails from "../screens/ChatDetails";
import { ChatType } from "../store/api/apiSlice";
import Contacts from "../screens/Contacts";
import CreateChat from "../screens/CreateChat";

export type RootStackParamList = {
  ChatTabs: {};
  ChatDetails: { chat: ChatType};
  Contacts: {};
  CreateChat: { phone: string, name: string };
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
        <Stack.Screen name="Contacts" component={Contacts} />
        <Stack.Screen name="CreateChat" component={CreateChat} />
      </Stack.Navigator>
  );
};

export default RootStack;
