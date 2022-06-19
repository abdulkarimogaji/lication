import React from "react";
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
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { RootStackParamList } from "../routes/ContainerStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { globalStyle } from "../styles/global";

import SingleMsg from "../components/SingleMsg";

export type Message = {
  type: string;
  text: string;
  time: string;
  isFromMe: boolean;
  isSeen: boolean;
  isDelivered: boolean;
};

const demoMsgs: Message[] = [
  {
    type: "TEXT",
    text: `Who's Up for Mini militia`,
    time: "20:14",
    isFromMe: true,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia lots of text I am so tired of this wretched story am sick of it`,
    time: "20:14",
    isFromMe: false,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia`,
    time: "20:14",
    isFromMe: false,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia Lets see how well you will do if you carry such a heavy message like this`,
    time: "20:14",
    isFromMe: true,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia`,
    time: "20:14",
    isFromMe: true,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia lots of text I am so tired of this wretched story am sick of it`,
    time: "20:14",
    isFromMe: false,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia`,
    time: "20:14",
    isFromMe: false,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia Lets see how well you will do if you carry such a heavy message like this`,
    time: "20:14",
    isFromMe: true,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia`,
    time: "20:14",
    isFromMe: true,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia lots of text I am so tired of this wretched story am sick of it`,
    time: "20:14",
    isFromMe: false,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia`,
    time: "20:14",
    isFromMe: false,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia Lets see how well you will do if you carry such a heavy message like this`,
    time: "20:14",
    isFromMe: true,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia`,
    time: "20:14",
    isFromMe: true,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia lots of text I am so tired of this wretched story am sick of it`,
    time: "20:14",
    isFromMe: false,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia`,
    time: "20:14",
    isFromMe: false,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia Lets see how well you will do if you carry such a heavy message like this`,
    time: "20:14",
    isFromMe: true,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia`,
    time: "20:14",
    isFromMe: true,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia lots of text I am so tired of this wretched story am sick of it`,
    time: "20:14",
    isFromMe: false,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia`,
    time: "20:14",
    isFromMe: false,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia Lets see how well you will do if you carry such a heavy message like this`,
    time: "20:14",
    isFromMe: true,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia`,
    time: "20:14",
    isFromMe: true,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia lots of text I am so tired of this wretched story am sick of it`,
    time: "20:14",
    isFromMe: false,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia`,
    time: "20:14",
    isFromMe: false,
    isSeen: true,
    isDelivered: true,
  },
  {
    type: "TEXT",
    text: `Who's Up for Mini militia Lets see how well you will do if you carry such a heavy message like this`,
    time: "20:14",
    isFromMe: true,
    isSeen: true,
    isDelivered: true,
  },
];

type Props = NativeStackScreenProps<RootStackParamList, "ChatDetails">;
export default function ChatDetails({ navigation, route }: Props) {
  const name = route.params.chatName;
  const goBack = () => {
    navigation.goBack();
  };
  const demoChattee = {
    name: "Dangana Mufid",
    type: "SINGLE",
    profilePic: require("../assets/images/myPic.jpg"),
    profileStatus: "online",
  };
  return (
    <>
      <View>
        <View style={styles.header}>
          <TO onPress={goBack}>
            <MaterialIcons
              name="arrow-back"
              size={27}
              style={{ marginEnd: 5, marginTop: 10 }}
              color="white"
            />
          </TO>
          <TO>
            <Image source={demoChattee.profilePic} style={styles.profilePic} />
          </TO>
          <TO style={styles.headerBody}>
            <Text style={styles.headerText}>
              {name.length < 15 ? name : name.slice(0, 15) + "..."}
            </Text>
            <Text style={{ color: "#eee" }}>{demoChattee.profileStatus}</Text>
          </TO>
          <TO>
            <MaterialIcons
              size={22}
              style={{ marginEnd: 11 }}
              color="white"
              name="videocam"
            />
          </TO>
          <TO>
            <MaterialIcons
              size={22}
              style={{ marginEnd: 11 }}
              color="white"
              name="local-phone"
            />
          </TO>
          <TO>
            <MaterialIcons size={22} color="white" name="more-vert" />
          </TO>
        </View>
      </View>
      <TWF onPress={() => Keyboard.dismiss()}>
        <ImageBackground
          source={require("../assets/images/whatsapp-bg2.jpg")}
          style={styles.container}
        >
          <ScrollView>
            {demoMsgs.map((msg, i) => (
              <SingleMsg msgData={msg} key={i} />
            ))}
          </ScrollView>
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
            <MaterialIcons
              style={styles.record}
              size={25}
              name="keyboard-voice"
            />
          </View>
        </ImageBackground>
      </TWF>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#128C7E",
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
