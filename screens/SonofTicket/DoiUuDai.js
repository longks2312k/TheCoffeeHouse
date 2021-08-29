import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image, SafeAreaView } from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5';

export default function DoiUuDai() {
  return (
    <View>

      <ScrollView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', marginLeft: 15, marginVertical: 15, width: '90%' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 30, marginRight: 50 }}>Từ Coffee House</Text>
          <TouchableOpacity style={{ height: 45, width: '30%', backgroundColor: '#ffffcc', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginHorizontal: 5, }}>
            <Text style={{ fontSize: 18, color: 'orange', fontWeight: 'bold' }}>Xem Tất Cả</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{ flex: 1, marginLeft: 5, backgroundColor: 'white', borderRadius: 10, width: 200, height: 400 }}>
            <View style={{ backgroundColor: 'white' }}>
              <Image
                style={{ height: 180, width: '100%', borderRadius: 10 }}
                source={{ uri: 'https://vuakhuyenmai.vn/wp-content/uploads/2020/12/the-coffee-house-35-5121.jpg' }}
              />
            </View>
            <View style={{ backgroundColor: 'white', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, marginTop: 40, fontWeight: 'bold', paddingHorizontal: 5 }}>Miễn phí Hồng trà sữa trân  châu (Size:M)</Text>
              <View style={{ flexDirection: 'column', marginTop: 25, justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ backgroundColor: '#7df96b', borderRadius: 20, height: 40, width: 60, justifyContent: 'center', alignItems: 'center', }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>599</Text>
                </View>
                <Text style={{ fontSize: 20, marginTop: 2 }}>BEAN</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 5, backgroundColor: 'white', borderRadius: 10, width: 200, height: 400 }}>
            <View style={{ backgroundColor: 'white' }}>
              <Image
                style={{ height: 180, width: '100%', borderRadius: 10 }}
                source={{ uri: 'https://cdn.jamja.vn/blog/wp-content/uploads/2019/10/loi-chuc-20-10.jpg' }}
              />
            </View>
            <View style={{ backgroundColor: 'white', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, marginTop: 40, fontWeight: 'bold', paddingHorizontal: 5 }}>Miễn phí Hồng trà sữa trân  châu (Size:M)</Text>
              <View style={{ flexDirection: 'column', marginTop: 25, justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ backgroundColor: '#7df96b', borderRadius: 20, height: 40, width: 60, justifyContent: 'center', alignItems: 'center', }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>599</Text>
                </View>
                <Text style={{ fontSize: 20, marginTop: 2 }}>BEAN</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 5, backgroundColor: 'white', borderRadius: 10, width: 200, height: 400 }}>
            <View style={{ backgroundColor: 'white' }}>
              <Image
                style={{ height: 180, width: '100%', borderRadius: 10 }}
                source={{ uri: 'https://img.kam.vn/images/414x0/f2b7c19923764a87b165d7899cb5359d/image/airpay-uu-dai-the-coffee-house-giam-20.jpg' }}
              />
            </View>
            <View style={{ backgroundColor: 'white', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, marginTop: 40, fontWeight: 'bold', paddingHorizontal: 5 }}>Miễn phí Hồng trà sữa trân  châu (Size:M)</Text>
              <View style={{ flexDirection: 'column', marginTop: 25, justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ backgroundColor: '#7df96b', borderRadius: 20, height: 40, width: 60, justifyContent: 'center', alignItems: 'center', }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>599</Text>
                </View>
                <Text style={{ fontSize: 20, marginTop: 2 }}>BEAN</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, marginLeft: 5, backgroundColor: 'white', borderRadius: 10, width: 200, height: 400 }}>
            <View style={{ backgroundColor: 'white' }}>
              <Image
                style={{ height: 180, width: '100%', borderRadius: 10 }}
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiYJFhz0JsAbXEGyXN4Ic-canANaaFrPTM8Q&usqp=CAU' }}
              />
            </View>
            <View style={{ backgroundColor: 'white', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontSize: 20, marginTop: 40, fontWeight: 'bold', paddingHorizontal: 5 }}>Miễn phí Hồng trà sữa trân  châu (Size:M)</Text>
              <View style={{ flexDirection: 'column', marginTop: 25, justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ backgroundColor: '#7df96b', borderRadius: 20, height: 40, width: 60, justifyContent: 'center', alignItems: 'center', }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>599</Text>
                </View>
                <Text style={{ fontSize: 20, marginTop: 2 }}>BEAN</Text>
              </View>
            </View>
          </View>
        
        </ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', marginLeft: 15, marginVertical: 15, width: '90%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30, marginRight: 135 }}>Từ Đối Tác</Text>
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
              <View style={{ flexDirection: 'row',width: '60%', marginLeft: 15 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', paddingHorizontal: 5 }}>Miễn phí Hồng trà sữa trân  châu (Size:M)</Text>
                <View style={{ flexDirection: 'column', marginTop: 25,  alignItems: 'center', }}>
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
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7b7kxC4JNfZivNOD_cTF59G_9PYOlW0PGA&usqp=CAU' }}
              />
              <View style={{flexDirection: 'row', width: '60%', marginLeft: 15 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', paddingHorizontal: 5 }}>Miễn phí Hồng trà sữa trân  châu (Size:M)</Text>
                <View style={{ flexDirection: 'column', marginTop: 25,  alignItems: 'center', }}>
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
                source={{ uri: 'https://media.foody.vn/res/g71/702436/prof/s/foody-mobile-foody-mobile-foody-m.jpg' }}
              />
              <View style={{ flexDirection: 'row',width: '60%', marginLeft: 15 }}>
                <Text style={{ fontSize: 20, marginTop: 10, fontWeight: 'bold', paddingHorizontal: 5 }}>Miễn phí Hồng trà sữa trân  châu (Size:M)</Text>
                <View style={{ flexDirection: 'column', marginTop: 25,  alignItems: 'center', }}>
                  <View style={{ backgroundColor: '#7df96b', borderRadius: 20, height: 40, width: 60, justifyContent: 'center', alignItems: 'center', }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>599</Text>
                  </View>
                  <Text style={{ fontSize: 20, marginTop: 2 }}>BEAN</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={{ marginLeft: 15, marginTop: 30, width: '94%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 30, marginRight: 135 }}>Từ Đối Tác</Text>
            <View style={{ backgroundColor: '#ececec', marginBottom: 30, height: 560 ,marginRight:2,marginTop:10}}>
              <TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 }}>
                <Text style={{ marginTop: 18, marginLeft: 15, fontSize: 24 }}>Tất cả</Text>
                <RnIcon style={{ marginTop: 20, marginLeft: 290, }} name="ios-chevron-forward" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 }}>
                <Text style={{ marginTop: 18, marginLeft: 15, fontSize: 24 }}>The Coffee House</Text>
                <RnIcon style={{ marginTop: 20, marginLeft: 163, }} name="ios-chevron-forward" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 }}>
                <Text style={{ marginTop: 18, marginLeft: 15, fontSize: 24 }}>Ăn uống</Text>
                <RnIcon style={{ marginTop: 20, marginLeft: 268, }} name="ios-chevron-forward" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 }}>
                <Text style={{ marginTop: 18, marginLeft: 15, fontSize: 24 }}>Du lịch</Text>
                <RnIcon style={{ marginTop: 20, marginLeft: 282, }} name="ios-chevron-forward" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 }}>
                <Text style={{ marginTop: 18, marginLeft: 15, fontSize: 24 }}>Mua sắm</Text>
                <RnIcon style={{ marginTop: 20, marginLeft: 255, }} name="ios-chevron-forward" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 }}>
                <Text style={{ marginTop: 18, marginLeft: 15, fontSize: 24 }}>Giải trí</Text>
                <RnIcon style={{ marginTop: 20, marginLeft: 285, }} name="ios-chevron-forward" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 }}>
                <Text style={{ marginTop: 18, marginLeft: 15, fontSize: 24 }}>Dịch vụ</Text>
                <RnIcon style={{ marginTop: 20, marginLeft: 275, }} name="ios-chevron-forward" size={30} color="black" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ flex: 1, backgroundColor: 'white', borderRadius: 10, flexDirection: 'row', marginBottom: 3 }}>
                <Text style={{ marginTop: 18, marginLeft: 15, fontSize: 24 }}>Giới hạn</Text>
                <RnIcon style={{ marginTop: 20, marginLeft: 265, }} name="ios-chevron-forward" size={30} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 260 }}></View>
      </ScrollView>
    </View>
  )
}
