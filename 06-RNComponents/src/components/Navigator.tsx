import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Animation101Screen } from '../screens/Animation101Screen';
import { Animation102Screen } from '../screens/Animation102Screen';
import { SwitchScreen } from '../screens/SwitchScreen';
import { AlertScreen } from '../screens/AlertScreen';
import { TextInputScreen } from '../screens/TextInputScreen';
import { PullToRefreshScreen } from '../screens/PullToRefreshScreen';
import { CustomSectionList } from '../screens/CustomSectionList';
import { ModalScreen } from '../screens/ModalScreen';
import { InfiniteScrollScreen } from '../screens/InfiniteScrollScreen';
import { SlidesScreens } from '../screens/SlidesScreens';
import { ChangeThemeScreen } from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../contexts/Theme/ThemeContext';

export type RootStackParams = {
  Home: undefined;
  Animation101: undefined;
  Animation102: undefined;
  Switch: undefined;
  Alert: undefined;
  TextInput: undefined;
  PullToRefresh: undefined;
  SectionList: undefined;
  Modal: undefined;
  InfiniteScroll: undefined;
  Slides: undefined;
  ChangeTheme: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {

  const {theme} = useContext(ThemeContext)

  return (
    <NavigationContainer
      theme={theme}
    >

    <Stack.Navigator
      screenOptions={{
        headerStyle: {elevation: 0},
        headerShown: false,
      }}

    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Animation101" component={Animation101Screen} />
      <Stack.Screen name="Animation102" component={Animation102Screen} />
      <Stack.Screen name="Switch" component={SwitchScreen} />
      <Stack.Screen name="Alert" component={AlertScreen} />
      <Stack.Screen name="TextInput" component={TextInputScreen} />
      <Stack.Screen name="PullToRefresh" component={PullToRefreshScreen} />
      <Stack.Screen name="SectionList" component={CustomSectionList} />
      <Stack.Screen name="Modal" component={ModalScreen} />
      <Stack.Screen name="InfiniteScroll" component={InfiniteScrollScreen} />
      <Stack.Screen name="Slides" component={SlidesScreens} />
      <Stack.Screen name="ChangeTheme" component={ChangeThemeScreen} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}