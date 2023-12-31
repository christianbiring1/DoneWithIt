import React, { useState } from 'react';
import { TextInput, View, StyleSheet, Platform, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'


import defaultStyles from '../config/styles';
import AppText from './AppText';
import PickerItem from './PickerItem';

function AppPicker({ icon, items, onSelectItem, PickerItemComponent = PickerItem,placeholder, selectedItem, width = "100%" }) {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width: width }]}>
          { icon &&
            <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          }
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ): (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}
          <MaterialCommunityIcons name={ modalVisible ? "chevron-up" : "chevron-down"} size={20} color={defaultStyles.colors.medium}/>
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType='slide'>
        <Button title='close' onPress={() => setModalVisible(false)}/>
        <FlatList
          data={items}
          keyExtractor={item => item.value.toString()}
          renderItem={({ item }) =>
            <PickerItemComponent
              label={item.label}
              onPress={() => {
                setModalVisible(false);
                onSelectItem(item);
              }}
            />
          }
        />
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    // width: "100%",
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  }
})
export default AppPicker;