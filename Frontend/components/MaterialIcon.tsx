import React  from "react";
import MIcons from "react-native-vector-icons/Ionicons";

MIcons.loadFont()



export default function MaterialIcons(props: any){
    return (
        <MIcons name={props.name} size={props.size} color={props.color} style={props.style} />
    )
}