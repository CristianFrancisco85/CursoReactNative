import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { useEffect } from 'react';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{}

export const Pagina2 = (props:Props) => {

    const { navigation } = props

    useEffect (() => {
        navigation.setOptions({
            title: 'Hola Mundo'
        })
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}> Pagina 2 Screen</Text>
            <Button
                title='Ir a pagina 3'
                onPress={ () => navigation.navigate('Pagina3')}
            >
            </Button>
        </View>
    )
}
