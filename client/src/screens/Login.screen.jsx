import React from "react";
import { View, Text, SafeAreaView, StatusBar } from "react-native";

export default function Login() {
  return (
    <SafeAreaView style={{ marginTop: StatusBar.currentHeight }}>
      <View
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 40,
            textAlign: 'center'
          }}
        >
          Log In
        </Text>
        
      </View> 
      <View
        style={{
          position: "absolute",
        }}
      >
       
      </View>
    </SafeAreaView>
  );
}
