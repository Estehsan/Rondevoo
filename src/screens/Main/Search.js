import React, {useLayoutEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import SearchBar from '../../component/HomeComponent/SearchBar';
import SearchList from '../../component/SearchComponent/SearchList';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BottomBtnCall from '../../component/basic/BottomBtnCall';

import P from '../../component/basic/P';

import {theme} from '../../theme/theme';

import CategoriesData from '../../theme/CategoriesData';
import {Title} from 'react-native-paper';
import CategoriesBox from '../../component/SearchComponent/CategoriesBox';
import H1 from '../../component/basic/H1';
import H2W from '../../component/basic/H2W';
import LeaderBoardTop from '../../component/SearchComponent/LeaderBoardTop';

const Tab = createMaterialTopTabNavigator();

const feature = [
  {
    id: 1,
    img: 'https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg',
    title: 'Apha',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80',

    title: 'Beta',
  },
  {
    id: 3,
    img: 'https://thumbs.dreamstime.com/b/close-up-portrait-nice-person-bristle-show-finger-okey-sign-isolated-pink-color-background-203466939.jpg',

    title: 'Gama',
  },
  {
    id: 4,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfa758-9Zet25uR43OnWUDxPh_5ivrKWg4g&usqp=CAU',
    title: 'John',
  },
  {
    id: 5,
    img: 'https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg',
    title: 'Wow',
  },
];

function Categories({navigation}) {
  return (
    <View style={styles.subcontainer}>
      <View>
        <FlatList
          data={CategoriesData}
          numColumns={3}
          renderItem={({item}) => <CategoriesBox item={item} />}
        />
      </View>
    </View>
  );
}

function Leaderboard({navigation}) {
  return (
    <View style={styles.subcontainer}>
      <LeaderBoardTop />
    </View>
  );
}

const Search = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
      headerTitle: () => <SearchBar navigation={navigation} />,
    });
  }, [navigation]);
  return (
    <SafeAreaView style={styles.background}>
      {/* <SearchBar /> */}
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary,
          tabBarIndicatorStyle: {
            backgroundColor: theme.colors.primary,
            borderRadius: 10,
          },
        }}>
        <Tab.Screen name="Categories" component={Categories} />
        <Tab.Screen name="Leaderboard" component={Leaderboard} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  background: {flex: 1},
  container: {flex: 1},
  seperator: {
    height: 0.5,
    width: '100%',
  },
  subcontainer: {
    flex: 1,
  },
  p30: {
    paddingHorizontal: 30,
  },
});
