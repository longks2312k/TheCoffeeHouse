import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Image, Dimensions, ScrollView, ViewBase, TextInput, RefreshControl } from 'react-native'

import axios from 'axios';
import { getProductList } from '../../screens/services/Api';
import { useSelector, useDispatch } from "react-redux";

import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
export default function OrderFlatList({ navigation }) {
    const [product, setProduct] = useState([])
    const dispatch = useDispatch();
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setProduct();
        wait(2000).then(() => setRefreshing(false));
    }, []);

    const onAddToBag = (item) => () => {
        dispatch({ type: 'ADD_CART', data: { ...item, quantity: 1 } })
    }

    const onAddToWishlist = (item) => () => {
        dispatch({ type: 'ADD_CART_WL', data: { ...item, quantity: 1 } })
    }

    useEffect(() => {

        const callGetProductList = async () => {
            try {
                const response = await getProductList();
                // console.log('data',cat)
                setProduct(response.data.data)

            } catch (error) {
                console.error(error);
            }
        }

        callGetProductList()
    }, [refreshing])
    const onMoveToDetail = (data) => () => {
        navigation.navigate('Detail', { detail: data })
    }

    const renderItem = ({ item }) => (
        <View style={{ flex: 1, }}>
            <TouchableOpacity onPress={onMoveToDetail(item)} style={{ marginVertical: 5, marginHorizontal: 10, flexDirection: 'row', borderRadius: 8, backgroundColor: 'white', padding: 10, width: '95%', marginRight: 10 }}>
                <Image
                    style={{ height: 100, flex: 3, borderRadius: 10 }}
                    source={{ uri: item.image }}
                />
                <View style={{ flex: 6, marginLeft: 10 }}>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={{ width: '85%', fontSize: 16, marginTop: 10, fontWeight: 'bold' }}>{item.product_name}</Text>
                    <Text ellipsizeMode='tail' numberOfLines={1} style={{ width: '85%', fontSize: 16, marginTop: 2 }}>{item.description}</Text>
                    <Text style={{ fontSize: 16, marginTop: 2 }}>Giá: {item.price}đ</Text>
                </View>
                <View style={{ flex: 1, flexDirection: 'column-reverse' }}>
                    <TouchableOpacity onPress={onAddToBag(item)} style={{ height: 36, width: 36, borderRadius: 36 / 2, backgroundColor: '#fff700', justifyContent: 'center', alignItems: 'center' }}>
                        <RnIcon name="add-outline" size={28} color="white" />
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>

    );
    return (
        <View style={{ flex: 1 }}>
            {/* {isLoading && <Loading />} */}
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
    )
}