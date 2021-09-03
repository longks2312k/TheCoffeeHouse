import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5';


export default function TichDiem() {
  return (
    <View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <View style={{width:'96%',height:350,backgroundColor:'white',marginLeft:9,marginTop:5,borderRadius:20}}>
          <View style={{height:240,backgroundColor:'orange',width:'100%',borderRadius:20}}>
            <Text style={{ fontWeight: 'bold', fontSize: 26,marginTop:10,marginLeft:20,color:'white'}}>Nguyễn Hoàng Long</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 22,marginTop:10,marginLeft:20,color:'white',marginBottom:35}}>0 BEAN - Mới</Text>
            <View style={{height:100,backgroundColor:'white',width:'90%',borderRadius:20,marginHorizontal:20,justifyContent:'center',alignItems:'center'}}>
              <Image
                style={{ height: 55, width: '80%', marginHorizontal:40,marginTop:10 }}
                source={{ uri: 'https://organic365.vn/image/cache/catalog/tin-tuc/CHECK-MA-VACH-ORGANIC365-480x320.jpg' }}
              />
              <Text style={{ fontWeight: 'bold', fontSize: 18,marginTop:5}}>69696969669</Text>
            </View>
          </View>
          <View style={{justifyContent:'center',alignItems:'center'}}>
            <Text style={{ fontSize: 18,marginTop:5}}>Còn 100 BEAN nữa bạn sẽ thăng hạng</Text>
            <Text style={{ fontSize: 18,marginTop:5}}>Đổi quà không ảnh hưởng đến việc thăng hạng</Text>
            <Text style={{ fontSize: 18,marginTop:5}}>Chưa tích điểm</Text>
          </View>
        </View>
        <View>
          <View style={{ flexDirection: 'row', backgroundColor: '#ececec', marginVertical: 10, height: 120 ,width:'95%',marginLeft:10}}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10 }}>
              <RnIcon style={{ marginTop: 15, marginLeft: 15, }} name="gift-outline" size={40} color="orange" />
              <Text style={{ marginTop: 10, marginLeft: 15, fontSize: 24 }}>Đổi ưu đãi</Text>
            </TouchableOpacity>
            <View style={{ width: 10, backgroundColor: '#ececec' }}></View>
            <TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10 }}>
              <RnIcon1 style={{ marginTop: 15, marginLeft: 20, }} name="ticket-confirmation-outline" size={40} color="orange" />
              <Text style={{ marginTop: 10, marginLeft: 20, fontSize: 24 }}>Phiếu ưu đãi</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: '#ececec', marginBottom: 0, height: 120 ,width:'95%',marginLeft:10}}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10 }}>
              <RnIcon style={{ marginTop: 15, marginLeft: 15, }} name="receipt-outline" size={40} color="orange" />
              <Text style={{ marginTop: 10, marginLeft: 15, fontSize: 24 }}>Lịch sử giao dịch</Text>
            </TouchableOpacity>
            <View style={{ width: 10, backgroundColor: '#ececec' }}></View>
            <TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10 }}>
              <RnIcon style={{ marginTop: 15, marginLeft: 20, }} name="shield-checkmark-outline" size={40} color="blue" />
              <Text style={{ marginTop: 10, marginLeft: 20, fontSize: 24 }}>Quyền lợi</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', marginLeft: 15, marginVertical: 15, width: '90%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30, marginRight: 5 }}>Phiếu ưu đãi của bạn</Text>
            <TouchableOpacity style={{ height: 45, width: '30%', backgroundColor: '#ffffcc', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5, }}>
              <Text style={{ fontSize: 18, color: 'orange', fontWeight: 'bold' }}>Xem Tất Cả</Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={{ flex: 1, margin: 5, flexDirection: 'row', borderRadius: 10, backgroundColor: 'white', padding: 10, }}>
              <Image
                style={{ height: 120, width: '30%', borderRadius: 10 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRaWk4X6uavoREYV6dmybYvEk6eXvq3YDEA&usqp=CAU' }}
              />
              <View style={{ flexDirection: 'row', width: '60%', marginLeft: 5 }}>
                <View>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', paddingHorizontal: 5 }}>Giảm 10% tổng bill cho đơn hàng CPG</Text>
                  <Text style={{ fontSize: 20, color: 'black', paddingHorizontal: 5, marginTop: 15 }}>Hết hạn: 30/9/2021</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={{ flex: 1, margin: 5, flexDirection: 'row', borderRadius: 10, backgroundColor: 'white', padding: 10, }}>
              <Image
                style={{ height: 120, width: '30%', borderRadius: 10 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7b7kxC4JNfZivNOD_cTF59G_9PYOlW0PGA&usqp=CAU' }}
              />
              <View style={{ flexDirection: 'row', width: '60%', marginLeft: 5 }}>
                <View>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', paddingHorizontal: 5 }}>Giảm 10% tổng bill cho đơn hàng CPG</Text>
                  <Text style={{ fontSize: 20, color: 'black', paddingHorizontal: 5, marginTop: 15 }}>Hết hạn: 30/9/2021</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={{ flex: 1, margin: 5, flexDirection: 'row', borderRadius: 10, backgroundColor: 'white', padding: 10, }}>
              <Image
                style={{ height: 120, width: '30%', borderRadius: 10 }}
                source={{ uri: 'https://media.foody.vn/res/g71/702436/prof/s/foody-mobile-foody-mobile-foody-m.jpg' }}
              />
              <View style={{ flexDirection: 'row', width: '60%', marginLeft: 5 }}>
                <View>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', paddingHorizontal: 5 }}>Giảm 10% tổng bill cho đơn hàng CPG</Text>
                  <Text style={{ fontSize: 20, color: 'black', paddingHorizontal: 5, marginTop: 15 }}>Hết hạn: 30/9/2021</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <View style={{ marginLeft: 0, marginTop: 30, width: '100%', }}>
            <View style={{ flexDirection: 'row', marginLeft: 15, width: '90%' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 30, marginRight: 135 }}>Từ Đối Tác</Text>
              <TouchableOpacity style={{ height: 45, width: '30%', backgroundColor: '#ffffcc', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5, }}>
                <Text style={{ fontSize: 18, color: 'orange', fontWeight: 'bold' }}>Xem Tất Cả</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, backgroundColor: '#ececec', marginBottom: 30, marginRight: 2, marginTop: 10 }}>
              <View>
                <View style={{ flex: 1, margin: 5, flexDirection: 'row', borderRadius: 10, backgroundColor: 'white', padding: 10, }}>
                  <Image
                    style={{ height: 120, width: '30%', borderRadius: 10 }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRaWk4X6uavoREYV6dmybYvEk6eXvq3YDEA&usqp=CAU' }}
                  />
                  <View style={{ flexDirection: 'row', width: '60%', marginLeft: 5 }}>
                    <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', paddingHorizontal: 5 }}>Miễn phí Hồng trà sữa trân  châu (Size:M)</Text>
                    <View style={{ flexDirection: 'column', marginTop: 25, alignItems: 'center', }}>
                      <View style={{ backgroundColor: '#7df96b', borderRadius: 20, height: 40, width: 60, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>599</Text>
                      </View>
                      <Text style={{ fontSize: 20, marginTop: 2 }}>BEAN</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View style={{ flex: 1, margin: 5, flexDirection: 'row', borderRadius: 10, backgroundColor: 'white', padding: 10, }}>
                  <Image
                    style={{ height: 120, width: '30%', borderRadius: 10 }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRaWk4X6uavoREYV6dmybYvEk6eXvq3YDEA&usqp=CAU' }}
                  />
                  <View style={{ flexDirection: 'row', width: '60%', marginLeft: 5 }}>
                    <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', paddingHorizontal: 5 }}>Miễn phí Hồng trà sữa trân  châu (Size:M)</Text>
                    <View style={{ flexDirection: 'column', marginTop: 25, alignItems: 'center', }}>
                      <View style={{ backgroundColor: '#7df96b', borderRadius: 20, height: 40, width: 60, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>599</Text>
                      </View>
                      <Text style={{ fontSize: 20, marginTop: 2 }}>BEAN</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View style={{ flex: 1, margin: 5, flexDirection: 'row', borderRadius: 10, backgroundColor: 'white', padding: 10, }}>
                  <Image
                    style={{ height: 120, width: '30%', borderRadius: 10 }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRaWk4X6uavoREYV6dmybYvEk6eXvq3YDEA&usqp=CAU' }}
                  />
                  <View style={{ flexDirection: 'row', width: '60%', marginLeft: 5 }}>
                    <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', paddingHorizontal: 5 }}>Miễn phí Hồng trà sữa trân  châu (Size:M)</Text>
                    <View style={{ flexDirection: 'column', marginTop: 25, alignItems: 'center', }}>
                      <View style={{ backgroundColor: '#7df96b', borderRadius: 20, height: 40, width: 60, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>599</Text>
                      </View>
                      <Text style={{ fontSize: 20, marginTop: 2 }}>BEAN</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View style={{ flex: 1, margin: 5, flexDirection: 'row', borderRadius: 10, backgroundColor: 'white', padding: 10, }}>
                  <Image
                    style={{ height: 120, width: '30%', borderRadius: 10 }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRaWk4X6uavoREYV6dmybYvEk6eXvq3YDEA&usqp=CAU' }}
                  />
                  <View style={{ flexDirection: 'row', width: '60%', marginLeft: 5 }}>
                    <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', paddingHorizontal: 5 }}>Miễn phí Hồng trà sữa trân  châu (Size:M)</Text>
                    <View style={{ flexDirection: 'column', marginTop: 25, alignItems: 'center', }}>
                      <View style={{ backgroundColor: '#7df96b', borderRadius: 20, height: 40, width: 60, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>599</Text>
                      </View>
                      <Text style={{ fontSize: 20, marginTop: 2 }}>BEAN</Text>
                    </View>
                  </View>
                </View>
              </View>
              <View>
                <View style={{ flex: 1, margin: 5, flexDirection: 'row', borderRadius: 10, backgroundColor: 'white', padding: 10, }}>
                  <Image
                    style={{ height: 120, width: '30%', borderRadius: 10 }}
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRaWk4X6uavoREYV6dmybYvEk6eXvq3YDEA&usqp=CAU' }}
                  />
                  <View style={{ flexDirection: 'row', width: '60%', marginLeft: 5 }}>
                    <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', paddingHorizontal: 5 }}>Miễn phí Hồng trà sữa trân  châu (Size:M)</Text>
                    <View style={{ flexDirection: 'column', marginTop: 25, alignItems: 'center', }}>
                      <View style={{ backgroundColor: '#7df96b', borderRadius: 20, height: 40, width: 60, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>599</Text>
                      </View>
                      <Text style={{ fontSize: 20, marginTop: 2 }}>BEAN</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 260 }}></View>
      </ScrollView>
    </View>
  )
}
