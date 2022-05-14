import React, { useContext } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

export const ProtectedScreen = () => {

    const {user,token,signOut} = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ProtectedScreen</Text>
            <Button 
                title="Log Out"
                color='#5856D6'
                onPress={() => signOut() }
            />

            <Text style={{color:'black'}}>
                {JSON.stringify(user,null,5)}
            </Text>

            <Text style={{color:'black'}}>
                {token}
            </Text>

        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontSize:20,
        marginBottom:20,
        color:'black'
    }
})
