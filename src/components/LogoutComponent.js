/* eslint-disable prettier/prettier */

// LogoutComponent.js

// LogoutComponent.js

import React, { useState } from 'react';
import { TouchableOpacity, Modal, Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import appFirebase from '../../firebase-config';
import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth(appFirebase);
const windowWidth = Dimensions.get('window').width;

const LogoutComponent = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.navigate('LoginScreen');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Image
          source={require('../assets/image/maestra.png')}
          style={styles.logoutIcon}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={[styles.modalText, styles.blueText]}>¿Estás seguro de que deseas cerrar sesión?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.button}>
              <Text style={[styles.buttonText, styles.orangeText]}>Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogout} style={[styles.button, styles.buttonLogout]}>
                <Text style={[styles.buttonText, styles.buttonTextLogout]}>Cerrar Sesión</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  logoutIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
    width: windowWidth - 40, // ajusta el ancho del modal
    margin: 20, // ajusta los márgenes del modal
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10, // ajusta el margen superior de los botones
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  blueText: {
    color: '#49243E',
  },
  orangeText: {
    color: '#49243E',
  },
  buttonLogout: {
    backgroundColor: '#FF6347',
  },
  buttonTextLogout: {
    color: 'white',
  },
});

export default LogoutComponent;
