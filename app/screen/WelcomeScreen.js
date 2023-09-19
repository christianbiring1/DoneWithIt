import React from 'react';
import colors from '../config/colors';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.png')}
    >
      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../assets/favicon.png')}/>
      <Text style={styles.text}>We Should see giving to others as an assignment from God</Text>
      </View>
    <View style={styles.loginButton}></View>
    <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary,
  },
  text: {
    fontSize: 20,
    // color: colors.black,
    color: 'tomato',
    fontWeight: 'bold',
    textAlign: 'center'
  }
})