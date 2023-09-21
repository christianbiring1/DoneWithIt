import { StatusBar } from 'expo-status-bar';
import { Switch } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';

import WelcomeScreen from './app/screen/WelcomeScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';
import ListingDetailsScreen from './app/screen/ListingDetailsScreen';
import MessagesScreen from './app/screen/MessagesScreen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screen/AccountScreen';
import ListingsScreen from './app/screen/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import { useState } from 'react';

export default function App() {
  const [isNew, setIsNew] = useState(false);
  return (
    <GestureHandlerRootView>
      <Screen>
        <Switch
          value={isNew}
          onValueChange={(newValue) => setIsNew(newValue)}
        />
      </Screen>
    </GestureHandlerRootView>
      // <AppTextInput placeholder="UserName" icon="email" />
      // <ListingsScreen />
      // <AccountScreen />
      // <MessagesScreen />
      // <Icon name="email" size={100}/>
    // <ViewImageScreen />
    // <WelcomeScreen />
    // <ListingDetailsScreen />
  );
}

