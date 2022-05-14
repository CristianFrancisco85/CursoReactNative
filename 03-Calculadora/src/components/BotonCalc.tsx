import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface IProps {
    texto: string;
    color?: string;
    wide?: boolean;
    action: (numeroTexto:string) => void;
}

export const BotonCalc = (props:IProps) => {

    const {texto,color='#2d2d2d',wide=false,action}=props;

    return (
        <TouchableOpacity
        onPress={()=>action(texto)}
        >
        <View 
        style={{
            ...styles.boton,
            backgroundColor:color,
            width:wide ? 180 : 80,
        }}>

            <Text 
            style={{
                ...styles.botonTexto,
                color: color==='#9B9B9B'?'black':'white'
            }}>
                {texto}
            </Text>

        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    boton: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
    }

})
