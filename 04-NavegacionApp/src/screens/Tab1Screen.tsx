import React from 'react'
import { Text, View } from 'react-native'
import { useEffect } from 'react';
import { styles } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';



export const Tab1Screen = () => {

    useEffect (() => {
        console.log('Tab1Screen')
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Iconos</Text>
            <Text>
                <TouchableIcon iconName='american-football-outline'></TouchableIcon>
                <TouchableIcon iconName='basketball-outline'></TouchableIcon>
                <TouchableIcon iconName='baseball-outline'></TouchableIcon>
                <TouchableIcon iconName='bicycle-outline'></TouchableIcon>
            </Text>
        </View>
    )
}
