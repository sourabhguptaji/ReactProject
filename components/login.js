import React, { Component, useState } from 'react';
import {
    Platform, StyleSheet, View, Text,
    Image, TouchableOpacity, Alert, TextInput, 
} from 'react-native';
import { color } from 'react-native-reanimated';
import Register from '../components/Register'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { auth } from './firebase/firebase';
function Login({  }) {
    const navigation = useNavigation(); 

    const [useremail, setUserEmail] = useState('');
    const [userpassword, setUserPassword] = useState('');
    const [errortext, setErrortext] = useState('');
 
    /* state = {
         username: "",
         password: ""
     }*/
    const handleSubmitPress = () => {
        
        if (!useremail) {
            alert('Please fill username');
            return false;
        }
        if (!userpassword) {
            alert('Please fill Password');
            return false;
        }
         return true;
    }
    
    
         /* validate_field = () => {
             const  { username, password } = this.state
             if (username == "") {
                 alert("Username must not be empty")
                 return false
             }
             else if (password == "") {
                 alert("Password must not be empty")
                 return false
             }
             return true
         }
        */
    const making_api_call = () => {
        if (handleSubmitPress()) {
            alert("successfully login")
            auth.signInWithEmailAndPassword(useremail, userpassword)
                .then(() => {
                    var user = auth.currentUser;
                    if (user) {
                        console.log(user)
                        navigation.navigate('DrawerNavigatorRoutes')
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
                width: "100%", height: "100%", justifyContent: "center",
                alignSelf: "center", alignContent: "center", alignItems: "center", backgroundColor: "white"
            }}>
                <Image source={require('../assets/Logo.jpeg')}
                    style={{ width: '30%', height: '30%', resizeMode: 'contain', marginTop: '5%' }} />

                <TextInput placeholder={"username"}
                    value={useremail}
                    /* onChangeText={(value) => this.setState({ username: value })}*/
                    onChangeText={(text) =>
                        setUserEmail(text)
                    }
                    style={{ height: 42, width: "80%", borderBottomWidth: 1 }}
                />
                <TextInput placeholder={"Password"}
                    /*  onChangeText={(value) => this.setState({ password: value })}*/
                    value={userpassword}
                    onChangeText={(text) =>
                        setUserPassword(text)
                    }
                    style={{ height: 42, width: "80%", borderBottomWidth: 1, marginTop: "10%" }}
                />
                <View style={{ marginTop: "10%", width: "80%" }}>
                    <TouchableOpacity style={{
                        borderWidth: 1, height: 42, width: "80%",
                        justifyContent: "center", alignItems: "center", borderRadius: 40,
                        backgroundColor: "red", alignSelf: "center"
                    }}
                        onPress={making_api_call}


                    >
                        <Text style={{ color: "white" }}>
                            Log in
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 20, alignItems: 'center' }}   
                    >
                        <Text style={{ color: 'green' }}
                            onPress={() => navigation.navigate('Auth')}>
                            don't have any account? Register
                    </Text>
                    </TouchableOpacity>
                </View>

            </View>
        );


    
}
export default Login;