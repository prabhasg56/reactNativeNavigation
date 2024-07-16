import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackRoute from './StackRoute'
import { NavigationContainer } from '@react-navigation/native'
import { BottomTabBar } from '@react-navigation/bottom-tabs'
import BottomTabRoute from './BottomTabRoute'
import DrawerRoute from './DrawerRoute'

const MainNavigation = () => {
  return (
    <NavigationContainer>
      {/* <StackRoute/> */}
     {/* <BottomTabRoute/> */}
     <DrawerRoute />
    </NavigationContainer>
  )
}

export default MainNavigation

const styles = StyleSheet.create({})