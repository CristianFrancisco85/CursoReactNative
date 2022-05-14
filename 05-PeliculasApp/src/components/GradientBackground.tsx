import React, { useContext, useEffect } from 'react'
import { View, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../contexts/GradientContext';
import { useFade } from '../hooks/useFade';

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const GradientBackground = (props:Props) => {

    const {children} = props
    const {colors,prevColors,setPreviousColors} = useContext(GradientContext)
    const {opacity,fadeIn,fadeOut} = useFade()

    useEffect(() => {
        fadeIn(()=>{
            setPreviousColors(colors)
            fadeOut()
        })
    }, [colors])   

    return (
        <View style={{flex: 1,}}>

            <LinearGradient
                colors={[prevColors.primary, prevColors.secondary,'white']}
                style={{...StyleSheet.absoluteFillObject}}
                start={{x: 0.1, y: 0.1}}
                end={{x: 0.5, y: 0.7}}
            />

            <Animated.View style={{
                ...StyleSheet.absoluteFillObject,
               opacity
            }}>
                <LinearGradient
                    colors={[colors.primary, colors.secondary,'white']}
                    style={{...StyleSheet.absoluteFillObject}}
                    start={{x: 0.1, y: 0.1}}
                    end={{x: 0.5, y: 0.7}}
                />
            </Animated.View>

            {children}
        </View>
    )
}
