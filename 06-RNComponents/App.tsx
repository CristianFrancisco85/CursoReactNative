import 'react-native-gesture-handler';
import React from 'react'
import { Navigator } from './src/components/Navigator';
import { ThemeProvider } from './src/contexts/Theme/ThemeContext';

const App = () => {

  return (
    <AppState>
        <Navigator/>
    </AppState>
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
