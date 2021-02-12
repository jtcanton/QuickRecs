import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const LandingButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.landingButtonContainer}>
    <Text style={styles.landingButtonText}>{title}</Text>
  </TouchableOpacity>
);

const CategoryButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.categoryButtonContainer}>
    <Text style={styles.categoryButtonText}>{title}</Text>
  </TouchableOpacity>
);

const AddButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.addButtonContainer}>
    <Text style={styles.addButtonText}>{title}</Text>
  </TouchableOpacity>
);

export default function Landing({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>My Lists</Text>
      <View style={styles.gridStyling}>
        <CategoryButton
          title={'Books'}
          onPress={() => navigation.navigate('BookListPage')}
        />
        <CategoryButton
          title={'Authors'}
          onPress={() => navigation.navigate('AuthorListPage')}
        />
        <CategoryButton
          title={'Podcasts'}
          onPress={() => navigation.navigate('PodcastListPage')}
        />
        <CategoryButton
          title={'Songs'}
          onPress={() => navigation.navigate('BookListPage')}
        />
        <CategoryButton
          title={'Albums'}
          onPress={() => navigation.navigate('BookListPage')}
        />
        <CategoryButton
          title={'Bands'}
          onPress={() => navigation.navigate('BookListPage')}
        />
        <CategoryButton
          title={'Movies'}
          onPress={() => navigation.navigate('MovieListPage')}
        />
        <CategoryButton
          title={'TV'}
          onPress={() => navigation.navigate('BookListPage')}
        />
        <CategoryButton
          title={'Websites'}
          onPress={() => navigation.navigate('BookListPage')}
        />
        <CategoryButton
          title={'Eat'}
          onPress={() => navigation.navigate('BookListPage')}
        />
        <CategoryButton
          title={'Drink'}
          onPress={() => navigation.navigate('BookListPage')}
        />
        <CategoryButton
          title={'Misc.'}
          onPress={() => navigation.navigate('BookListPage')}
        />
      </View>

      <AddButton
        title={'Add Reccomendation'}
        onPress={() => navigation.navigate('AddPage')}></AddButton>
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
  landingButtonContainer: {
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
  landingButtonText: {
    fontSize: 20,
    color: '#000',
    marginLeft: 20,
  },
  addButtonContainer: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 60,
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
  categoryButtonContainer: {
    width: 110,
    height: 110,
    alignSelf: 'center',
    marginVertical: 10,
    elevation: 1,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 15,
    paddingVertical: 20,
  },
  categoryButtonText: {
    fontSize: 20,
    color: '#000',
    alignSelf: 'center',
  },
  gridStyling: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    width: '90%',
    alignSelf: 'center',
  },
});
