import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { StackScreenProps } from "@react-navigation/stack";
import React, { useEffect } from "react";
import { Button, Image } from "react-native";
import { View, Text, StyleSheet, Keyboard } from "react-native";
import { TouchableWithoutFeedback as TWF } from "react-native-gesture-handler";

const WelcomeScreen = ({ navigation }: StackScreenProps<any>) => {
  const { getItem } = useAsyncStorage("@lication_data")
  const checkCredentials = async() => {
    const cred = await getItem()
    if (cred) {
      navigation.navigate("main-app", { screen: "ChatTabs"})
    }
  }
  useEffect(() => {
    checkCredentials()
  }, [])
  const goToSignUp = () => {navigation.navigate('signup-phone-number')};
  return (
    <View style={styles.container}>
      <TWF onPress={() => Keyboard.dismiss()}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/whatsapp-bg.jpg")}
            style={styles.image}
          />
        </View>
        <Text style={styles.welcomeText}>Welcome to Lication</Text>
        <Text style={styles.paragraph}>
          Read our Privacy Policy. Tap "Agree and continue" to accept the Terms
          of Service
        </Text>
        <View style={styles.button}>
          <Button title="AGREE AND CONTINUE" onPress={goToSignUp} color="#5f551aa2" />
        </View>
      </TWF>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: "white",
    flex: 1,
  },
  
  
  imageContainer: {
    marginTop: 100,
    display: "flex",
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    borderRadius: 999,
    width: 270,
    height: 270,
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },

  paragraph: {
    textAlign: "center",
    marginBottom: 50
  },

  button: {
    paddingHorizontal: 20
  }
});

export default WelcomeScreen;
