import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Image, Dimensions, ScrollView, ViewBase, TextInput } from 'react-native'

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


export default function Product({ navigation }) {

	const [product, setProduct] = useState([])
	const [isVisible, setIsVisible] = useState(false)
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false)
	
	const onTouch = () => {
		setIsVisible(true)
	}

	const onCloseModal = () => {
		setIsVisible(false)
	}

	const onAddToBag = (item) => () => {
		dispatch({ type: 'ADD_CART', data: { ...item, quantity: 1 } })
	}

	const onAddToWishlist = (item) => () => {
		dispatch({ type: 'ADD_CART_WL', data: { ...item, quantity:  1 }})
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
	}, [])
	const onMoveToDetail = (data) => () =>{
		navigation.navigate('Detail', {detail: data})
	}
	
	const renderItem = ({ item }) => (
		<View style={{ flex: 1, }}>
			<TouchableOpacity onPress={onMoveToDetail(item)} style={{ margin: 5, flexDirection: 'row-reverse', borderRadius: 10, backgroundColor: 'white', padding: 10, width: '95%', marginRight: 10 }}>
				<Image
					style={{ height: 120, width: '30%', borderRadius: 10 }}
					source={{ uri: item.image }}
				/>
				<View style={{ width: '65%', marginRight: 10 }}>
					<Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>{item.product_name}</Text>
					<Text ellipsizeMode='tail' numberOfLines={2} style={{ fontSize: 16, marginTop: 2 }}>{item.description}</Text>
					<Text style={{ fontSize: 18,marginTop:10 }}>Giá: {item.price}đ</Text>
					<View style={{ flexDirection: 'row',marginLeft: 90,marginTop:-35}}>
						<TouchableOpacity onPress={onAddToWishlist(item)} style={{ marginLeft: 120, height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#ececec', marginRight: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center', }}>
							<RnIcon name="heart" size={25} color="black" />
						</TouchableOpacity>
					</View>
				</View>
			</TouchableOpacity>
		</View>

	);
	return (
		<View style={{ flex: 1, backgroundColor: '#ececec' }}>
			<View style={{ height: 60, flexDirection: 'row', backgroundColor: 'white' }}>
				<View style={{ flex:1,alignItems:'flex-start', justifyContent: 'center', marginLeft:20}}>
					<Text style={{ fontWeight: 'bold', fontSize: 28 }}>Giao Hàng</Text>
				</View>
				<View style={{ flex:1,flexDirection:'row-reverse'}}>
					<TouchableOpacity onPress={() => navigation.navigate('Bag')} style={{  height: 42, width: 42, borderRadius: 50 / 2, backgroundColor: '#fff', marginRight: 15, marginVertical: 10, justifyContent: 'center', alignItems: 'center', elevation: 15, shadowColor: '0,0,0, .4', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { height: 1, width: 1 } }}>
						<RnIcon2 name="shopping-bag-1" size={25} color="black" />
					</TouchableOpacity>
					<TouchableOpacity style={{ height: 42, width: 42, borderRadius: 50 / 2, backgroundColor: '#fff', marginRight: 15, marginVertical: 10, justifyContent: 'center', alignItems: 'center', elevation: 15, shadowColor: '0,0,0, .4', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { height: 1, width: 1 } }}>
						<RnIcon name="notifications-outline" size={30} color="black" />
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ borderBottomWidth: 0.2, flexDirection: "row", height: 70, justifyContent: 'center', alignItems: 'center', borderColor: "gray" }}>
				<TextInput placeholder="  Search" style={{ height: 50, width: '65%', backgroundColor: 'white', borderRadius: 20, fontSize: 18 }}>

				</TextInput>
				<TouchableOpacity onPress={onTouch} style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'white', marginLeft: 5, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
					<RnIcon name="search-outline" size={30} color="black" />

				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Wishlist')} style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'white', marginLeft: 5, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
					<RnIcon name="heart-outline" size={30} color="black" />

				</TouchableOpacity>
			</View>
			<ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ flex: 1, height: 50, width: '100%', backgroundColor: '#ececec', marginBottom: 5 }}>
				<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 0 }}>
					<TouchableOpacity style={{ height: 42, paddingHorizontal: 8, backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
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

			</ScrollView>
			<View style={{ flex: 9 }}>
				{isLoading && <Loading />}
				<FlatList
					style={{ backgroundColor: '#ececec', }}
					data={product}
					renderItem={renderItem}
					keyExtractor={item => item._id?.toString()}
					showsVerticalScrollIndicator={false}
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
