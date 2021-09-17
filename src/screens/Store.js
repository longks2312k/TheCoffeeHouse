import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Image, Dimensions, ScrollView, ViewBase, TextInput } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import { getStore } from './services/Api'
import { getImage } from './utils/index'
import { useSelector, useDispatch } from "react-redux";
import Loading from '../components/Loading';

export default function Store({ navigation }) {

	const { height, width } = Dimensions.get('window');
	const itemWidth = (width - 15) / 2;
	const [product, setProduct] = useState([])
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false)

	const onMoveToDetail = (data) => () => {
		navigation.navigate('storeDetail', { storeDetail: data })

	}

	useEffect(() => {

		const callGetStore = async () => {
			try {
				setIsLoading(true)
				const response = await getStore();
				setProduct(response.data)
				setIsLoading(false)

			} catch (error) {
				console.error(error);
			}
		}
		callGetStore()
	}, [])

	const renderItem = ({ item }) => (
		<View style={{ flex: 1, }}>
			<TouchableOpacity onPress={onMoveToDetail(item)} style={{ flex: 1, margin: 5, flexDirection: 'row', borderRadius: 10, backgroundColor: 'white', padding: 10, }}>
				<Image
					style={{ height: 120, width: '30%', borderRadius: 10 }}
					source={{ uri: getImage(item.image_1) }}
				/>
				<View style={{ width: '60%', marginLeft: 15 }}>
					<Text ellipsizeMode='tail' numberOfLines={1} style={{ fontSize: 18, marginTop: 8, fontWeight: 'bold' }}>{item.name}</Text>
					<Text ellipsizeMode='tail' numberOfLines={1} style={{ fontSize: 18, marginTop: 2 }}>{item.street}</Text>
					<Text style={{ fontSize: 18, marginTop: 2 }}>Thời Gian HĐ:{item.opening_time}-{item.closing_time}</Text>
					<Text style={{ fontSize: 18, marginTop: 2 }}>SĐT: {item.phone}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
	return (
		<View style={{ flex: 1, backgroundColor: '#ececec' }}>
			{isLoading && <Loading />}
			<View style={{ height: 70, flexDirection: 'row', backgroundColor: 'white', justifyContent: 'space-between' }}>
				<View style={{ justifyContent: "center", alignItems: 'center', marginLeft: 20 }}>
					<Text style={{ fontWeight: 'bold', fontSize: 30 }}>Cửa Hàng</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={{ height: 50, width: 80, borderRadius: 50 / 2, backgroundColor: '#fff', marginHorizontal: 15, marginVertical: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', elevation: 5, shadowColor: '0,0,0, .4', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { height: 1, width: 1 } }}>
						<RnIcon1 name="ticket-confirmation-outline" size={30} color="orange" />
						<Text style={{ fontSize: 24, fontWeight: 'bold' }}> 4</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: '#fff', marginRight: 15, marginVertical: 10, justifyContent: 'center', alignItems: 'center', elevation: 15, shadowColor: '0,0,0, .4', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { height: 1, width: 1 } }}>
						<RnIcon name="notifications-outline" size={30} color="black" />
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ borderBottomWidth: 0.2, flexDirection: "row", height: 70, justifyContent: 'center', alignItems: 'center', borderColor: "gray", backgroundColor: 'white' }}>
				<TextInput placeholder="Nhập Tên Đường..." style={{ height: 60, width: '65%', backgroundColor: '#d2d2d2', borderRadius: 10, fontSize: 24, marginRight: 5, marginBottom: 5 }}>

				</TextInput>
				<TouchableOpacity style={{ flexDirection: 'row', height: 60, width: 100, borderRadius: 10, backgroundColor: 'white', marginLeft: 5, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
					<RnIcon name="map-outline" size={25} color="black" />
					<Text style={{ fontSize: 18, marginLeft: 5, fontWeight: 'bold' }}>Bản đồ</Text>
				</TouchableOpacity>
			</View>
			<SafeAreaView style={{ flex: 1, width: '94%', marginLeft: '3%', borderRadius: 10, }}>
				<View style={{ backgroundColor: '#ececec' }}>
					<FlatList
						style={{ backgroundColor: '#ececec', }}
						data={product}
						renderItem={renderItem}
						keyExtractor={item => item._id?.toString()}
						showsVerticalScrollIndicator={false}
					/>
				</View>
			</SafeAreaView>
		</View>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: StatusBar.currentHeight || 0,
	},
});
