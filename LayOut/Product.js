import React from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity,SafeAreaView, Image, Dimensions, ScrollView, ViewBase, TextInput} from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';

const DATA = [
    {
        id: '1',
        Image: 'https://product.hstatic.net/1000075078/product/caphesuada_ba1ebc3227b34e97b5bb1e711cb3676f_large.jpg',
        text:'Cà Phê Sữa Đá Tan',
        date: 'Ưu đãi 10% cho đơn hàng Cà phê gói',
        gia:'44.000đ'
    },
    {
        id: '2',
        Image: 'https://product.hstatic.net/1000075078/product/bac-siu_13856adaa2354499aa61251b8b1e9fd6_large.jpg',
        text:'Bạc Xỉu',
        date: 'Được những người gốc hoa mang tới Sài Gòn',
        gia:'32.000đ'
    },
    {
        id: '3',
        Image: 'https://product.hstatic.net/1000075078/product/americano-da_7495646eaad24b8cbe0e68e8e479f01f_large.jpg',
        text:'Americano Đá',
        date: 'Americano được thêm vào đá tạo sự mát lạnh',
        gia:'40.000đ'
    },
    {
        id: '4',
        Image: 'https://product.hstatic.net/1000075078/product/capu-nong_a2a47a422fa94e8194e9d4c4badba9d3_master.jpg',
        text:'Cappuccino',
        date: 'Công thức:1/3 Espresso 1/3 Sữa nóng 1/3 Foam',
        gia:'50.000đ'
    },
    {
        id: '5',
        Image: 'https://product.hstatic.net/1000075078/product/lon-park24_10572efcaba3475d84d6fb0a859a56f0_master.jpg',
        text:'Thùng CaFe Sữa Đá',
        date: 'Giảm giá còn 289.000đ khi nhập mã ưu đãi',
        gia:'336.000đ'
    },
    {
        id: '6',
        Image: 'https://product.hstatic.net/1000075078/product/605da09f717e5d00114a3cd8_app_long_nhan_hat_chia_copy-min_15afd5872ab74b5fbb55414e965768bd_master.png',
        text:'Trà Long Nhãn Hạt Chia',
        date: 'sử dụng Long Nhãn làm tăng mùi vị của trà',
        gia:'45.000đ'
    },
    {
        id: '7',
        Image: 'https://product.hstatic.net/1000075078/product/tra-hat-sen_66a4b5d319314b408021b3765e07a003_master.jpg',
        text:'Trà Hạt Sen',
        date: 'sử dụng Hạt Sen rất tốt cho sức khỏe',
        gia:'45.000đ'
    },
    {
        id: '8',
        Image: 'https://product.hstatic.net/1000075078/product/peak_196fc2433ab14ef297113696e4d6c179_master.jpg',
        text:'Cà phê Peak Flavor',
        date: 'Ưu đãi 10% cho đơn hàng Cà phê gói',
        gia:'90.000đ'
    },
    {
        id: '9',
        Image: 'https://product.hstatic.net/1000075078/product/rich_327845e1f8374e21955320e3ea8e7263_master.jpg',
        text:'Cà Phê Rich Finish',
        date: 'Ưu đãi 10% cho đơn hàng Cà phê gói',
        gia:'90.000đ'
    },
    {
        id: '10',
        Image: 'https://product.hstatic.net/1000075078/product/lon-park6_9fb70fb05cc44ddabf13ff115bab1ce6_master.jpg',
        text:'Combo 6 Lon Cà Phê Sữa',
        date: 'Giảm giá cho đơn từ 119.000đ ',
        gia:'84.000đ'
    },
];

export default function Product() {

    const { height, width } = Dimensions.get('window');
    const itemWidth = (width - 15) / 2;

    const renderItem = ({ item }) => (
        <View style={{ flex: 1, margin: 5, flexDirection:'row-reverse',borderRadius:10,backgroundColor:'white',padding:10,}}>
            <Image
                style={{ height: 120, width: '30%',borderRadius:10 }}
                source={{ uri: item.Image }}
            />
            <View style={{width: '60%',marginRight:30}}>
                <Text style={{ fontSize: 18, marginTop: 10 ,fontWeight:'bold'}}>{item.text}</Text>        
                <Text style={{ fontSize: 18, marginTop: 2 }}>{item.date}</Text>
                <Text style={{ fontSize: 18, marginTop: 2}}>{item.gia}</Text>
            </View>
        </View>
    );
    return (
        <View style={{flex: 1,backgroundColor:'#ececec'}}>
            <View style={{height:70,flexDirection:'row',backgroundColor:'white',alignItems:'center'}}>
                <RnIcon1 style={{marginLeft:10}} name="truck-delivery" size={60} color="orange"/>
                <Text style={{ fontSize: 26,fontWeight:'bold',marginLeft:10}}>Giao Hàng Đến</Text>
                <RnIcon style={{marginLeft:10}} name="chevron-down-sharp" size={30} color="black"/>
            </View>
            <View style={{borderBottomWidth:0.2,flexDirection:"row",height:70,justifyContent:'center',alignItems:'center',borderColor:"gray"}}>
                <TextInput placeholder="  Search" style={{height:50,width:'65%',backgroundColor:'white',borderRadius:20,fontSize:18}}>

                </TextInput>
                <TouchableOpacity style={{height:50,width:50,borderRadius:50/2,backgroundColor:'white',marginLeft:5,marginVertical:10,justifyContent:'center',alignItems:'center'}}>
                    <RnIcon name="search-outline" size={30} color="black"/>
                    
                </TouchableOpacity>
                <TouchableOpacity style={{height:50,width:50,borderRadius:50/2,backgroundColor:'white',marginLeft:5,marginVertical:10,justifyContent:'center',alignItems:'center'}}>
                    <RnIcon name="heart-outline" size={30} color="black"/>
                    
                </TouchableOpacity>
            </View>
            <SafeAreaView style={{flex: 1,width:'94%',marginLeft:'3%',borderRadius:10,}}>
                <View style={{backgroundColor:'#ececec'}}>
                    <FlatList 
                        style={{backgroundColor:'#ececec',}}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </SafeAreaView>
            <View style={{height:60,flexDirection:'row', justifyContent:'center',alignItems:'center',backgroundColor:'white'}}>
                <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',}}>
                    <RnIcon name="home-outline" size={30} color="black"/>
                    <Text style={{fontWeight:'bold'}}>Trang Chủ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',}}>
                    <RnIcon name="cafe-outline" size={30} color="orange"/>
                    <Text style={{fontWeight:'bold',color:'orange'}}>Đặt Hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',}}>
                    <RnIcon name="fast-food-outline" size={30} color="black"/>
                    <Text style={{fontWeight:'bold'}}>Cửa Hàng</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',}}>
                    <RnIcon1 name="ticket-confirmation-outline" size={30} color="black"/>
                    <Text style={{fontWeight:'bold'}}>Tích Điểm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',}}>
                    <RnIcon name="list-outline" size={30} color="black"/>
                    <Text style={{fontWeight:'bold'}}>Khác</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
});
