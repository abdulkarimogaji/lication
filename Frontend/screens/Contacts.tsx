import React, { useEffect, useState } from 'react';
import { PermissionsAndroid, StyleSheet, View, TouchableOpacity as TO, Text } from 'react-native';
import conts from 'react-native-contacts';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import MaterialIcons from '../components/MaterialIcon';
import SingleContact from '../components/SingleContact';
import { RootState } from '../store/store';


const Contacts = ({ navigation }: any) => {
  const contacts = useSelector((state: RootState) => state.global.contacts)
  return (
    <View>
      <View style={styles.header}>
        <TO onPress={navigation.goBack}>
        <MaterialIcons size={22}
          style={{ marginEnd: 11 }}
          color="white"
          name="videocam" />
        </TO>
      <Text style={styles.headerText}>Select Contacts</Text>
      </View>
      <ScrollView>
        <Text>Contacts on Lication</Text>
        {contacts.map((con, idx) => <SingleContact navigation={navigation} key={idx} contact={con}/>)}
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: "#5f551aa2",
    height: 90,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    justifyContent: 'center',
  },
  headerText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },

})

export default Contacts;