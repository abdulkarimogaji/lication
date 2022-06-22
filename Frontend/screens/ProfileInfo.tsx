import React, { useState } from "react";
import {
  Button,
  Keyboard,
  Text,
  View,
  TouchableWithoutFeedback as TWF,
  StyleSheet,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

const ProfileInfo = () => {
  const [name, setName] = useState<string>("");
  const handlePress = () => {
    // login here
  };

  return (
    <View style={styles.container}>
      <TWF onPress={Keyboard.dismiss}>
        <Text style={styles.header}>Profile info</Text>
        <Text style={styles.textCenter}>
          Please provide your name and an optional profile photo
        </Text>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/profile.jpg")}
            style={styles.image}
          />
        </View>
        <View style={styles.center}>
          <TextInput
            placeholder="Type your name here"
            value={name}
            onChangeText={(curr) => setName(curr)}
            style={styles.textInput}
          />
        </View>
        <View style={[styles.center, { marginTop: 150 }]}>
          <View style={styles.button}>
            <Button title="NEXT" color="#128C7E" onPress={handlePress} />
          </View>
        </View>
      </TWF>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  textCenter: {
    textAlign: "center",
    paddingHorizontal: 40,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  header: {
    fontSize: 19,
    padding: 10,
    color: "#128C7E",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "500",
  },

  textInput: {
    padding: 0,
    borderBottomWidth: 2,
    fontSize: 15,
    marginHorizontal: 15,
    paddingEnd: 50,
    borderColor: "#128C7E",
  },
  button: {
    width: 100,
  },
  imageContainer: {
    marginTop: 100,
    display: "flex",
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    borderRadius: 999,
    width: 100,
    height: 100,
  },
});

export default ProfileInfo;
