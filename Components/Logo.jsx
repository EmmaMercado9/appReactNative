import React from "react";
import { Svg, Circle, Text } from "react-native-svg";
import { View } from "react-native";

export default function Logo() {
  return (
    <View>
      <Svg height="50" width="200">
        <Circle cx="25" cy="25" r="20" fill="#00CFFF" />
        <Text x="55" y="32" fontSize="20" fill="white" fontFamily="Arial">
          Tú Bolsillo
        </Text>
      </Svg>
    </View>
  );
}
