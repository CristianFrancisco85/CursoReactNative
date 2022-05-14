import React from 'react'
import { TouchableOpacity, View, Text, StyleSheet, TouchableNativeFeedback,Platform } from 'react-native';


interface FabProps {
    title: string;
    position?: 'br' | 'bl' 
    onPress: () => void;
}

export const Fab = (props:FabProps) => {

    const {title,onPress,position = 'br'} = props

    const ios = () => {
        return (

            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.7}
                style={[
                    styles.fabLocation,
                    position === 'br' ? styles.right : styles.left
                ]}
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>{title}</Text>
                </View>
            </TouchableOpacity>

        )
    }

    const android = () => {
        return (
            <View
                style={[
                    styles.fabLocation,
                    position === 'br' ? styles.right : styles.left
                ]}
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('green', false,30)}
                >
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
                
            </View>
        )
    }

    return Platform.OS === 'ios' ? ios() : android()

}

const styles = StyleSheet.create({

    fab: {
        backgroundColor: '#2196F3',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    fabText:{
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    fabLocation:{  
        position: 'absolute',
        bottom: 25,
    },
    right:{  
        right: 25,
    },
    left:{  
        left: 25,
    },

})