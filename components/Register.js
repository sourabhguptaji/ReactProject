 import React, { Component , useState} from 'react';
import {
    Platform, StyleSheet, View, Text,
    Image, TouchableOpacity, Alert, TextInput, ScrollView
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';
import { auth } from './firebase/firebase';

export default function Register({  }) {
    const navigation = useNavigation(); 

    const [useremail, setUserEmail] = useState('');
    const [userpassword, setUserPassword] = useState('');
    const [confirmuserpassword, setConfirmUserPassword] = useState('');
    const handleSubmitPress = () => {

        if (!useremail) {
            alert('Please fill username');
            return false;
        }
        if (!userpassword) {
            alert('Please fill Password');
            return false;
        }
        if (!confirmuserpassword) {
            alert('Please fill Password');
            return false;
        }
        return true;
    }

    

    const making_api_call = () => {
        if (handleSubmitPress()) {
            alert("successfully login")
            auth.createUserWithEmailAndPassword(useremail, userpassword)
                .then(() => {
                    var user = auth.currentUser;
                    if (user) {
                        console.log(user)
                    }
                    else {
                        console.log('Login Failed')
                    }
                })
                .catch((Error) => { console.log(Error) })
        }
    }

    
        return (

            <View style={{
                width: "100%", height: "70%", justifyContent: "center",
                alignSelf: "center", alignContent: "center", alignItems: "center",
            }}>
                <View style={{ width: "50%", height: '30%', justifyContent: "center", alignItems: "center", marginBottom: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight:"bold" }}>Register here</Text>

                </View>
                
                <TextInput placeholder={"email"}
                    value={useremail}
                    onChangeText={(text) =>
                        setUserEmail(text)
                    }                    style={{ height: 42, width: "80%", borderBottomWidth: 1, marginBottom: 30, }}
                />
                <TextInput placeholder={"password"}
                    value={userpassword}
                    onChangeText={(text) =>
                        setUserPassword(text)
                    }                    style={{ height: 42, width: "80%", borderBottomWidth: 1, marginBottom: 30, }}
                />
                <TextInput placeholder={"confirm Password"}
                    value={confirmuserpassword}
                    onChangeText={(text) =>
                        setConfirmUserPassword(text)
                    }
                    style={{ height: 42, width: "80%", borderBottomWidth: 1 }}
                />
                <View style={{ marginTop: "10%", width: "80%" }}>
                    <TouchableOpacity style={{
                        borderWidth: 1, height: 42, width: "80%",
                        justifyContent: "center", alignItems: "center", borderRadius: 40,
                        backgroundColor: "#DC143C", alignSelf: "center"
                    }}
                        onPress={() => making_api_call()}
                    >
                        <Text style={{ color: "white" }}>
                            Register
                    </Text>
                    </TouchableOpacity>
                   
                </View>

            </View>
            
        );
    }

