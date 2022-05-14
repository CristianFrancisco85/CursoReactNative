import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackNavigation} from './StackNavigation';
import { ThemeContext} from '../contexts/Theme/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuxStackNavigation } from './AuxStackNavigations';


const Tab = createBottomTabNavigator();


export const TabsNavigation = () => {

    const {theme} =useContext(ThemeContext)

    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'rgba(255,255,255,0.90)',
                    borderWidth: 0,
                    shadowColor: 'transparent',
                    elevation: 0,
                    height: 75,
                    position: 'absolute',
                },
                tabBarActiveTintColor: theme.colors.primary,
                tabBarItemStyle: {    
                    marginBottom: 5,
                },
                tabBarLabelStyle : {
                    fontSize: 15,
                },
            }}
            sceneContainerStyle={{ backgroundColor: theme.colors.background }}
        >
        <Tab.Screen 
            name="HomeScreen" 
            component={StackNavigation}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="home-outline" color={color} size={30} />
                ),
            }} 
        />
        <Tab.Screen 
            name="Search" 
            component={AuxStackNavigation}
            options={{
                tabBarIcon: ({ color }) => (
                    <Icon name="search-outline" color={color} size={30} />
                ),
            }}  
        />

        </Tab.Navigator>
    );
}
