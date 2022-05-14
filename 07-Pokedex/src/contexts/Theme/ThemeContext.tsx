import React,{ createContext, useEffect, useReducer } from "react";
import { useColorScheme } from "react-native";
import { ThemeState, themeReducer, lightTheme, darkTheme } from './themeReducer';

interface ThemeContextProps {
    theme: ThemeState;
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeProvider = ({children}:any) => {

    const colorScheme = useColorScheme()

    const [theme,dispatch] = useReducer(themeReducer, colorScheme === 'dark' ? darkTheme : lightTheme)

    useEffect(() => {
        if (colorScheme === 'dark') {
            setLightTheme()
        } else {
            setLightTheme()
        }
    }, [colorScheme])

    const setDarkTheme = () => {
        dispatch({type: 'SET_DARK_THEME'})
    }

    const setLightTheme = () => {
        dispatch({type: 'SET_LIGHT_THEME'})
    }

    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    )

}