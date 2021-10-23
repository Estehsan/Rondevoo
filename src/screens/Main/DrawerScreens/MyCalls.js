import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/Foundation';
import {theme} from '../../../theme/theme';
import Wbg from './../../../component/basic/Wbg';
import H2 from '../../../component/basic/H2';
import H1 from '../../../component/basic/H1';
import H3 from '../../../component/basic/H3';

import WP from './../../../component/basic/WP';

import Icon from 'react-native-vector-icons/Ionicons';
import H2W from '../../../component/basic/H2W';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const data1 = [
  {
    id: 1,
    name: 'john',
    color: '#7770ff',
    img: 'https://www.pngmart.com/files/3/Man-PNG-Pic.png',
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
    color: '#234efe',
    img: 'https://www.pngmart.com/files/3/Man-PNG-Pic.png',
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
    id: 9,
    name: 'Tom',
    color: '#234efe',
    img: 'https://www.pngmart.com/files/3/Man-PNG-Pic.png',
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
    color: '#fb9c01',
    img: 'https://www.pngmart.com/files/3/Man-PNG-Pic.png',
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

const Calls = ({navigation}) => {
  return (
    <View style={styles.CallBtn}>
      <View style={{width: Dimensions.get('window').width, marginVertical: 9}}>
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-evenly'}}
          data={data1}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicators="false"
          numColumns={2}
          renderItem={({item}) => (
            <View style={[styles.ListOfStars, {backgroundColor: item.color}]}>
              <Image
                source={{uri: item.img}}
                resizeMode="cover"
                style={{height: '100%', width: '100%', opacity: 0.8}}
              />
              <View style={styles.over}>
                <H2>{item.name}</H2>
                <H3>Sub Title</H3>

                <View style={styles.hbtn}>
                  <H2W>Manage</H2W>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.btn}>
          <H2W>Call Now</H2W>
        </View>
      </View>
    </View>
  );
};

const Upcoming = ({navigation}) => {
  return (
    <View style={styles.CallBtn}>
      <View style={{width: Dimensions.get('window').width, marginVertical: 9}}>
        <FlatList
          columnWrapperStyle={{justifyContent: 'space-evenly'}}
          data={data1}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicators="false"
          numColumns={2}
          renderItem={({item}) => (
            <View style={[styles.ListOfStars, {backgroundColor: item.color}]}>
              <Image
                source={{uri: item.img}}
                resizeMode="cover"
                style={{height: '100%', width: '100%', opacity: 0.8}}
              />
              <View style={styles.over}>
                <H2>Title</H2>
                <H3>Sub Title</H3>

                <View style={styles.hbtn}>
                  <H2W>Manage</H2W>
                </View>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.bottom}>
        <View style={styles.btn}>
          <H2W>Call Now</H2W>
        </View>
      </View>
    </View>
  );
};

const MyCalls = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="My Calls" component={Calls} />
      <Tab.Screen name="Upcoming Calls" component={Upcoming} />
    </Tab.Navigator>
  );
};

export default MyCalls;

const styles = StyleSheet.create({
  CallBtn: {
    flex: 1,
  },
  bottom: {
    position: 'absolute',
    width: '90%',
    bottom: 20,
    marginHorizontal: '5%',
    height: 100,
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
  ListOfStars: {
    height: 200,
    width: '45%',
    borderRadius: 20,
    margin: 5,
    marginBottom: 30,
  },
  over: {
    position: 'absolute',
    bottom: 5,
    width: '90%',
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.colors.customShad,
  },
  hbtn: {
    height: 40,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.main,
    borderRadius: 100,
  },
});
