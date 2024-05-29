/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appFirebase from '../../firebase-config';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth(appFirebase);

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Usuario autenticado
      const user = userCredential.user;
      console.log('Usuario autenticado:', user);
      // Aquí puedes navegar a la pantalla de inicio
      navigation.navigate('HomeScreen');
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error al iniciar sesión:', errorMessage);
      // Aquí puedes mostrar un mensaje de error al usuario
    }
  };

  const handleRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.saludText}>Bienvenido a SaludContigo</Text>
        <Text style={styles.saludText2}>Donde tu salud cuenta</Text>
      </View>
      <TextInput
        style={[styles.input, { color: 'black' }]}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, { color: 'black' }]}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={styles.buttonContainer}>
        <Button title="Iniciar sesión" onPress={handleLogin} color="#7E5DEE" />
      </View>
      <TouchableOpacity style={styles.CambiodeSeccion} onPress={handleRegister}>
  <Text style={[styles.loginText, styles.blueText]}>No tienes cuenta? <Text style={styles.greenText}>Registrarse ahora</Text></Text>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  input: {
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 10,
    borderRadius: 11,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  CambiodeSeccion:{
    marginTop: 75,
    textAlign: 'center',
  },
  loginText: {
    marginTop: 20,
    textAlign: 'center',
    margin:10,
  },
  blueText: {
    color: '#003C43',
    fontWeight: 'bold',
    
  },
  greenText: {
    color: '#7E5DEE',
  },
  saludText: {
    fontWeight: 'bold',
    color: 'purple',
    fontSize:20,
  },
  saludText2: {
    fontWeight: 'bold',
    color: 'grey',
    fontSize:20,
    marginTop:10,
    //margin:5,
  },
});
export default LoginScreen;

