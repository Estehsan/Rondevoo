import React, {useState, useLayoutEffect} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TopBar from '../../component/HomeComponent/TopBar';
import Background from './../../component/basic/Background';
import H1 from './../../component/basic/H1';
import P from './../../component/basic/P';
import WP from './../../component/basic/WP';
import SearchBar from './../../component/HomeComponent/SearchBar';
import {Avatar, Searchbar} from 'react-native-paper';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../theme/theme';

const data1 = [
  {
    id: 1,
    name: 'john',
    color: '#7770ff',
    img: 'https://www.pngmart.com/files/3/Man-PNG-Pic.png',
  },
  {
    id: 2,
    name: 'Charkie',
    color: '#234efe',
    img: 'https://www.pngmart.com/files/3/Man-PNG-Pic.png',
  },
  {
    id: 3,
    name: 'Gama',
    color: '#fb9c01',
    img: 'https://www.pngmart.com/files/3/Man-PNG-Pic.png',
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
    <Background>
      <View style={styles.container}>
        <SearchBar />
        <H1>Find Your</H1>
        <H1>Live Streams </H1>
        <TopBar />
        <H1>Categories </H1>
        <View
          style={{width: Dimensions.get('window').width, marginVertical: 5}}>
          <FlatList
            data={data}
            horizontal
            renderItem={({item}) => <BlueBar item={item} />}
          />
        </View>
        <H1>All </H1>
        <View
          style={{width: Dimensions.get('window').width, marginVertical: 9}}>
          <FlatList
            data={data1}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator="false"
            renderItem={({item}) => (
              <View style={[styles.ListOfStars, {backgroundColor: item.color}]}>
                <WP>{item.name}</WP>
                <Image
                  source={{uri: item.img}}
                  resizeMode="cover"
                  style={{height: '100%', width: '100%', borderRadius: 40}}
                />
              </View>
            )}
          />
        </View>
      </View>
    </Background>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {paddingHorizontal: 30},
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
});
