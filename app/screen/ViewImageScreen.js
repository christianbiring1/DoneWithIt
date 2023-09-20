import React from 'react';
import { Image , SafeAreaView, StyleSheet, View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';


import colors from '../config/colors';

function ViewImageScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' color="white" size={35} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name='trash-can-outline' color="white" size={35} />
      </View>
      <Image resizeMode='contain' style={styles.image} source={require("../assets/chair-image.jpeg")}/>
    </SafeAreaView>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: Constants.statusBarHeight,
    left: 20,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    right: 20,
    top: Constants.statusBarHeight
  },
  image: {
    width: "100%",
    height: "100%"
  }
})