import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProductListScreen from '../screens/ProductListScreen';
import BottomTabRoute from './BottomTabRoute';
import ProductDetails from '../screens/ProductDetails';

const Stack = createNativeStackNavigator();

export function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>
    );
}

export function ProfileStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export function ProductStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="ProductList" component={ProductListScreen} options={{ headerShown: false }} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} options={{ headerShown: false }} />

        </Stack.Navigator>
    );
}


const StackRoute = () => {
    return (
        <Stack.Navigator initialRouteName='BottomTabRoute'>
            <Stack.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
            <Stack.Screen name="ProfileStack" component={ProfileStack} options={{ headerShown: false }} />
            <Stack.Screen name="ProductStack" component={ProductStack} options={{ headerShown: false }} />
            <Stack.Screen name="BottomTabRoute" component={BottomTabRoute} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default StackRoute

const styles = StyleSheet.create({})