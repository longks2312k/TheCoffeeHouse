import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5';

import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from '../services/Api'
import { getImage } from '../utils/index'


export default function StoreDetailScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const [detailProduct, setDetailProduct] = useState()
  const { storeDetail } = route.params;



  return (
    <View>
      <Image
        style={{ height: 400, width: '100%',backgroundColor:'#ececec'}}
        source={{ uri: storeDetail.image_1 }}
      />
      <TouchableOpacity onPress={() => { navigation.goBack() }} style={{ position: 'absolute', left: 0, top: 0 }}>
				<RnIcon name="close-outline" size={50} color="black" />
			</TouchableOpacity>
      <View style={{ width: '100%', paddingHorizontal: 10 ,borderTopWidth:2,borderColor:'#ececec'}}>
        <Text ellipsizeMode='tail' numberOfLines={3} style={{ fontSize: 24,marginTop:10, fontWeight: 'bold' }}>{storeDetail.name}</Text>
        <Text ellipsizeMode='tail' numberOfLines={3} style={{ fontSize: 22,marginTop:10 }}>Địa Chỉ: {storeDetail.street} - {storeDetail.district_name} - {storeDetail.state_name}</Text>
        <Text style={{ fontSize: 22,marginTop:10 }}>Thời Gian Hoạt Động: {storeDetail.opening_time}-{storeDetail.closing_time}</Text>
        <Text style={{ fontSize: 22,marginTop:10 }}>SĐT: {storeDetail.phone}</Text>
      </View>
    </View>
  )
}