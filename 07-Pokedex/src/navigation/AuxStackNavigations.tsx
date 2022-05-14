import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useContext } from 'react';
import { RootStackParamList } from './StackNavigation';
import { ThemeContext } from '../contexts/Theme/ThemeContext';
import { SearchScreen } from '../screens/SearchScreen';
import { PokemonScreen } from '../screens/PokemonScreen';

const auxStack = createStackNavigator<RootStackParamList>();

export const AuxStackNavigation = () => {

    const {theme} =useContext(ThemeContext)

    return (
    <auxStack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            cardStyle:{
                backgroundColor: theme.colors.background
            }
        }}
    >
        <auxStack.Screen name="Home" component={SearchScreen} />
        <auxStack.Screen name="Pokemon" component={PokemonScreen} />
    </auxStack.Navigator>
    );
}