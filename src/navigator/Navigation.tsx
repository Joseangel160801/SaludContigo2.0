/* eslint-disable prettier/prettier */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/FormularioCitas';



export type RootStackParams = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}>
     <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ animation: 'default' }} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} options={{ animation: 'default' }} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ animation: 'default' }} />

    </Stack.Navigator>
  );
};
