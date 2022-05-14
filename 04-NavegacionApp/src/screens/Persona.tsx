import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { useEffect } from 'react';
import { RootStackParams } from '../navigator/stackNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams,'Persona'>{}

/*interface RouterParams {
    id:number,
    nombre:string,
}*/

export const Persona = (props:Props) => {

    const { navigation,route } = props
    //const params = route.params as RouterParams
    const params = route.params

    const {updateUserName} = useContext(AuthContext)

    useEffect (() => {
        navigation.setOptions({
            title: params.nombre
        })
        updateUserName(params.nombre)
    },[])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {JSON.stringify(params,null,3)}
            </Text>
        </View>
    )
}
