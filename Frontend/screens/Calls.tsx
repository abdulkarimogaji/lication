import React, { useState } from 'react';
import { View, FlatList } from "react-native"
import { globalStyle } from '../styles/global';

import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../routes/ContainerStack"
import { SingleCall } from '../components/SingleCall';

type Props = StackScreenProps<RootStackParamList, any>;

export type CallType =  {
  key: number;
  status: string;
  type: string;
  caller: string;
  callerImage: any;
  time: string;
};

export default function Calls({navigation, route}: Props) {

  const demoCalls = [
    {
      key: 0,
      status: 'MISSED',
      type: 'SENDER',
      caller: "Akatsuki",
      callerImage: require("../assets/images/myPic.jpg"),
      time: "(2) 12 April, 21:10" 
    },
    {
      key: 1,
      status: 'MISSED',
      type: 'SENDER',
      caller: "U18 Anatomical Squad",
      callerImage: require("../assets/images/myPic.jpg"),
      time: "(2) 12 April, 21:10" 
    },
    {
      key: 2,
      status: 'MISSED',
      type: 'SENDER',
      caller: "Mum",
      callerImage: require("../assets/images/myPic.jpg"),
      time: "(2) 12 April, 21:10"  
    },
    {
      key: 3,
      status: 'MISSED',
      type: 'SENDER',
      caller: "Sadeeq",
      callerImage: require("../assets/images/myPic.jpg"),
      time: "(2) 12 April, 21:10" 
    },
    {
      key: 4,
      status: 'MISSED',
      type: 'SENDER',
      caller: "Akatsuki",
      callerImage: require("../assets/images/myPic.jpg"),
      time: "(2) 12 April, 21:10"  
    },
    {
      key: 5,
      status: 'MISSED',
      type: 'SENDER',
      caller: "Akatsuki",
      callerImage: require("../assets/images/myPic.jpg"),
      time: "(2) 12 April, 21:10" 
    },
    {
      key: 6,
      status: 'MISSED',
      type: 'SENDER',
      caller: "Akatsuki",
      callerImage: require("../assets/images/myPic.jpg"),
      time: "(2) 12 April, 21:10" 
    },
    {
      key: 7,
      status: 'MISSED',
      type: 'SENDER',
      caller: "Akatsuki",
      callerImage: require("../assets/images/myPic.jpg"),
      time: "(2) 12 April, 21:10" 
    },
    {
      key: 8,
      status: 'MISSED',
      type: 'SENDER',
      caller: "Akatsuki",
      callerImage: require("../assets/images/myPic.jpg"),
      time: "(2) 12 April, 21:10" 
    },
    {
      key: 9,
      status: 'MISSED',
      type: 'SENDER',
      caller: "Akatsuki",
      callerImage: require("../assets/images/myPic.jpg"),
      time: "(2) 12 April, 21:10" 
    },
  ]
  const [calls, setCalls] = useState<CallType[] | null>(demoCalls)
  return (
    <View style={globalStyle.container}>
      <FlatList
      scrollEnabled
      data={calls}
      renderItem={({ item }) => <SingleCall navigation={navigation} callData={item} />}
      />
    </View>
  );
}


