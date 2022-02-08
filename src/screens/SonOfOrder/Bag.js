import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Image, Dimensions, ScrollView, ViewBase, TextInput } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5';

import { useSelector, useDispatch } from "react-redux";

function TotalPrice(price, tonggia) {
	return Number(price * tonggia).toLocaleString('en-US');
}

export default function Bag({ navigation }) {

	const dispatch = useDispatch();
	const productList = useSelector((store) => store.cartReducer.products);
	const totalMoney = productList.reduce((acc, ele) => acc + Number(ele.price) * ele.quantity, 0)
	const totalItem = productList.reduce((acc, ele) => acc + ele.quantity, 0)

	const onRemoveItem = (item) => () => {
		dispatch({ type: 'REMOVE_CART', data: item })
	}
	const onRemoveAll = () => {
		dispatch({ type: 'REMOVE_ALL' })
	}
	const onChangeQuantity = (type, item) => () => {
		if (type === 'reduce' && item.quantity === 1) {
			dispatch({ type: 'REMOVE_CART', data: item })
		} else {
			dispatch({ type: 'CHANGE_QUANTITY', data: item, changeQuantityType: type })
		}
	}

	const renderItem = ({ item }) => {
		return (
			<View style={{ flex: 1, marginVertical: 5,marginHorizontal:10, flexDirection: 'row', borderRadius: 8, backgroundColor: 'white', padding: 10, width: '95%', marginRight: 10 }}>
				<Image
					style={{ height: 100, flex:3, borderRadius: 5 }}
					source={{ uri: item.image }}
				/>
				<View style={{ flex:5.8,}}>
					<Text ellipsizeMode='tail' numberOfLines={1} style={{ width:'85%',fontSize: 24, marginLeft: 10, fontWeight: 'bold' }}>{item.product_name}</Text>
					<Text style={{ fontSize: 20, marginTop: 5, marginLeft: 10, }}>Giá: {TotalPrice(item.price, item.quantity)}</Text>
					<View style={{ flexDirection: 'row', marginLeft: 10, }}>
						<TouchableOpacity onPress={onChangeQuantity('reduce', item)} style={{ marginLeft: 0, height: 36, width: 36, borderRadius: 36 / 2, backgroundColor: '#ececec', marginRight: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center', }}>
							<RnIcon name="caret-back-outline" size={25} color="black" style={{ marginRight: 3 }} />
						</TouchableOpacity>
						<Text style={{ marginLeft: 10, fontSize: 20, marginTop: 8 }}>{item.quantity}</Text>
						<TouchableOpacity onPress={onChangeQuantity('increase', item)} style={{ marginLeft: 15, height: 36, width: 36, borderRadius: 36 / 2, backgroundColor: '#ececec', marginRight: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center', }}>
							<RnIcon name="caret-forward-outline" size={25} color="black" style={{ marginLeft: 3 }} />
						</TouchableOpacity>
					</View>
				</View>
				<View style={{flex:1.2, width: '10%', justifyContent: 'center', alignItems: 'center' }}>
					<TouchableOpacity onPress={onRemoveItem(item)} style={{}}>
						<RnIcon name="close-outline" size={40} color="black" />
					</TouchableOpacity>
				</View>
			</View>
		);
	};

	return (
		<View style={{ flex: 1, backgroundColor: '#ececec' }}>
			<View style={{ height: 50, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderBottomWidth: 2, borderColor: '#ececec' }}>
				<Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 10 }}>Your Bag</Text>
			</View>
			<TouchableOpacity onPress={() => { navigation.goBack() }} style={{ position: 'absolute', left: 0, top: 5 }}>
				<RnIcon name="chevron-back-outline" size={36} color="black" />
			</TouchableOpacity>
			{productList?.length ? <View style={{ height: 100, paddingHorizontal: 15, paddingVertical: 15, borderTopWidth: 0.5, borderColor: '#ececec', backgroundColor: 'white' }}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<Text style={{ fontSize: 22, fontWeight: 'bold' }}>Total item: </Text>
					<Text style={{ fontSize: 22, fontWeight: 'bold' }}>{totalItem}</Text>

				</View>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
					<Text style={{ fontSize: 22, fontWeight: 'bold' }}>Total money: </Text>
					<Text style={{ fontSize: 22, fontWeight: 'bold' }}>{totalMoney}đ</Text>
				</View>
			</View> : null}
			<SafeAreaView style={{ flex: 1 }}>
				<View>
					<FlatList
						style={{ backgroundColor: '#ececec' }}
						data={productList}
						renderItem={renderItem}
						keyExtractor={item => item._id?.toString()}
						showsVerticalScrollIndicator={false}
						ListFooterComponent={
							<View>
								{productList?.length ?
									<TouchableOpacity onPress={onRemoveAll} style={{ marginHorizontal: 50, backgroundColor: '#ff8c70', marginVertical: 10, justifyContent: 'center', alignItems: 'center', height: 50, borderRadius: 25 }}>
										<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
											<RnIcon name="trash-outline" size={32} color="black" />
											<Text style={{ fontSize: 24, marginLeft: 10}}>Remove All</Text>
										</View>
									</TouchableOpacity> : null}

							</View>
						}
					/>
				</View>

			</SafeAreaView>
		</View>
	)
}
