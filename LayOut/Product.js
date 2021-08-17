import React from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity,SafeAreaView, Image, Dimensions, ScrollView, ViewBase} from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';

const DATA = [
    {
        id: '1',
        Image: 'https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg',
        text:'Day la san pham so 1',
        date: '23/7'
    },
    {
        id: '2',
        Image: 'https://pixwares.com/wp-content/uploads/2021/01/anh-gai-xinh.jpg',
        text:'Day la san pham so 2',
        date: '22/7'
    },
    {
        id: '3',
        Image: 'https://chiase24.com/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg',
        text:'Day la san pham so 3',
        date: '22/7'
    },
    {
        id: '4',
        Image: 'https://4.bp.blogspot.com/-HvIZc4sB4TY/WHY7uf6gqSI/AAAAAAAAkSQ/sOb-EGjJvYk__oVCJbcgTveDsWmYXzXqACLcB/s1600/13501626_1595750880473366_7747698304741635823_n.jpg',
        text:'Day la san pham so 4',
        date: '23/2'
    },
    {
        id: '5',
        Image: 'https://1.bp.blogspot.com/-xmLV-ndC7M8/XszBqHMA_xI/AAAAAAAAmJA/53uO3K3Y9okVlMBsfqnQeFVp0DpxqcreQCLcBGAsYHQ/s1600/Anh-gai-xinh-deo-kinh%2B%252818%2529.jpg',
        text:'Day la san pham so 5',
        date: '23/5'
    },
    {
        id: '6',
        Image: 'https://i.pinimg.com/originals/a3/0a/49/a30a49923011bc6e59a5ca802d61f894.png',
        text:'Day la san pham so 6',
        date: '21/5'
    },{
        id: '7',
        Image: 'https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg',
        text:'Day la san pham so 7',
        date: '25/11'
    },
    {
        id: '8',
        Image: 'https://pixwares.com/wp-content/uploads/2021/01/anh-gai-xinh.jpg',
        text:'Day la san pham so 8',
        date: '23/9'
    },
    {
        id: '9',
        Image: 'https://chiase24.com/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg',
        text:'Day la san pham so 9',
        date: '21/12'
    },
    {
        id: '10',
        Image: 'https://4.bp.blogspot.com/-HvIZc4sB4TY/WHY7uf6gqSI/AAAAAAAAkSQ/sOb-EGjJvYk__oVCJbcgTveDsWmYXzXqACLcB/s1600/13501626_1595750880473366_7747698304741635823_n.jpg',
        text:'Day la san pham so 10',
        date: '27/7'
    },
    {
        id: '11',
        Image: 'https://1.bp.blogspot.com/-xmLV-ndC7M8/XszBqHMA_xI/AAAAAAAAmJA/53uO3K3Y9okVlMBsfqnQeFVp0DpxqcreQCLcBGAsYHQ/s1600/Anh-gai-xinh-deo-kinh%2B%252818%2529.jpg',
        text:'Day la san pham so 11',
        date: '11/7'
    },
    {
        id: '12',
        Image: 'https://i.pinimg.com/originals/a3/0a/49/a30a49923011bc6e59a5ca802d61f894.png',
        text:'Day la san pham so 12',
        date: '23/7'
    },
    {
        id: '13',
        Image: 'https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg',
        text:'Day la san pham so 13',
        date: '23/7'
    },
    {
        id: '14',
        Image: 'https://pixwares.com/wp-content/uploads/2021/01/anh-gai-xinh.jpg',
        text:'Day la san pham so 14',
        date: '23/7'
    },
    {
        id: '15',
        Image: 'https://chiase24.com/wp-content/uploads/2019/07/T%E1%BB%95ng-h%E1%BB%A3p-h%C3%ACnh-%E1%BA%A3nh-g%C3%A1i-xinh-d%E1%BB%85-th%C6%B0%C6%A1ng-cute-nh%E1%BA%A5t-6.jpg',
        text:'Day la san pham so 15',
        date: '23/7'
    },
    {
        id: '16',
        Image: 'https://4.bp.blogspot.com/-HvIZc4sB4TY/WHY7uf6gqSI/AAAAAAAAkSQ/sOb-EGjJvYk__oVCJbcgTveDsWmYXzXqACLcB/s1600/13501626_1595750880473366_7747698304741635823_n.jpg',
        text:'Day la san pham so 16',
        date: '23/7'
    },
    {
        id: '17',
        Image: 'https://1.bp.blogspot.com/-xmLV-ndC7M8/XszBqHMA_xI/AAAAAAAAmJA/53uO3K3Y9okVlMBsfqnQeFVp0DpxqcreQCLcBGAsYHQ/s1600/Anh-gai-xinh-deo-kinh%2B%252818%2529.jpg',
        text:'Day la san pham so 17',
        date: '23/7'
    },
    {
        id: '18',
        Image: 'https://i.pinimg.com/originals/a3/0a/49/a30a49923011bc6e59a5ca802d61f894.png',
        text:'Day la san pham so 18',
        date: '23/7'
    },

];

export default function Product() {

    const { height, width } = Dimensions.get('window');
    const itemWidth = (width - 15) / 2;

    const renderItem = ({ item }) => (
        <View style={{ flex: 1, margin: 10, flexDirection:'row-reverse'}}>
            <Image
                style={{ height: 120, width: '30%',borderRadius:10 }}
                source={{ uri: item.Image }}
            />
            <View style={{width: '60%',marginLeft:30}}>
                <Text style={{ fontSize: 18, marginTop: 10 ,fontWeight:'bold'}}>{item.text}</Text>
                <View style={{flexDirection:'row',marginTop: 5,}}>
                    <RnIcon name="calendar-outline" size={25} color="black"/>
                    <Text style={{ fontSize: 18, marginTop: 2,marginLeft:5 }}>{item.date}</Text>
                </View>
            </View>
        </View>
    );
    return (
        <SafeAreaView style={{flex: 1}}>
            <View>
                <Image
                    style={{ height: 250, width: '100%',borderRadius:10 }}
                    source={{ uri: 'https://thuthuatnhanh.com/wp-content/uploads/2019/05/gai-xinh-toc-ngan-facebook.jpg'}}
                />
            </View>
            <View style={{flex: 1,width:'94%',marginLeft:'3%',borderRadius:10}}>
                <View>
                    <FlatList 
                        style={{marginTop: 10}}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
            <View style={{height:60,flexDirection:'row', justifyContent:'center',alignItems:'center',}}>
                <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',}}>
                    <RnIcon name="home-outline" size={30} color="black"/>
                    <Text style={{fontWeight:'bold'}}>Trang Chủ</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',}}>
                    <RnIcon name="cafe-outline" size={30} color="black"/>
                    <Text style={{fontWeight:'bold'}}>Đặt Hàng</Text>
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
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
});
