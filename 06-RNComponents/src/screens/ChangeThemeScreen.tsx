import React, { useContext } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ThemeContext } from '../contexts/Theme/ThemeContext';
import { styles } from '../theme/appTheme';
import { HeaderTitle } from '../components/HeaderTitle';

export const ChangeThemeScreen = () => {

    const {setDarkTheme,setLightTheme,theme:{colors}} = useContext(ThemeContext)

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Theme'/>

            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <TouchableOpacity 
                    style={{
                        backgroundColor: colors.primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 150,
                        height: 60,
                        borderRadius: 20,
                    }}
                    activeOpacity={0.8}
                    onPress={setLightTheme}
                >
                    <Text 
                        style={{
                            ...styles.texto,
                            textAlign: 'center',
                            fontSize: 20,
                            color: '#fff',
                        }}
                    >
                        Light
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={{
                        backgroundColor:  colors.primary,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 150,
                        height: 60,
                        borderRadius: 20,
                    }}
                    activeOpacity={0.8}
                    onPress={setDarkTheme}
                >
                    <Text 
                        style={{
                            ...styles.texto,
                            textAlign: 'center',
                            fontSize: 20,
                            color: '#fff',
                        }}
                    >
                        Dark
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

