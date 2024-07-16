import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ProductDetails = ({ navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Product details</Text>
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductDetails

const styles = StyleSheet.create({})