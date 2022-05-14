import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { ThemeContext } from '../contexts/Theme/ThemeContext';
import { SimplePokemon } from '../interfaces/IPokemon';


export type RootStackParamList = {
    Home: undefined;
    Pokemon: {
        pokemon:SimplePokemon
        color:string
    };
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigation = () => {

    const {theme} =useContext(ThemeContext)

    return (
    <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown: false,
            cardStyle:{
                backgroundColor: theme.colors.background
            }
        }}
    >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pokemon" component={PokemonScreen} />
    </Stack.Navigator>
    );
}