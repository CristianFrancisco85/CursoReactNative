import { Theme } from "@react-navigation/native"

type ThemeAction = 
    | {type: 'SET_LIGHT_THEME'}
    | {type: 'SET_DARK_THEME'}

export interface ThemeState extends Theme {
    currentTheme: 'light' | 'dark'
    dividerColor: string
    trackColor: string
}

export const lightTheme: ThemeState = {
    currentTheme: 'light',
    dividerColor: 'rgba(0,0,0,0.5)',
    dark: false,
    trackColor: '#D9D9DB',
    colors: {
        primary: '#279cd6',
        background: 'white',
        card: 'green',
        text: 'black',
        border: 'black',
        notification: 'teal',
    }
}

export const darkTheme: ThemeState = {
    currentTheme: 'light',
    dividerColor: 'rgba(255,255,255,0.5)',
    dark: false,
    trackColor: '#D9D9DB',
    colors: {
        primary: '#279cd6',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'white',
        notification: 'teal',
    }
}

export const themeReducer = (state:ThemeState,action:ThemeAction):ThemeState =>{

    switch(action.type){
        case 'SET_LIGHT_THEME':
            return {
                ...lightTheme,
                currentTheme: 'light',
            }
        case 'SET_DARK_THEME':
            return {
                ...darkTheme,
                currentTheme: 'dark',
            }
        default:
            return state
    }

}