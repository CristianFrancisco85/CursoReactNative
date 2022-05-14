import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from './src/contexts/Theme/ThemeContext';
import { TabsNavigation } from './src/navigation/TabsNavigation';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <TabsNavigation/>
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({children}:any) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default App