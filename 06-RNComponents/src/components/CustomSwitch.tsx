import React, { useContext, useState } from 'react'
import { Switch, Platform } from 'react-native';
import { ThemeContext } from '../contexts/Theme/ThemeContext';

interface Props{
    isOn: boolean,
    onChange: (value: boolean) => void
}

export const CustomSwitch = (props:Props) => {

    const { isOn,onChange} = props;

    const [isEnabled, setIsEnabled] = useState(isOn);

    const {theme,theme:{colors}} = useContext(ThemeContext)

    const toggleSwitch = () =>{
        setIsEnabled(!isEnabled)
        onChange(!isEnabled)
    };

    return (
        <Switch
            trackColor={{ false: theme.trackColor , true: colors.primary}}
            thumbColor={(Platform.OS === 'android') ? "#f4f3f4" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}
