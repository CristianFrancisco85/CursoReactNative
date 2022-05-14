import React, { useContext } from 'react'
import { StyleSheet, View, Animated, Button, Easing } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../contexts/Theme/ThemeContext';

export const Animation101Screen = () => {

    const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();
    const {theme,theme:{colors}} = useContext(ThemeContext)

    return (
        <View style={styles.container}>
            
            <Animated.View style={{...styles.purpleBox,backgroundColor:colors.primary,opacity,transform:[{translateY:position}]}}></Animated.View>
            <Button title='Fade In' color={colors.primary} onPress={()=>{
                fadeIn();
                startMovingPosition(-100);
            }}></Button>
            <View style={{height:20,backgroundColor:'transparent'}}></View>
            <Button title='Fade Out' color={colors.primary} onPress={()=>{
                fadeOut();
            }}></Button>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    purpleBox: {
        height: 100,
        width: 100,
        marginBottom: 20,
    },

})