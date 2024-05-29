/* eslint-disable prettier/prettier */

import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';
import LogoutComponent from '../components/LogoutComponent';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>SaludContigo</Text>
      <Text style={styles.tituloBold}>Donde tu salud cuenta</Text>
      <LogoutComponent />
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 30,
    color: '#374151',
    fontWeight: '600',
    marginBottom: 10,
  },
  tituloBold: {
    fontWeight: '900',
    color: '#6D28D9',
    fontSize: 19,
    marginBottom: 30,
  },
});

export default HomeScreen;
