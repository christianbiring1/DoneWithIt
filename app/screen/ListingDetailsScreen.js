import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import ListItem from '../components/ListItem';
import AppText from '../components/AppText';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/chris.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacked for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>
      <View style={styles.userContainer}>
        <ListItem 
          image={require("../assets/chris.jpg")}
          title="Chris"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  userContainer: {
    marginVertical: 40,
  }
})

export default ListingDetailsScreen;