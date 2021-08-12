import React from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView, TextInput} from 'react-native'
import RnIcon from "react-native-vector-icons/Ionicons";
import Swiper from 'react-native-swiper'


export default function Login() {
    return (
        <SafeAreaView>
            <View>
                <Image
                    style={{height: 230, width: '100%'}}
                    source={{ uri:'https://www.cukcuk.vn/wp-content/uploads/2019/09/foody-mobile-960x600-the-coffee-h-761-636304658264606242-1568800909178126962452-crop-1568800918203296009047.jpg'}}
                />
            </View>
            <View style={{flex:1}}>
                <View style={{height:800, marginTop: -30,borderTopLeftRadius: 30, borderTopRightRadius: 30,backgroundColor:'white'}}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{fontSize:20,fontFamily:'Times New Roman',marginTop:20}}>Chào mừng bạn đến với</Text>
                        <Text style={{fontSize:30,fontFamily:'Showcard Gothic',fontWeight:'bold',marginBottom:30}}>The Coffee House</Text>
                        <TextInput placeholder="Your Email" secureTextEntry={false} style={{height: 50,width: '90%',fontSize:16,borderColor: 'gray',borderWidth: 1,marginLeft: 5,fontFamily:'Times New Roman',borderRadius:10,marginBottom:20}}/>
                        <TextInput placeholder="Your Password" secureTextEntry={true} style={{height: 50,width: '90%',fontSize:16,borderColor: 'gray',borderWidth: 1,marginLeft:5,fontFamily:'Times New Roman',borderRadius:10,marginBottom:20}}/>
                        <TouchableOpacity style={{height: 50,width: '90%',borderColor: 'gray',borderWidth: 1,marginLeft:5,borderRadius:10,marginBottom:20,justifyContent:'center',alignItems:'center',backgroundColor:"gray"}}>
                            <Text style={{fontSize:16,color:'white'}}>Đăng NHập</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection:'row'}}>
                            <View style={{borderWidth:1,width:'37%',height:2,marginRight:10,marginTop:10,borderColor:"#d8d5d5"}}></View>
                            <Text style={{fontSize:14}}>Hoặc</Text>
                            <View style={{borderWidth:1,width:'37%',height:2,marginLeft:10,marginTop:10,borderColor:"#d8d5d5"}}></View>
                        </View>
                        <TouchableOpacity style={{height: 50,width: '90%',borderColor: 'blue',borderWidth: 1,marginLeft:5,borderRadius:10,marginBottom:20,marginTop:20,justifyContent:'center',alignItems:'center',backgroundColor:"blue"}}>
                        <Text style={{fontSize:16,color:'white'}}>Tiếp tục bằng Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height: 50,width: '90%',borderColor: 'gray',borderWidth: 1,marginLeft:5,borderRadius:10,marginBottom:20,justifyContent:'center',alignItems:'center',backgroundColor:"white"}}>
                        <Text style={{fontSize:16,color:'black'}}>Tiếp tục bằng Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
