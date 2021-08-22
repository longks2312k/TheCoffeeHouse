import React from 'react'
import { View, Text } from 'react-native'

export default function endowChange() {
    return (
        <View>
            <View style={{ height: 60, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Trang Chủ');
					}}
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
					<RnIcon name="home-outline" size={30} color="black" />
					<Text style={{ fontWeight: 'bold' }}>Trang Chủ</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Đặt Hàng');
					}}
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
					<RnIcon name="fast-food-outline" size={30} color="black" />
					<Text style={{ fontWeight: 'bold' }}>Đặt Hàng</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Cửa Hàng');
					}}
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
					<RnIcon1 name="storefront-outline" size={30} color="black" />
					<Text style={{ fontWeight: 'bold', color: 'black' }}>Cửa Hàng</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Tích Điểm');
					}}
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
					<RnIcon1 name="ticket-confirmation-outline" size={30} color="black" />
					<Text style={{ fontWeight: 'bold' }}>Tích Điểm</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate('Khác');
					}}
					style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
					<RnIcon name="list-outline" size={30} color="black" />
					<Text style={{ fontWeight: 'bold' }}>Khác</Text>
				</TouchableOpacity>
			</View>
        </View>
    )
}
