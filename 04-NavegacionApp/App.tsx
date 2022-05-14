import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/stackNavigator';
import { SideMenu } from './src/navigator/sideMenu';
import { SideMenuPro } from './src/navigator/sideMenuPro';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
    <AppState>
      {/* <StackNavigator /> */}
      <SideMenuPro/>
    </AppState>
    </NavigationContainer>
  )
}

const AppState = ({children}:any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App