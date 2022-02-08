import React from 'react'
import { View, Text ,Image} from 'react-native'

export default function SplashScreen() {
  return (
    <View style={{backgroundColor:'white',justifyContent:'center',alignItems:'center',height:'100%'}}>
      <Image style={{height:200,width:190}} source={{uri:'https://thienthoi.com.vn/wp-content/uploads/2020/09/thienthoi-28.png'}}/>
    </View>
  )
}
