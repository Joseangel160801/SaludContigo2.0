/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { obtenerEventos } from '../helpers/database';

const VerEventosComponent: React.FC = () => {
    const [eventos, setEventos] = useState<Event[]>([]);


  useEffect(() => {
    const obtenerEventosAsync = async () => {
      try {
        const eventosObtenidos = await obtenerEventos();
        setEventos(eventosObtenidos);
      } catch (error) {
        console.log('Error al obtener eventos:', error);
        Alert.alert('Error', 'Ocurrió un error al obtener los eventos');
      }
    };

    obtenerEventosAsync();
  }, []);

  const mostrarEventos = () => {
    console.log('Eventos almacenados:', eventos);
    Alert.alert('Eventos almacenados', JSON.stringify(eventos, null, 2));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={mostrarEventos}>
        <Text style={styles.buttonText}>Mostrar Eventos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3B5998',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default VerEventosComponent;
