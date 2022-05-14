import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { appStyles } from '../theme/appTheme';
import { PermissionsContext } from '../contexts/PermissionContext.tsx/PermissionsContext';
import { StyledButtom } from '../components/StyledButtom';

export const PermissionsScreen = () => {

    const {permissions,requestPermissions} = useContext(PermissionsContext)


    return (
        <View style={styles.container}>

            <Text style={{...appStyles.mediumText,color:'black',textAlign:'center'}}>
                Concede permiso de GPS para usar esta aplicacion
            </Text>

            <StyledButtom
                title="Request Permissions"
                onPress={() => requestPermissions()}
            />

            <Text style={{...appStyles.mediumText,color:'black'}}>{JSON.stringify(permissions)}</Text>

        </View>
    );

};

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'

    }
});
