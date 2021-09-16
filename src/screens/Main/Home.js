/* eslint-disable react-native/no-inline-styles */
import React, {useState, useLayoutEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import TopBar from '../../component/HomeComponent/TopBar';
import Background from './../../component/basic/Background';
import H1 from './../../component/basic/H1';
import P from './../../component/basic/P';
import WP from './../../component/basic/WP';
import SearchBar from './../../component/HomeComponent/SearchBar';
import {Avatar, Searchbar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../theme/theme';
import FeedPost from '../../component/HomeComponent/FeedPost';
import {SafeAreaView} from 'react-native-safe-area-context';

const data1 = [
  {
    id: 1,
    name: 'john',
    postContent:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not',
    profileImg: 'https://www.pngmart.com/files/3/Man-PNG-Pic.png',
    postImg:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    likes: 2,
    comment: 10,
    share: 30,
  },
  {
    id: 2,
    name: 'Charkie',
    postContent:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not',
    profileImg: 'https://www.pngmart.com/files/3/Man-PNG-Pic.png',
    postImg:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    likes: 2,
    comment: 10,
    share: 30,
  },
  {
    id: 3,
    name: 'Gama',
    postContent:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not',
    profileImg: 'https://www.pngmart.com/files/3/Man-PNG-Pic.png',
    postImg:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    likes: 2,
    comment: 10,
    share: 30,
  },
];
const data = [
  {
    id: 1,
    category: 'wow',
    icon: 'sports-handball',
    color: theme.colors.primary,
    TextColor: '#fff',
  },
  {
    id: 2,
    category: 'raw',
    icon: 'sports-volleyball',
    color: '#fff',
    TextColor: '#000',
  },
  {
    id: 3,
    category: 'raw',
    icon: 'sports-soccer',
    color: '#fff',
    TextColor: '#000',
  },
];

function BlueBar(props) {
  return (
    <View style={[styles.blueBar, {backgroundColor: props.item.color}]}>
      <MaterialIcons
        name={props.item.icon}
        size={25}
        color={props.item.TextColor}
      />
      <P style={[{color: props.item.TextColor}]}>{props.item.category}</P>
    </View>
  );
}

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.background}>
      <SearchBar navigation={navigation}>
        <TouchableOpacity onPress={navigation.openDrawer}>
          <Icon size={22} name="coins" color="black" />
        </TouchableOpacity>
      </SearchBar>

      <View style={styles.container}>
        {/* <View style={styles.p30}>
          <H1>Categories </H1>
        </View>
        <View
          style={{
            width: Dimensions.get('window').width,
            marginVertical: 5,
            paddingHorizontal: 30,
          }}>
          <FlatList
            data={data}
            horizontal
            renderItem={({item}) => <BlueBar item={item} />}
          />
        </View> */}
        {/* <ScrollView> */}
        <View>
          {/* <View style={styles.p30}>
            <H1>All </H1>
          </View> */}
          <View style={{}}>
            <FlatList
              data={data1}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={styles.FeedPostStyle}>
                  <FeedPost />
                </View>
              )}
            />
          </View>
        </View>
        {/* </ScrollView> */}
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  background: {backgroundColor: 'white'},
  container: {
    backgroundColor: theme.colors.bg,
    // paddingHorizontal: 30,
  },
  blueBar: {
    marginVertical: 10,
    width: '86%',

    justifyContent: 'space-evenly',
    paddingHorizontal: 2,
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 20,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
  },
  ListOfStars: {
    height: 200,
    width: 150,
    borderRadius: 40,
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 30,
    ...theme.colors.customShad,
  },
  colos: {
    color: 'red',
  },
  p30: {
    paddingHorizontal: 30,
  },
  FeedPostStyle: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    marginVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 0.2,
    borderColor: 'silver',
  },
});
