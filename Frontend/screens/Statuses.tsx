import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity as T,
} from "react-native";
import { globalStyle } from "../styles/global";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../routes/ContainerStack";
import MaterialIcons from "../components/MaterialIcon";
import SingleStatus from "../components/SingleStatus";

export type StatusType = {
  key: number;
  type: string;
  author: string;
  statusImage: any;
  time: string;
};

type Props = StackScreenProps<RootStackParamList, any>;

export default function Statuses({ navigation, route }: Props) {
  const demoStatuses = [
    {
      key: 0,
      type: "RECENT",
      author: "Mum",
      statusImage: require("../assets/icon.png"),
      time: "8 minutes ago",
    },
    {
      key: 1,
      type: "VIEWED",
      author: "Dad",
      statusImage: require("../assets/icon.png"),
      time: "8 minutes ago",
    },
    {
      key: 2,
      type: "MUTED",
      author: "Dad",
      statusImage: require("../assets/icon.png"),
      time: "8 minutes ago",
    },
    {
      key: 3,
      type: "VIEWED",
      author: "Dad",
      statusImage: require("../assets/icon.png"),
      time: "8 minutes ago",
    },
    {
      key: 4,
      type: "VIEWED",
      author: "Dad",
      statusImage: require("../assets/icon.png"),
      time: "8 minutes ago",
    },
    {
      key: 5,
      type: "VIEWED",
      author: "Dad",
      statusImage: require("../assets/icon.png"),
      time: "8 minutes ago",
    },
    {
      key: 6,
      type: "MUTED",
      author: "Dad",
      statusImage: require("../assets/icon.png"),
      time: "8 minutes ago",
    },
    {
      key: 7,
      type: "MUTED",
      author: "Dad",
      statusImage: require("../assets/icon.png"),
      time: "8 minutes ago",
    },
    {
      key: 8,
      type: "MUTED",
      author: "Dad",
      statusImage: require("../assets/icon.png"),
      time: "8 minutes ago",
    },
    {
      key: 9,
      type: "RECENT",
      author: "Dad",
      statusImage: require("../assets/icon.png"),
      time: "8 minutes ago",
    },
  ];
  const [statuses, setStatuses] = useState<StatusType[] | null>(demoStatuses);
  return (
    <View style={globalStyle.container}>
      <View style={styles.chat}>
        <MaterialIcons
          name="add-circle"
          style={styles.icon}
          size={25}
          color="green"
        />
        <Image
          style={styles.statusImage}
          source={require("../assets/icon.png")}
        />
        <T style={styles.content}>
          <View>
            <Text style={styles.chatName}>My Status</Text>
            <Text>Tap to add status update</Text>
          </View>
        </T>
      </View>

      <ScrollView>
        <Text>Recent updates</Text>
        {statuses
          ?.filter((status) => status.type === "RECENT")
          .map((status) => (
            <SingleStatus
              status={status}
              key={status.key}
              navigation={navigation}
              setStatus={setStatuses}
            />
          ))}
        <Text>Viewed</Text>

        {statuses
          ?.filter((status) => status.type === "VIEWED")
          .map((status) => (
            <SingleStatus
              status={status}
              key={status.key}
              navigation={navigation}
              setStatus={setStatuses}
            />
          ))}
        <Text>Muted</Text>

        {statuses
          ?.filter((status) => status.type === "MUTED")
          .map((status) => (
            <SingleStatus
              status={status}
              key={status.key}
              navigation={navigation}
              setStatus={setStatuses}
            />
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  chat: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    position: "relative",
  },
  icon: {
    position: "absolute",
    bottom: 10,
    left: 45,
    zIndex: 100,
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
});
