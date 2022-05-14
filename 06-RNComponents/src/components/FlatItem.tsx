import React, { useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MenuItem } from '../interfaces/appInterfaces';
import { useNavigation } from '@react-navigation/core';
import { ThemeContext } from '../contexts/Theme/ThemeContext';

interface Props{
    menuItem: MenuItem
}

export const FlatItem = (props:Props) => {
     
    const { menuItem } = props;
    const {navigate} = useNavigation()
    const {theme:{colors}} = useContext(ThemeContext)

    return (
        <TouchableOpacity
            activeOpacity={0.75}
            onPress={() => navigate(menuItem.component as any)}
        >
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name={menuItem.icon} size={60} color={colors.primary}></Icon>

                <Text style={{marginLeft: 10,color:colors.text}}>{menuItem.name}</Text>

                <Icon name='chevron-forward-outline'  style ={{position:'absolute',right:0}} size={35} color={colors.primary}></Icon>
            </View>
        </TouchableOpacity>
    )

}
