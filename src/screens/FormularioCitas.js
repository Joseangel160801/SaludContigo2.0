/* eslint-disable prettier/prettier */
// HomeScreen.js
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Button,
  Modal
} from 'react-native';
import LogoutComponent from '../components/LogoutComponent';
import Formulario from '../components/Formulario';
import CardComponent from '../components/CardComponent';

const HomeScreen = () => {
  const [pacientes, setPacientes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.appBar}>
        <LogoutComponent />
        <Text style={styles.appBarTitle}>SaludContigo</Text>
        <Text style={styles.appBarSubtitle}>Donde tu salud cuenta</Text>
      </View>
      <View style={styles.cardContainer}>
        <CardComponent />
      </View>
      <View style={styles.bottomContainer}>
        <FormularioButton title="Agregar Cita" onPress={handleOpenModal} />
      </View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <Formulario
          setModalVisible={setModalVisible}
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
      </Modal>
    </SafeAreaView>
  );
};

const FormularioButton = ({ title, onPress }) => {
  return <Button title={title} onPress={onPress} color="#6D28D9" />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  appBar: {
    backgroundColor: '#6D28D9',
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
   // borderBottomLeftRadius: 20,
    //borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  appBarTitle: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  appBarSubtitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '400',
    marginTop: 5,
  },
  cardContainer: {
    flex: 1,
  },
  bottomContainer: {
    width: '100%',
    padding: 20,
  },
});

export default HomeScreen;
