import React from "react";
import { View, Text, Image } from "react-native";

export const Header = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: 16,
        paddingHorizontal: 16,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          lineHeight: 18,
          fontWeight: "bold",
          letterSpacing: 0.26,
        }}
      >
        Expenses
      </Text>
      <Image
        source={require("../assets/wallet.png")}
        style={{
          height: 24,
          width: 24,
        }}
      />
    </View>
  );
};
