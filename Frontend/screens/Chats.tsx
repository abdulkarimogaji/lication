import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, PermissionsAndroid } from "react-native"
import { globalStyle } from '../styles/global';
import { StackScreenProps } from "@react-navigation/stack";
import SingleChat from '../components/SingleChat';
import { RootStackParamList } from '../routes/ContainerStack';
import contacts from 'react-native-contacts';
import { ChatType, useGetChatsQuery } from '../store/api/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { loginAction, setContacts } from '../store/globalSlice';
import SendButton from '../components/SendButton';

type Props = StackScreenProps<RootStackParamList, any>;

export default function Chats({ navigation }: Props) {
  const dispatch = useDispatch()
  const { getItem } = useAsyncStorage("@lication_data")


  const askForContacts = async () => {
    try {
      const andoidContactPermission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: "Contacts Permission",
          message:
            "This app would like to view your contacts.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (andoidContactPermission === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Contacts Permission granted");
        const cs = await contacts.getAll();
        dispatch(setContacts(cs))
      } else {
        console.log("Contacts permission denied");
      }
    } catch (err) {
      console.log(err);
    }
  }
  
  useEffect(() => {
    getItem().then(r => {
      dispatch(loginAction(JSON.parse(r || "")))
    })
    askForContacts()
  }, [])

  const phone = useSelector<RootState>(state => {{
    return state.global.phone
  }})
  const { data: response,  isSuccess, isLoading } = useGetChatsQuery(phone as string, {
    // pollingInterval: 10000,
  })
  if (isLoading) return <View></View>
  if (isSuccess) {
    console.log("respData: ", response);
    return (
      <View style={globalStyle.container}>
        <FlatList
        scrollEnabled
        data={response?.data}
        renderItem={({ item }) => <SingleChat navigation={navigation} chatData={item} />}
        />
        <View style={{position: 'absolute', bottom: 80, right: 40}}>
          <SendButton onPress={() => {navigation.navigate("Contacts", {} )}}/>
        </View>
      </View>
    );
  }
  return <View></View>
}


