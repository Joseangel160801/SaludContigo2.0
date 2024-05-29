/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { obtenerEventos } from '../helpers/database';
import { eliminarEvento } from '../helpers/database'; // Importamos la función para eliminar eventos

const CardComponent = () => {
  const [eventos, setEventos] = React.useState([]);

  React.useEffect(() => {
    const fetchEventos = async () => {
      try {
        const eventosObtenidos = await obtenerEventos();
        setEventos(eventosObtenidos);
      } catch (error) {
        console.error('Error al obtener eventos:', error);
      }
    };

    fetchEventos();
  }, []);

  const handleEliminarEvento = async (id) => {
    try {
      await eliminarEvento(id);
      // Refrescamos la lista de eventos después de eliminar uno
      const eventosActualizados = await obtenerEventos();
      setEventos(eventosActualizados);
    } catch (error) {
      console.error('Error al eliminar evento:', error);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {eventos.map((evento) => (
          <View key={evento.id} style={styles.card}>
            <Text style={styles.title}>{evento.nombre} {evento.apellido}</Text>
            <View style={styles.details}>
              <Text style={styles.detailText}>Centro: {evento.Centro}</Text>
              <Text style={styles.detailText}>Email: {evento.Email}</Text>
              <Text style={styles.detailText}>Teléfono: {evento.telefono}</Text>
              <Text style={styles.detailText}>Proceso: {evento.Proceso}</Text>
              <Text style={styles.detailText}>Fecha: {evento.fecha}</Text>
              <Text style={styles.detailText}>Descripción: {evento.descripcion}</Text>
              {/* Agregamos el botón de eliminar con su función correspondiente */}
              <TouchableOpacity
                style={styles.eliminarButton}
                onPress={() => handleEliminarEvento(evento.id)}
              >
                <Text style={styles.eliminarButtonText}>Eliminar</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  card: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  details: {
    marginLeft: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  eliminarButton: {
    backgroundColor: 'red',
    paddingVertical: 8,
    paddingHorizontal: 5,
    borderRadius: 4,
    marginTop: 8,
  },
  eliminarButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CardComponent;
