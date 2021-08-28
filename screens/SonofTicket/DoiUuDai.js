import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image ,SafeAreaView} from 'react-native'
import RnIcon from 'react-native-vector-icons/Ionicons';
import RnIcon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import RnIcon2 from 'react-native-vector-icons/Fontisto';
import RnIcon3 from 'react-native-vector-icons/FontAwesome5';

export default function DoiUuDai() {
  return (
    <View>

      <ScrollView>
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
          <View style={{ flex: 1, marginHorizontal: 5, backgroundColor: 'white', borderRadius: 10, width: 200, height: 400 }}>
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
        </ScrollView>
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
              source={{ uri: 'https://vuakhuyenmai.vn/wp-content/uploads/2020/12/the-coffee-house-35-5121.jpg' }}
            />
            <View style={{ width: '60%', marginLeft: 15 }}>
              <Text style={{ fontSize: 20, marginTop: 40, fontWeight: 'bold', paddingHorizontal: 5 }}>Miễn phí Hồng trà sữa trân  châu (Size:M)</Text>
              <View style={{ flexDirection: 'column', marginTop: 25, justifyContent: 'center', alignItems: 'center', }}>
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
              source={{ uri: 'https://vuakhuyenmai.vn/wp-content/uploads/2020/12/the-coffee-house-35-5121.jpg' }}
            />
            <View style={{ width: '60%', marginLeft: 15 }}>
              <Text style={{ fontSize: 20, marginTop: 40, fontWeight: 'bold', paddingHorizontal: 5 }}>Miễn phí Hồng trà sữa trân  châu (Size:M)</Text>
              <View style={{ flexDirection: 'column', marginTop: 25, justifyContent: 'center', alignItems: 'center', }}>
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
              source={{ uri: 'https://vuakhuyenmai.vn/wp-content/uploads/2020/12/the-coffee-house-35-5121.jpg' }}
            />
            <View style={{ width: '60%', marginLeft: 15 }}>
              <Text style={{ fontSize: 20, marginTop: 40, fontWeight: 'bold', paddingHorizontal: 5 }}>Miễn phí Hồng trà sữa trân  châu (Size:M)</Text>
              <View style={{ flexDirection: 'column', marginTop: 25, justifyContent: 'center', alignItems: 'center', }}>
                <View style={{ backgroundColor: '#7df96b', borderRadius: 20, height: 40, width: 60, justifyContent: 'center', alignItems: 'center', }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'green' }}>599</Text>
                </View>
                <Text style={{ fontSize: 20, marginTop: 2 }}>BEAN</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
