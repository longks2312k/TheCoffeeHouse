import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native'
import RnIcon from "react-native-vector-icons/Ionicons";
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';

export default function Other({ navigation }) {
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
				<View style={{ alignItems: 'center', justifyContent: 'center', marginRight: 180 }}>
					<Text style={{ fontWeight: 'bold', fontSize: 28 }}>Khác</Text>
				</View>
			</View>
			<ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10, width: '92%', marginHorizontal: 18 }}>
				<Text style={{ fontWeight: 'bold', fontSize: 28, marginBottom: 5 }}>Tiện ích</Text>
				<TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 10, height: 120, marginBottom: 10, }}>
					<RnIcon style={{ marginTop: 10, marginLeft: 15, }} name="receipt-outline" size={40} color="orange" />
					<Text style={{ marginTop: 10, marginLeft: 15, fontSize: 24 }}>Lịch sử đơn hàng</Text>
				</TouchableOpacity>
				<View style={{ flexDirection: 'row', backgroundColor: '#ececec', marginBottom: 30, height: 120 }}>
					<TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10 }}>
						<RnIcon style={{ marginTop: 15, marginLeft: 15, }} name="musical-notes-outline" size={40} color="green" />
						<Text style={{ marginTop: 10, marginLeft: 15, fontSize: 24 }}>Nhạc đang phát</Text>
					</TouchableOpacity>
					<View style={{ width: 10, backgroundColor: '#ececec' }}></View>
					<TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10 }}>
						<RnIcon style={{ marginTop: 15, marginLeft: 20, }} name="settings-outline" size={40} color="purple" />
						<Text style={{ marginTop: 10, marginLeft: 20, fontSize: 24 }}>Điều khoản</Text>
					</TouchableOpacity>
				</View>
				<Text style={{ fontWeight: 'bold', fontSize: 28, marginBottom: 5 }}>Hỗ trợ</Text>
				<View style={{ backgroundColor: '#ececec', marginBottom: 30, height: 140 }}>
					<TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 }}>
						<RnIcon style={{ marginTop: 20, marginLeft: 15, }} name="star-outline" size={25} color="black" />
						<Text style={{ marginTop: 18, marginLeft: 15, fontSize: 24 }}>Đánh giá đơn hàng</Text>
						<RnIcon style={{ marginTop: 20, marginLeft: 110, }} name="ios-chevron-forward" size={30} color="black" />
					</TouchableOpacity>
					<TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 }}>
						<RnIcon style={{ marginTop: 20, marginLeft: 15, }} name="ios-chatbox-outline" size={25} color="black" />
						<Text style={{ marginTop: 18, marginLeft: 15, fontSize: 24 }}>Liên hệ góp ý</Text>
						<RnIcon style={{ marginTop: 20, marginLeft: 169, }} name="ios-chevron-forward" size={30} color="black" />
					</TouchableOpacity>
				</View>
				<Text style={{ fontWeight: 'bold', fontSize: 28, marginBottom: 5 }}>Tài khoản</Text>
				<View style={{ backgroundColor: '#ececec', marginBottom: 30, height: 280 }}>
					<TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 }}>
						<RnIcon style={{ marginTop: 20, marginLeft: 15, }} name="person-outline" size={25} color="black" />
						<Text style={{ marginTop: 18, marginLeft: 15, fontSize: 24 }}>Thông tin cá nhân</Text>
						<RnIcon style={{ marginTop: 20, marginLeft: 121, }} name="ios-chevron-forward" size={30} color="black" />
					</TouchableOpacity>
					<TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 }}>
						<RnIcon style={{ marginTop: 20, marginLeft: 15, }} name="bookmark-outline" size={25} color="black" />
						<Text style={{ marginTop: 18, marginLeft: 15, fontSize: 24 }}>Địa chỉ đã lưu</Text>
						<RnIcon style={{ marginTop: 20, marginLeft: 165, }} name="ios-chevron-forward" size={30} color="black" />
					</TouchableOpacity>
					<TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 }}>
						<RnIcon style={{ marginTop: 20, marginLeft: 15, }} name="settings-outline" size={25} color="black" />
						<Text style={{ marginTop: 18, marginLeft: 15, fontSize: 24 }}>Cài đặt</Text>
						<RnIcon style={{ marginTop: 20, marginLeft: 234, }} name="ios-chevron-forward" size={30} color="black" />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 }}>
						<RnIcon style={{ marginTop: 20, marginLeft: 15, }} name="log-out-outline" size={25} color="black" />
						<Text style={{ marginTop: 18, marginLeft: 15, fontSize: 24 }}>Đăng xuất</Text>
						<RnIcon style={{ marginTop: 20, marginLeft: 200, }} name="ios-chevron-forward" size={30} color="black" />
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	)
}
