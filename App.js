import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Platform, Dimensions } from 'react-native';
import AppText from './app/components/AppText';

import WelcomeScreen from './app/screen/WelcomeScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';

export default function App() {
  // console.log(Dimensions.get("window"));
  return (
    // <ViewImageScreen />
    // <WelcomeScreen />
    <View style={styles.container}>
      <AppText >I love React Native</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: Platform.OS === 'android' ? 50 : 0
  }
})

