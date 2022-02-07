import React from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native'
import RnIcon from "react-native-vector-icons/Ionicons";
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';

export default function Other({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: '#ececec' }}>
			<View style={{ height: 60, flexDirection: 'row', backgroundColor: 'white' }}>
				<View style={{ flex:1,alignItems:'flex-start', justifyContent: 'center', marginLeft:20}}>
					<Text style={{ fontWeight: 'bold', fontSize: 28 }}>Khác</Text>
				</View>
				<View style={{ flex:1,flexDirection:'row-reverse'}}>
					<TouchableOpacity style={{ height: 42, width: 42, borderRadius: 42 / 2, backgroundColor: '#fff', marginRight: 15, marginVertical: 10, justifyContent: 'center', alignItems: 'center', elevation: 15, shadowColor: '0,0,0, .4', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { height: 1, width: 1 } }}>
						<RnIcon name="notifications-outline" size={28} color="black" />
					</TouchableOpacity>
					<TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={{ height: 42, width: 65, borderRadius: 50 / 2, backgroundColor: '#fff', marginHorizontal: 15, marginVertical: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', elevation: 5, shadowColor: '0,0,0, .4', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { height: 1, width: 1 } }}>
						<RnIcon1 name="ticket-confirmation-outline" size={28} color="orange" />
						<Text style={{ fontSize: 24, fontWeight: 'bold' }}> 4</Text>
					</TouchableOpacity>
				</View>
			</View>
			<ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10, width: '92%', marginHorizontal: 18 }}>
				<Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 5 }}>Tiện ích</Text>
				<TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 10, height: 100, marginBottom: 10, }}>
					<RnIcon style={{ flex:1, marginTop: 20, marginLeft: 20, }} name="receipt-outline" size={28} color="orange" />
					<Text style={{ flex:1, marginLeft: 20, fontSize: 22 }}>Lịch sử đơn hàng</Text>
				</TouchableOpacity>
				<View style={{ flexDirection: 'row', backgroundColor: '#ececec', marginBottom: 30, height: 100 }}>
					<TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10 }}>
						<RnIcon style={{ flex: 1, marginTop: 15, marginLeft: 15, }} name="musical-notes-outline" size={28} color="green" />
						<Text style={{ flex: 1, marginLeft: 15, fontSize: 20 }}>Nhạc đang phát</Text>
					</TouchableOpacity>
					<View style={{ width: 10, backgroundColor: '#ececec' }}></View>
					<TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10 }}>
						<RnIcon style={{ flex: 1,marginTop: 15, marginLeft: 15, }} name="settings-outline" size={28} color="purple" />
						<Text style={{	flex: 1,marginLeft: 15, fontSize: 20 }}>Điều khoản</Text>
					</TouchableOpacity>
				</View>
				<Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 5 }}>Hỗ trợ</Text>
				<View style={{ backgroundColor: '#ececec', marginBottom: 30, height: 130 }}>
					<TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 ,justifyContent:'center',alignItems:'center'}}>
						<RnIcon style={{flex: 2,marginLeft: 15, }} name="star-outline" size={25} color="black" />
						<Text style={{flex: 9, fontSize: 22 }}>Đánh giá đơn hàng</Text>
						<RnIcon style={{ flex: 1}} name="ios-chevron-forward" size={28} color="black" />
					</TouchableOpacity>
					<TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3, justifyContent:'center',alignItems:'center' }}>
						<RnIcon style={{flex: 2,marginLeft: 15 }} name="ios-chatbox-outline" size={25} color="black" />
						<Text style={{flex: 9, fontSize: 22 }}>Liên hệ góp ý</Text>
						<RnIcon style={{ flex: 1 }} name="ios-chevron-forward" size={28} color="black" />
					</TouchableOpacity>
				</View>
				<Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 5 }}>Tài khoản</Text>
				<View style={{ backgroundColor: '#ececec', marginBottom: 30, height: 260 }}>
					<TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 ,justifyContent:'center',alignItems:'center'}}>
						<RnIcon style={{flex: 2,marginLeft: 15, }} name="person-outline" size={25} color="black" />
						<Text style={{flex: 9, fontSize: 22 }}>Thông tin cá nhân</Text>
						<RnIcon style={{ flex: 1}} name="ios-chevron-forward" size={28} color="black" />
					</TouchableOpacity>
					<TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 ,justifyContent:'center',alignItems:'center'}}>
						<RnIcon style={{flex: 2,marginLeft: 15, }} name="bookmark-outline" size={25} color="black" />
						<Text style={{flex: 9, fontSize: 22 }}>Địa chỉ đã lưu</Text>
						<RnIcon style={{ flex: 1}} name="ios-chevron-forward" size={28} color="black" />
					</TouchableOpacity>
					<TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 ,justifyContent:'center',alignItems:'center'}}>
						<RnIcon style={{flex: 2,marginLeft: 15, }} name="settings-outline" size={25} color="black" />
						<Text style={{flex: 9, fontSize: 22 }}>Cài đặt</Text>
						<RnIcon style={{ flex: 1}} name="ios-chevron-forward" size={28} color="black" />
					</TouchableOpacity>
					<TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 ,justifyContent:'center',alignItems:'center'}}>
						<RnIcon style={{flex: 2,marginLeft: 15, }} name="log-out-outline" size={25} color="black" />
						<Text style={{flex: 9, fontSize: 22 }}>Đăng xuất</Text>
						<RnIcon style={{ flex: 1}} name="ios-chevron-forward" size={28} color="black" />
					</TouchableOpacity>
					
				</View>
			</ScrollView>
		</View>
	)
}
