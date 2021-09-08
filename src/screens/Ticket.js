import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5';

import DoiUuDai from './SonofTicket/DoiUuDai'
import TichDiem from './SonofTicket/TichDiem';

export default function Ticket() {
	return (
		<View style={{ justifyContent: 'center', alignItems: 'center' }}>
			<View style={{ height: 70, marginTop: 130, flexDirection: 'row-reverse', backgroundColor: 'white' }}>

				<TouchableOpacity style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: '#fff', marginRight: 15, marginVertical: 10, justifyContent: 'center', alignItems: 'center', elevation: 15, shadowColor: '0,0,0, .4', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { height: 1, width: 1 } }}>
					<RnIcon name="notifications-outline" size={30} color="black" />

				</TouchableOpacity>
				<View style={{ justifyContent: "center", alignItems: 'center', marginRight: 220, marginLeft: 10 }}>
					<Text style={{ fontWeight: 'bold', fontSize: 30 }}>Tích Điểm</Text>
				</View>
			</View>
			<View style={{ height: 55, width: '100%', backgroundColor: 'white' }}>
				<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
					<TouchableOpacity style={{ height: 42, width: '48%', backgroundColor: '#ececec', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
						<Text style={{ fontSize: 18 }}>Tích Điểm</Text>
					</TouchableOpacity>
					<TouchableOpacity style={{ height: 42, width: '48%', backgroundColor: '#ececec', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
						<Text style={{ fontSize: 18 }}>Đổi Ưu Đãi</Text>
					</TouchableOpacity>
				</View>
			</View>
			<TichDiem/>
		</View>
	)
}
