import React,{ createContext, useEffect, useReducer } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Usuario, LoginResponse } from '../../interfaces/appInterfaces';
import { authReducer, AuthState } from "./authReducer";
import cafeApi from '../../api/cafeApi';

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: Usuario | null;
    status : 'checking' | 'authenticated' | 'notAuthenticated';
    signUp : (nombre:string, correo: string, password: string) => Promise<void>;
    signIn : (correo: string, password: string) => Promise<void>;
    signOut : () => Promise<void>;
    removeError : () => void;
}

const authInitialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {

    const [state,dispatch] = useReducer(authReducer,authInitialState)

    useEffect(() => {
        checkToken()
    } ,[])

    const checkToken = async () => {
        const token = await AsyncStorage.getItem('token')
        //No hay token
        if (!token) return dispatch({type: 'NOT_AUTH'})

        //Hay token
        const response = await cafeApi.get('/auth')
    
        if(response.status !== 200){
            return dispatch({type: 'NOT_AUTH'})
        }

        await AsyncStorage.setItem('token',response.data.token);
        dispatch({
            type:'SIGN_UP',
            payload:{
                token: response.data.token,
                user: response.data.usuario
            }
        })
    }

    const signUp = async (nombre:string, correo: string, password: string) => {
        try{
            const {data} = await cafeApi.post<LoginResponse>('/usuarios',{nombre,correo,password})
            dispatch({
                type:'SIGN_UP',
                payload:{
                    token: data.token,
                    user: data.usuario
                }
            })
            await AsyncStorage.setItem('token',data.token);
        }
        catch(error:any){
            dispatch({
                type:'ADD_ERROR',
                payload: error.response.data.errors[0].msg || 'Revise la información'
            })
        }
        
    }

    const signIn = async (correo: string, password: string) => {
        try{
            const {data} = await cafeApi.post<LoginResponse>('/auth/login',{correo,password});
            dispatch({
                type:'SIGN_UP',
                payload:{
                    token: data.token,
                    user: data.usuario
                }
            })

            await AsyncStorage.setItem('token',data.token);
        }
        catch(error: any){
            dispatch({
                type:'ADD_ERROR',
                payload: error.response.data.msg || 'Error al autenticar'
            })
        }
    }

    const signOut = async () => {
        await AsyncStorage.removeItem('token')
        dispatch({type: 'NOT_AUTH'})
    }

    const removeError = () => {
        dispatch({
            type:'REMOVE_ERROR'
        })
    }

    return (
        <AuthContext.Provider
            value={{
                ...state,
                signUp,
                signIn,
                signOut,
                removeError
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}