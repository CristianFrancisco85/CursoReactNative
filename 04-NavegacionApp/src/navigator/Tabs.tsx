import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './stackNavigator';
import { colores, styles } from '../theme/appTheme';
import { Text, Platform } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS/> : <TabsAndroid/>;
}

const TabAndroid = createMaterialBottomTabNavigator();
const TabsAndroid = () =>{
  return (
    <TabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primary,
      }}
      
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {

          let iconName:string='';

          if (route.name === 'Tab1Screen') {
            iconName = 'book-outline';
          }
          else if (route.name === 'TopTabNavigator') {
            iconName = 'stop-circle-outline';
          }
          else if (route.name === 'StackNavigator') {
            iconName = 'layers-outline';
          }
          // You can return any component that you like here!
          return <Icon name={iconName} size={22} color={color} /> ;
        },
      })}
      

    >
      <TabAndroid.Screen name="Tab1Screen" options={{tabBarLabel:'Tab 1'}} component={Tab1Screen} />
      <TabAndroid.Screen name="TopTabNavigator" options={{tabBarLabel:'Top Tab'}} component={TopTabNavigator} />
      <TabAndroid.Screen name="StackNavigator" options={{tabBarLabel:'Stack'}} component={StackNavigator} />
    </TabAndroid.Navigator>
  );
}

const TabIOS = createBottomTabNavigator();
const TabsIOS = () => {
  return (
    <TabIOS.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          let iconName:string='';

          if (route.name === 'Tab1Screen') {
            iconName = focused ? 'T1' : 'T1';
          }
          else if (route.name === 'TopTabNavigator') {
            iconName = focused ? 'TTN' : 'TTN';
          }
          else if (route.name === 'StackNavigator') {
            iconName = focused ? 'Stack' : 'Stack';
          }
          // You can return any component that you like here!
          return <Text style={{color}}>{iconName}</Text>;
        },
        headerShown: false,
        tabBarActiveTintColor: colores.primary,
        tabBarItemStyle: {
          borderTopColor: 'green',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle : {
          fontSize: 20,
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
          height: 75,
        },
      })}
      sceneContainerStyle={{ 
        backgroundColor: colores.background 
      }}
    >
      <TabIOS.Screen name="Tab1Screen" options={{tabBarLabel:'Tab 1'}} component={Tab1Screen} />
      <TabAndroid.Screen name="TopTabNavigator" options={{tabBarLabel:'Top Tab'}} component={TopTabNavigator} />
      <TabIOS.Screen name="StackNavigator" options={{tabBarLabel:'Stack'}} component={StackNavigator} />
    </TabIOS.Navigator>
  );
}