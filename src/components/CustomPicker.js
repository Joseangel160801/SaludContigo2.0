/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';

const CustomPicker = ({ items, selectedItem, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => {
      setModalVisible(false);
      onSelect(item);
    }}>
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <TouchableOpacity style={styles.selectedItem} onPress={() => setModalVisible(true)}>
        <Text>{selectedItem ? selectedItem.label : 'Seleccione una opción'}</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={items}
              renderItem={renderItem}
              keyExtractor={item => item.value}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  selectedItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '70%',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default CustomPicker;
