import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, Image, RefreshControl } from 'react-native'

import axios from 'axios';
import Modal from 'react-native-modal'
import { useSelector, useDispatch } from "react-redux";
import { getImage } from './utils/index';;
import { getProductList } from './services/Api';

import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5';

export default function Product({ navigation }) {
    
    //modal
    const [isVisible, setIsVisible] = useState(false)
    const onOpenModal = () => {
        setIsVisible(true)
    }
    const onCloseModal = () => {
        setIsVisible(false)
    }

    // redux
    const dispatch = useDispatch();
    const onAddToBag = (item) => () => {
        dispatch({ type: 'ADD_CART', data: { ...item, quantity: 1 } })
    }
    const onAddToWishlist = (item) => () => {
        dispatch({ type: 'ADD_CART_WL', data: { ...item, quantity: 1 } })
    }
    const onMoveToDetail = (data) => () => {
        navigation.navigate('Detail', { detail: data })
    }

    //refresh
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setProduct();
        wait(2000).then(() => setRefreshing(false));
    }, []);

    //call api
    const [product, setProduct] = useState([])
    useEffect(() => {
        const callGetProductList = async () => {
            try {
                const response = await getProductList();
                setProduct(response.data.data)
            } catch (error) {
                console.error(error);
            }
        }
        callGetProductList()
    }, [refreshing])

    //render item
    const renderItem = ({ item }) => (
        <View style={{ flex: 1, }}>
            <TouchableOpacity onPress={onMoveToDetail(item)} style={styles.itemButton}>
                <Image
                    style={{ height: 100, flex: 3, borderRadius: 10 }}
                    source={{ uri: item.image }}
                />
                <View style={{ flex: 6, marginLeft: 10 }}>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={styles.itemTitle}>{item.product_name}</Text>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={styles.itemDescription}>{item.description}</Text>
                    <Text style={{ fontSize: 16, marginTop: 2 }}>Giá: {item.price}đ</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'column-reverse' }}>
                    <TouchableOpacity onPress={onAddToBag(item)} style={styles.buttonAdd}>
                        <RnIcon name="add-outline" size={28} color="white" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#f5f5ef' }}>
            <View style={styles.header}>
                <View style={styles.headerTitle}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22 }}>Giao Hàng</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'row-reverse' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Bag')} style={styles.button}>
                        <RnIcon2 name="shopping-bag-1" size={22} color="black" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Wishlist')} style={styles.button}>
                        <RnIcon name="heart" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <FlatList
                    style={{ backgroundColor: '#f5f5ef', minHeight: 300 }}
                    data={product}
                    renderItem={renderItem}
                    keyExtractor={item => item._id?.toString()}
                    showsVerticalScrollIndicator={false}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />
            </View>
            {/* <Modal
				testID={'modal'}
				isVisible={isVisible}
				onSwipeComplete={onCloseModal}
				swipeDirection={['up', 'left', 'right', 'down']}
				style={{ justifyContent: 'flex-end', margin: 0 }}
			>
				<View style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', height: 700 }}>
					<TouchableOpacity onPress={onCloseModal} style={{ position: 'absolute', top: 0, right: 0 }}>
						<RnIcon name="close" size={50} color="black" />
					</TouchableOpacity>
					<Text style={{ fontSize: 20 }}>Bộ sưu tập quà tặng</Text>
				</View>
			</Modal> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    //header
    header: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderBottomWidth: 2,
        borderColor: '#f5f5ef'
    },
    headerTitle: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: 20
    },
    button: {
        height: 36,
        width: 36,
        borderRadius: 36 / 2,
        backgroundColor: '#fff',
        marginRight: 10, marginVertical: 8,
        justifyContent: 'center', alignItems: 'center',
        elevation: 15, shadowColor: '0,0,0, .4', shadowRadius: 1,
        shadowOpacity: 1,
        shadowOffset: { height: 1, width: 1 }
    },
    //item
    itemButton: {
        marginVertical: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        borderRadius: 8,
        backgroundColor: 'white',
        padding: 10,
        width: '95%',
        marginRight: 10
    },
    buttonAdd: { 
        height: 36, 
        width: 36, 
        borderRadius: 36 / 2, 
        backgroundColor: '#fff700', 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    itemTitle: { 
        width: '85%', 
        fontSize: 16, 
        marginTop: 10, 
        fontWeight: 'bold' 
    },
    itemDescription: { 
        width: '85%', 
        fontSize: 16, 
        marginTop: 2 
    },
});
