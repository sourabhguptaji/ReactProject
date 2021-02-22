import React from 'react';

// Import Navigators from React Navigation
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {DrawerItems,DrawerActions} from 'react-navigation-drawer';
// Import Screens
import HomeScreen from './HomeScreen';
import OrdersScreen from './OrdersScreen';
import ProfileScreen from './ProfileScreen';
import ChatScreen from './ChatScreen';
import NotificationsScreen from './NotificationsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const homeScreenStack = ({ navigation }) => {
    return (
        
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: { backgroundColor: '#42f44b' },
                headerTintColor: '#fff',
                headerTitleStyle: { fontWeight: 'bold' }
            }}>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'Home Page',
                headerRight : () => (
                    <Button title="Logout"></Button>
                )
                 }} />
            <Stack.Screen
                name="Orders"
                component={OrdersScreen}
                options={{ title: 'Orders Page' }} />
            <Stack.Screen
                name="Chat"
                component={ChatScreen}
                options={{ title: 'Chat Page' }} />
            <Stack.Screen
                name="Notifications"
                component={NotificationsScreen}
                options={{ title: 'Notifications Page' }} />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ title: 'Profile Page' }} />
        </Stack.Navigator>
    );
};
const DrawerNavigatorRoutes = (props) => {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
                activeTintColor: 'red',
            }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="home"
                            color='red'
                            size={size}
                        />
                    ),
                }} />
            <Tab.Screen
                name="OrdersScreen"
                component={OrdersScreen}
                options={{
                    tabBarLabel: 'Orders',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="basket"
                            color='red'
                            size={size}
                        />
                    ),
                }} />
            <Tab.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="chat"
                            color='red'
                            size={size}
                        />
                    ),
                }} />
            <Tab.Screen
                name="NotificationsScreen"
                component={NotificationsScreen}
                options={{
                    tabBarLabel: 'Notifications',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="bell"
                            color='red'
                            size={size}
                        />
                    ),
                }} />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons
                            name="account"
                            color='red'
                            size={size}
                        />
                    ),
                }} />
        </Tab.Navigator>
    );
};

export default DrawerNavigatorRoutes;