import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity as T,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../routes/ContainerStack";
import { ChatType } from "../store/api/apiSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { parseDate } from "../utils/date-utils";
import { Contact } from "react-native-contacts";
import { getChatName } from "../utils/utils";

type Props = {
  chatData: ChatType;
  navigation: StackNavigationProp<RootStackParamList, any, any>;
};

const SingleChat = ({ chatData, navigation }: Props) => {
  const { phone, contacts } = useSelector((state: RootState) => state.global);
  const chatName = getChatName(phone, chatData, contacts);
  const goToChatDetails = () => {
    navigation.navigate("ChatDetails", {
      chat: { ...chatData, chat_name: chatName },
    });
  };
  return (
    <View style={styles.chat}>
      <Image
        style={styles.chatImage}
        source={require("../assets/images/profile.jpg")}
      />
      <T onPress={goToChatDetails} style={styles.content} activeOpacity={0.7}>
        <View>
          <Text style={styles.chatName}>{chatName}</Text>
          <Text>
            <Text style={{ fontWeight: "bold" }}>
              {chatData.last_message.sender == phone
                ? "You"
                : chatData.last_message.sender}
            </Text>
            : {chatData.last_message.text}
          </Text>
        </View>
        <Text style={styles.sendTime}>
          {parseDate(chatData.last_message.created_at)}
        </Text>
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
