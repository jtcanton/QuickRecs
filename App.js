import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from './components/Landing';
import AuthorListPage from './components/AuthorListPage';
import BookListPage from './components/BookListPage';
import MovieListPage from './components/MovieListPage';
import MusicListPage from './components/MusicListPage';
import PodcastListPage from './components/PodcastListPage';
import WebsiteListPage from './components/WebsiteListPage';
import AddPage from './components/AddPage';
import AddDetails from './components/AddDetails';

import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from 'react-native';

const Stack = createStackNavigator();
//const Realm = require('realm');

export default function App() {
  //const [realm, setRealm] = useState(null);

  let idSet = new Set();
  const trackIDs = () => {
    if (realm != null) {
      realm.array.forEach((element) => {
        idSet.add(element.id);
      });
      //console.log(idSet.entries);
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="AuthorListPage" options={{title: 'Authors'}}>
          {(props) => ( <AuthorListPage /> )}
        </Stack.Screen>
        <Stack.Screen name="BookListPage" options={{title: 'My Books'}}>
          {(props) => ( <BookListPage  /> )}
        </Stack.Screen>
        <Stack.Screen
          name="MovieListPage"
          component={MovieListPage}
          options={{title: 'My Movies'}}
        />
        <Stack.Screen
          name="MusicListPage"
          component={MusicListPage}
          options={{title: 'My Music'}}
        />
        <Stack.Screen
          name="PodcastListPage"
          component={PodcastListPage}
          options={{title: 'My Podcasts'}}
        />
        <Stack.Screen
          name="WebsiteListPage"
          component={WebsiteListPage}
          options={{title: 'My Websites'}}
        />
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <Stack.Screen
          name="AddPage"
          //component={AddPage}
        >
          {(props) => <AddPage {...props} />}
        </Stack.Screen>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <Stack.Screen
          name="AddDetails"
          component={AddDetails}
          options={{title: 'Add Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
