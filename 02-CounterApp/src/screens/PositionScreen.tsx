import React from 'react'
import { StyleSheet, View } from 'react-native';

export const PositionScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.cajaVerde}>

            </View>
            <View style={styles.cajaMorada}>

            </View>
            <View style={styles.cajaNaranja}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#28C4D9',
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#fff',
        position: 'absolute',
        right: 0,
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: '#fff',
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    cajaVerde: {
        backgroundColor: 'green',
        //width: 100,
        //height: 100,
        borderWidth: 10,
        borderColor: '#fff',
        //position: 'absolute',
        //bottom: 0,
        //left: 0,
        //right: 0,
        //top: 0,
        ...StyleSheet.absoluteFillObject
    },

})
