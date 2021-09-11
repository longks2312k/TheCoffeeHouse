import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Image, Dimensions, ScrollView, ViewBase, TextInput } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5';

import { useSelector, useDispatch } from "react-redux";


export default function Wishlist() {

	const dispatch = useDispatch();
	const productWishlist = useSelector((store) => store.wishlistReducer.products);
	const onRemoveItem = (item) => () => {
		dispatch({ type: 'REMOVE_CART_WL', data: item })
	}
	const onRemoveAll =  () => {
		dispatch({ type: 'REMOVE_ALL' })
	}

	const renderItem = ({ item }) => {
		return (
			<View style={{ flex: 1, margin: 5, flexDirection: 'row', borderRadius: 10, backgroundColor: 'white', padding: 10, width: '95%', marginRight: 10 }}>
				<Image
					style={{ height: 120, width: '30%', borderRadius: 10 }}
					source={{ uri: item.image }}
				/>
				<View style={{ width: '70%', marginRight: 30 }}>
					<Text /*onPress={onTouch}*/ style={{ fontSize: 20, marginLeft: 10, fontWeight: 'bold' }}>{item.product_name}</Text>
					<Text style={{ fontSize: 20, marginTop: 10, marginLeft: 10, }}>Giá: {item.price}đ</Text>
					<TouchableOpacity onPress={onRemoveItem(item)} style={{ marginLeft: 225, backgroundColor: '#fff', marginTop: 10, marginRight: 15, marginVertical: 10, justifyContent: 'center', alignItems: 'center', }}>
						<RnIcon1 name="delete" size={40} color="black" />
					</TouchableOpacity>
				</View>
			</View>
		);
	};

	return (
		<View style={{ flex: 1, backgroundColor: '#ececec' }}>
			<View style={{ height: 70, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 2, borderColor: '#ececec' }}>
				<Text style={{ fontSize: 26, fontWeight: 'bold', marginLeft: 10 }}>Wishlist</Text>
			</View>
			<SafeAreaView style={{ flex: 1 }}>
				<View>
					<FlatList
						style={{ backgroundColor: '#ececec', }}
						data={productWishlist}
						renderItem={renderItem}
						keyExtractor={item => item._id?.toString()}
						showsVerticalScrollIndicator={false}
					/>
				</View>
				<TouchableOpacity onPress={onRemoveAll} style={{ marginHorizontal:10, backgroundColor: '#fff',  marginVertical: 10, justifyContent: 'center', alignItems: 'center',height:60,borderRadius:20 }}>
					<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
						<RnIcon1 name="delete" size={40} color="black" />
						<Text style={{fontSize:26}}>Remove All</Text>
					</View>
					
				</TouchableOpacity>
			</SafeAreaView>
		</View>
	)
}
