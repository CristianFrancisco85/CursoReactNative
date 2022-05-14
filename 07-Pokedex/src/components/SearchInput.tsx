import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props{
    style?:StyleProp<ViewStyle>
    onDebounce:(text:string) => void
}

export const SearchInput = (props:Props) => {

    const {style,onDebounce} = props
    const [textValue,setTextValue] = useState('')
    const {debouncedValue} =  useDebouncedValue(textValue)

    useEffect(() => {
        onDebounce(debouncedValue)
    },[debouncedValue])


    return (
        <View style={{...style as any}}>
            <View style={styles.txtBg}>
                    <TextInput 
                        placeholder='Buscar Pokemon'
                        style={{...styles.txtInput}}
                        placeholderTextColor='grey'
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text) => setTextValue(text)}
                        value={textValue}
                    />
                    <Icon name='search-outline' color='grey' size={25}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    txtBg:{
        backgroundColor:'#f3f1f3',
        borderRadius:50,
        height:40,
        paddingHorizontal:20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    txtInput:{
        flex:1,
        fontSize:16,
        color:'black'
    }

});
