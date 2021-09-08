import React from 'react'
import { View, Text } from 'react-native'

export default function FruitJuice() {
  return (
    <View style={{ flex: 1, backgroundColor: '#ececec' }}>
			<View style={{ height: 70, flexDirection: 'row', backgroundColor: 'white',justifyContent:'center', alignItems: 'center',borderBottomWidth:2,borderColor:'#ececec'}}>
				<Text style={{ fontSize: 26, fontWeight: 'bold', marginLeft: 10 }}>Your Bag</Text>
			</View>
			
		</View>
  )
}
