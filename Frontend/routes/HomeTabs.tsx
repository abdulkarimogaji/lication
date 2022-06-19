import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Chats from "../screens/Chats";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons"
import Statuses from "../screens/Statuses";
import Calls from "../screens/Calls"


const Tab = createMaterialTopTabNavigator();

const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#128C7E",
        },
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#eee",
        tabBarPressColor: "#bbb",
        tabBarIndicatorStyle: {
          backgroundColor: "white",
          height: 4,
          borderRadius: 5,
        },
        tabBarContentContainerStyle: {
          paddingStart: 20
        },
        tabBarLabelStyle: { fontWeight: "bold", position: 'relative' },
      }}
    >
      <Tab.Screen name="Chats" component={Chats} 
      options={{
        tabBarIcon: () => <MaterialIcons name="photo-camera" size={25} color="#ddd" />,
        tabBarIconStyle: {
          position: 'absolute',
          left: -60,
          top: 6,

        }
      }}
      />
      <Tab.Screen name="Status" component={Statuses} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
  );
};

export default HomeTabs;
