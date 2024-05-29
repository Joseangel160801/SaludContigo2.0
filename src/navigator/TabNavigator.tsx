/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
//Morphy De oleo 
//2020-9904
import React from 'react';
//import { StyleSheet,  } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../screens/LoginScreen';




const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Eventos"
        component={LoginScreen}
       
      />

      
    </Tab.Navigator>
  );
};

export default TabNavigator;

//const styles = StyleSheet.create({})
