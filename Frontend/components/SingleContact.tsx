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
import { Contact } from "react-native-contacts";


type Props = {
  contact: Contact;
  navigation: StackNavigationProp<RootStackParamList, any, any>;
};


const SingleContact = ({ contact, navigation }: Props) => {

  const phone = useSelector((state: RootState) => state.global.phone)

  return (
    <>
    {
      contact.phoneNumbers.map(num => (
        <View style={styles.chat} key={num.number}>
        <Image style={styles.chatImage} source={require("../assets/images/profile.jpg")} />
        <T onPress={() => navigation.navigate("CreateChat", { phone: num.number, name: contact.displayName })} style={styles.content}>
          <View>
            <Text style={styles.chatName}>{contact.displayName}</Text>
            <Text>
              Start New Chat
            </Text>
          </View>
        </T>
    </View>
      ))
    }
    </>
    
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

export default SingleContact;
