import React, { useState } from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    View,
    Text,
    SafeAreaView, Image, ScrollView, Dimensions,
    SearchBar
} from 'react-native';
import Search from './HomeComponents/Search';


import Category from './HomeComponents/Category'
import Home from './HomeComponents/ListElectrician'

import ImageSlider from './HomeComponents/ImageSlider';
import MaterialCards from './HomeComponents/materialCardElectrician';


const { height, width } = Dimensions.get('window')


const HomeScreen = ({ navigation }) => {
    const [search, setPhone] = useState()
    

    return (
        <ScrollView>
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ marginTop: 20 }}>
                <Search />
            </View>

                <View style={{ width: '100%', height: '20%', borderColor: 'black' }}>
                    <ImageSlider />
               
            </View>
            <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: '700', paddingHorizontal: 20 }}>
                    What can we help you find, Varun?
                            </Text>
                <View style={{ height: 130, marginTop: 20 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        >
                            <TouchableOpacity >
                        <Category imageUri={{ uri: 'https://2.bp.blogspot.com/-exra_dus6mo/W_JlJF4DSkI/AAAAAAAAAS4/V_31mGftyPYdHfGZhMSK8lWHWplzkJMFQCLcBGAs/s320/Electrician%2BAdelaide%2BHills.jpg'}}
                            name="Electrician"
                                />
                            </TouchableOpacity>
                        <Category imageUri={{ uri: 'https://content3.jdmagicbox.com/def_content/plumbers/default-plumbers-6.jpg' }}
                            name="Plumber"
                        />
                        <Category imageUri={{ uri: 'https://5.imimg.com/data5/CM/TH/ZF/SELLER-12842665/carpenter-500x500.jpg' }}
                            name="Carpenter"
                        />
                    </ScrollView>
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                    Our Best Electrician
                            </Text>
                    <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                        <Home width={width}
                            imagePath="https://in.bmscdn.com/iedb/artist/images/website/poster/large/shah-rukh-khan-2092-12-09-2017-02-10-43.jpg?1"
                            name="shahrukh"
                            type="electrician"
                            price={82}
                            rating={4}
                        />
                        <Home width={width}
                            imagePath="https://static.toiimg.com/thumb/msid-76727614,imgsize-235920,width-800,height-600,resizemode-75/76727614.jpg"
                            name="salman"
                            type="Ac repairer"
                            price={82}
                            rating={4}
                        />
                        <Home width={width}
                            imagePath="https://cdn.siasat.com/wp-content/uploads/2020/12/yacht.jpg"
                            name="munna"
                            type="Light fitting"
                            price={82}
                            rating={4}
                        />
                        <Home width={width}
                            imagePath="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/05/16/Pictures/_b20a4fcc-77f1-11e9-9ebe-bd8a57c16f3e.jpg"
                            name="munna"
                            type="Light fitting"
                            price={82}
                            rating={4}
                        />
                        <Home width={width}
                            imagePath="https://images.indianexpress.com/2020/08/aMAN-VYAS.jpg"
                            name="munna"
                            type="Light fitting"
                            price={82}
                            rating={4}
                        />
                    </View>
            </View>
            

             
            </SafeAreaView>
        </ScrollView>
        
                    
    );
}

export default HomeScreen;