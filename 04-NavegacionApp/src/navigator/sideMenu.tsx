
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';

import { StackNavigator } from './stackNavigator';
import { Settings } from '../screens/Settings';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const SideMenu = () => {

  const {width} = useWindowDimensions()
  const drawerType = width > 500 ? 'permanent' : 'slide'

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: drawerType,
      }}
    >
      <Drawer.Screen name="StackNavigator" options={{title:'Home'}} component={StackNavigator} />
      <Drawer.Screen name="Settings" options={{title:'Configuracion'}} component={Settings} />
    </Drawer.Navigator>
  );
}