import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

const Select: REACT.FC = ({ options, selectedValue, onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.selectButton}
      >
        <Text style={styles.selectedValueText}>{selectedValue}</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => {
                onSelect(option.value);
                setModalVisible(false);
              }}
              style={styles.optionItem}
            >
              <Text style={styles.optionText}>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectButton: {
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
  },
  selectedValueText: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  optionItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'lightgray',
  },
  optionText: {
    fontSize: 16,
    color: 'white',
  },
});

export default Select;
