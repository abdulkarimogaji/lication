import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight as TH,
  TouchableOpacity as T,
} from "react-native";
import { NavigationProp, getPathFromState } from "@react-navigation/native";
import MaterialIcons from "./MaterialIcon";

const MainHeader = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const currentPath = getPathFromState(navigation.getState());
  const hideHeader = ["/ChatDetails", "/Contacts", "/CreateChat"];
  const shouldHide = hideHeader.some((exep) => currentPath.includes(exep));
  console.log(currentPath, shouldHide);
  return (
    <View style={shouldHide ? { height: 0 } : styles.container}>
      {!shouldHide && (
        <>
          <Text style={styles.headerText}>Lication</Text>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <T activeOpacity={0.7}>
              <MaterialIcons
                name="search"
                color="#eee"
                size={28}
                style={{ marginEnd: 25 }}
              />
            </T>
            <T activeOpacity={0.7}>
              <MaterialIcons name="more-vert" color="#eee" size={28} />
            </T>
          </View>
        </>
      )}
    </View>
  );
};
export default MainHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5f551aa2",
    height: 90,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
  },
});
