import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { ThemeContext } from '../contexts/Theme/ThemeContext';
import { styles } from '../theme/appTheme';

interface Props {
    title: string
}

export const HeaderTitle = (props:Props) => {

    const { title } = props
    const {theme:{colors}} = useContext(ThemeContext)

    return (
        <View>
            <Text style={{...styles.title,color:colors.text}}>{title}</Text>
        </View>
    )
}
