import { View, Text, StyleSheet, Dimensions, Image, ImageBackground } from "react-native";
import React from "react";
import { Linking } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { useFonts } from "expo-font";
import { FontAwesome6 } from '@expo/vector-icons';
export default function SingleNews({ item, index }) {
  const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const logo = <Text> 
  Snippet News {' '}
  <FontAwesome6 name="gripfire" size={30} color="darkorange" />
  </Text>

 

  return (
    

<View style={{height: windowHeight, width: windowWidth,transform: [{scaleY: 1}], backgroundColor: "#000"}}>
    
      <Image source={{uri : item.urlToImage}} style={styles.img} resizeMode="cover"   />
      <Text style={styles.title}>{item.title.slice(0, 70)}{item.title.length > 40 ? '...' : ''}</Text>
      <Text style={styles.desc}>{item.description}</Text>
      <Text style={{...styles.auth}}>Snippet by {item.author === null ? logo  : item.author}</Text>
      {/* Image bg */}
      <ImageBackground style={styles.footer} blurRadius={30} source={{uri : item.urlToImage}}>
      <Text style={{...styles.url,color: '#fff'}}
      onPress={() => Linking.openURL(item.url)}>
        Link <Entypo name="link" size={24} color="#fff" />
</Text>
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontFamily: "outfit-semibold",
    fontSize: 23,
    paddingBottom: 10,
    lineHeight: 30,

  },
  img:{
    height: "40%",
  },
  desc:{
    color: "#fff",
    fontSize: 15,
    fontFamily: "outfit",
    lineHeight: 25,
    marginTop: 5
  },
  auth:{
    color: "darkorange",
    fontFamily: "outfit-bold",
    marginTop: 19,
    backgroundColor: "#fff",
    width: "100%",
    padding: 20,
    fontSize: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
  }, 
  url:{
    fontFamily: "outfit-bold",
    marginTop: 25,
    fontSize: 24,
    textAlign: 'center',
    textShadowRadius: 100,
    textShadowColor: "blue",
  },
  footer:{
    bottom: 0,
    height: 135,
    marginTop: 17,
    position: "absolute",
    width: "100%",
  }
});
