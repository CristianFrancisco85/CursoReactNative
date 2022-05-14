
import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { Settings } from '../screens/Settings';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { StackNavigator } from './stackNavigator';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const SideMenuPro = () => {

  const {width} = useWindowDimensions()
  const drawerType = width > 500 ? 'permanent' : 'slide'

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: drawerType,
        headerShown: false,
      }}

      drawerContent={
        props => <InternMenu {...props} />
      }
      
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
}



const InternMenu = (props:DrawerContentComponentProps) => {

    const {navigation} = props

    return (
        <DrawerContentScrollView>

            {/* Avatar del Menu*/}

            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones del Menu*/}

            <View style={styles.menuContainer}>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Tabs')}
                >   
                    <View style={styles.menuItem}> 
                      <Icon name='logo-stackoverflow' size={22} color={colores.primary} />
                      <Text style={styles.texto}>Navegacion</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Settings')}
                >
                    <View style={styles.menuItem}> 
                      <Icon name='settings-outline' size={22} color={colores.primary} />
                      <Text style={styles.texto}>Ajustes</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </DrawerContentScrollView>
    );

}