import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      { icon &&
        <MaterialCommunityIcons name={icon} size={20} color={colors.medium}
          style={styles.icon}
        />
      }
      <TextInput style={styles.textInput} {...otherProps}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  },
  textInput: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
  }
})
export default AppTextInput;