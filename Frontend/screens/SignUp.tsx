import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Keyboard } from "react-native";
import {
  TextInput,
  TouchableWithoutFeedback as TWF,
} from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { login } from "../store/globalSlice";

const SignUp = () => {
  const [num, setNum] = useState<string>("");
  const dispatch = useDispatch();
  const handlePress = () => {
    dispatch(login({ phone: num, phoneId: "" }));
  };
  return (
    <View style={styles.container}>
      <TWF onPress={Keyboard.dismiss}>
        <Text style={styles.header}>Enter your phone number</Text>
        <Text style={styles.textCenter}>
          Lication will need your phone number to get you started
        </Text>
        <View style={styles.center}>
          <Text style={styles.location}>Nigeria</Text>
        </View>
        <View style={styles.center}>
          <Text style={[styles.phoneNumber, styles.code]}>+234</Text>
          <TextInput
            placeholder="phone number"
            value={num}
            onChangeText={(curr) => setNum(curr)}
            style={styles.phoneNumber}
            keyboardType="number-pad"
          />
        </View>
        <Text style={[styles.textCenter, { marginVertical: 20 }]}>
          No charges may apply
        </Text>
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
  location: {
    marginVertical: 20,
    paddingHorizontal: 90,
    textAlign: "center",
    borderBottomWidth: 1,
    borderColor: "#aaa",
    fontSize: 14,
  },
  header: {
    fontSize: 19,
    padding: 10,
    color: "#128C7E",
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "500",
  },

  phoneNumber: {
    padding: 0,
    borderBottomWidth: 2,
    fontSize: 15,
    marginHorizontal: 15,
    paddingEnd: 50,
    borderColor: "#128C7E",
  },
  code: {
    paddingEnd: 0,
    padding: 4,
    paddingHorizontal: 10,
  },
  button: {
    width: 100,
  },
});

export default SignUp;
