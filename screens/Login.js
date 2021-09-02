import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, SafeAreaView, TextInput } from 'react-native'
import RnIcon from "react-native-vector-icons/Ionicons";
import Swiper from 'react-native-swiper'
import Modal from 'react-native-modal';
import { cfLogin } from './services/Api'


export default function Login({navigation}) {
	const [phone,setPhone] = useState()	
	const [code,setCode] = useState()	
	const [isVisible,setIsVisible] = useState(false)
	const onChangePhone = (val) => setPhone(val)
	const onChangeCode = (val) => setCode(val)
	
	const onCloseModal = () =>{
		setIsVisible(false)
	}

	const onVerifyPhone = async () => {
		
		try {
			const response = await cfLogin({phone: phone});
			console.log('rs', response.data.data); 
			setIsVisible(true)

		} catch (error) {
			console.error(error.response);
		}
	}
	const onVerifyCode  = async () => {
		try {
			const response = await cfLogin({phone: phone,otp:code});
			console.log('rs', response.data); 
			setIsVisible(false)
			navigation.navigate('Other')
		} catch (error) {
			console.error(error.response);
		}
	}


	return (
		<SafeAreaView>
			<View>
				<Image
					style={{ height: 230, width: '100%' }}
					source={{ uri: 'https://www.cukcuk.vn/wp-content/uploads/2019/09/foody-mobile-960x600-the-coffee-h-761-636304658264606242-1568800909178126962452-crop-1568800918203296009047.jpg' }}
				/>
			</View>
			<View style={{ flex: 1 }}>
				<View style={{ height: 800, marginTop: -30, borderTopLeftRadius: 30, borderTopRightRadius: 30, backgroundColor: 'white' }}>
					<View style={{ justifyContent: 'center', alignItems: 'center' }}>
						<Text style={{ fontSize: 20, fontFamily: 'Times New Roman', marginTop: 20 }}>Chào mừng bạn đến với</Text>
						<Text style={{ fontSize: 30, fontFamily: 'Showcard Gothic', fontWeight: 'bold', marginBottom: 30 }}>The Coffee House</Text>
						<TextInput 
							placeholder="Phone Number" 
							secureTextEntry={false} 
							value={phone}
							onChangeText={onChangePhone}
							style={{ height: 50, width: '90%', fontSize: 16, borderColor: 'gray', borderWidth: 1, marginLeft: 5, fontFamily: 'Times New Roman', borderRadius: 10, marginBottom: 20 }} 
						/>
						<TouchableOpacity onPress={onVerifyPhone} style={{ height: 50, width: '90%', borderColor: 'gray', borderWidth: 1, marginLeft: 5, borderRadius: 10, marginBottom: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: "gray" }}>
							<Text style={{ fontSize: 16, color: 'white' }}>Đăng NHập</Text>
						</TouchableOpacity>
						<View style={{ flexDirection: 'row' }}>
							<View style={{ borderWidth: 1, width: '37%', height: 2, marginRight: 10, marginTop: 10, borderColor: "#d8d5d5" }}></View>
							<Text style={{ fontSize: 14 }}>Hoặc</Text>
							<View style={{ borderWidth: 1, width: '37%', height: 2, marginLeft: 10, marginTop: 10, borderColor: "#d8d5d5" }}></View>
						</View>
						<TouchableOpacity style={{ height: 50, width: '90%', borderColor: 'blue', borderWidth: 1, marginLeft: 5, borderRadius: 10, marginBottom: 20, marginTop: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: "blue" }}>
							<Text style={{ fontSize: 16, color: 'white' }}>Tiếp tục bằng Facebook</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{ height: 50, width: '90%', borderColor: 'gray', borderWidth: 1, marginLeft: 5, borderRadius: 10, marginBottom: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: "white" }}>
							<Text style={{ fontSize: 16, color: 'black' }}>Tiếp tục bằng Google</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<Modal
        testID={'modal'}
        isVisible={isVisible}
        onSwipeComplete={onCloseModal}
        swipeDirection={['up', 'left', 'right', 'down']}
        style={{justifyContent: 'flex-end',margin: 0}}
			>
				<View style={{backgroundColor:'white',justifyContent:'center',alignItems:'center',height:700}}>
					<TouchableOpacity onPress={onCloseModal}  style={{position:'absolute',top:0,right:0}}>
					<RnIcon name="close" size={50} color="black" />
					</TouchableOpacity>
					<Text style={{ fontSize: 22,marginBottom:20}}>nhập mã cho sdt:{phone}</Text>
					<TextInput 
							placeholder="Mã OTP" 
							secureTextEntry={false} 
							value={code}
							onChangeText={onChangePhone}
							style={{ height: 50, width: '90%', fontSize: 16, borderColor: 'gray', borderWidth: 1, marginLeft: 5, fontFamily: 'Times New Roman', borderRadius: 10, marginBottom: 20 }} 
						/>
						<TouchableOpacity onPress={onVerifyCode} style={{ height: 50, width: '90%', borderColor: 'gray', borderWidth: 1, marginLeft: 5, borderRadius: 10, marginBottom: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: "gray" }}>
							<Text style={{ fontSize: 16, color: 'white' }}>Gửi Code</Text>
						</TouchableOpacity>
				</View>
      </Modal>
		</SafeAreaView>
	)
}
