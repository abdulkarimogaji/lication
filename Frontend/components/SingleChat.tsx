import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity as T,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ChatType } from '../screens/Chats'
import { RootStackParamList } from "../routes/ContainerStack";


type Props = {
  chatData: ChatType;
  navigation: StackNavigationProp<RootStackParamList, any, any>;
};


const SingleChat = ({ chatData, navigation }: Props) => {
  const goToChatDetails = () => {
    navigation.navigate("ChatDetails", { chatName: chatData.chatName});
  };

  return (
    <View style={styles.chat}>
      <Image style={styles.chatImage} source={chatData.chatImage} />
      <T onPress={goToChatDetails} style={styles.content}>
        <View>
          <Text style={styles.chatName}>{chatData.chatName}</Text>
          <Text>
            {chatData.lastMessage.sender}: {chatData.lastMessage.text}
          </Text>
        </View>
        <Text style={styles.sendTime}>{chatData.lastMessage.sendTime}</Text>
      </T>
    </View>
  );
};



const styles = StyleSheet.create({
  chat: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    width: "78%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chatName: {
    fontWeight: "bold",
    fontSize: 14,
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 998,
  },
  sendTime: {
    textAlignVertical: "top",
    fontSize: 10,
  },
});

export default SingleChat;
