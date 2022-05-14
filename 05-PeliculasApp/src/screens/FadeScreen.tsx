import React from 'react'
import { View, StyleSheet, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade();

    return (
        <View style={styles.mainContainer}>
            <Animated.View style={{...styles.container,opacity}}>

            </Animated.View>
            <Button title="Fade In" onPress={fadeIn}/>
            <Button title="Fade Out" onPress={fadeOut}/>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    container: {
        width: 150,
        height: 150,
        borderColor: 'white',
        borderWidth: 10,
        backgroundColor: '#084F6A',
    },

});
