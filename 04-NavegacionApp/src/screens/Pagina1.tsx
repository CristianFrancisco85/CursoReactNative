//import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles, colores } from '../theme/appTheme';
import { useEffect } from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

//interface Props extends StackScreenProps<any,any>{}
interface Props extends DrawerScreenProps<any,any>{}

export const Pagina1 = (props:Props) => {

    const { navigation } = props

    useEffect (() => {
        navigation.setOptions({
            headerLeft: () => (
                <TouchableOpacity
                    onPress={() => navigation.toggleDrawer()}
                >
                    <Icon name='menu-outline' size={50} color={colores.primary} />
                </TouchableOpacity>
                
            ),
        })
    }, [])
    
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title} >Pagina 1 Screen</Text>
            <Button
                title='Ir a pagina 2'
                onPress={() => navigation.navigate('Pagina2')}
            />
            <View style={{flexDirection:'row'}}>

                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor:'#5856D6'
                    }}
                    onPress={() => navigation.navigate('Persona',{
                        id:1,
                        nombre:'Pedro',
                    })}
                >   
                    <Icon name='man-outline' size={50} />
                    <Text style={styles.botonGrandeTexto} >Pedro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.botonGrande,
                        backgroundColor:'#FF9427'
                    }}
                    onPress={() => navigation.navigate('Persona',{
                        id:1,
                        nombre:'Maria',
                    })}
                >   
                    <Icon name='woman-outline' size={50} />
                    <Text style={styles.botonGrandeTexto} >Maria</Text>
                </TouchableOpacity>

            </View>
            
        </View>
    )
}
