import React,{useState} from "react";
import { View, Text, StatusBar, Image,TouchableOpacity,TouchableHighlight ,StyleSheet} from "react-native";

export default function Categoryscreen() {
  const [press, setPress] = useState(false)
  return (
    <View
      style={{
        marginTop: StatusBar.currentHeight,
        flex: 1,
      }}
    >
      <Text
        style={{
          marginTop: 20,
          fontSize: 36,
          fontWeight: "700",
          textAlign: "center",
        }}
      >
        Add Products
      </Text>
      
      <View style={{ width: "55%", marginLeft: "auto", marginRight: "auto" }}>
        <Text
          style={{
            fontSize: 0,
            //   fontWeight: "700",
            //   lineHeight: 55,
            borderBottomWidth: 5,
            borderBottomColor: "#FFCC44",
            //   paddingBottom:10
          }}
        ></Text>
      </View>

      <View
        style={{
          height:60,
          justifyContent: 'center',
          backgroundColor: "red",
          width: "90%",
          marginRight: "auto",
          marginLeft: "auto",
          borderRadius: 15,
          marginTop: 30,
        }}
      >
       
       <Image
          source={require("../../assets/category/category.png")}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: 15,
          }}
        >

          
        </Image>

        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "200",
            color: "white",
          }}
        >
          Pick a Category
        </Text>
      </View>
      
  
      <View
      
        style={{
          borderRadius: 15,
          backgroundColor: "red",
          width: "90%",
          marginRight: "auto",
          marginLeft: "auto",
          borderRadius: 15,
          marginTop: 10,
          height: 150,
          justifyContent: "center",
          shadowColor: "black",
            shadowOpacity: 0.8,
            elevation: 3,
        }}
      ><TouchableOpacity
      onPress={()=> setPress(true)}
      style={[
        styles.button,
        press ? { backgroundColor: "green",position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: 15 } : {}
    ]}
      >
        <Image
          source={require("../../assets/category/dosa.png")}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: 0,
          }}
        ></Image>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: "600",
            color: "white",
          }}
        >
          Breakfast
        </Text>
        </TouchableOpacity> 
      </View>
     
      <View
        style={{
          backgroundColor: "red",
          width: "90%",
          marginRight: "auto",
          marginLeft: "auto",
          borderRadius: 15,
          marginTop: 10,
          height: 150,
          shadowColor: "black",
            shadowOpacity: 0.8,
            elevation: 3,
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/category/lunch.png")}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: 15,
          }}
        ></Image>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: "600",
            color: "white",
          }}
        >
          Lunch
        </Text>
      </View>
      <View
        style={{
          height: 150,
          backgroundColor: "red",
          width: "90%",
          marginRight: "auto",
          marginLeft: "auto",
          borderRadius: 15,
          marginTop: 10,
          justifyContent: "center",
          shadowColor: "black",
            shadowOpacity: 0.8,
            elevation: 3
        }}
      >
        <Image
          source={require("../../assets/category/dinner.png")}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: 15,
          }}
        ></Image>
        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: "600",
            color: "white",
          }}
        >
          Dinner
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={.8}
        style={{
          backgroundColor: "#FFE8B2",
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
          marginTop: 20,
          width: "40%",
          shadowColor: "black",
            shadowOpacity: 0.8,
            elevation: 3,
          marginRight: "auto",
          marginLeft: "auto",
        }}
      > 
        <Text style={{ fontSize: 20, fontWeight: "500" }}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
  
  height: '100%',
  width:'100%'
  }
  });