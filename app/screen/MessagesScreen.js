import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';


import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';


const initialsMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/chris.jpg')
  },
   {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/chris.jpg')
  }
];
function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialsMessages)

  const handleDelete = message => {
    const newMessages = messages.filter(m => m.id !== message.id);
    setMessages(newMessages)
    // Call the Server
  }


  return (
    <Screen style={styles.screen}>
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
        />
    </Screen>
  );
}

const styles = StyleSheet.create({
});

export default MessagesScreen;