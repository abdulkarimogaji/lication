import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight as TH,
  TouchableOpacity as T,
} from "react-native";
import { NavigationProp, getPathFromState } from "@react-navigation/native";
import MaterialIcons from "react-native-vector-icons/MaterialCommunityIcons";

const MainHeader = ({ navigation }: { navigation: NavigationProp<any> }) => {
  const currentPath = getPathFromState(navigation.getState());
  const hideHeader = ["/ChatDetails"];
  const goBack = () => {
    navigation.goBack();
  };
  const shouldHide = hideHeader.includes(currentPath.split('?')[0])
  return (
    <View style={shouldHide ? {height: 0} : styles.container}>
      { !shouldHide &&
        (<>
          <Text style={styles.headerText}>WhatsLication</Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <T>
              <MaterialIcons name="search" color="#eee" size={28} style={{marginEnd: 25}} />
            </T>
            <T>
              <MaterialIcons name="more-vert" color="#eee" size={28} />
            </T>
          </View>
        </>)}
    </View>
  );
};
export default MainHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#128C7E",
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
