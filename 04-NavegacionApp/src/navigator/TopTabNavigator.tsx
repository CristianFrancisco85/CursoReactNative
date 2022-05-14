import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {

    const {top} = useSafeAreaInsets()

  return (
    <Tab.Navigator 
        style={{paddingTop:top}}
        sceneContainerStyle={{backgroundColor:'white'}}
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color }) => {

                let iconName:string='';
    
                if (route.name === 'Chats') {
                    iconName = 'chatbox-outline';
                }
                else if (route.name === 'Contacts') {
                    iconName = 'people-outline';
                }
                else if (route.name === 'Albums') {
                    iconName = 'images-outline';
                }
                // You can return any component that you like here!
                return <Icon name={iconName} size={20} color={color} />;
            },
            tabBarActiveTintColor: colores.primary,
            tabBarPressColor: colores.primary,
            tabBarShowIcon: true,
            tabBarIndicatorStyle: {
                backgroundColor: colores.primary,
            },
            tabBarStyle: {
                elevation: 0,
                borderTopWidth: 0,
            }
        })}
    >
      <Tab.Screen name="Chats" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  )
}