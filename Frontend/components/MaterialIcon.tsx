import React from "react";
import MIcons from "react-native-vector-icons/MaterialIcons";

MIcons.loadFont();

export default function MaterialIcons(props: any) {
  return (
    <MIcons
      name={props.name}
      size={props.size}
      color={props.color}
      style={props.style}
    />
  );
}
