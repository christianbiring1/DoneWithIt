import { StatusBar } from 'expo-status-bar';
import { Switch } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import Screen from './app/components/Screen';

import WelcomeScreen from './app/screen/WelcomeScreen';
import ViewImageScreen from './app/screen/ViewImageScreen';
import ListingDetailsScreen from './app/screen/ListingDetailsScreen';
import MessagesScreen from './app/screen/MessagesScreen';
import AccountScreen from './app/screen/AccountScreen';
import ListingsScreen from './app/screen/ListingsScreen';

import { useState } from 'react';
import LoginScreen from './app/screen/LoginScreen';
import ListingEditingScreen from './app/screen/ListingEditingScreen';
import RegisterScreen from './app/screen/RegisterScreen';
import ListItem from './app/components/ListItem';

const categories = [
  {
    label: "Furniture",
    value: 1
  },
  {
    label: "Clothing",
    value: 2
  },
  {
    label: "Cameras",
    value: 3
  }
]

export default function App() {
  const [category, setCategory] = useState(categories[0])
  return (
    <GestureHandlerRootView>
      <Screen>
        <ListItem title="T1" subTitle="My subTitle" image={require('./app/assets/chris.jpg')} />
        <ListItem title="T1" subTitle="My subTitle" image={require('./app/assets/chris.jpg')} />
      </Screen>
    </GestureHandlerRootView>
      // <ListingEditingScreen />
      // <RegisterScreen />
        // <LoginScreen />
        // <AppPicker
        //   selectedItem={category}
        //   onSelectItem={item => setCategory(item)}
        //   icon="apps" items={categories} placeholder="Category"/>
        // <AppTextInput  icon="email" placeholder="Email"/>
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

