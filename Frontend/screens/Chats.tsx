import React, { useEffect, useState } from 'react';
import { View, FlatList } from "react-native"
import { globalStyle } from '../styles/global';
import { StackScreenProps } from "@react-navigation/stack";
import SingleChat from '../components/SingleChat';
import { RootStackParamList } from '../routes/ContainerStack';
import { ChatType, useGetChatsQuery } from '../store/api/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import { loginAction } from '../store/globalSlice';

type Props = StackScreenProps<RootStackParamList, any>;

export default function Chats({ navigation }: Props) {

  const dispatch = useDispatch()
  const { getItem } = useAsyncStorage("@lication_credentials")
  useEffect(() => {
    getItem().then(r => {
      dispatch(loginAction(JSON.parse(r || "")))
    })
  }, [])

  const phone = useSelector<RootState>(state => {{
    return state.global.phone
  }})
  const { data: response,  isSuccess, isLoading } = useGetChatsQuery(phone as string)
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
      </View>
    );
  }
  return <View></View>
}


