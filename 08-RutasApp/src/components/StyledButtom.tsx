import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle, View, Text, StyleSheet } from 'react-native';

interface Props {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

export const StyledButtom = (props:Props) => {

    const { title, onPress, style } = props;

    return(
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={{...styles.blackButtom,...style as any, }}
        >
            <Text style={styles.text}>{title}</Text>

        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({  
    blackButtom: {
        backgroundColor: '#000',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        margin: 15,
    },
    text: {
        color: '#fff',
        fontSize: 15,
    }
});
