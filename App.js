import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Register from './components/Register'
import Login from './components/login'
import Splash from './components/splash';
import EditProfileScreen from './components/EditProfileScreen';
import AadharScreen from './components/AadharScreen';
import DrawerNavigatorRoutes from './components/DrawerNavigatorRoutes';
import MaterialCards from './components/HomeComponents/materialCardElectrician';



const Stack = createStackNavigator();

const Auth = ({ navigations }) => {
    // Stack Navigator for Login and Sign up Screen
    return (

        <Stack.Navigator initialRouteName="Register">
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    title: 'Register', //Set Header Title
                    headerStyle: {
                        backgroundColor: '#307ecc', //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            />


        </Stack.Navigator>
    );
};

export default function App() {
 
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                {/* SplashScreen which will come once for 5 Seconds */}
                <Stack.Screen
                    name="SplashScreen"
                    component={Splash}
                    // Hiding header for Splash Screen, Splash
                    options={{ headerShown: false }}
                />
                {/* Auth Navigator: Include Login and Signup */}
                <Stack.Screen
                    name="Auth"
                    component={Auth}
                    options={{ headerShown: false }}
                />
                {/* Navigation Drawer as a landing page */}

            <Stack.Screen
                name="DrawerNavigatorRoutes"
                component={DrawerNavigatorRoutes}
                // Hiding header for Navigation Drawer
                options={{ headerShown: false }}
            />
           
            <Stack.Screen
                name="EditProfileScreen"
                component={EditProfileScreen}
                // Hiding header for Navigation Drawer
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="AadharScreen"
                component={AadharScreen}
                // Hiding header for Navigation Drawer
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="MaterialCards"
                component={MaterialCards}
                // Hiding header for Navigation Drawer
                options={{ headerShown: false }}
            />
            </Stack.Navigator>

        </NavigationContainer>
    );
}

