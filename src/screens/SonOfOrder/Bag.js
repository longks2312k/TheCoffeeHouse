import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Image, Dimensions, ScrollView, ViewBase, TextInput } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5';

import { useSelector, useDispatch } from "react-redux";



export default function Bag() {

	const dispatch = useDispatch();
	const productList = useSelector((store) => store.cartReducer.products);
	console.log('productList', productList)
	const onRemoveItem = (item) => () => {
		dispatch({ type: 'REMOVE_CART', data: item })
	}
	const onRemoveAll = (item) => () => {
		dispatch({ type: 'REMOVE_ALL', data: item })
	}
	const onUpQuantity = (item) => () => {
		dispatch({type: 'UP_QUANTITY',data: item })
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
					<View style={{ flexDirection: 'row', marginLeft: 10, }}>
						<TouchableOpacity style={{ marginLeft: 0, height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#ececec', marginRight: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center', }}>
							<RnIcon name="caret-back-outline" size={25} color="black" style={{ marginRight: 3 }} />
						</TouchableOpacity>
						<Text style={{ marginLeft: 10, fontSize: 24, marginTop: 8 }}>{item.quantity}</Text>
						<TouchableOpacity onPress={onUpQuantity} style={{ marginLeft: 15, height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#ececec', marginRight: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center', }}>
							<RnIcon name="caret-forward-outline" size={25} color="black" style={{ marginLeft: 3 }} />
						</TouchableOpacity>
						<TouchableOpacity onPress={onRemoveItem(item)} style={{ marginLeft: 75, backgroundColor: '#fff', marginTop: -8, marginRight: 15, marginVertical: 10, justifyContent: 'center', alignItems: 'center', }}>
							<RnIcon1 name="delete" size={40} color="black" />
						</TouchableOpacity>
					</View>

				</View>
			</View>
		);
	};

	return (
		<View style={{ flex: 1, backgroundColor: '#ececec' }}>
			<View style={{ height: 70, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 2, borderColor: '#ececec' }}>
				<Text style={{ fontSize: 26, fontWeight: 'bold', marginLeft: 10 }}>Your Bag</Text>
			</View>
			<SafeAreaView style={{ flex: 1 }}>
				<View>
					<FlatList
						style={{ backgroundColor: '#ececec', }}
						data={productList}
						renderItem={renderItem}
						keyExtractor={item => item._id?.toString()}
						showsVerticalScrollIndicator={false}
					/>
				</View>
			</SafeAreaView>
		</View>
	)
}
