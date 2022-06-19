import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Message } from "../screens/ChatDetails";

const SingleMsg = ({ msgData }: { msgData: Message }) => {
  return (
    <>
      {msgData.isFromMe ? (
        <View style={styles.rightMsg}>
          <View style={styles.content}>
          <Text style={styles.text}>{msgData.text} </Text>
          <Text style={styles.time}>{msgData.time}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.leftMsg}>
          <View style={styles.content}>
          <Text style={styles.text}>{msgData.text}</Text>
          <Text style={styles.time}>{msgData.time}</Text>
          </View>
        </View>
      )}
    </>
  );
};

export default SingleMsg;

const styles = StyleSheet.create({
  rightMsg: {
    backgroundColor: "#00F676",
    marginVertical: 10,
    padding: 14,
    maxWidth: "80%",
    borderRadius: 20,
    opacity: 0.7,
    alignSelf: 'flex-end',

  },
  leftMsg: {
    backgroundColor: "#fff",
    marginVertical: 20,
    padding: 14,
    maxWidth: "80%",
    borderRadius: 20,
    alignSelf: 'flex-start',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  text: {
    color: "black",
  },
  time: {
    fontSize: 11,
    marginStart: 10,
  }

});
