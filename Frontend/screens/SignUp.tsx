import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const SignUp = ({ navigation }: NativeStackScreenProps<any, any, any>) => {
  const [num, setNum] = useState<string>("");
  const handlePress = () => {
    navigation.navigate("signup-profile-info", { phone: num });
  };
  return (
    <View style={styles.container}>
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
          <Button title="NEXT" color="#5f551aa2" onPress={handlePress} />
        </View>
      </View>
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
    color: "#5f551aa2",
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
    borderColor: "#5f551aa2",
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
