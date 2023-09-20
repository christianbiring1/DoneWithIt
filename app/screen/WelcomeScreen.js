import React from 'react';
import colors from '../config/colors';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppButton from '../components/AppButton';

function WelcomeScreen(props) {
  return (
    <ImageBackground
    blurRadius={4}
      style={styles.background}
      source={require('../assets/background.png')}
    >
      <View style={styles.logoContainer}>
      <Image style={styles.logo} source={require('../assets/favicon.png')}/>
      <Text style={styles.tagline}>Give what you no longer need</Text>
      </View>
      <View style={styles.buttonsContainer}>
      <AppButton title="Login"/>
      </View>
    <View style={styles.buttonsContainer}>
      <AppButton title="Register" color='secondary'/>
    </View>
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
  buttonsContainer: {
    // padding: 5,
    width: "100%"
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
  tagline: {
    fontSize: 25,
    // color: 'tomato',
    fontWeight: '600',
    paddingVertical: 20,
    // textAlign: 'ce'
  }
})