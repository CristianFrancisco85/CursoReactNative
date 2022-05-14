import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ProductsScreen } from '../screens/ProductsScreen';
import { ProductScreen } from '../screens/ProductScreen';

export type ProductsStackParamList = {
    ProductsScreen : undefined;
    ProductScreen : {id?:string,name?:string};
}

const Stack = createStackNavigator<ProductsStackParamList>()

export const ProductsNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle:{
                    backgroundColor:'white'
                },
                headerStyle:{
                    elevation:0,
                    shadowColor:'transparent'
                }
            }}
        >
            <Stack.Screen name="ProductsScreen" options={{title:'Productos'}} component={ProductsScreen} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} />
        </Stack.Navigator>
    )
};
