import React from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Image, ScrollView, ViewBase } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5';
import Swiper from 'react-native-swiper';


import Other from '../screens/Other'
import Order from '../screens/Order'
import Store from '../screens/Store'
import Ticket from '../screens/Ticket'
import Wishlist from '../screens/SonOfOrder/Wishlist'
import Detail from '../screens/SonOfOrder/Detail'
import storeDetail from '../screens/SonOfOrder/storeDetail'
import Bag from '../screens/SonOfOrder/Bag'
import Login from '../screens/Login'
import Home from '../screens/Home'

const HomeStack = createNativeStackNavigator();
const OrderStack = createNativeStackNavigator();
const StoreStack = createNativeStackNavigator();
const OtherStack = createNativeStackNavigator();
const Tap = createBottomTabNavigator();

function OrderStackScreen() {
	return (
		<OrderStack.Navigator screenOptions={{ headerShown: false }}>
			<OrderStack.Screen name="Order" component={Order} />
			<OrderStack.Screen name="Wishlist" component={Wishlist} />
			<OrderStack.Screen name="Detail" component={Detail} />
			<OrderStack.Screen name="Bag" component={Bag} />
		</OrderStack.Navigator>
	);
}

function OtherStackScreen() {
	return (
		<OtherStack.Navigator screenOptions={{ headerShown: false }}>
			<OtherStack.Screen name="Other" component={Other} />
			<OtherStack.Screen name="Ticket" component={Ticket} />
			<OtherStack.Screen name="Login" component={Login} />
		</OtherStack.Navigator>
	);
}

function HomeStackScreen() {
	return (
		<HomeStack.Navigator screenOptions={{ headerShown: false }}>
			<HomeStack.Screen name="Home" component={Home} />
			<HomeStack.Screen name="Order" component={Order} />
			<HomeStack.Screen name="Bag" component={Bag} />
			<HomeStack.Screen name="Ticket" component={Ticket} />
		</HomeStack.Navigator>
	);
}

function StoreStackScreen() {
	return (
		<StoreStack.Navigator screenOptions={{ headerShown: false }}>
			<StoreStack.Screen name="Store" component={Store} />
			<StoreStack.Screen name="Ticket" component={Ticket} />
			<StoreStack.Screen name="storeDetail" component={storeDetail} />
		</StoreStack.Navigator>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Tap.Navigator
				initialRouteName='Trang Chủ'
				screenOptions={({ route }) => ({
					tabBarStyle: { height: 60, padding: 8 },
					tabBarLabelStyle: { fontSize: 10, fontWeight: '700',marginBottom:5},
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;
						if (route.name === 'Trang Chủ') {
							iconName = focused ? 'home-variant' : 'home-variant-outline';
						} else if (route.name === 'Đặt Hàng') {
							iconName = focused ? 'coffee' : 'coffee-outline';
						}
						else if (route.name === 'Cửa Hàng') {
							iconName = focused ? 'storefront' : 'storefront-outline';
						}
						else if (route.name === 'Tích Điểm') {
							iconName = focused ? 'ticket-confirmation' : 'ticket-confirmation-outline';
						}
						else if (route.name === 'Khác') {
							iconName = focused ? 'format-list-bulleted' : 'format-list-bulleted';
						}
						return <RnIcon1 name={iconName} size={28} color={color} />;
					},
					tabBarActiveTintColor: '#ffb21a',
					tabBarInactiveTintColor: '#b3b3b3',
					headerShown: false,
				})}
			>
				<Tap.Screen name="Trang Chủ" component={HomeStackScreen} />
				<Tap.Screen name="Đặt Hàng" component={OrderStackScreen} />
				<Tap.Screen name="Cửa Hàng" component={StoreStackScreen} />
				<Tap.Screen name="Tích Điểm" component={Ticket} />
				<Tap.Screen name="Khác" component={OtherStackScreen} />
			</Tap.Navigator>
		</NavigationContainer>
	)
}
