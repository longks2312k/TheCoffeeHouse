import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5';

import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from '../services/Api'  


export default function DetailScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const [detailProduct, setDetailProduct] = useState()
  const { detail } = route.params; 

  console.tron.log('detail', detail)
  const onAddToBag = (detail) => () => {
		dispatch({ type: 'ADD_CART', data: { ...detail, quantity: 1 } })
	}

  return (
    <View>
      <Image
					style={{ height: 400, width: '100%',backgroundColor:'white'}}
					source={{ uri: detail.image }}
				/>
				<View style={{ width: '100%', paddingLeft: 10 ,borderTopWidth:2,borderColor:'#ececec',backgroundColor:'white'}}>
					<Text numberOfLines={1} style={{ fontSize: 26, marginTop: 10, fontWeight: 'bold' }}>{detail.product_name}</Text>
					<Text ellipsizeMode='tail' numberOfLines={3} style={{ fontSize: 20, marginTop: 2 }}>{detail.description}đ</Text>
					<Text style={{ fontSize: 24,marginTop:10 }}>Sản xuất vào: {detail.created_at}</Text>
          <Text style={{ fontSize: 24,marginTop:10 }}>Giá: {detail.price}đ</Text>
					<View style={{ flexDirection: 'row',paddingLeft: 20,marginTop:10,paddingBottom:10}}>
						<TouchableOpacity onPress={onAddToBag(detail)} style={{ borderRadius: 20, height: 60, width: '90%', backgroundColor: 'yellow', marginRight: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center', }}>
              <Text style={{ fontSize: 24,fontWeight:'bold'}}>Add To Cart</Text>
						</TouchableOpacity>
					</View>
				</View>
    </View>
  )
}