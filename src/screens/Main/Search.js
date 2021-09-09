import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, FlatList} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchBar from '../../component/HomeComponent/SearchBar';
import SearchList from '../../component/SearchComponent/SearchList';

const Tab = createMaterialTopTabNavigator();

const data1 = [
  {
    id: 1,
    Title: 'Graphics & Design',
    iconName: 'aperture-outline',
    sub: 'logo & Brand Indentity,Art & Illustration',
  },
  {
    id: 2,
    Title: 'Design',
    iconName: 'bicycle-outline',
    sub: 'Testing & Testubg Indentity,Art & Illustration',
  },
  {
    id: 3,
    Title: 'Marketing & Development',
    iconName: 'business-outline',
    sub: 'Testing & Testubg Indentity,Art & Illustration',
  },
  {
    id: 4,
    Title: 'Graphics & Design',
    iconName: 'aperture-outline',
    sub: 'logo & Brand Indentity,Art & Illustration',
  },
  {
    id: 5,
    Title: 'Design',
    iconName: 'bicycle-outline',
    sub: 'Testing & Testubg Indentity,Art & Illustration',
  },
  {
    id: 6,
    Title: 'Marketing & Development',
    iconName: 'business-outline',
    sub: 'Testing & Testubg Indentity,Art & Illustration',
  },
  {
    id: 9,
    Title: 'Graphics & Design',
    iconName: 'aperture-outline',
    sub: 'logo & Brand Indentity,Art & Illustration',
  },
  {
    id: 11,
    Title: 'Design',
    iconName: 'bicycle-outline',
    sub: 'Testing & Testubg Indentity,Art & Illustration',
  },
  {
    id: 246,
    Title: 'Marketing & Development',
    iconName: 'business-outline',
    sub: 'Testing & Testubg Indentity,Art & Illustration',
  },
];

function Category({navigation}) {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data1}
        keyExtractor={item => item.id}
        renderItem={({item}) => <SearchList item={item} />}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  );
}

function InterestScreen({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <FlatList
        data={data1}
        keyExtractor={item => item.id}
        renderItem={({item}) => <SearchList item={item} />}
        ItemSeparatorComponent={() => <View style={styles.seperator} />}
      />
    </View>
  );
}

const Search = ({navigation}) => {
  return (
    <SafeAreaView style={styles.background}>
      <SearchBar />
      <Tab.Navigator>
        <Tab.Screen name="Categories" component={Category} />
        <Tab.Screen name="Interest" component={InterestScreen} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  background: {backgroundColor: 'white', flex: 1},
  seperator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
});
