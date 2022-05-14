import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { colores } from '../theme/appTheme';

interface Props {
    iconName: string;
}

export const TouchableIcon = (props:Props) => {

    const {iconName} = props
    const {updateFavoriteIcon} = useContext(AuthContext)

    return (
        <TouchableOpacity
            onPress={()=>updateFavoriteIcon(iconName)}
        >
            <Icon 
                name={iconName} 
                size={80} 
                color={colores.primary} />
        </TouchableOpacity>
    )
}
