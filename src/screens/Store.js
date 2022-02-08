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
			<TouchableOpacity onPress={onMoveToDetail(item)} style={{ flex: 1, margin: 5, flexDirection: 'row', borderRadius: 5, backgroundColor: 'white', padding: 10, }}>
				<Image
					style={{ flex:1, height: 100, borderRadius: 5 ,margin:5}}
					source={{ uri: getImage(item.image_1) }}
				/>
				<View style={{ flex:2, marginLeft: 10 }}>
					<Text ellipsizeMode='tail' numberOfLines={1} style={{ fontSize: 14, marginTop: 5, fontWeight: 'bold' }}>{item.name}</Text>
					<Text ellipsizeMode='tail' numberOfLines={1} style={{ fontSize: 14, marginTop: 2 }}>{item.street}</Text>
					<Text style={{ fontSize: 14, }}>Thời Gian HĐ:{item.opening_time}-{item.closing_time}</Text>
					<Text style={{ fontSize: 14, }}>SĐT: {item.phone}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
	return (
		<View style={{ flex: 1, backgroundColor: '#f5f5ef' }}>
			<View style={{ height: 50, flexDirection: 'row', backgroundColor: 'white' }}>
				<View style={{ flex:1,alignItems:'flex-start', justifyContent: 'center', marginLeft:20}}>
					<Text style={{ fontWeight: 'bold', fontSize: 22 }}>Cửa Hàng</Text>
				</View>
				<View style={{ flex:1,flexDirection:'row-reverse'}}>
					<TouchableOpacity style={{ height: 36, width: 36, borderRadius: 36 / 2, backgroundColor: '#fff', marginRight: 15, marginVertical: 8, justifyContent: 'center', alignItems: 'center', elevation: 15, shadowColor: '0,0,0, .4', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { height: 1, width: 1 } }}>
						<RnIcon name="notifications-outline" size={22} color="black" />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={{ height: 36, width: 65, borderRadius: 50 / 2, backgroundColor: '#fff', marginHorizontal: 15, marginVertical: 8, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', elevation: 5, shadowColor: '0,0,0, .4', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { height: 1, width: 1 } }}>
						<RnIcon1 name="ticket-confirmation-outline" size={24} color="orange" />
						<Text style={{ fontSize: 16, fontWeight: 'bold' }}> 4</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={{ borderBottomWidth: 0.2, flexDirection: "row", height: 70, justifyContent: 'center', alignItems: 'center', borderColor: "gray", backgroundColor: 'white' }}>
				<TextInput 
				  placeholder="Nhập địa chỉ cần tìm"
				  clearTextOnFocus={true}
				  style={{ height: 50, width: '65%', backgroundColor: '#ececec', borderRadius: 5, fontSize: 18,}}
				/>
				<TouchableOpacity style={{ flexDirection: 'row', height: 60, width: 100, borderRadius: 10, backgroundColor: 'white', marginLeft: 5, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
					<RnIcon name="map-outline" size={25} color="black" />
					<Text style={{ fontSize: 16, marginLeft: 5, fontWeight: '500' }}>Bản đồ</Text>
				</TouchableOpacity>
			</View>
			<SafeAreaView style={{ flex: 1, width: '94%', marginLeft: '3%', borderRadius: 10, }}>
				{/* {isLoading && <Loading />} */}
				<View style={{ backgroundColor: '#f5f5ef' }}>
					<FlatList
						style={{ backgroundColor: '#f5f5ef', }}
						data={product}
						renderItem={renderItem}
						keyExtractor={item => item.id?.toString()}
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
