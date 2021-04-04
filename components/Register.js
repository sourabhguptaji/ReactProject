 import React, { Component , useState} from 'react';
import {
    Platform, StyleSheet, View, Text,
    Image, TouchableOpacity, Alert, TextInput, ScrollView
} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';
import { auth } from './firebase/firebase';
import * as yup from 'yup';
import { Formik } from 'formik'

export default function Register({  })  {
    const navigation = useNavigation(); 
    const [name, setName] = useState('');
    const [useremail, setUserEmail] = useState('');
    const [userphno, setUserPhno] = useState('');
    const [userpassword, setUserPassword] = useState('');
    const [confirmuserpassword, setConfirmUserPassword] = useState('');
    const [
        isRegistraionSuccess,
        setIsRegistraionSuccess
      ] = useState(false);
    const [errortext, setErrortext] = useState("");

    const signUpValidationSchema = yup.object().shape({
        name: yup
          .string()
          .matches(/(\w.+\s).+/, 'Enter at least 2 names')
          .required('Full name is required'),
        email: yup
          .string()
          .email("Please enter valid email")
          .required('Email is required'),
        phoneNumber: yup
          .string()
          .matches(/^(\+\d{1,3}[- ]?)?\d{10}$/, 'Enter a valid phone number')
          .required('Phone number is required'),
        password: yup
          .string()
          .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
          .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
          .matches(/\d/, "Password must have a number")
          .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
          .min(6, ({ min }) => `Password must be at least ${min} characters`)
          .required('Password is required'),
        confirmPassword: yup
          .string()
          .oneOf([yup.ref('password')], 'Passwords do not match')
          .required('Confirm password is required'),
      })

    const making_api_call = (values) => {
            auth.createUserWithEmailAndPassword(values.email,values.password)
            .then((res) => {
                    if (res) {
                        res.user.updateProfile({
                            displayName: values.name,
                            phoneNumber: values.phoneNumber
                          })
                          .then(() => navigation.navigate('Login'))
                          .catch((error) => {
                            alert(error);
                            console.error(error);
                          });
                      }
                      console.log(res.user.displayName);
                    })
                    .catch((error) => {
                      console.log(error);
                      if (error.code === "auth/email-already-in-use") {
                        setErrortext(
                          "That email address is already in use!"
                        );
                      } else {
                        setErrortext(error.message);
                      }
                    });
                };

    
        return (

            <View style={{
                width: "100%", height: "80%", justifyContent: "center",
                alignSelf: "center", alignContent: "center", alignItems: "center",
            }}>
                <View style={{ width: "50%", height: '25%', justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                    <Text style={{ fontSize: 20, fontWeight:"bold" }}>Register here</Text>
                    {errortext != '' ? (
                    <Text style={{ fontSize: 12, color: 'red' }}>
                    {errortext}
                    </Text>
                ) : null}
                </View>
                <Formik
                  validationSchema={signUpValidationSchema}
                  initialValues={{
                    name: '',
                    email: '',
                    phoneNumber: '',
                    password: '',
                    confirmPassword: '',
                }}
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
                <TextInput name="name"
                    placeholder="Name"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                        style={{ height: 42, width: "80%", borderBottomWidth: 1, marginBottom: 20, }}
                />
                {(errors.name && touched.name) &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.name}</Text>
                }
                <TextInput name="email"
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    keyboardType="email-address"
                        style={{ height: 42, width: "80%", borderBottomWidth: 1, marginBottom: 20, }}
                />
                {(errors.email && touched.email) &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
                }
                <TextInput name="phoneNumber"
                    placeholder="Phone Number"
                    onChangeText={handleChange('phoneNumber')}
                    onBlur={handleBlur('phoneNumber')}
                    value={values.phoneNumber}
                    keyboardType="numeric"         
                       style={{ height: 42, width: "80%", borderBottomWidth: 1, marginBottom: 20, }}
                />
                {(errors.phoneNumber && touched.phoneNumber) &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.phoneNumber}</Text>
                }
                <TextInput name="password"
                        placeholder="Password"
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        secureTextEntry
                        style={{ height: 42, width: "80%", borderBottomWidth: 1, marginBottom: 20, }}
                />
                {(errors.password && touched.password) &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
                }
                <TextInput name="confirmPassword"
                        placeholder="Confirm Password"
                        onChangeText={handleChange('confirmPassword')}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                        secureTextEntry
                    style={{ height: 42, width: "80%", borderBottomWidth: 1 }}
                />
                {(errors.confirmPassword && touched.confirmPassword) &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.confirmPassword}</Text>
                }
                <View style={{ marginTop: "10%", width: "80%" }}>
                    <TouchableOpacity style={{
                        borderWidth: 1, height: 42, width: "80%",
                        justifyContent: "center", alignItems: "center", borderRadius: 40,
                        backgroundColor: "#DC143C", alignSelf: "center"
                    }}
                    onPress={handleSubmit}
                    disabled={!isValid}
                    >
                        <Text style={{ color: "white" }}>
                            Register
                    </Text>
                    </TouchableOpacity>
                   
                </View>
                </>
                )}
              </Formik>
            </View>
            
        );
    }

    const styles = StyleSheet.create({
        errorText: {
            fontSize: 10,
            color: 'red',
          },
    })

