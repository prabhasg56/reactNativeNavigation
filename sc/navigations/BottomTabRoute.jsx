import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { HomeStack, ProductStack, ProfileStack } from './StackRoute';

const Tab = createBottomTabNavigator();

const BottomTabRoute = () => {
    return (
        <Tab.Navigator initialRouteName='HomeStack' >
            <Tab.Screen name="HomeStack" component={HomeStack} options={{headerShown:false}} />
            <Tab.Screen name="ProfileStack" component={ProfileStack} options={{headerShown:false}} />
            <Tab.Screen name="ProductStack" component={ProductStack} options={{headerShown:false}} />
        </Tab.Navigator>
    )
}

export default BottomTabRoute

const styles = StyleSheet.create({})