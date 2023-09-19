import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform, Text } from 'react-native';
import AppText from './app/components/AppText/AppText';

import WelcomeScreen from './app/screen/WelcomeScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';
import AppButton from './app/components/AppButton';

export default function App() {
  return (
    // <ViewImageScreen />
    <WelcomeScreen />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     paddingTop: Platform.OS === 'android' ? 50 : 0
//   }
// })

