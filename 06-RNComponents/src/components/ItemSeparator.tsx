import React, { useContext } from 'react'
import { View } from 'react-native'
import { ThemeContext } from '../contexts/Theme/ThemeContext';

export const ItemSeparator = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <View style={{height: 2, backgroundColor: theme.dividerColor}}></View>
    )
}
