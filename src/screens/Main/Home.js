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
import H2W from './../../component/basic/H2W';
import WP from './../../component/basic/WP';

import P from './../../component/basic/P';
import SearchBar from './../../component/HomeComponent/SearchBar';
import {Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../theme/theme';

import FeedPost from '../../component/HomeComponent/FeedPost';
import FeedData from '../../theme/FeedData';

import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TI from '../../component/basic/TI';
import HorizontalListStars from '../../component/HomeComponent/HorizontalListStars';

const Tab = createMaterialTopTabNavigator();

const data = [
  {
    id: 1,
    category: 'All',
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
  {
    id: 4,
    category: 'raw',
    icon: 'sports-soccer',
    color: '#fff',
    TextColor: '#000',
  },
  {
    id: 5,
    category: 'asd',
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

const Feed = ({navigation}) => {
  const [like, setLike] = useState(false);
  return (
    <View style={styles.container}>
      <View>
        <View>
          <FlatList
            data={FeedData}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View style={styles.FeedPostStyle}>
                <FeedPost item={item} />
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
};
const Calls = ({navigatopm}) => {
  return (
    <View style={styles.callContainer}>
      <ScrollView>
        <View style={styles.p30}>
          <H1>Categories </H1>
        </View>
        <View style={styles.p30}></View>
        <View
          style={{width: Dimensions.get('window').width, marginVertical: 5}}>
          <FlatList
            data={data}
            showsHorizontalScrollIndicator="false"
            horizontal
            renderItem={({item}) => <BlueBar item={item} />}
          />
        </View>

        <View>
          <View style={styles.p30}>
            <H1>Featured </H1>
          </View>
        </View>
        <View
          style={{width: Dimensions.get('window').width, marginVertical: 9}}>
          <FlatList
            data={FeedData}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator="false"
            renderItem={({item}) => <HorizontalListStars item={item} />}
          />
          <View style={styles.p30}>
            <H1>NCAA ATHLETE</H1>
          </View>
        </View>
        <View
          style={{width: Dimensions.get('window').width, marginVertical: 9}}>
          <FlatList
            data={FeedData}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator="false"
            renderItem={({item}) => <HorizontalListStars item={item} />}
          />
          <View style={styles.p30}>
            <H1>FOOTBALL PLAYERS</H1>
          </View>
        </View>
        <View
          style={{width: Dimensions.get('window').width, marginVertical: 9}}>
          <FlatList
            data={FeedData}
            keyExtractor={item => item.id}
            horizontal
            showsHorizontalScrollIndicator="false"
            renderItem={({item}) => <HorizontalListStars item={item} />}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const Home = ({navigation}) => {
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
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Categories" component={Calls} />
    </Tab.Navigator>
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
    justifyContent: 'space-evenly',
    width: 110,

    alignItems: 'center',
    marginRight: 10,
    borderRadius: 20,
    height: 55,
    display: 'flex',
    flexDirection: 'row',
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
    borderWidth: 0.2,
    borderColor: 'silver',
  },
  hp20: {
    paddingHorizontal: 10,
    width: '10%',
  },
  wide: {
    width: '100%',
    flexDirection: 'row',
    display: 'flex',
  },
  bottom: {
    position: 'absolute',
    width: '90%',
    bottom: 0,
    marginHorizontal: '5%',
    height: 80,
    alignItems: 'center',
  },
  btn: {
    height: 50,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.main,
    borderRadius: 100,
  },
});
