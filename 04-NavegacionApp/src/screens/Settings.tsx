import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles, colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon  from 'react-native-vector-icons/Ionicons';


export const Settings = () => {

    const insets = useSafeAreaInsets()

    const {authState} = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Settings Screen</Text>
            <Text style={styles.texto}>{JSON.stringify(authState,null,4)}</Text>
            {authState.favoriteIcon && <Icon name={authState.favoriteIcon} size={80} color={colores.primary} />}
        </View>
    )
}
