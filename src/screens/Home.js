import React from 'react'
import { View, Text, FlatList, StyleSheet, StatusBar, TouchableOpacity, SafeAreaView, Image, ScrollView, ViewBase } from 'react-native'

import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
	wrapper: {
		height: 210,
		marginVertical: 10, backgroundColor: '#ececec'
	},
	slide1: {
		flex: 1,
		alignItems: 'center',
	},
	slide2: {
		flex: 1,
		alignItems: 'center',
	},
	slide3: {
		flex: 1,
		alignItems: 'center',
	},
})

export default function Home({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: '#ececec' }}>
			<View style={{ height: 70, flexDirection: 'row-reverse', backgroundColor: 'white' }}>
				<TouchableOpacity style={{ height: 50, width: 50, borderRadius: 50 / 2, backgroundColor: '#fff', marginRight: 15, marginVertical: 10, justifyContent: 'center', alignItems: 'center', elevation: 15, shadowColor: '0,0,0, .4', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { height: 1, width: 1 } }}>
					<RnIcon name="notifications-outline" size={30} color="black" />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => navigation.navigate('Ticket')} style={{ height: 50, width: 80, borderRadius: 50 / 2, backgroundColor: '#fff', marginHorizontal: 15, marginVertical: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', elevation: 5, shadowColor: '0,0,0, .4', shadowRadius: 1, shadowOpacity: 1, shadowOffset: { height: 1, width: 1 } }}>
					<RnIcon1 name="ticket-confirmation-outline" size={30} color="orange" />
					<Text style={{ fontSize: 24, fontWeight: 'bold' }}> 4</Text>
				</TouchableOpacity>
				<View style={{ justifyContent: "center", alignItems: 'center' }}>
					<Text style={{ fontWeight: 'bold', fontSize: 28 }}>Chào Mừng Trở Lại</Text>
				</View>
			</View>
			<ScrollView style={{ flex: 1, width: '94%', marginLeft: '3%', backgroundColor: '#ececec', borderRadius: 5, }}>
				<View style={{ height: 120, marginTop: 10, width: '100%', borderColor: '#ececec', backgroundColor: 'white', borderWidth: 1, borderRadius: 10, flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
					<TouchableOpacity onPress={() => navigation.navigate('Order')} style={{ height: 100, width: '48%', backgroundColor: 'white', justifyContent: "center", alignItems: "center", borderRadius: 10 }}>
						<RnIcon3 name="shipping-fast" size={60} color="orange" />
						<Text style={{ fontSize: 18, fontWeight: 'bold' }}>Giao Hàng</Text>
					</TouchableOpacity>
					<Text style={{ height: 90, width: 2, backgroundColor: '#ececec' }}></Text>
					<TouchableOpacity onPress={() => navigation.navigate('Bag')} style={{ height: 100, width: '48%', borderRadius: 10, backgroundColor: 'white', justifyContent: "center", alignItems: "center" }}>
						<RnIcon2 name="shopping-bag-1" size={65} color="orange" />
						<Text style={{ fontSize: 18, fontWeight: 'bold' }}>Mang Về</Text>
					</TouchableOpacity>
				</View>
				<Swiper style={styles.wrapper} showsButtons={false}>
					<View style={styles.slide2}>
						<Image
							style={{ height: 200, width: '100%', borderRadius: 15 }}
							source={{ uri: 'http://theme.hstatic.net/1000075078/1000610097/14/share_fb_home.png?v=684' }}
						/>
					</View>
					<View style={styles.slide2}>
						<Image
							style={{ height: 200, width: '100%', borderRadius: 15 }}
							source={{ uri: 'https://kenh14cdn.com/2016/img20150903172021537-1481339507676.jpg' }}
						/>
					</View>

					<View style={styles.slide2}>
						<Image
							style={{ height: 200, width: '100%', borderRadius: 15, paddingHorizontal:10 }}
							source={{ uri: 'https://media.foody.vn/res/g71/702436/prof/s/foody-mobile-foody-mobile-foody-m.jpg' }}
						/>
					</View>
					<View style={styles.slide3}>
						<Image
							style={{ height: 200, width: '100%', borderRadius: 15, paddingHorizontal:10 }}
							source={{ uri: 'https://ahamove.com/wp-content/uploads/2021/01/TCH-Hoa%CC%80ng-%C4%90a%CC%A3o-Thuy%CC%81.jpg' }}
						/>
					</View>
					<View style={styles.slide1}>
						<Image
							style={{ height: 200, width: '100%', borderRadius: 15, paddingHorizontal:10 }}
							source={{ uri: 'https://www.kinhnghiemkinhdoanh.org/wp-content/uploads/2020/01/Kinhnghiemkinhdoanh.org-the-coffee-house-phat-trien-thuong-hieu-nho-vao-customer-insight-k7-1.jpg' }}
						/>
					</View>
				</Swiper>
				<View style={{ height: 100, width: '100%', backgroundColor: '#ececec' }}>
					<Text style={{ fontSize: 26, fontWeight: 'bold', marginLeft: 10 }}>Khám Phá Thêm</Text>
					<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
						<TouchableOpacity style={{ height: 50, width: '48%', backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
							<Text style={{ fontSize: 18 }}>Ưu Đãi Đặc Biệt</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{ height: 50, width: '48%', backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5 }}>
							<Text style={{ fontSize: 18 }}>Cập Nhật Từ Nhà</Text>
						</TouchableOpacity>
					</View>
				</View>
				<View style={{ flexDirection: 'row', backgroundColor: '#ececec', marginBottom: 10 }}>
					<View style={{ flex: 1, padding: 10, backgroundColor: 'white', borderRadius: 10 }}>
						<View style={{ backgroundColor: 'white' }}>
							<Image
								style={{ height: 180, width: '100%', borderRadius: 10 }}
								source={{ uri: 'https://mapp.vn/wp-content/uploads/2019/09/55446912_2304987239775289_2537516543047106560_o.jpg' }}
							/>
						</View>
						<View style={{ backgroundColor: 'white', borderRadius: 5 }}>
							<Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>Uống trà size lớn giá size nhỏ</Text>
							<View style={{ flexDirection: 'row', marginTop: 5, }}>
								<RnIcon name="calendar-outline" size={25} color="black" />
								<Text style={{ fontSize: 18, marginTop: 2, marginLeft: 5 }}>1/8 - 30/8</Text>
							</View>
						</View>
					</View>
					<View style={{ width: 10, backgroundColor: '#ececec' }}></View>
					<View style={{ flex: 1, padding: 10, backgroundColor: 'white', borderRadius: 10 }}>
						<View>
							<Image
								style={{ height: 180, width: '100%', borderRadius: 10 }}
								source={{ uri: 'https://stc.shopiness.vn/deal/2019/01/14/2/9/a/6/1547454256621_540.png' }}
							/>
						</View>
						<View>
							<Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>Đồng giá 29k cho đơn hàng shoppee</Text>
							<View style={{ flexDirection: 'row', marginTop: 5, }}>
								<RnIcon name="calendar-outline" size={25} color="black" />
								<Text style={{ fontSize: 18, marginTop: 2, marginLeft: 5 }}>15/8 - 31/8</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={{ flexDirection: 'row', backgroundColor: '#ececec', marginBottom: 10 }}>
					<View style={{ flex: 1, padding: 10, backgroundColor: 'white', borderRadius: 10 }}>
						<View style={{ backgroundColor: 'white' }}>
							<Image
								style={{ height: 180, width: '100%', borderRadius: 10 }}
								source={{ uri: 'https://vuakhuyenmai.vn/wp-content/uploads/2020/12/the-coffee-house-35-5121.jpg' }}
							/>
						</View>
						<View style={{ backgroundColor: 'white', borderRadius: 5 }}>
							<Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>Sale Off 35% lên đến 50k</Text>
							<View style={{ flexDirection: 'row', marginTop: 5, }}>
								<RnIcon name="calendar-outline" size={25} color="black" />
								<Text style={{ fontSize: 18, marginTop: 2, marginLeft: 5 }}>16/8 - 20/8</Text>
							</View>
						</View>
					</View>
					<View style={{ width: 10, backgroundColor: '#ececec' }}></View>
					<View style={{ flex: 1, padding: 10, backgroundColor: 'white', borderRadius: 10 }}>
						<View>
							<Image
								style={{ height: 180, width: '100%', borderRadius: 10 }}
								source={{ uri: 'https://cdn.jamja.vn/blog/wp-content/uploads/2019/10/loi-chuc-20-10.jpg' }}
							/>
						</View>
						<View>
							<Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>Miễn phí 100 bạn nữ mua hàng đầu tiên</Text>
							<View style={{ flexDirection: 'row', marginTop: 5, }}>
								<RnIcon name="calendar-outline" size={25} color="black" />
								<Text style={{ fontSize: 18, marginTop: 2, marginLeft: 5 }}>20/8 - 22/8</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={{ flexDirection: 'row', backgroundColor: '#ececec', marginBottom: 10 }}>
					<View style={{ flex: 1, padding: 10, backgroundColor: 'white', borderRadius: 10 }}>
						<View style={{ backgroundColor: 'white' }}>
							<Image
								style={{ height: 180, width: '100%', borderRadius: 10 }}
								source={{ uri: 'https://img.kam.vn/images/414x0/f2b7c19923764a87b165d7899cb5359d/image/airpay-uu-dai-the-coffee-house-giam-20.jpg' }}
							/>
						</View>
						<View style={{ backgroundColor: 'white', borderRadius: 5 }}>
							<Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>Cơ sở Đà Nẵng giảm 20% các loại cà phê</Text>
							<View style={{ flexDirection: 'row', marginTop: 5, }}>
								<RnIcon name="calendar-outline" size={25} color="black" />
								<Text style={{ fontSize: 18, marginTop: 2, marginLeft: 5 }}>Cuối Tuần</Text>
							</View>
						</View>
					</View>
					<View style={{ width: 10, backgroundColor: '#ececec' }}></View>
					<View style={{ flex: 1, padding: 10, backgroundColor: 'white', borderRadius: 10 }}>
						<View>
							<Image
								style={{ height: 180, width: '100%', borderRadius: 10 }}
								source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiYJFhz0JsAbXEGyXN4Ic-canANaaFrPTM8Q&usqp=CAU' }}
							/>
						</View>
						<View>
							<Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>Cơ sở mới sắp khai trương tại Hà Nội</Text>
							<View style={{ flexDirection: 'row', marginTop: 5, }}>
								<RnIcon name="calendar-outline" size={25} color="black" />
								<Text style={{ fontSize: 18, marginTop: 2, marginLeft: 5 }}>23/8</Text>
							</View>
						</View>
					</View>
				</View>
				<View style={{ flexDirection: 'row', backgroundColor: '#ececec', marginBottom: 10 }}>
					<View style={{ flex: 1, padding: 10, backgroundColor: 'white', borderRadius: 10 }}>
						<View style={{ backgroundColor: 'white' }}>
							<Image
								style={{ height: 180, width: '100%', borderRadius: 10 }}
								source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRaWk4X6uavoREYV6dmybYvEk6eXvq3YDEA&usqp=CAU' }}
							/>
						</View>
						<View style={{ backgroundColor: 'white', borderRadius: 5 }}>
							<Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>Top 10 cửa hàng có View đẹp nhất tại VN</Text>
							<View style={{ flexDirection: 'row', marginTop: 5, }}>
								<RnIcon name="calendar-outline" size={25} color="black" />
								<Text style={{ fontSize: 18, marginTop: 2, marginLeft: 5 }}>16/8</Text>
							</View>
						</View>
					</View>
					<View style={{ width: 10, backgroundColor: '#ececec' }}></View>
					<View style={{ flex: 1, padding: 10, backgroundColor: 'white', borderRadius: 10 }}>
						<View>
							<Image
								style={{ height: 180, width: '100%', borderRadius: 10 }}
								source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7b7kxC4JNfZivNOD_cTF59G_9PYOlW0PGA&usqp=CAU' }}
							/>
						</View>
						<View>
							<Text style={{ fontSize: 18, marginTop: 10, fontWeight: 'bold' }}>Đóng cửa cơ sở Hải Phòng để bảo dưỡng</Text>
							<View style={{ flexDirection: 'row', marginTop: 5, }}>
								<RnIcon name="calendar-outline" size={25} color="black" />
								<Text style={{ fontSize: 18, marginTop: 2, marginLeft: 5 }}>11/8 - 16-8</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</View>
	);
};