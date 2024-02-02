import { View, Text, Image } from 'react-native'
import React from 'react'

const DiscoverScreen = () => {
  return (
    <View style={{flexDirection: "row", justifyContent:"center" , gap: 10}}>
      <Image source={require("../assets/user.png")} style={{width: 200, height: 100, borderTopLeftRadius: 400, borderBottomRightRadius: 100, borderBottomLeftRadius: 200}}/>
      <Text style={{color: "#fff" , fontFamily: "outfit-bold", top: 45 , color: "#ADBC9F"}}>© by Anuj Dixit</Text>
    </View>
  )
}

export default DiscoverScreen