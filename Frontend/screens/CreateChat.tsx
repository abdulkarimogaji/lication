import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Keyboard,
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity as TO,
  TouchableWithoutFeedback as TWF,
  StyleSheet,
  Button,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import MaterialIcons from "../components/MaterialIcon";
import SendButton from "../components/SendButton";
import { RootStackParamList } from "../routes/ContainerStack";
import { useCreateChatMutation } from "../store/api/apiSlice";
import { RootState } from "../store/store";
import React from "react";

const CreateChat = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, "CreateChat">) => {
  const [newMessage, setNewMessage] = useState("");
  const first_party = useSelector((state: RootState) => state.global.phone);
  const { phone, name } = route.params;

  const [createChat, { isSuccess, isLoading }] = useCreateChatMutation();
  const handleCreateChat = async () => {
    setNewMessage("");
    await createChat({
      first_party,
      second_party: phone,
      chat_type: "TEXT",
      first_message_text: newMessage,
    });
    Keyboard.dismiss();
  };

  if (isSuccess) {
    navigation.navigate("ChatTabs", {});
  }

  return (
    <>
      <View>
        <View style={styles.header}>
          <TO
            onPress={navigation.goBack}
            style={{ display: "flex", flexDirection: "row" }}
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
          <TO style={styles.headerBody}>
            <Text style={styles.headerText}>
              {name.length < 15 ? name : name.slice(0, 15) + "..."}
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
          <TO>
            <MaterialIcons
              size={22}
              style={{ marginEnd: 11 }}
              color="white"
              name="phone"
            />
          </TO>
          <TO>
            <MaterialIcons size={22} color="white" name="more-vert" />
          </TO>
        </View>
      </View>
      <TWF onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require("../assets/images/whatsapp-bg2.jpg")}
          style={styles.container}
        >
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
            <SendButton onPress={handleCreateChat} />
          </View>
        </ImageBackground>
      </TWF>
    </>
  );
};

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

export default CreateChat;
