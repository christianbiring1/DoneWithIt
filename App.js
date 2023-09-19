import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform, Dimensions } from 'react-native';
import WelcomeScreen from './app/screen/WelcomeScreen';

export default function App() {
  // console.log(Dimensions.get("window"));
  return (
    <WelcomeScreen />
  );
}

