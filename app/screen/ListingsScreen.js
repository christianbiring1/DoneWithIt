import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';
import colors from '../config/colors';


const listings = [
  {
    id: 1,
    title: 'Blue gray jacket for sale',
    price: 100,
    image: require('../assets/jacket.webp')
  },
  {
    id: 2,
    title: 'Aged couch in somehow good shap :-)',
    price: 1000,
    image: require('../assets/couch-aged.webp')
  },
  {
    id: 3,
    title: 'Couch in great condition',
    price: 1000,
    image: require('../assets/Couch.webp')
  },
  {
    id: 4,
    title: 'A small saloon',
    price: 1000,
    image: require('../assets/chair-image.jpeg')
  },
  {
    id: 5,
    title: 'A blue jacket for sale',
    price: 80,
    image: require('../assets/blue-jacket.webp')
  }
]


function ListingsScreen(props) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={listing => listing.id.toString()}
        renderItem={({ item }) =>
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
      }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  screen: {
    padding: 20,
    marginTop: 10,
    backgroundColor: colors.light
  }
})
export default ListingsScreen;