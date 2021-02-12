import React, {useState} from 'react';
import {StackActions} from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-community/picker';

const AddButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.addButtonContainer}>
    <Text style={styles.addButtonText}>{title}</Text>
  </TouchableOpacity>
);

const DetailsButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.detailsButtonContainer}>
    <Text style={styles.detailsButtonText}>{title}</Text>
  </TouchableOpacity>
);

const Realm = require('realm');

export default function AddPage({navigation}) {
  const [category, setCategory] = useState('book');
  const [name, setName] = React.useState('');

  // Use set to ensure unique id keys
  let idSet = new Set();

  const generateID = () => {
    let x = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    if( !idSet.has(x) ){
      return x;
    } else {
      generateID();
    }
  }

  const handlePress = () => {
    if (name == '' || name == null) {
      alert('name cannot be empty');
    } else {
      Realm.open({
        schema: [
          {name: 'Entries', properties: {id: 'string', category: 'string', name: 'string'}},
        ],
        schemaVersion: 1,
      }).then((realm) => {
        realm.write(() => {
          realm.create('Entries', {id: generateID(), category: category, name: name});
          navigation.dispatch(StackActions.popToTop());
        });
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>Choose a Category</Text>
      <View style={styles.picker}>
        <Picker
          selectedValue={category}
          style={{height: 200, width: 300}}
          onValueChange={(itemValue, itemIndex) => setCategory(itemValue)}>
          <Picker.Item label="Album" value="albums" />
          <Picker.Item label="Author" value="authors" />
          <Picker.Item label="Band" value="bands" />
          <Picker.Item label="Book" value="books" />
          <Picker.Item label="Misc." value="misc" />
          <Picker.Item label="Movie" value="movies" />
          <Picker.Item label="Music" value="music" />
          <Picker.Item label="Podcast" value="podcasts" />
          <Picker.Item label="Song" value="songs" />
          <Picker.Item label="TV" value="tv" />
          <Picker.Item label="Website" value="websites" />
        </Picker>
      </View>

      <Text style={styles.titleText}>Name</Text>

      <TextInput
        style={styles.textInput}
        onChangeText={(text) => setName(text)}
      />
      <DetailsButton
        onPress={() => navigation.navigate('AddDetails')}
        title={'Add Details'}
      />
      <AddButton onPress={handlePress} title={'Add1'} />
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
    marginTop: 35,
    marginBottom: 30,
    marginLeft: 20,
  },
  picker: {
    alignSelf: 'center',
    //marginBottom: 50,
  },
  textInput: {
    height: 40,
    width: '80%',
    borderColor: 'gray',
    borderBottomWidth: 1,
    alignSelf: 'center',
    marginBottom: 100,
  },
  addButtonContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    elevation: 1,
    backgroundColor: '#000',
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  addButtonText: {
    fontSize: 20,
    color: '#fff',
    marginLeft: 20,
    alignSelf: 'center',
  },
  detailsButtonContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    elevation: 1,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 12,
  },
  detailsButtonText: {
    fontSize: 20,
    color: '#000',
    alignSelf: 'center',
  },
});
