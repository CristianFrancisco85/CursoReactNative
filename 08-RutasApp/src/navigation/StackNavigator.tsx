import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { MapScreen } from '../screens/MapScreen';
import { PermissionsScreen } from '../screens/PermissionsScreen';
import { useContext } from 'react';
import { PermissionsContext } from '../contexts/PermissionContext.tsx/PermissionsContext';
import { LoadingScreen } from '../screens/LoadingScreen';

type RootStackParamList = {
    Map: undefined;
    Permissions: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {

  const {permissions} = useContext(PermissionsContext)

  if(permissions.locationStatus === 'unavailable'){
    return <LoadingScreen/>
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
        cardStyle:{
          backgroundColor:'white'
        },
      }}
    >
      {
        permissions.locationStatus === 'granted' 
        ?<Stack.Screen name="Map" component={MapScreen} />
        :<Stack.Screen name="Permissions" component={PermissionsScreen} />
      }
      
    </Stack.Navigator>
  );
}