import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ProductListScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Product List</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ProductStack',
        {
          screen: 'ProductDetails',
        }
      )} style={{ backgroundColor: "blue", padding: 5 }}>
        <Text style={{ color: "#fff" }}>Go To Product details</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ProductListScreen

const styles = StyleSheet.create({})