import React, { useContext, useEffect } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import { WhiteLogo } from '../components/WhiteLogo';
import { loginStyles } from '../theme/loginTheme';
import { useForm } from '../hooks/useForm';
import { StackScreenProps } from '@react-navigation/stack';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

interface Props extends StackScreenProps<any,any>{}

export const RegisterScreen = (props:Props) => {

    const {signUp,errorMessage,removeError} = useContext(AuthContext)

    const {navigation} = props
    const {email,password,name,onChange} = useForm({
        name: '',
        email: '',
        password: '',
    })

    useEffect(() => {
        
        if(errorMessage.length > 0){
            Alert.alert('Error',errorMessage,[{text:'Ok',onPress:() => removeError()}])
        }

    },[errorMessage])

    const onRegister = () => {
        Keyboard.dismiss()
        signUp(name,email,password)
    }

    return (
        <>

            <KeyboardAvoidingView
                style={{flex:1, backgroundColor:'#5856D6'}}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
            >

                <View style={loginStyles.formContainer}>

                    <WhiteLogo/>
                    <Text style={loginStyles.title}>Registro</Text>

                    <Text style={loginStyles.label}>Nombre</Text>
                    <TextInput 
                        placeholder='Ingrese su nombre'
                        placeholderTextColor='rgba(255,255,255,0.4)'
                        underlineColorAndroid='white'
                        style={loginStyles.inputField}
                        selectionColor='white'
                        autoCapitalize='words'
                        autoCorrect={false}

                        onChangeText={value=>onChange(value,'name')}
                        value={name}

                    />

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
                        onSubmitEditing={onRegister}
                    />

                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.button}
                            onPress={onRegister}
                        >
                            <Text style={loginStyles.buttonTxt}>
                                Crear Cuenta
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={loginStyles.newUserContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.replace('Login' as never)}
                        >
                            <Text style={{...loginStyles.buttonTxt,fontSize:16}}>
                                ¿Ya tienes cuenta?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </KeyboardAvoidingView>

        </>
    )
};
