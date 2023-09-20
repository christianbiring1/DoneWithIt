import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import AppText from './app/components/AppText/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';

import WelcomeScreen from './app/screen/WelcomeScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';
import ListingDetailsScreen from './app/screen/ListingDetailsScreen';
import MessagesScreen from './app/screen/MessagesScreen';
import ListItem from './app/components/ListItem';

export default function App() {
  return (
    <GestureHandlerRootView>
      <Screen>
        <ListItem
          title="My title"
          // subTitle="My subTitle"
          ImageComponent={<Icon name="email" />}
        />
      </Screen>
    </GestureHandlerRootView>
      // <MessagesScreen />
      // <Icon name="email" size={100}/>
    // <ViewImageScreen />
    // <WelcomeScreen />
    // <ListingDetailsScreen />
  );
}

