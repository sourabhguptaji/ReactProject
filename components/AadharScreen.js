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
const AadharScreen = () => {
    const navigation = useNavigation(); 

    const [aadharNo, setAadharNo] = useState('');
    const [errortext, setErrortext] = useState('');
 
    const aadharValidationSchema = yup.object().shape({
      aadharNo: yup
      .string()
      .matches(/^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$/,"Must Contain 12 digits\n"+
      "Should not start with 0 and 1\n"+
      "Should not contain any alphabet and special characters\n"+
      "Should have white space after every 4 digits")
      .required('Aadhar No. is required')
      })

    const making_api_call = (values) => {
     /*   db
    .ref('/User')
    .on('value', snapshot => {
        console.log('User Data:',snapshot.val());
    });*/
    }
        
        return (
            <View style={{
                width: "100%", height: "100%", justifyContent: "center",
                alignSelf: "center", alignContent: "center", alignItems: "center", backgroundColor: "white"
            }}>
                
                <Formik
                   validationSchema={aadharValidationSchema}
                   initialValues={{ aadharNo: '' }}
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
                <TextInput name="aadharNo"
                        placeholder="Enter Aadhar No."
                        onChangeText={handleChange('aadharNo')}
                        onBlur={handleBlur('aadharNo')}
                        value={values.aadharNo}
                        keyboardType="numeric"  
                    style={{ height: 42, width: "80%", borderBottomWidth: 1, marginTop: "10%" }}
                />
                {(errors.aadharNo && touched.aadharNo) &&
                    <Text style={{ fontSize: 10, color: 'red' }}>{errors.aadharNo}</Text>
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
                            Verify
                    </Text>
                    </TouchableOpacity>
                </View>
                </>
                )}
              </Formik>
            </View>
        );


    
}
export default AadharScreen;

const styles = StyleSheet.create({
    errorText: {
        fontSize: 10,
        color: 'red',
      },
})