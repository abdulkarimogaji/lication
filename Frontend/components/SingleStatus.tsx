import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Modal,
  Alert,
  TouchableOpacity as T,
} from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StatusType } from "../screens/Statuses";
import { RootStackParamList } from "../routes/ContainerStack";
import { useState } from "react";
import { globalStyle } from "../styles/global";

type Props = {
  setStatus: React.Dispatch<React.SetStateAction<StatusType[] | null>>;
  status: StatusType;
  navigation: StackNavigationProp<RootStackParamList, any>;
};

const SingleStatus = ({ status, navigation, setStatus }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigateToChat = () => {
    navigation.navigate("ChatDetails", { chatName: status.author });
  };

  const showInput = () => {};

  const setStatusType = (type: string) => {
    setStatus((prev) => {
      if (prev === null) return null;
      const statuses = [...prev];
      const index = statuses.findIndex((s) => s.key === status.key);
      statuses[index].type = type;
      return statuses;
    });
  }
  function closeModal() {
      setStatusType("VIEWED")

    setModalOpen(false);
  }




  const displayAlert = () => {
    const isMuted = status.type === 'MUTED'
    const title = isMuted  ?  `Unmute ${status.author}'s status updates?` : `Mute ${status.author}'s status updates?`
    const message = isMuted  ?  `Mute ${status.author}'s status updates?` : `New status updates from ${status.author} won't appear under recent updates anymore.`
    const actionBtn = isMuted ? setStatusType('RECENT') : setStatusType('MUTED')
    Alert.alert(
      title
      ,
      message,
      [
        {
          text: 'cancel',
          onPress: () => {},
        },
        {
          text: isMuted ? 'unmute' : 'mute',
          onPress: () => actionBtn
        }
      ]
    );
  };

  return (
    <T onPress={() => setModalOpen(true)} onLongPress={displayAlert}>
      <View style={styles.container}>
        <Modal
          statusBarTranslucent={true}
          animationType="slide"
          visible={modalOpen}
          onShow={() => setTimeout(closeModal, 5000)}
          onRequestClose={closeModal}
        >
          <View style={[globalStyle.container, styles.modalView]}>
            <Text style={styles.modalText}>
              My Name is Abdulkarim I love to eat garri and play with my nose My
              Name is Abdulkarim I love to eat garri and play with my nose My
              Name is Abdulkarim I love to eat garri and play with my nose My
              Name is Abdulkarim I love to eat garri and play with my nose My
              Name is Abdulkarim I love to eat garri and play with my nose My
              Name is Abdulkarim I love to eat garri and play with my nose My
              Name is Abdulkarim I love to eat garri and play with my nose My
              Name is Abdulkarim I love to eat garri and play with my nose My
              Name is Abdulkarim I love to eat garri and play with my nose
            </Text>
            <View style={styles.modalBottom}>
              <T onPress={() => showInput()}>
                <Text>Reply</Text>
              </T>
            </View>
          </View>
        </Modal>
        <Image style={styles.statusImage} source={status.statusImage} />
        <View style={styles.content}>
          <View>
            <Text style={styles.chatName}>{status.author}</Text>
            <Text>{status.time}</Text>
          </View>
        </View>
      </View>
    </T>
  );
};

export default SingleStatus;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content: {
    width: "78%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  chatName: {
    fontWeight: "bold",
    fontSize: 14,
  },
  statusImage: {
    width: 50,
    height: 50,
    borderRadius: 998,
  },
  sendTime: {
    textAlignVertical: "top",
    fontSize: 10,
  },
  modalView: {
    backgroundColor: "coral",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  modalText: {
    fontSize: 20,
    color: "white",
    fontWeight: "600",
  },
  modalBottom: {
    position: "absolute",
    bottom: 30,
  },
});
