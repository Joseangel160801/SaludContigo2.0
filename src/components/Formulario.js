/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { initDatabase, insertarEvento } from '../helpers/database';

const Formulario = ({ modalVisible, setModalVisible, pacientes, setPacientes }) => {
  const [fotoUri, setFotoUri] = useState('');
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    Centro: '',
    Email: '',
    telefono: '',
    Proceso: '',
    fecha: '',
    Descripcion: '',
    fotoLink: '',
  });

  useEffect(() => {
    initDatabase();
  }, []);

  const handleEnviar = async () => {
    try {
      if (formData.nombre === '' || formData.apellido === '' || formData.Centro === '' || formData.Email === '' || formData.telefono === '' || formData.Proceso === '' || formData.fecha === '' || formData.Descripcion === '') {
        Alert.alert('Error', 'Todos los campos son obligatorios');
        return;
      }

      console.log('Datos a enviar:', { ...formData, fotoUri });
      await insertarEvento(
        formData.nombre,
        formData.apellido,
        formData.Centro,
        formData.Email,
        formData.telefono,
        formData.Proceso,
        formData.fecha,
        formData.Descripcion,
        fotoUri,
        formData.fotoLink
      );
      console.log('Evento registrado:', { ...formData, fotoUri });
      Alert.alert('Éxito', 'Evento registrado correctamente');
      setFormData({
        nombre: '',
        apellido: '',
        Centro: '',
        Email: '',
        telefono: '',
        Proceso: '',
        fecha: '',
        Descripcion: '',
        fotoLink: '',
      });
      setFotoUri('');
      setModalVisible(false);
      
    } catch (error) {
      console.log('Error al registrar evento:', error);
      Alert.alert('Error', 'Ocurrió un error al registrar el evento');
    }
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Paciente</Text>
      <View style={styles.form}>
        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Nombre del paciente"
          placeholderTextColor="#8C8C8C"
          onChangeText={(value) => handleChange('nombre', value)}
          value={formData.nombre}
        />
        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Apellido del paciente"
          placeholderTextColor="#8C8C8C"
          onChangeText={(value) => handleChange('apellido', value)}
          value={formData.apellido}
        />
        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Centro Médico"
          placeholderTextColor="#8C8C8C"
          onChangeText={(value) => handleChange('Centro', value)}
          value={formData.Centro}
        />
        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Correo Electrónico"
          placeholderTextColor="#8C8C8C"
          onChangeText={(value) => handleChange('Email', value)}
          value={formData.Email}
        />
        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Teléfono"
          placeholderTextColor="#8C8C8C"
          onChangeText={(value) => handleChange('telefono', value)}
          value={formData.telefono}
        />
        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholderTextColor="#8C8C8C"
          placeholder="Proceso a Realizar"
          onChangeText={(value) => handleChange('Proceso', value)}
          value={formData.Proceso}
        />
        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Fecha (DD/MM/AAAA)"
          placeholderTextColor="#8C8C8C"
          onChangeText={(value) => handleChange('fecha', value)}
          value={formData.fecha}
        />
        <TextInput
          style={[styles.input, { color: 'black' }]}
          placeholder="Descripción"
          placeholderTextColor="#8C8C8C"
          onChangeText={(value) => handleChange('Descripcion', value)}
          value={formData.Descripcion}
        />
       {/* Botón Enviar */}
       <TouchableOpacity style={[styles.button, styles.sendButton]} onPress={handleEnviar}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
        {/* Botón Cancelar */}
        <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={() => setModalVisible(false)}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6D28D9',
  },
  form: {
    width: '80%',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    //borderColor: '#CCCCCC',
    //borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    borderColor: '#E0E0E0', // Un borde más suave
    borderRadius: 7, // Bordes más redondeados
    elevation: 1, //
    
    
  },
  button: {
    backgroundColor: '#3B5998',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000', // Color de sombra
    shadowOffset: { width: 0, height: 2 }, // Posición de la sombra
    shadowOpacity: 0.1, // Opacidad de la sombra
    shadowRadius: 8, // Radio de la sombra
    elevation: 3, // Elevación para Android
    
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  sendButton: {
    backgroundColor: '#6D28D9', // Cambia el color de fondo
  },
  cancelButton: {
    backgroundColor: '#E72929', // Cambia el color de fondo
  },
});

export default Formulario;


