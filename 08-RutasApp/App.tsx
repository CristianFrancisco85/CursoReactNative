import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { LogBox } from 'react-native';
import { PermissionsProvider } from './src/contexts/PermissionContext.tsx/PermissionsContext';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
LogBox.ignoreLogs(['new NativeEventEmitter']);

const AppState = ({children}:any) => {
  return(
    <PermissionsProvider>
      {children}
    </PermissionsProvider>
  )

}

const App = () => {
    return (
      
      <NavigationContainer>
        <AppState>
        <StackNavigator/>
        </AppState>
      </NavigationContainer>
    );
};



export default App;
