import React, { createContext, useReducer } from 'react'
import { authReducer } from './authReducer';

export interface AuthState{
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

export const authInitialState: AuthState = {
    isLoggedIn: false,
    userName: undefined,
    favoriteIcon: undefined
}

export interface AuthContextProps{
    authState: AuthState;
    signIn: (userName: string, favoriteIcon: string) => void;
    signOut: () => void;
    updateFavoriteIcon: (favoriteIcon: string) => void;
    updateUserName: (userName: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}:any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = (userName: string, favoriteIcon: string) => {
        dispatch({
            type: 'SIGN_IN',
            payload: {
                userName,
                favoriteIcon
            }
        })
    }

    const signOut = () => {
        dispatch({
            type: 'SIGN_OUT'
        })
    }

    const updateFavoriteIcon = (favoriteIcon: string) => {
        dispatch({
            type: 'UPDATE_FAVORITE_ICON',
            payload: {
                favoriteIcon
            }
        })
    }

    const updateUserName = (userName: string) => {
        dispatch({
            type: 'UPDATE_USER_NAME',
            payload: {
                userName
            }
        })
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            signOut,
            updateFavoriteIcon,
            updateUserName
        }}>
            {children}
        </AuthContext.Provider>
    )
}


