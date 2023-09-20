import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';

import WelcomeScreen from './app/screen/WelcomeScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';
import ListingDetailsScreen from './app/screen/ListingDetailsScreen';
import MessagesScreen from './app/screen/MessagesScreen';

export default function App() {
  return (
    <GestureHandlerRootView>
      <MessagesScreen />
    </GestureHandlerRootView>
    // <ViewImageScreen />
    // <WelcomeScreen />
    // <View style={{
    //   backgroundColor: "#f8f4f4",
    //   padding: 20,
    //   paddingTop: 100
    // }}>
    //   <Card
    //     title="Red jacket for sale"
    //     subTitle="$100"
    //     image={require("./app/assets/chris.jpg")}
    //   />
    // </View>
    // <ListingDetailsScreen />
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     paddingTop: Platform.OS === 'android' ? 50 : 0
//   }
// })

