import * as React from 'react';
import { Platform, StyleSheet, View, Text,
    Image, TouchableOpacity, Alert, TextInput, ScrollView, SafeAreaView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { auth } from './firebase/firebase';

const ProfileScreen = () => {

    const logout = () => {
            auth.signOut()
                .then(() => {
                        alert('Logout Successful');
                })
                .catch((Error) => { console.log(Error) })
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{
                width: "100%", height: "100%", justifyContent: "center",
                alignSelf: "center", alignContent: "center", alignItems: "center", backgroundColor: "white"
          }}>
            <View style={{ flex: 1, padding: 16 }}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 25,
                            textAlign: 'center',
                            marginBottom: 16
                        }}>
                        You are on Profile Screen
          </Text>
                </View>
                </View>
                <View style={{ marginTop: "10%", width: "80%" }}>
                    <TouchableOpacity style={{
                      /*  borderWidth: 1,*/ height: 42, width: "80%",
                        justifyContent: "left", alignItems: "left",/* borderRadius: 40,*/
                        backgroundColor: "white", alignSelf: "left",fontSize:"25px",flex: 1,flexDirection:"row"
                    }}
                        onPress={() => logout()}
                    >
                        <MaterialCommunityIcons
                            name="logout"
                            color='red'
                            size="25px"
                          /*  style={{ flex:"1"}}*/
                        />
                        <Text style={{ marginLeft:"10px",color: "black",fontSize:"20px" }}>
                            Logout
                    </Text>
                    </TouchableOpacity>
                   
                </View>
            </View>
        </SafeAreaView>
    );
}
export default ProfileScreen;
