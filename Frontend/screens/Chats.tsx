import React, { useState } from 'react';
import { View, FlatList } from "react-native"
import { globalStyle } from '../styles/global';
import { StackScreenProps } from "@react-navigation/stack";
import SingleChat from '../components/SingleChat';
import { RootStackParamList } from '../routes/ContainerStack';
import { useGetChatsQuery } from '../store/api/apiSlice';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

type Props = StackScreenProps<RootStackParamList, any>;

export type ChatType = {
  key: number;
  type: string;
  chatName: string;
  chatImage: any;
  lastMessage: {
    text: string;
    sender: string;
    sendTime: string;
  };
};

export default function Chats({navigation, route}: Props) {

  const demoChats = [
    {
      key: 0,
      type: 'GROUP',
      chatName: "Akatsuki",
      chatImage: require("../assets/images/myPic.jpg"),
      lastMessage: {
        text: "Eyyah Sorry",
        sender: "Habeeb Abu",
        sendTime: "11:40"
      }  
    },
    {
      key: 1,
      type: 'GROUP',
      chatName: "U18 Anatomical Squad",
      chatImage: require("../assets/images/myPic.jpg"),
      lastMessage: {
        text: "omo i do blow like this",
        sender: "Gabriel",
        sendTime: "yesterday"
      }  
    },
    {
      key: 2,
      type: 'GROUP',
      chatName: "Mum",
      chatImage: require("../assets/images/myPic.jpg"),
      lastMessage: {
        text: "k son",
        sender: "Mum",
        sendTime: "9:40"
      }  
    },
    {
      key: 3,
      type: 'GROUP',
      chatName: "Sadeeq",
      chatImage: require("../assets/images/myPic.jpg"),
      lastMessage: {
        text: "check out this page",
        sender: "You",
        sendTime: "22/11/11"
      }  
    },
    {
      key: 4,
      type: 'GROUP',
      chatName: "Akatsuki",
      chatImage: require("../assets/images/myPic.jpg"),
      lastMessage: {
        text: "Eyyah Sorry",
        sender: "Habeeb Abu",
        sendTime: "11:40"
      }  
    },
    {
      key: 5,
      type: 'GROUP',
      chatName: "Akatsuki",
      chatImage: require("../assets/images/myPic.jpg"),
      lastMessage: {
        text: "Eyyah Sorry",
        sender: "Habeeb Abu",
        sendTime: "11:40"
      }  
    },
    {
      key: 6,
      type: 'GROUP',
      chatName: "Akatsuki",
      chatImage: require("../assets/images/myPic.jpg"),
      lastMessage: {
        text: "Eyyah Sorry",
        sender: "Habeeb Abu",
        sendTime: "11:40"
      }  
    },
    {
      key: 7,
      type: 'GROUP',
      chatName: "Akatsuki",
      chatImage: require("../assets/images/myPic.jpg"),
      lastMessage: {
        text: "Eyyah Sorry",
        sender: "Habeeb Abu",
        sendTime: "11:40"
      }  
    },
    {
      key: 8,
      type: 'GROUP',
      chatName: "Akatsuki",
      chatImage: require("../assets/images/myPic.jpg"),
      lastMessage: {
        text: "Eyyah Sorry",
        sender: "Habeeb Abu",
        sendTime: "11:40"
      }  
    },
    {
      key: 9,
      type: 'GROUP',
      chatName: "Akatsuki",
      chatImage: require("../assets/images/myPic.jpg"),
      lastMessage: {
        text: "Eyyah Sorry",
        sender: "Habeeb Abu",
        sendTime: "11:40"
      }  
    },
  ]
  const [chats, setChats] = useState<ChatType[] | null>(demoChats)
  const id = useSelector<RootState>(state => state.global.id)
  const { data, isLoading, isSuccess, isError, isFetching } = useGetChatsQuery(id)
  return (
    <View style={globalStyle.container}>
      <FlatList
      scrollEnabled
      data={chats}
      renderItem={({ item }) => <SingleChat navigation={navigation} chatData={item} />}
      />
    </View>
  );
}


