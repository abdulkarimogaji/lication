import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  Keyboard,
  ScrollView,
  TouchableOpacity as TO,
  TouchableWithoutFeedback as TWF,
} from "react-native";
import MaterialIcons from "../components/MaterialIcon";
import { RootStackParamList } from "../routes/ContainerStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import SingleMsg from "../components/SingleMsg";
import {
  useCreateMessageMutation,
  useGetSingleChatQuery,
} from "../store/api/apiSlice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import SendButton from "../components/SendButton";

type Props = NativeStackScreenProps<RootStackParamList, "ChatDetails">;
export default function ChatDetails({ navigation, route }: Props) {
  const [newMessage, setNewMessage] = useState<string>("");
  const chat = route.params.chat;
  const phone = useSelector<RootState>((state) => state.global.phone);

  const [sendMessage, { isSuccess, data }] = useCreateMessageMutation();

  const {
    data: single_chat,
    isSuccess: is_success,
    isLoading,
  } = useGetSingleChatQuery(chat.id, {
    // pollingInterval: 10000,
  });

  const handleSendMessage = async () => {
    setNewMessage("");
    await sendMessage({
      text: newMessage,
      message_type: "TEXT",
      chat: chat.id,
      sender: phone as string,
      created_at: new Date().toString(),
      id: "",
    });
    Keyboard.dismiss();
  };
  const goBack = () => {
    navigation.goBack();
  };
  if (isLoading) return <View></View>;
  return (
    <>
      <View>
        <View style={styles.header}>
          <TO
            onPress={goBack}
            style={{ display: "flex", flexDirection: "row" }}
            activeOpacity={0.7}
          >
            <MaterialIcons
              name="arrow-back"
              size={27}
              style={{ marginEnd: 5, marginTop: 10 }}
              color="white"
            />
            <Image
              source={require("../assets/images/profile.jpg")}
              style={styles.profilePic}
            />
          </TO>
          <TO style={styles.headerBody} activeOpacity={0.7}>
            <Text style={styles.headerText}>
              {chat.chat_name.length < 15
                ? chat.chat_name
                : chat.chat_name.slice(0, 15) + "..."}
            </Text>
            <Text style={{ color: "#eee" }}>online</Text>
          </TO>
          <TO>
            <MaterialIcons
              size={22}
              style={{ marginEnd: 11 }}
              color="white"
              name="videocam"
            />
          </TO>
          <TO activeOpacity={0.7}>
            <MaterialIcons
              size={22}
              style={{ marginEnd: 11 }}
              color="white"
              name="phone"
            />
          </TO>
          <TO activeOpacity={0.7}>
            <MaterialIcons size={22} color="white" name="more-vert" />
          </TO>
        </View>
      </View>
      <TWF onPress={() => Keyboard.dismiss()}>
        <ImageBackground
          source={require("../assets/images/whatsapp-bg2.jpg")}
          style={styles.container}
        >
          {is_success ? (
            <ScrollView style={{ marginBottom: 100 }}>
              {single_chat?.data.messages.map((msg, i) => (
                <SingleMsg msgData={msg} key={i} />
              ))}
            </ScrollView>
          ) : (
            <SingleMsg msgData={chat.last_message} />
          )}

          <View style={styles.bottomInput}>
            <View style={styles.input}>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <MaterialIcons
                  color="#bbb"
                  style={{ marginEnd: 10 }}
                  size={25}
                  name="tag-faces"
                />
                <TextInput
                  placeholder="Message"
                  style={{ width: 170, fontSize: 18 }}
                  value={newMessage}
                  onChangeText={(text) => setNewMessage(text)}
                />
              </View>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <MaterialIcons
                  color="#bbb"
                  size={25}
                  style={{ marginEnd: 5 }}
                  name="attach-file"
                />
                <MaterialIcons color="#bbb" size={25} name="photo-camera" />
              </View>
            </View>
            <SendButton onPress={handleSendMessage} type="send" />
          </View>
        </ImageBackground>
      </TWF>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#5f551aa2",
    height: 90,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
  },
  profilePic: {
    height: 40,
    width: 40,
    borderRadius: 999,
    marginTop: 10,
  },
  headerBody: {
    marginTop: 10,
    display: "flex",
    marginStart: 20,
    width: "47%",
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    padding: 10,
    backgroundColor: "#eee",
    flex: 1,
  },
  bottomInput: {
    position: "absolute",
    bottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginLeft: 10,
    borderRadius: 50,
    padding: 10,
    shadowColor: "black",
    elevation: 90,
    borderWidth: 1,
    borderColor: "#eee",
    backgroundColor: "white",
  },
  record: {
    backgroundColor: "green",
    color: "#fff",
    borderRadius: 999,
    width: 45,
    textAlign: "center",
    textAlignVertical: "center",
    marginStart: 3,
  },
});
