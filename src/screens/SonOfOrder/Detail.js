import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5';

import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from '../services/Api'  


export default function DetailScreen({ route, navigation }) {
  const dispatch = useDispatch();
  const [detailProduct, setDetailProduct] = useState()
  const { detail } = route.params; 

  console.tron.log('detail', detail)

  //const productDetail = useSelector((store) => store.productReducer.productDetail);
  useEffect(() => {
    const callGetProductList = async () => {
      try {
        const response = await getProductDetail(detail?._id);
        setDetailProduct(response.data.data)

      } catch (error) {
        console.error(error);
      }
    }

    callGetProductList()
  }, [detail])

  //const onAddCart = () => dispatch({ type: 'ADD_QUANTITY', data: item })
  // const onAddCart = () => {
  //   dispatch({ type: 'ADD_CART', detail: detail })
  // }

  return (
    <View>
      <Image
					style={{ height: 120, width: '30%', borderRadius: 10 }}
					source={{ uri: detailProduct?.image }}
				/>
				<View style={{ width: '60%', marginRight: 30 }}>
					<Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>{detailProduct?.product_name}</Text>
					<Text ellipsizeMode='tail' numberOfLines={2} style={{ fontSize: 16, marginTop: 2 }}>{detailProduct?.description}đ</Text>
					<Text style={{ fontSize: 18,marginTop:10 }}>Giá: {detailProduct?.price}</Text>
					<View style={{ flexDirection: 'row',marginLeft: 90,marginTop:10}}>
						<TouchableOpacity style={{ marginLeft: 20, height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#ececec', marginRight: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center', }}>
							<RnIcon name="heart" size={25} color="black" />
						</TouchableOpacity>
						<Text style={{ marginLeft: 10, fontSize: 33 }}>-</Text>
						<TouchableOpacity style={{ marginLeft: 15, height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: '#ececec', marginRight: 5, marginTop: 5, justifyContent: 'center', alignItems: 'center', }}>
							<RnIcon3 name="cart-plus" size={20} color="black" />
						</TouchableOpacity>
					</View>
				</View>
    </View>
  )
}