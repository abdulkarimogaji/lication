import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity as T,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { CallType } from "../screens/Calls";

type Props = {
  callData: CallType;
  navigation: StackNavigationProp<any, any, any>;
};



export const SingleCall = ({ callData, navigation }: Props) => {
  const goToChatDetails = () => {};

  return (
    <View style={styles.container}>
      <Image style={styles.chatImage} source={callData.callerImage} />
      <T onPress={goToChatDetails} style={styles.content}>
        <View>
          <Text style={styles.chatName}>{callData.caller}</Text>
          <Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
            {callData.type === "SENDER" ? (
              <MaterialIcons name="call-made" size={20} style={{marginRight: 10}} color={callData.status === 'MISSED' ? 'red': 'green'}/>
            ) : (
              <MaterialIcons name="call-received" size={20} style={{marginRight: 10}} color={callData.status === 'MISSED' ? 'red': 'green'} />
            )}
            <Text>{callData.time}</Text>
            </View>
            
          </Text>
        </View>
        <MaterialIcons name="local-phone" size={22} style={styles.phoneIcon} />
      </T>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
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
  phoneIcon: {
    color: "green",
    marginTop: 10,
  },
  chatImage: {
    width: 50,
    height: 50,
    borderRadius: 998,
  }
});
