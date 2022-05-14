import React from 'react'
import { View, StyleSheet, Animated, PanResponder } from 'react-native';
import { useRef } from 'react';

export const Animation102Screen = () => {

    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],{
            useNativeDriver:false
        }),
        onPanResponderRelease: () => {
          Animated.spring(
            pan,
            { toValue: { x: 0, y: 0 },useNativeDriver: false},
          ).start();
        },
    });
    

    return (
        <View style={styles.container}>
            
            <Animated.View 
                {...panResponder.panHandlers}
                style={[pan.getLayout(), styles.box]}
            ></Animated.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    box: {
        backgroundColor: '#75CEDB',
        height: 100,
        width: 100,
        borderRadius: 100,
    },
})