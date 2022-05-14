import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
        screenOptions={{
            cardStyle:{
                backgroundColor: 'white'
            }
        }}
    >
      <Stack.Screen name="HomeScreen" options={{headerShown:false}} component={HomeScreen} />
      <Stack.Screen name="DetailScreen" options={{title:'Detalle'}} component={DetailScreen} />
    </Stack.Navigator>
  )
}