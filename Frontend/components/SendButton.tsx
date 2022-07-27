import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcons from "./MaterialIcon";

const SendButton = ({ onPress, type }: any) => {
  return (
    <View style={styles.customBtn}>
      <TouchableOpacity
        style={{ width: "100%", height: "100%" }}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={{ width: "100%", height: "100%" }}>
          <MaterialIcons
            name={type == "chat" ? "chat" : "send"}
            style={{
              position: "absolute",
              top: 10,
              left: 10,
            }}
            size={30}
            color="white"
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  customBtn: {
    width: 55,
    height: 55,
    borderRadius: 999,
    backgroundColor: "#5f551aa2",
    zIndex: 999,
    position: "relative",
  },
});

export default SendButton;
