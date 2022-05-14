import React, { useContext, useState } from 'react'
import { View, Animated, Image, ActivityIndicator, StyleProp, ImageStyle } from 'react-native';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../contexts/Theme/ThemeContext';

interface Props {
    uri: string
    style?:StyleProp<ImageStyle>
}

export const FadeInImage = (props:Props) => {

    const {uri,style} = props;

    const {opacity,fadeIn} = useAnimation()
    const [loading, setLoading] = useState(true);
    const {theme:{colors}} = useContext(ThemeContext);

    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
        }}>

            {
                loading && <ActivityIndicator size="large" color={colors.primary} style={{position:'absolute'}} /> 
            }

            <Animated.Image
                source={{uri}}
                onLoadEnd={()=>{
                    fadeIn()
                    setLoading(false)
                } }
                style={{
                    ...style as any,
                    opacity,
                }}
            >
            </Animated.Image>
        </View>
    )
}


