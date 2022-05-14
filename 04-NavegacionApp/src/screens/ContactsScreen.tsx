import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const ContactsScreen = () => {

    const {signIn,signOut,authState} = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Contacts Screen</Text>
            {authState.isLoggedIn
            ?<Button
            title='Sign-Out'
            onPress={signOut}/>
            :<Button
            title='Sign-In'
            onPress={()=>signIn('cristianfrancisco85', 'bug-outline')}/>}
        </View>
    )
}
