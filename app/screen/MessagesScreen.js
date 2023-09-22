import React, { useState } from 'react';
import { FlatList, StyleSheet, View, RefreshControl } from 'react-native';


import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';


const initialsMessages = [
  {
    id: 1,
    title: 'Christian Biringanine',
    description: 'Hey! Is this item still available?',
    image: require('../assets/chris.jpg')
  },
   {
    id: 2,
    title: 'Christian Biringanine',
    description: "I'm interested in this item. When will you be able to post it?",
    image: require('../assets/chris.jpg')
  }
];
function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialsMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = message => {
    const newMessages = messages.filter(m => m.id !== message.id);
    setMessages(newMessages)
    // Call the Server
  }

  const onRefresh = () => {
    // Refresh logic here
    // For example: fetch new data and update the 'messages' state.
    setMessages([{
      id: 2,
      title: 'Christian Biringanine',
      description: "I'm interested in this item. When will you be able to post it?",
      image: require('../assets/chris.jpg')
    }])
    setRefreshing(true)

    setTimeout(() => {
      setRefreshing(false);
    }, 1000)
  }


  return (
    <Screen>
        <FlatList
          data={messages}
          keyExtractor={message => message.id.toString()}
          renderItem={({ item }) =>
            <ListItem 
              title={item.title}
              subTitle={item.description}
              image={item.image}
              onPress={() => console.log('Message Selected', item)}
              renderRightActions={() =>
                <ListItemDeleteAction onPress={() => handleDelete(item)}/>
              }
            />
          }
          ItemSeparatorComponent={ListItemSeparator}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
    </Screen>
  );
}

const styles = StyleSheet.create({
});

export default MessagesScreen;