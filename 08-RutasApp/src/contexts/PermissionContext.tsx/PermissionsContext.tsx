import React ,{ createContext, useEffect, useState } from 'react';
import { check, PermissionStatus, PERMISSIONS, request, openSettings } from 'react-native-permissions';
import { AppState,Platform } from 'react-native';

export interface PermissionsState {
    locationStatus: PermissionStatus;
}

export const permisionInitState: PermissionsState = {
    locationStatus: 'unavailable',
}

type PermissionContextProps = {
    permissions: PermissionsState;
    requestPermissions: () => void;
    checkPermissions: () => void;
}

export const PermissionsContext = createContext({} as PermissionContextProps);

export const PermissionsProvider = ({ children }: any) => {

    const [permissions, setPermissions] = useState(permisionInitState);

    useEffect(() => {
        checkPermissions();
        AppState.addEventListener('change', state => {
            if (state === 'active') {
                checkPermissions();
            }
        })
    }, []);

    const checkPermissions = async () => {
        let permissionStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            permissionStatus = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
            permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus,
        });
    }

    const requestPermissions = async () => {
        let permissionStatus: PermissionStatus;

        if (Platform.OS === 'ios') {
            permissionStatus = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
        } else {
            permissionStatus = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
        }

        if(permissionStatus === 'blocked'){
            openSettings();
        }

        setPermissions({
            ...permissions,
            locationStatus: permissionStatus,
        });
    }

    return (
        <PermissionsContext.Provider
            value={{
                permissions,
                checkPermissions,
                requestPermissions,
            }}
        >
            {children}
        </PermissionsContext.Provider>
    );
};
