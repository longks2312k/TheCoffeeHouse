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

	const onAddToBag = (detail) => () => {
		dispatch({ type: 'ADD_CART', data: { ...detail, quantity: 1 } })
	}

	const onAddToWishlist = (item) => () => {
		dispatch({ type: 'ADD_CART_WL', data: { ...item, quantity: 1 } })
	}

	return (
		<View style={{ backgroundColor: 'white' }}>
			<Image
				style={{ height: 400, width: '100%', backgroundColor: 'white' }}
				source={{ uri: detail.image }}
			/>
			<TouchableOpacity onPress={() => { navigation.goBack() }} style={{ position: 'absolute', left: 0, top: 0 }}>
				<RnIcon name="close-outline" size={50} color="black" />
			</TouchableOpacity>
			<TouchableOpacity onPress={onAddToWishlist(detail)} style={{ position: 'absolute', right: 8, top: 8 }}>
				<RnIcon name="heart" size={40} color="black" />
			</TouchableOpacity>
			<View style={{ width: '100%', paddingLeft: 10, backgroundColor: 'white' }}>
				<Text numberOfLines={1} style={{ fontSize: 22, marginTop: 10, fontWeight: 'bold' }}>{detail.product_name}</Text>
				<Text ellipsizeMode='tail' numberOfLines={3} style={{ fontSize: 16, marginTop: 2 }}>{detail.description}đ</Text>
				<Text style={{ fontSize: 16, marginTop: 10 }}>Sản xuất vào: {detail.created_at}</Text>
				<Text style={{ fontSize: 16, marginTop: 10 }}>Giá: {detail.price}đ</Text>
			</View>
			<View style={{ flexDirection: 'row', marginTop: 10, paddingBottom: 10}}>
				<TouchableOpacity onPress={onAddToBag(detail)} style={{ borderRadius: 20,marginLeft:'5%', height: 50, width: '90%', backgroundColor: '#ffad33',justifyContent: 'center', alignItems: 'center', }}>
					<Text style={{ fontSize: 16, fontWeight: 'bold' }}>Add To Cart</Text>
				</TouchableOpacity>
			</View>
		</View>
	)
}