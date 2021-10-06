import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StatusBar,
  TouchableOpacity,
  ScrollView
 
} from "react-native";
// import { Row, Col } from 'react-native-responsive-grid-system';
import { showProduct } from "../../axios/product.axios";

export default function MyProduct({navigation}) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
     showProducts();
    
  }, []);
  const showProducts = async () => {
    await showProduct("61544bbb2ce9fd0530cf8a86").then((res) => {
      setProduct(res.data);
      // console.log(res.data);
    });
  };
  return (
    <ScrollView
      style={{
        marginTop: StatusBar.currentHeight,
        flex: 1,
      }}
    >
      <View style={{ position: "relative" }}>
        <Image
          style={{ position: "absolute", width: "100%" }}
          source={require("../../../assets/myProducts/profile.png")}
        ></Image>
        <Image
          style={{
            position: "relative",
            top: "50%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          source={require("../../../assets/myProducts/avatar.png")}
        ></Image>
      </View>
      <View style={{ position: "relative" }}>
        <Text
          style={{
            marginTop: "20%",
            fontSize: 42,
            fontWeight: "700",
            textAlign: "center",
          }}
        >
          My Products
        </Text>
        <View
          style={{
            position: "relative",
            width: "55%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Text
            style={{
              fontSize: 0,
              borderBottomWidth: 5,
              borderBottomColor: "#FF5B28",
            }}
          ></Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Categoryscreen')}
          activeOpacity={0.5}
          style={{
            width: "100%",
            justifyContent: "center",
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "10%",
            position: "relative",
            backgroundColor: "#FFE8B2",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 10,
            shadowColor: "black",
            shadowOpacity: 0.8,
            elevation: 3,
            zIndex: 2,
            width: "35%",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "600" }}>Add New +</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 20,
          }}
        >
        </View>
      </View>
      <View style={{flexDirection: 'row',flexWrap:'wrap'}}>
        { product.map((p)=> {
          return <ProductCard name={p.name}/>

        })}
      </View>
    </ScrollView>
  );
}

const ProductCard = ({name}) => (
  <View
    style={{
      backgroundColor: "green",
      position: "relative",
      width: "45%",
      margin: "2%",
      height: 100,
      borderRadius: 10,
      justifyContent:'center'
    }}
  >
    <Text style={{textAlign:'center'}}>{name}</Text>
  </View>
);
