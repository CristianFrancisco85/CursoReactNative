import React from 'react';
import { View, StyleProp, ViewStyle, TouchableOpacity, StyleSheet } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';

interface Props {
    style? : StyleProp<ViewStyle>
    iconName : string
    onPress : () => void
}

export const Fab = (props:Props) => {

    const { style, iconName, onPress } = props;


    return (
        <View style={{...style as any}}>
            <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.blackButton}>
                <Icon name = {iconName} size={30} color='#fff' />
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({

    blackButton : {
        backgroundColor: 'black',
        zIndex: 10,
        width: 50,
        height: 50,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
    }
});