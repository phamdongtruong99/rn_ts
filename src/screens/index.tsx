import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useTheme } from 'react-native-paper';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Root from './Root';

const Stack = createStackNavigator();

export const RootNavigator = (): JSX.Element => {
  const theme = useTheme();
  const navigationTheme = theme.dark ? DarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator
        initialRouteName="Root"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Root" component={Root} />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            gestureEnabled: false,
          }}
        />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
