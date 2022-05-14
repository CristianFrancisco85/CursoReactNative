import React from 'react'
import { View, Text, Button, Alert } from 'react-native';
import { styles } from '../theme/appTheme';
import prompt from 'react-native-prompt-android';
import { HeaderTitle } from '../components/HeaderTitle';

export const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            'Alert Title',
            'Este es un mensaje de alerta',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style:'destructive'
                },
                {
                    text: 'OK',
                    onPress: () => console.log('OK Pressed'),
                    style: 'default',
                },
            ],
            { 
                cancelable: true,
                onDismiss: () => console.log('Dismissed') 
            },
        );
    }

    const showPrompt = () => {
        /* IOS Alert.prompt(
            'Alert Title',
            'Este es un mensaje de alerta',
            (valor:string) => console.log(valor),
            'plain-text',
            'default',
            'numeric'
        );*/
        prompt(
            'Enter password',
            'Enter your password to claim your $1.5B in lottery winnings',
            [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password)},
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );

    }


    return (
        <View style={styles.globalMargin}>
            <View>
                <HeaderTitle title="Alertas" />

                <Button
                    title="Morstar Alerta"
                    onPress={showAlert}
                />
                <View style={{height:20,backgroundColor:'transparent'}}></View>
                <Button
                    title="Morstar Prompt"
                    onPress={showPrompt}
                />
            </View>
        </View>
    )
}
