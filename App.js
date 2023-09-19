import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform, Dimensions } from 'react-native';
import WelcomeScreen from './app/screen/WelcomeScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';

export default function App() {
  // console.log(Dimensions.get("window"));
  return (
    <ViewImageScreen />
  );
}

