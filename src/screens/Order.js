import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Image, Dimensions, ScrollView, ViewBase, TextInput,RefreshControl } from 'react-native'

import axios from 'axios';
import { getImage } from './utils/index';
import Modal from 'react-native-modal';
import { getProductList } from './services/Api';
import { useSelector, useDispatch } from "react-redux";
import Loading from '../components/Loading';

import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5';

const wait = (timeout) => {
	return new Promise(resolve => setTimeout(resolve, timeout));
  }

export default function Product({ navigation }) {

	const [product, setProduct] = useState([])
	const [isVisible, setIsVisible] = useState(false)
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false)
	const [refreshing, setRefreshing] = React.useState(false);
	
	const onRefresh = React.useCallback(() => {
		setRefreshing(true);
		setProduct();
		wait(2000).then(() => setRefreshing(false));
	}, []);

	const onOpenModal = () => {
		setIsVisible(true)
	}

	const onCloseModal = () => {
		setIsVisible(false)
	}

	const onAddToBag = (item) => () => {
		dispatch({ type: 'ADD_CART', data: { ...item, quantity: 1 } })
	}

	const onAddToWishlist = (item) => () => {
		dispatch({ type: 'ADD_CART_WL', data: { ...item, quantity: 1 } })
	}

	useEffect(() => {

		const callGetProductList = async () => {
			try {
				setIsLoading(true)
				const response = await getProductList();
				setProduct(response.data.data)
				setIsLoading(false)

			} catch (error) {
				console.error(error);
			}
		}

		callGetProductList()
	}, [refreshing])
	const onMoveToDetail = (data) => () => {
		navigation.navigate('Detail', { detail: data })
	}

	const renderItem = ({ item }) => (
		<View style={{ flex: 1, }}>
			<TouchableOpacity onPress={onMoveToDetail(item)} style={{ marginVertical: 5,marginHorizontal:10, flexDirection: 'row', borderRadius: 8, backgroundColor: 'white', padding: 10, width: '95%', marginRight: 10 }}>
				<Image
					style={{ height: 100, flex:3, borderRadius: 10 }}
					source={{ uri: item.image }}
				/>
				<View style={{ flex:6, marginLeft: 10 }}>
					<Text ellipsizeMode='tail' numberOfLines={1} style={{ width:'85%',fontSize: 16, marginTop: 10, fontWeight: 'bold' }}>{item.product_name}</Text>
					<Text ellipsizeMode='tail' numberOfLines={1} style={{width:'85%', fontSize: 16, marginTop: 2 }}>{item.description}</Text>
					<Text style={{ fontSize: 16, marginTop: 2 }}>Giá: {item.price}đ</Text>
				</View>
				<View style={{ flex:1,flexDirection:'column-reverse' }}>
					<TouchableOpacity onPress={onAddToBag(item)} style={{ height: 36, width: 36, borderRadius: 36 / 2, backgroundColor: '#fff700',justifyContent:'center',alignItems:'center' }}>
						<RnIcon name="add-outline" size={28} color="white" />
					</TouchableOpacity>
				</View>
			</TouchableOpacity>
		</View>

	);
	return (
		<View style={{ flex: 1, backgroundColor: 'black' }}>
			<View style={{ height: 50, flexDirection: 'row', backgroundColor: 'white' }}>
				<View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'center', marginLeft: 20 }}>
					<Text style={{ fontWeight: 'bold', fontSize: 22 }}>Giao Hàng</Text>
				</View>
				<View style={{ flex: 1, flexDirection: 'row-reverse' }}>
					<TouchableOpacity onPress={() => navigation.navigate('Bag')} style={{ height: 36, width: 36, borderRadius: 36 / 2, backgroundColor: '#fff', marginRight: 10, marginVertical: 8, justifyContent: 'center', alignItems: 'center', elevation: 15, shadowColor: '0,0,0, .4', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { height: 1, width: 1 } }}>
						<RnIcon2 name="shopping-bag-1" size={22} color="black" />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate('Wishlist')} style={{ height: 36, width: 36, borderRadius: 36 / 2, backgroundColor: '#fff', marginRight: 10, marginVertical: 8, justifyContent: 'center', alignItems: 'center', elevation: 15, shadowColor: '0,0,0, .4', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { height: 1, width: 1 } }}>
						<RnIcon name="heart" size={24} color="black" />
					</TouchableOpacity>
				</View>
			</View>
			{/* <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ flex: 1, height: 50, width: '100%', backgroundColor: '#ececec', marginBottom: 5 }}>
				<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 0 }}>
					<TouchableOpacity onPress={onOpenModal} style={{ height: 42, paddingHorizontal: 8, backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
						<Text style={{ fontSize: 20 }}>Cà phê</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ height: 42, paddingHorizontal: 8, backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
						<Text style={{ fontSize: 20 }}>Đá xay - Chocolate - Matcha</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ height: 42, paddingHorizontal: 8, backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
						<Text style={{ fontSize: 20 }}>Trà - Trái cây - Trà sữa</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ height: 42, paddingHorizontal: 8, backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
						<Text style={{ fontSize: 20 }}>Bánh mặn - Bánh ngọt - Snack</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ height: 42, paddingHorizontal: 8, backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
						<Text style={{ fontSize: 20 }}>Bộ sưu tập quà tặng</Text>
					</TouchableOpacity>
				</View>
			</ScrollView> */}
			<View style={{ flex: 1 }}>
				{/* {isLoading && <Loading />} */}
				<FlatList
					style={{ backgroundColor: '#f5f5ef',minHeight: 300 }}
					data={product}
					renderItem={renderItem}
					keyExtractor={item => item._id?.toString()}
					showsVerticalScrollIndicator={false}
					refreshControl={
						<RefreshControl
							refreshing={refreshing}
							onRefresh={onRefresh}
						/>
					}
				/>
			</View>
			<Modal
				testID={'modal'}
				isVisible={isVisible}
				onSwipeComplete={onCloseModal}
				swipeDirection={['up', 'left', 'right', 'down']}
				style={{ justifyContent: 'flex-end', margin: 0 }}
			>
				<View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', height: 700 }}>
					<TouchableOpacity onPress={onCloseModal} style={{ position: 'absolute', top: 0, right: 0 }}>
						<RnIcon name="close" size={50} color="black" />
					</TouchableOpacity>
					<Text style={{ fontSize: 20 }}>Bộ sưu tập quà tặng</Text>
				</View>
			</Modal>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
});
