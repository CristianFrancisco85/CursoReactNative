import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNav } from './src/navigator/StackNav';
import { LogBox } from 'react-native';
import { AuthProvider } from './src/contexts/AuthContext/AuthContext';
import { ProductsProvider } from './src/contexts/ProductsContext/ProductsContext';

export default function App() {

  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);

  return (
    <NavigationContainer>
      <AppState>
        <StackNav/>
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({children}:any) => {
  return (
    <AuthProvider>
      <ProductsProvider>
        {children}
      </ProductsProvider>
    </AuthProvider>
  )
}