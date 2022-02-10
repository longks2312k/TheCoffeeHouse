import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Image, Dimensions, ScrollView, ViewBase, TextInput } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';

import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5';

import { useSelector, useDispatch } from "react-redux";

// import RadioGroup from 'react-native-radio-buttons-group';

// const radioButtonsData = [
//   {
//     id: '1',
//     label: 'Vừa',
//     value: 'option1',
//     color: 'red',
//     selected: false,
// 	sizePrice: 6000,
//   },
//   {
//     id: '2',
//     label: 'Lớn',
//     value: 'option2',
//     color: 'red',
//     selected: true,
// 	sizePrice: 10000,
//   },
// ];

export default function Bag({ navigation }) {

	// total
	const [size,setSize] = useState(6000)
	const productList = useSelector((store) => store.cartReducer.products);
	function TotalPrice(price, tonggia) {
		return Number(price * tonggia).toLocaleString('en-US');
	}
	const totalMoney = productList.reduce((acc, ele) => acc + Number(ele.price + size) * ele.quantity , 0)
	const totalItem = productList.reduce((acc, ele) => acc + ele.quantity, 0)

	// const [radioButtons, setRadioButtons] = useState(radioButtonsData);

	// const onPressRadioButton = radioButtonsArray => {
	//   console.log(radioButtonsArray);
	//   setRadioButtons(radioButtonsArray);
	//   setSize(radioButtonsArray[1].sizePrice);
	// };

	// redux
	const dispatch = useDispatch();
	const onRemoveItem = (item) => () => {
		dispatch({ type: 'REMOVE_CART', data: item })
	}
	const onRemoveAll = () => {
		dispatch({ type: 'REMOVE_ALL' })
	}
	const onChangeQuantity = (type, item) => () => {
		if (type === 'reduce' && item.quantity === 1) {
			dispatch({ type: 'REMOVE_CART', data: item })
		} else {
			dispatch({ type: 'CHANGE_QUANTITY', data: item, changeQuantityType: type })
		}
	}

	// render
	const renderItem = ({ item }) => {
		return (
			<View style={styles.viewItem}>
				<Image
					style={{ height: 100, flex:3, borderRadius: 5 }}
					source={{ uri: item.image }}
				/>
				<View style={{ flex:5.8,}}>
					<Text ellipsizeMode='tail' numberOfLines={1} style={styles.itemTitle}>{item.product_name}</Text>
					<Text style={{ fontSize: 20, marginTop: 5, marginLeft: 10, }}>Giá: {TotalPrice(item.price, item.quantity)}</Text>
					<View style={{ flexDirection: 'row', marginLeft: 10, }}>
						<TouchableOpacity onPress={onChangeQuantity('reduce', item)} style={styles.buttonItemBack}>
							<RnIcon name="caret-back-outline" size={25} color="black" style={{ marginRight: 3 }} />
						</TouchableOpacity>
						<Text style={{ marginLeft: 10, fontSize: 20, marginTop: 8 }}>{item.quantity}</Text>
						<TouchableOpacity onPress={onChangeQuantity('increase', item)} style={styles.buttonItemForward}>
							<RnIcon name="caret-forward-outline" size={25} color="black" style={{ marginLeft: 3 }} />
						</TouchableOpacity>
					</View>
					{/* <RadioGroup
						radioButtons={radioButtons}
						onPress={onPressRadioButton}
						layout="row"
					/> */}
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
		<View style={{ flex: 1, backgroundColor: '#f5f5ef' }}>
			<View style={styles.headerView}>
				<Text style={{ fontSize: 22, fontWeight: 'bold', marginLeft: 10 }}>Your Bag</Text>
			</View>
			<TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.buttonBack}>
				<RnIcon name="chevron-back-outline" size={36} color="black" />
			</TouchableOpacity>
			<SafeAreaView style={{ flex: 1 }}>
				<View style={{flex: 5}}>
					<FlatList
						style={{ backgroundColor: '#ececec' }}
						data={productList}
						renderItem={renderItem}
						keyExtractor={item => item._id?.toString()}
						showsVerticalScrollIndicator={false}
						ListFooterComponent={
							<View>
								{productList?.length ?
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
				<View style={{flex: 1}}>
					{productList?.length ? <View style={styles.viewTotal}>
						<View style={styles.view1}>
							<Text style={{ fontSize: 22, fontWeight: 'bold' }}>Total item: </Text>
							<Text style={{ fontSize: 22, fontWeight: 'bold' }}>{totalItem}</Text>
						</View>
						<View style={styles.view2}>
							<Text style={{ fontSize: 22, fontWeight: 'bold' }}>Total money: </Text>
							<Text style={{ fontSize: 22, fontWeight: 'bold' }}>{totalMoney}đ</Text>
						</View>
					</View> : null}
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
	//
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
	view1: { 
		flexDirection: 'row', 
		justifyContent: 'space-between' 
	},
	view2:{ 
		flexDirection: 'row', 
		justifyContent: 'space-between', 
		marginTop: 10 
	},
	viewTotal: { 
		height: '100%', 
		paddingHorizontal: 15, 
		paddingVertical: 15, 
		borderTopWidth: 0.5, 
		borderColor: '#ececec', 
		backgroundColor: 'white' 
	},
	//render
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
		fontSize: 24, 
		marginLeft: 10, 
		fontWeight: 'bold' 
	},
	buttonItemBack: { 
		marginLeft: 0, 
		height: 36, 
		width: 36, 
		borderRadius: 36 / 2, 
		backgroundColor: '#ececec', 
		marginRight: 5, 
		marginTop: 5, 
		justifyContent: 'center', 
		alignItems: 'center', 
	},
	buttonItemForward: { 
		marginLeft: 15, 
		height: 36, 
		width: 36, 
		borderRadius: 36 / 2, 
		backgroundColor: '#ececec', 
		marginRight: 5, 
		marginTop: 5, 
		justifyContent: 'center', 
		alignItems: 'center', 
	},
	buttonDelete: {
		flex:1.2, 
		width: '10%', 
		justifyContent: 'center', 
		alignItems: 'center' 
	},
});
