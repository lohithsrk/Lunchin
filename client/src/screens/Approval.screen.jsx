import React from "react";
import {
  SafeAreaView,
  Text,
  StatusBar,
  Image,
  Animated,
  TouchableOpacity,
  View,
} from "react-native";

export default function ApprovalScreen() {
  return (
    <SafeAreaView
      style={{
        marginTop: StatusBar.currentHeight,
      }}
    >
      <View style={{ width: "66%", marginLeft: "auto", marginRight: "auto" ,marginTop: 10}}>
        <Text
          style={{
            fontSize: 42,
            fontWeight: "700",
            lineHeight: 60,
          }}
        >
          Your profile details have been sent for
        </Text>
        <View style={{ width: "68%" }}>
          <Text
            style={{
              fontSize: 42,
              fontWeight: "700",
              lineHeight: 55,
              borderBottomWidth: 5,
              borderBottomColor: "#5D5FEF",
              paddingBottom:10
            }}
          >
            approval!
          </Text>
        </View>
      </View>
      <Text style={{ textAlign: "center", marginTop: 40 ,fontSize: 17}}>
        We will get back to you within 7 days
      </Text>

      <TouchableOpacity
        activeOpacity={0.5}
        style={{
          backgroundColor: "#A5A6F6",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 30,
          marginTop: 30,
          width: "40%",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      > 
        <Text style={{ fontSize: 24, fontWeight: "700" }}>Yay!</Text>
      </TouchableOpacity>
      <View>
        <Image source={require("../../assets/approval/rafiki.png")} />
      </View>
    </SafeAreaView>
  );
}
