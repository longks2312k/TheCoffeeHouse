import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Image, Dimensions, ScrollView, ViewBase, TextInput } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5'
import axios from 'axios'
import { getImage } from './utils/index'
import { getProductList } from './services/Api'


export default function Product({ navigation }) {

	const [product, setProduct] = useState([])


	useEffect(() => {
		
		const callGetProductList = async () => {
			try {
				const response = await getProductList();
				console.log('rs', response.data.data); 
				setProduct(response.data.data)

			} catch (error) {
				console.error(error);
			}
		}

		callGetProductList()
	}, [])
	
	const renderItem = ({ item }) => (
		<View style={{ flex: 1, margin: 5, flexDirection: 'row-reverse', borderRadius: 10, backgroundColor: 'white', padding: 10, }}>
			<Image
				style={{ height: 120, width: '30%', borderRadius: 10 }}
				source={{   uri: item.image   }}
			/>
			<View style={{ width: '60%', marginRight: 30 }}>
				<Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>{item.product_name}</Text>
				<Text ellipsizeMode='tail' numberOfLines={2} style={{ fontSize: 18, marginTop: 2 }}>{item.description}đ</Text>
				<Text style={{ fontSize: 18, marginTop: 2 }}>{item.price}</Text>
			</View>
		</View>
	);
	return (
		<View style={{ flex: 1, backgroundColor: '#ececec' }}>
			<View style={{ height: 70, flexDirection: 'row', backgroundColor: 'white', alignItems: 'center' }}>
				<RnIcon3 style={{ marginLeft: 10 }} name="shipping-fast" size={50} color="orange" />
				<Text style={{ fontSize: 26, fontWeight: 'bold', marginLeft: 10 }}>Giao Hàng Đến</Text>
				<RnIcon style={{ marginLeft: 10 }} name="chevron-down-sharp" size={30} color="black" />
			</View>
			<View style={{ borderBottomWidth: 0.2, flexDirection: "row", height: 70, justifyContent: 'center', alignItems: 'center', borderColor: "gray" }}>
				<TextInput placeholder="  Search" style={{ height: 50, width: '65%', backgroundColor: 'white', borderRadius: 20, fontSize: 18 }}>

				</TextInput>
				<TouchableOpacity style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'white', marginLeft: 5, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
					<RnIcon name="search-outline" size={30} color="black" />

				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Wishlist')} style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: 'white', marginLeft: 5, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
					<RnIcon name="heart-outline" size={30} color="black" />

				</TouchableOpacity>
			</View>
			<ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ flex: 1, height: 100, width: '100%', backgroundColor: '#ececec', marginBottom: 5 }}>
				<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
					<TouchableOpacity  style={{ height: 50,paddingHorizontal:8, backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
						<Text style={{ fontSize: 20 }}>Cà phê</Text>
					</TouchableOpacity>
					<TouchableOpacity  style={{ height: 50,paddingHorizontal:8,  backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
						<Text style={{ fontSize: 20 }}>Đá xay - Chocolate - Matcha</Text>
					</TouchableOpacity>
					<TouchableOpacity  style={{ height: 50,paddingHorizontal:8,  backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
						<Text style={{ fontSize: 20 }}>Trà - Trái cây - Trà sữa</Text>
					</TouchableOpacity>
					<TouchableOpacity  style={{ height: 50,paddingHorizontal:8, backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
						<Text style={{ fontSize: 20 }}>Bánh mặn - Bánh ngọt - Snack</Text>
					</TouchableOpacity>
					<TouchableOpacity  style={{ height: 50,paddingHorizontal:8, backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
						<Text style={{ fontSize: 20 }}>Bộ sưu tập quà tặng</Text>
					</TouchableOpacity>
				</View>

			</ScrollView>
			<View style={{ flex: 9 }}>
				<FlatList
					style={{ backgroundColor: '#ececec', }}
					data={product}
					renderItem={renderItem}
					keyExtractor={item => item._id?.toString()}
					showsVerticalScrollIndicator={false}
				/>
			</View>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
});
