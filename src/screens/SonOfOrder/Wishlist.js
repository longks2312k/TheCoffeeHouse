import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Image, Dimensions, ScrollView, ViewBase, TextInput } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5';

import { useSelector, useDispatch } from "react-redux";


export default function Wishlist({navigation}) {

	const dispatch = useDispatch();
	const productWishlist = useSelector((store) => store.wishlistReducer.products);
	const onRemoveItem = (item) => () => {
		dispatch({ type: 'REMOVE_CART_WL', data: item })
	}
	const onRemoveAll =  () => {
		dispatch({ type: 'REMOVE_ALL' })
	}

	const renderItem = ({ item }) => {
		return (
			<View style={styles.viewItem}>
				<Image
					style={{ height: 100, flex:3, borderRadius: 5 }}
					source={{ uri: item.image }}
				/>
				<View style={{ flex:5.8,}}>
					<Text ellipsizeMode='tail' numberOfLines={1} style={styles.itemTitle}>{item.product_name}</Text>
					<Text style={{ fontSize: 20, marginTop: 5, marginLeft: 10, }}>Giá: {item.price}</Text>
				</View>
				<View style={styles.buttonDelete}>
					<TouchableOpacity onPress={onRemoveItem(item)} style={{}}>
						<RnIcon name="close-outline" size={40} color="black" />
					</TouchableOpacity>
				</View>
			</View>
		);
	};

	return (
		<View style={{ flex: 1, backgroundColor: '#ececec' }}>
			<View style={styles.headerView}>
				<Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 10 }}>WishList</Text>
			</View>
			<TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.buttonBack}>
				<RnIcon name="chevron-back-outline" size={36} color="black" />
			</TouchableOpacity>
			<SafeAreaView style={{ flex: 1 }}>
				<View>
					<FlatList
						style={{ backgroundColor: '#ececec', }}
						data={productWishlist}
						renderItem={renderItem}
						keyExtractor={item => item._id?.toString()}
						showsVerticalScrollIndicator={false}
						ListFooterComponent={
							<View>
								{productWishlist?.length ?
									<TouchableOpacity onPress={onRemoveAll} style={styles.buttonRemove}>
										<View style={styles.viewRemove}>
											<RnIcon name="trash-outline" size={32} color="black" />
											<Text style={{ fontSize: 24, marginLeft: 10}}>Remove All</Text>
										</View>
									</TouchableOpacity> : null}
							</View>
						}
					/>
				</View>
			</SafeAreaView>
		</View>
	)
}

const styles = StyleSheet.create({
   // header
	headerView: { 
		height: 50, 
		flexDirection: 'row', 
		backgroundColor: 'white' ,
		justifyContent:'center',
		alignItems:'center'
	},
	buttonBack: { 
		position: 'absolute', 
		left: 0, 
		top: 5 
	},
	buttonRemove: { 
		marginHorizontal: 50, 
		backgroundColor: '#ff8c70', 
		marginVertical: 10, 
		justifyContent: 'center', 
		alignItems: 'center', 
		height: 50, 
		borderRadius: 25 
	},
	viewRemove: { 
		flexDirection: 'row', 
		justifyContent: 'center', 
		alignItems: 'center' 
	},
	// render
	viewItem: { 
		flex: 1, 
		marginVertical: 5,
		marginHorizontal:10, 
		flexDirection: 'row', 
		borderRadius: 8, 
		backgroundColor: 'white', 
		padding: 10, 
		width: '95%', 
		marginRight: 10 
	},
	itemTitle: { 
		width:'85%',
		fontSize: 20, 
		marginLeft: 10, 
		fontWeight: 'bold' 
	},
	buttonDelete: {
		flex:1.2, 
		width: '10%', 
		justifyContent: 'center', 
		alignItems: 'center' 
	},
});
