import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/background.png')}
    >
      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../assets/favicon.png')}/>
      <Text>Reach out and give what you don't need'</Text>
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
    backgroundColor: "#fc5c65",
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
    backgroundColor: "#4ecdc4",
  }
})