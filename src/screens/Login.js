import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, TextInput } from 'react-native'

import RnIcon from "react-native-vector-icons/Ionicons";
import Swiper from 'react-native-swiper'
import Modal from 'react-native-modal';
import { cfLogin } from './services/Api'


export default function Login({ navigation }) {
	const [phone, setPhone] = useState()
	const [code, setCode] = useState()
	const onChangePhone = (val) => setPhone(val)
	const onChangeCode = (val) => setCode(val)

	// modal
	const [isVisible, setIsVisible] = useState(false)
	const onCloseModal = () => {
		setIsVisible(false)
	}

	// call api
	const onVerifyPhone = async () => {
		try {
			const response = await cfLogin({ phone: phone });
			console.log('rs', response.data.data);
			setIsVisible(true)
		} catch (error) {
			console.error(error.response);
		}
	}
	const onVerifyCode = async () => {
		try {
			const response = await cfLogin({ phone: phone, otp: code });
			console.log('rs', response.data);
			setIsVisible(false)
			navigation.navigate('Home')
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
			<TouchableOpacity onPress={() => { navigation.goBack() }} style={styles.buttonBack}>
				<RnIcon name="close-outline" size={50} color="white" />
			</TouchableOpacity>
			<View style={{ flex: 1 }}>
				<View style={styles.headerImg}>
					<View style={styles.titleView}>
						<Text style={styles.wellcome}>Chào mừng bạn đến với</Text>
						<Text style={styles.loginTitle}>The Coffee House</Text>
						<TextInput
							textAlign={'center'}
							maxLength={11}
							clearTextOnFocus={true}
							placeholder="Nhập số điện thoại..."
							secureTextEntry={false}
							value={phone}
							onChangeText={onChangePhone}
							style={styles.loginInput}
						/>
						<TouchableOpacity onPress={onVerifyPhone} style={styles.buttonLogin}>
							<Text style={{ fontSize: 24, color: 'white' }}>Đăng Nhập</Text>
						</TouchableOpacity>
						<View style={{ flexDirection: 'row', marginTop: 10 }}>
							<View style={styles.or}></View>
							<Text style={{ fontSize: 24 }}>Hoặc</Text>
							<View style={styles.or}></View>
						</View>
						<TouchableOpacity style={styles.buttonFB}>
							<Text style={{ fontSize: 24, color: 'white' }}>Tiếp tục bằng Facebook</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			<Modal
				testID={'modal'}
				isVisible={isVisible}
				onSwipeComplete={onCloseModal}
				swipeDirection={['up', 'left', 'right', 'down']}
				style={{ justifyContent: 'flex-end', margin: 0 }}
			>
				<View style={styles.modalView}>
					<TouchableOpacity onPress={onCloseModal} style={{ position: 'absolute', top: 0, right: 0 }}>
						<RnIcon name="close" size={50} color="black" />
					</TouchableOpacity>
					<Text style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 40 }}>nhập mã cho sdt:{phone}</Text>
					<Text style={{ fontSize: 18, marginVertical: 0 }}>Một mã Xác thực gồm 6 chữ số đã được gửi đến số </Text>
					<Text style={{ fontSize: 18, marginBottom: 20, marginVertical: 10 }}>điện thoại:{phone}</Text>
					<TextInput
						textAlign={'center'}
						maxLength={6}
						clearTextOnFocus={true}
						keyboardType="numeric"
						placeholder="Mã OTP"
						secureTextEntry={false}
						value={code}
						style={styles.modalInput}
					/>
					<TouchableOpacity onPress={onVerifyCode} style={styles.buttonConfirm}>
						<Text style={{ fontSize: 22, color: 'white' }}>Xác Nhận</Text>
					</TouchableOpacity>
				</View>
			</Modal>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	// login
	loginInput: { 
		height: 56, 
		width: '90%', 
		fontSize: 24, 
		borderColor: 'gray', 
		borderWidth: 1.2, 
		marginLeft: 5, 
		borderRadius: 10, 
		marginBottom: 10, 
		marginTop: 40, 
		backgroundColor: '#e0e0d1'
	},
	buttonLogin: { 
		height: 50, 
		width: '90%', 
		borderColor: 'gray', 
		marginLeft: 5, 
		borderRadius: 10, 
		marginBottom: 10, 
		marginTop: 20, 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: "#ffd700" 
	},
	buttonFB: { 
		height: 50, 
		width: '90%', 
		borderColor: 'blue', 
		borderWidth: 1, 
		marginLeft: 5, 
		borderRadius: 10, 
		marginBottom: 10, 
		marginTop: 15, 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: '#4169e1' 
	},
	buttonBack: { 
		position: 'absolute', 
		left: 0, 
		top: 0 
	},
	headerImg: { 
		height: 800, 
		marginTop: -30, 
		borderTopLeftRadius: 30, 
		borderTopRightRadius: 30, 
		backgroundColor: 'white' 
	},
	titleView: { 
		justifyContent: 'center', 
		alignItems: 'center', 
		marginTop: 20 
	},
	wellcome: { 
		fontSize: 20, 
		fontFamily: 'Times New Roman', 
		marginTop: 20 
	},
	loginTitle: { 
		fontSize: 30, 
		fontFamily: 'Showcard Gothic', 
		fontWeight: 'bold', 
		marginBottom: 50 
	},
	or: { 
		borderWidth: 1, 
		width: '30%', 
		height: 2, 
		marginRight: 10, 
		marginTop: 12, 
		borderColor: "#d8d5d5" 
	},
	// modal
	modalView: { 
		backgroundColor: 'white', 
		justifyContent: 'center', 
		alignItems: 'center', 
		height: 700 
	},
	modalInput: { 
		height: 60, 
		width: '90%', 
		fontSize: 22, 
		borderColor: 'gray', 
		borderWidth: 1, 
		marginLeft: 5, 
		fontFamily: 'Times New Roman', 
		borderRadius: 10, 
		marginBottom: 20, 
		justifyContent: 'center', 
		alignItems: 'center' 
	},
	buttonConfirm: { 
		height: 60, 
		width: '90%', 
		borderColor: 'gray', 
		borderWidth: 1, 
		marginLeft: 5, 
		borderRadius: 10, 
		marginBottom: 20, 
		justifyContent: 'center', 
		alignItems: 'center', 
		backgroundColor: "gray" },
});