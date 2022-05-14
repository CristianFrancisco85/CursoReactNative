import React, { useContext } from 'react'
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useForm } from '../hooks/useForm';
import { styles as appStyles } from '../theme/appTheme';
import { CustomSwitch } from '../components/CustomSwitch';
import { HeaderTitle } from '../components/HeaderTitle';
import { ThemeContext } from '../contexts/Theme/ThemeContext';

export const TextInputScreen = () => {

    const {form,handleChange} = useForm({
        name: '',
        email: '',
        phone: '',
        isSubcribed: false
    })

    const {theme,theme:{colors}} = useContext(ThemeContext)

    return (
        <ScrollView style={appStyles.globalMargin}>
            
            <HeaderTitle title="Text Input" />

            <View>
                <Text style={{...appStyles.title,color:colors.text}}>{JSON.stringify(form,null,3)}</Text>
            </View>

            <TextInput
                style={{...styles.textInput,borderColor:colors.border,color:colors.text}}
                placeholderTextColor={theme.dividerColor}
                placeholder='Ingrese su nombre'
                autoCorrect={false}
                autoCapitalize='words'
                onChangeText={(value) => handleChange('name', value)}
            />
            <TextInput
                style={{...styles.textInput,borderColor:colors.border,color:colors.text}}
                placeholderTextColor={theme.dividerColor}
                placeholder='Ingrese su email'
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={(value) => handleChange('email', value)}
                keyboardType='email-address'
            />
            <TextInput
                style={{...styles.textInput,borderColor:colors.border,color:colors.text}}
                placeholderTextColor={theme.dividerColor}
                placeholder='Ingrese su teléfono'
                onChangeText={(value) => handleChange('phone', value)}
                keyboardType='phone-pad'
            />

            <View  style={styles.switchRow}>
                <Text style={{...appStyles.texto,color:colors.text}}>Subscribirme</Text>
                <CustomSwitch
                    isOn={form.isSubcribed}
                    onChange={(value) => handleChange('isSubcribed', value)}
                />
            </View>
                
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderRadius: 15,
    },
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    }
})
