import React, { useContext, useEffect } from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity, RefreshControl } from 'react-native';
import { ProductsContext } from '../contexts/ProductsContext/ProductsContext';
import { StackScreenProps } from '@react-navigation/stack';
import { ProductsStackParamList } from '../navigator/ProductsNavigator';
import { useState } from 'react';


interface Props extends StackScreenProps<ProductsStackParamList,'ProductsScreen'> {}

export const ProductsScreen = (props:Props) => {

    const {navigation} = props
    const [ isRefreshing, setIsRefreshing ] = useState( false );

    const {products,loadProducts} = useContext(ProductsContext)

    useEffect (() => {
        navigation.setOptions({
            headerRight:() => (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('ProductScreen',{})}
                >
                    <Text style={styles.headerRight}>Agregar</Text>
                </TouchableOpacity>
            )
        })
    } ,[])

    const loadProductsFromBackend = async() => {
        setIsRefreshing(true);
        await loadProducts();
        setIsRefreshing(false);
    }

    return(
        <View style={{
            flex:1,
            marginHorizontal:10,
        }}>
            <FlatList
                data={products}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => (
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => navigation.navigate('ProductScreen',{id:item._id,name:item.nombre})}
                    >
                        <Text style={styles.productName}>{item.nombre}</Text>
                    </TouchableOpacity>
                )}
                ItemSeparatorComponent={() => <View style={styles.itemSeparator}/>}
                refreshControl={
                    <RefreshControl 
                        refreshing={ isRefreshing }
                        onRefresh={ loadProductsFromBackend }
                    />
                }
            />
        </View>
    )
};


const styles = StyleSheet.create({
    productName:{
        fontSize:20,
        color:'black',
    },
    itemSeparator:{
        height:1,
        borderBottomWidth:2,
        borderBottomColor:'rgba(0,0,0,0.2)',
        marginVertical:5
    },
    headerRight:{
        fontSize:16,
        color:'#5658D6',
        marginRight:10
    }

});