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
		<View style={{flex:1, justifyContent: 'center', alignItems: 'center' }}>
			<View style={{ height: 60, flexDirection: 'row', backgroundColor: 'white',marginTop:60}}>
				<View style={{ flex:1,alignItems:'flex-start', justifyContent: 'center', marginLeft:20}}>
					<Text style={{ fontWeight: 'bold', fontSize: 28 }}>Tích Điểm</Text>
				</View>
				<View style={{ flex:1,flexDirection:'row-reverse'}}>
					<TouchableOpacity style={{ height: 42, width: 42, borderRadius: 42 / 2, backgroundColor: '#fff', marginRight: 15, marginVertical: 10, justifyContent: 'center', alignItems: 'center', elevation: 15, shadowColor: '0,0,0, .4', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { height: 1, width: 1 } }}>
						<RnIcon name="notifications-outline" size={28} color="black" />
					</TouchableOpacity>
				</View>
			</View>
			<View>
				<TichDiem/>
			</View>
		</View>
	)
}
