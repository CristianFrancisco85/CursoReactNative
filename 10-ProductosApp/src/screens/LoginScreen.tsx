import React, { useContext, useEffect } from 'react';
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Background } from '../components/Background';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

interface Props extends StackScreenProps<any,any>{}

export const LoginScreen = (props:Props) => {

    const {navigation} = props
    const {email,password,onChange} = useForm({
        email: '',
        password: '',
    })

    const {signIn,errorMessage,removeError} = useContext(AuthContext)

    useEffect(() => {
        
        if(errorMessage.length > 0){
            Alert.alert('Error',errorMessage,[{text:'Ok',onPress:() => removeError()}])
        }

    },[errorMessage])

    const onLogin = () => {
        Keyboard.dismiss()
        signIn(email,password)
    }

    return (
        <>
            <Background/>

            <KeyboardAvoidingView
                style={{flex:1}}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >

                <View style={loginStyles.formContainer}>

                    <WhiteLogo/>
                    <Text style={loginStyles.title}>Login</Text>

                    <Text style={loginStyles.label}>Email</Text>
                    <TextInput 
                        placeholder='Ingrese su email'
                        placeholderTextColor='rgba(255,255,255,0.4)'
                        keyboardType='email-address'
                        underlineColorAndroid='white'
                        style={loginStyles.inputField}
                        selectionColor='white'
                        autoCapitalize='none'
                        autoCorrect={false}

                        onChangeText={value=>onChange(value,'email')}
                        value={email}
                        onSubmitEditing={onLogin}
                    />

                    <Text style={loginStyles.label}>Password</Text>
                    <TextInput 
                        placeholder='Ingrese su contraseña'
                        placeholderTextColor='rgba(255,255,255,0.4)'
                        underlineColorAndroid='white'
                        style={loginStyles.inputField}
                        selectionColor='white'
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry

                        onChangeText={value=>onChange(value,'password')}
                        value={password}
                        onSubmitEditing={onLogin}
                    />

                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.button}
                            onPress={onLogin}
                        >
                            <Text style={loginStyles.buttonTxt}>
                                Login
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={loginStyles.newUserContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.replace('Register' as never)}
                        >
                            <Text style={{...loginStyles.buttonTxt,fontSize:16}}>
                                Nueva Cuenta
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </KeyboardAvoidingView>

        </>
    )
};
