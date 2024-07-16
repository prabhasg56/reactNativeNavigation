import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackRoute from './StackRoute';
import CustomDrawer from '../CustomDrawer';
import BottomTabRoute from './BottomTabRoute';

const Drawer = createDrawerNavigator();

const DrawerRoute = () => {
  return (
    <Drawer.Navigator initialRouteName='StackRoute'
      drawerContent={(props) => <CustomDrawer {...props} />}       
      screenOptions={
        {
          drawerStyle: {
            // width: Dimensions.get('window').width,
          },
          drawerPosition: "left",
          headerShown: false
        }
      }
    >
      <Drawer.Screen name="StackRoute" component={StackRoute} options={{headerShown:"false"}}/>
      {/* <Drawer.Screen name="BottomTabRoute" component={BottomTabRoute} options={{headerShown:"false"}}/> */}
      </Drawer.Navigator>
  )
}

export default DrawerRoute

const styles = StyleSheet.create({})