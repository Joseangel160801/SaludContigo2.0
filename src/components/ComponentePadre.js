/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { View, Button, StyleSheet, Modal } from 'react-native';
import Formulario from './Formulario'; // Ajusta la ruta según la ubicación del archivo Formulario

const ComponentePadre = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);

  const abrirModal = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Button title="Abrir Modal" onPress={abrirModal} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={cerrarModal}
      >
        <View style={styles.modalContainer}>
          <Formulario
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            pacientes={pacientes}
            setPacientes={setPacientes}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semitransparente detrás del modal
  },
});

export default ComponentePadre;
