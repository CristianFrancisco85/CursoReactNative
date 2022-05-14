import React from 'react'
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native';
import { useState } from 'react';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {

    const [contador, setContador] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador : {contador} </Text>

            <Fab
                title="+1"
                onPress={() => setContador(contador + 1)}
                position="br"
            ></Fab>

            <Fab
                title="-1"
                onPress={() => setContador(contador - 1)}
                position="bl"
            ></Fab>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title:{
        fontSize: 45,
        textAlign: 'center',
        color: 'black',
        top: -15
    }
})
