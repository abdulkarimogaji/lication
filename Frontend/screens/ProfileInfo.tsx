import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { StackScreenProps } from "@react-navigation/stack";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
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
import { useDispatch } from "react-redux";

import { useLoginMutation } from "../store/api/apiSlice";
import { loginAction, setCredentials } from "../store/globalSlice";
import { RootState } from "../store/store";

const ProfileInfo = ({ navigation, route }: StackScreenProps<any>) => {
  const [name, setName] = useState<string>("");
  const [login, { isSuccess, data: loginResponse, isError, error }] = useLoginMutation()
  const dispatch = useDispatch()
  const { setItem } = useAsyncStorage("@lication_credentials")
  const handlePress = async() => {
    await login({
      display_name: name,
      phone: "+234" + route.params?.phone
    })
    if (isError) console.log("error: ", error)
    if (isSuccess) {
      const credentials = {_id: loginResponse.data._id, phone: loginResponse.data.phone}
      await setItem(JSON.stringify(credentials))
      dispatch(loginAction(credentials))
      navigation.navigate('main-app', {screen: 'ChatTabs'})
    }

  };

  return (
    <View style={styles.container}>
      <TWF onPress={Keyboard.dismiss}>
        <View>
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
        </View>
      </TWF>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative"
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
    width: "80%"
  },
  button: {
    width: 100,
    position: "absolute",
    bottom: 0
  },
  imageContainer: {
    marginTop: 50,
    display: "flex",
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    borderRadius: 999,
    width: 110,
    height: 110,
  },

  nextButton: {
    
  }
});

export default ProfileInfo;
