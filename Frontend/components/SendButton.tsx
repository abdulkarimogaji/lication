import React from 'react';
import { View, TouchableWithoutFeedback as TWO, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



const SendButton = ({ onPress }: { onPress: any }) => {
  return (
  <View style={styles.customBtn}>
    <TouchableOpacity style={{ width: "100%", height: "100%" }} onPress={onPress}>
      <View style={{ width: "100%", height: "100%" }}></View>
    </TouchableOpacity>
  </View>)
}

const styles = StyleSheet.create({
  customBtn: {
    width: 55,
    height: 55,
    borderRadius: 999,
    backgroundColor: "#5f551aa2",
    zIndex: 999,
  }
})

export default SendButton