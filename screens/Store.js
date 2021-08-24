import React from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Image, Dimensions, ScrollView, ViewBase, TextInput } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';

const DATA = [
	{
		id: '1',
		Image: 'https://ahamove.com/wp-content/uploads/2021/01/TCH-Hoa%CC%80ng-%C4%90a%CC%A3o-Thuy%CC%81-768x512.jpg',
		text: 'The Coffee House',
		date: ' Số 201 Minh Khai, quận Hai Bà Trưng, Hà Nội',
		gia: ''
	},
	{
		id: '2',
		Image: 'https://images.foody.vn/res/g80/790532/prof/s576x330/foody-upload-api-foody-mobile-1-jpg-181026095823.jpg',
		text: 'The Coffee House',
		date: 'Số 40, phố Xuân La, Tây Hồ, Hà Nội',
		gia: ''
	},
	{
		id: '3',
		Image: 'https://the7.vn/wp-content/uploads/2021/01/the7a-1200x800.jpg',
		text: 'The Coffee House',
		date: '60 Vũ Phạm Hàm, Cầu Giấy, Hà Nội',
		gia: ''
	},
	{
		id: '4',
		Image: 'https://cafebiz.cafebizcdn.vn/thumb_w/600/2020/3/11/tch-15839274229471306654924-crop-15839274339272101041463.jpg',
		text: 'The Coffee House',
		date: 'Số 3 Trung Hòa, Cầu Giấy, Hà Nội',
		gia: ''
	},
	{
		id: '5',
		Image: 'https://file.hstatic.net/1000075078/file/3e0a8783_master.jpg',
		text: 'The Coffee House',
		date: 'Số 72 Trần Nguyên Đán,Hoàng Mai,Hà Nội',
		gia: ''
	},
	{
		id: '6',
		Image: 'https://file.hstatic.net/1000075078/file/cao_thang_2_-_img_3673_d548c287ffe549a6b1aff86d8bf8f9e1_1024x1024.jpg',
		text: 'The Coffee House',
		date: 'Số 01 Thái Hà, Đống Đa, Hà Nội',
		gia: ''
	},
	{
		id: '7',
		Image: 'https://image.bnews.vn/MediaUpload/Org/2021/01/23/the-coffee-house2.jpg',
		text: 'The Coffee House',
		date: 'Số 30 phố Hào Nam, Đống Đa, Hà Nội',
		gia: ''
	},
	{
		id: '8',
		Image: 'https://danviet.mediacdn.vn/2021/4/13/the-coffee-house-khong-nhuong-nguyen-1618324271848672760365-crop-1618324294521246672359.jpg',
		text: 'The Coffee House',
		date: 'Số 17T3 Hoàng Đạo Thuý, Trung Hoà, Cầu Giấy, Hà Nội',
		gia: ''
	},
	{
		id: '9',
		Image: 'https://www.kinhnghiemkinhdoanh.org/wp-content/uploads/2020/01/Kinhnghiemkinhdoanh.org-the-coffee-house-phat-trien-thuong-hieu-nho-vao-customer-insight-k7-2.jpg',
		text: 'The Coffee House',
		date: '23M Hai Bà Trưng, Hà Nội ',
		gia: ''
	},
	{
		id: '10',
		Image: 'https://www.kinhnghiemkinhdoanh.org/wp-content/uploads/2020/01/Kinhnghiemkinhdoanh.org-the-coffee-house-phat-trien-thuong-hieu-nho-vao-customer-insight-k7-1.jpg',
		text: 'The Coffee House',
		date: '122 Bùi Thị Xuân, Hà Nội',
		gia: ''
	},
];

export default function Store({ navigation }) {

	const { height, width } = Dimensions.get('window');
	const itemWidth = (width - 15) / 2;

	const renderItem = ({ item }) => (
		<View style={{ flex: 1, margin: 5, flexDirection: 'row', borderRadius: 10, backgroundColor: 'white', padding: 10, }}>
			<Image
				style={{ height: 120, width: '30%', borderRadius: 10 }}
				source={{ uri: item.Image }}
			/>
			<View style={{ width: '60%', marginLeft: 15 }}>
				<Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>{item.text}</Text>
				<Text style={{ fontSize: 18, marginTop: 2 }}>{item.date}</Text>
				<Text style={{ fontSize: 18, marginTop: 2 }}>{item.gia}</Text>
			</View>
		</View>
	);
	return (
		<View style={{ flex: 1, backgroundColor: '#ececec' }}>
			<View style={{ height: 70, flexDirection: 'row-reverse', backgroundColor: 'white' }}>

				<TouchableOpacity style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: '#fff', marginRight: 15, marginVertical: 10, justifyContent: 'center', alignItems: 'center', elevation: 15, shadowColor: '0,0,0, .4', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { height: 1, width: 1 } }}>
					<RnIcon name="notifications-outline" size={30} color="black" />

				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={{ height: 50, width: 80, borderRadius: 50 / 2, backgroundColor: '#fff', marginHorizontal: 15, marginVertical: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', elevation: 5, shadowColor: '0,0,0, .4', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { height: 1, width: 1 } }}>
					<RnIcon1 name="ticket-confirmation-outline" size={30} color="orange" />
					<Text style={{ fontSize: 24, fontWeight: 'bold' }}> 4</Text>
				</TouchableOpacity>
				<View style={{ justifyContent: "center", alignItems: 'center', marginRight: 100 }}>
					<Text style={{ fontWeight: 'bold', fontSize: 30 }}>Cửa Hàng</Text>
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
						data={DATA}
						renderItem={renderItem}
						keyExtractor={item => item.id}
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
