import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../contexts/Theme/ThemeContext';

export const SwitchScreen = () => {

    const {theme,theme:{colors}} = useContext(ThemeContext)

    const [state, setState] = useState({
        isActive: true,
        isHungry:false,
        isHappy:true
    });

    const onChange = (value: boolean,field:keyof typeof state) => {
        setState({
            ...state,
            [field]: value
        })  
        
    }

    const { isActive, isHungry, isHappy } = state;

    return (
        <View style={{marginHorizontal:20}}>
            <HeaderTitle title="Switch" />

            <View  style={styles.switchRow}>
                <Text style={{...styles.text,color:colors.text}}>isActive</Text>
                <CustomSwitch isOn={isActive} onChange={(value)=> onChange(value,'isActive')}/>
            </View>

            <View  style={styles.switchRow}>
                <Text style={{...styles.text,color:colors.text}}>isHungry</Text>
                <CustomSwitch isOn={isHungry} onChange={(value)=> onChange(value,'isHungry')}/>
            </View>

            <View  style={styles.switchRow}>
                <Text style={{...styles.text,color:colors.text}}>isHappy</Text>
                <CustomSwitch isOn={isHappy} onChange={(value)=> onChange(value,'isHappy')}/>
            </View>

            <Text style={{...styles.text,color:colors.text}}>
                {JSON.stringify(state,null,5)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
    },
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    }

})