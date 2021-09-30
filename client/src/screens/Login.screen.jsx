import React from "react";
import { View, Text, SafeAreaView, StatusBar ,TextInput } from "react-native";

export default function Login() {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 40,
          }}
        >
          Log In
        </Text>
        <View
          style={{
            marginTop: 5,
            backgroundColor: "#FF0A0A",
            width: 80,
            height: 5,
          }}
        ></View>
      </View>
      <View
        style={{
          justifyContent:'center'
          
        }}
      >
        <TextInput
          placeholder="homechef@gmail.com"
          
        />
        
      </View>
    </SafeAreaView>
  );
}
