import React, { Component, useState } from 'react';
import {
    Platform, StyleSheet, View, Text,
    Image, TouchableOpacity, Alert, TextInput, 
} from 'react-native';
import { color } from 'react-native-reanimated';
import Register from '../components/Register'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as yup from 'yup';
import { Formik } from 'formik'
import {db} from './firebase/firebase';

import { auth } from './firebase/firebase';
function Login({  }) {
    const navigation = useNavigation(); 

    const [useremail, setUserEmail] = useState('');
    const [userpassword, setUserPassword] = useState('');
    const [errortext, setErrortext] = useState('');
 
    const loginValidationSchema = yup.object().shape({
        email: yup
          .string()
          .email("Please enter valid email")
          .required('Email Address is Required'),
        password: yup
          .string()
          .min(6, ({ min }) => `Password must be at least ${min} characters`)
          .required('Password is required'),
      })

    const making_api_call = (values) => {
     /*   db
    .ref('/User')
    .on('value', snapshot => {
        console.log('User Data:',snapshot.val());
    });*/
            auth.signInWithEmailAndPassword(values.email, values.password)
            .then((user) => {
                console.log(user);
                if (user) {
                        console.log(user);
                        alert("successfully login");
                        navigation.navigate('DrawerNavigatorRoutes')
                    }
                })
                .catch((error) => {
                    console.log(error);
                    if (error.code === "auth/invalid-email")
                      setErrortext(error.message);
                    else if (error.code === "auth/user-not-found")
                      setErrortext("No User Found");
                    else {
                      setErrortext(
                        "Please check your email id or password"
                      );
                    }
                  });
    }
        
        return (
            <View style={{
                width: "100%", height: "100%", justifyContent: "center",
                alignSelf: "center", alignContent: "center", alignItems: "center", backgroundColor: "white"
            }}>
                <Image source={require('../assets/Logo.jpeg')}
                    style={{ width: '30%', height: '30%', resizeMode: 'contain', marginTop: '5%' }} />
                {errortext != '' ? (
              <Text style={{ fontSize: 12, color: 'red' }}>
                {errortext}
              </Text>
            ) : null}
                <Formik
                   validationSchema={loginValidationSchema}
                   initialValues={{ email: '', password: '' }}
                   onSubmit={values => making_api_call(values)}
                >
                {({
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  values,
                  errors,
                  touched,
                  isValid,
                }) => (
                <>
                <TextInput name="email"
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                    style={{ height: 42, width: "80%", borderBottomWidth: 1 }}
                />
                {(errors.email && touched.email) &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                }
                <TextInput name="password"
                        placeholder="Password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry
                    style={{ height: 42, width: "80%", borderBottomWidth: 1, marginTop: "10%" }}
                />
                {(errors.password && touched.password) &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                }
                <View style={{ marginTop: "10%", width: "80%" }}>
                    <TouchableOpacity style={{
                        borderWidth: 1, height: 42, width: "80%",
                        justifyContent: "center", alignItems: "center", borderRadius: 40,
                        backgroundColor: "red", alignSelf: "center"
                    }}
                    onPress={handleSubmit}
                    disabled={!isValid}

                    >
                        <Text style={{ color: "white" }}>
                            Login
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 20, alignItems: 'center' }}   
                    >
                        <Text style={{ color: 'green' }}
                            onPress={() => navigation.navigate('Auth',{screen:'Register'})}>
                            don't have any account? Register
                    </Text>
                    </TouchableOpacity>
                </View>
                </>
                )}
              </Formik>
            </View>
        );


    
}
export default Login;

const styles = StyleSheet.create({
    errorText: {
        fontSize: 10,
        color: 'red',
      },
})