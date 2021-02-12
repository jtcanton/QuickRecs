import React from 'react';
import {StyleSheet, Text, SafeAreaView, View, Pressable} from 'react-native';
import SwipeableFlatList from 'react-native-swipeable-list';
import {useEffect, useState} from 'react/cjs/react.development';

const Realm = require('realm');

const Item = ({item, backgroundColor, textColor, deleteItem}) => {
  return (
    <>
      <View style={styles.item}>
        <View style={styles.messageContainer}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.name} numberOfLines={1}>
            {item.id}
          </Text>
        </View>
      </View>
      <View />
    </>
  );
};

function renderItemSeparator() {
  return <View style={styles.itemSeparator} />;
}

//---------------------------------------------------

export default function AuthorListPage(props) {
  const [books, setBooks] = useState([]);

  function filterBooks(obj) {
    return obj.category == 'authors';
  }

  const queryAllEntryLists = () =>
    new Promise((resolve, reject) => {
      Realm.open({
        schema: [
          {
            name: 'Entries',
            properties: {id: 'string', category: 'string', name: 'string'},
          },
        ],
        schemaVersion: 1,
      }).then((realm) => {
        realm.write(() => {
          let allEntryLists = realm.objects('Entries');
          setBooks(allEntryLists.filter(filterBooks));
          resolve(allEntryLists);
        });
      });
    });

  const deleteItem = (itemId) =>
    new Promise((resolve, reject) => {
      Realm.open({
        schema: [
          {
            name: 'Entries',
            properties: {id: 'string', category: 'string', name: 'string'},
          },
        ],
        schemaVersion: 1,
      })
        .then((realm) => {
          realm.write(() => {
            let location = realm.objects('Entries');
            let target = location.filtered('id = $0', itemId);
            realm.delete(target);
            resolve();
          });
        })
        .catch((error) => reject(error));
        queryAllEntryLists();
    });

  useEffect(() => {
    queryAllEntryLists();
  }, []);

  const QuickActions = (index, qaItem) => {
    return (
      <View style={styles.qaContainer}>
        {/* <View style={[styles.button, styles.button1]}>
          <Pressable onPress={() => archiveItem(qaItem.id)}>
            <Text style={[styles.buttonText, styles.button1Text]}>Archive</Text>
          </Pressable>
        </View>
        <View style={[styles.button, styles.button2]}>
          <Pressable onPress={() => snoozeItem(qaItem.id)}>
            <Text style={[styles.buttonText, styles.button2Text]}>Snooze</Text>
          </Pressable>
        </View> */}
        <View style={[styles.button, styles.button3]}>
          <Pressable onPress={() => deleteItem(qaItem.id)}>
            <Text style={[styles.buttonText, styles.button3Text]}>Delete</Text>
          </Pressable>
        </View>
      </View>
    );
  };

  if (books == null) {
    return (
      <SafeAreaView>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Authors</Text>
      <SafeAreaView>
        {/* {books.map((book,index) => (
          <Text>{book.name}</Text>
        ))} */}
        <SwipeableFlatList
          //keyExtractor={extractItemKey}
          data={books}
          renderItem={({item}) => (
            <Item item={item} deleteItem={() => deleteItem} />
          )}
          maxSwipeDistance={240}
          renderQuickActions={({index, item}) => QuickActions(index, item)}
          contentContainerStyle={styles.contentContainerStyle}
          shouldBounceOnMount={true}
          ItemSeparatorComponent={renderItemSeparator}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 30,
    marginTop: 15,
    marginBottom: 30,
    marginLeft: 20,
  },
  headerContainer: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: '800',
    color: 'blue',
    //opacity: colorEmphasis.high,
  },
  item: {
    backgroundColor: '#fff',
    height: 80,
    flexDirection: 'row',
    padding: 10,
  },
  messageContainer: {
    backgroundColor: '#fff',
    maxWidth: 300,
  },
  name: {
    fontSize: 16,
    color: '#000',
    //opacity: colorEmphasis.high,
    fontWeight: '800',
  },
  subject: {
    fontSize: 14,
    color: '#aaa',
    //opacity: colorEmphasis.high,
    fontWeight: 'bold',
    textShadowColor: '#888',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 4,
  },
  text: {
    fontSize: 10,
    color: '#fff',
    //opacity: colorEmphasis.medium,
  },
  avatar: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    //opacity: colorEmphasis.high,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 7,
    alignSelf: 'center',
    shadowColor: '#777',
    shadowOffset: {width: 1, height: 1},
    shadowRadius: 2,
    //shadowOpacity: colorEmphasis.high,
  },
  itemSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#999',
    //opacity: colorEmphasis.medium,
  },
  qaContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    width: 180,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  buttonText: {
    fontWeight: 'bold',
    //opacity: colorEmphasis.high,
  },
  button1Text: {
    color: 'black',
  },
  button2Text: {
    color: 'grey',
  },
  button3Text: {
    color: 'white',
  },
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
});
