import React from "react";
import { View, Text, Image } from "react-native";

export const Footer = () => {
  return (
    <View style={{}}>
      <View style={{ height: 7, backgroundColor: "#f8f9f9" }} />
      <View
        style={{
          height: 40,
          backgroundColor: "#ffffff",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          elevation: 2,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/home.png")}
            style={{
              height: 16,
              width: 16,
              marginBottom: 2,
              tintColor: "#77869e",
            }}
          />
          <Text style={{ fontSize: 8, fontWeight: "bold", color: "#77869e" }}>
            Home
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/expense.png")}
            style={{
              height: 16,
              width: 16,
              marginBottom: 2,
            }}
          />
          <Text style={{ fontSize: 8, fontWeight: "bold", color: "#0047cc" }}>
            Expense
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/plus.png")}
            style={{
              height: 40,
              width: 40,
              borderRadius: 20,
              position: "absolute",
              bottom: 0,
              borderWidth: 2,
              borderColor: "#ffffff",
            }}
          />
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/piggybank.png")}
            style={{
              height: 16,
              width: 16,
              marginBottom: 2,
              tintColor: "#77869e",
            }}
          />
          <Text style={{ fontSize: 8, fontWeight: "bold", color: "#77869e" }}>
            Wallet
          </Text>
        </View>

        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../assets/profile.png")}
            style={{
              height: 16,
              width: 16,
              marginBottom: 2,
              tintColor: "#77869e",
            }}
          />
          <Text style={{ fontSize: 8, fontWeight: "bold", color: "#77869e" }}>
            Profile
          </Text>
        </View>
      </View>
    </View>
  );
};
