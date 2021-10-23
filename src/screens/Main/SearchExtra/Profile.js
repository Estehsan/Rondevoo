import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import {Avatar, Card, Title, Paragraph} from 'react-native-paper';
import P from '../../../component/basic/P';
import H2 from '../../../component/basic/H2';
import H1 from '../../../component/basic/H1';
import H3 from '../../../component/basic/H3';

import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import WP from '../../../component/basic/WP';

import Subtitle from '../../../component/basic/SubTitle';
import Background from './../../../component/basic/Background';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import {theme} from '../../../theme/theme';

const Feeds = () => {
  return (
    <View style={styles.Test}>
      <Text>Hailo</Text>
    </View>
  );
};
const Media = () => {
  return (
    <View style={styles.Test}>
      <Text>Hailo</Text>
    </View>
  );
};
const Likes = () => {
  return (
    <View style={styles.Test}>
      <Text>Hailo</Text>
    </View>
  );
};
const Tabs = ({navigation}) => {
  return (
    <Tab.Navigator
      tabBatOptions={{
        ...theme.colors.customShad,
      }}>
      <Tab.Screen name="Feeds" component={Feeds} />
      <Tab.Screen name="Media" component={Media} />
      <Tab.Screen name="Likes" component={Likes} />
    </Tab.Navigator>
  );
};

const Profile = ({navigation}) => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.Header}>
          <View style={styles.LeftTop}>
            <WP>John Cena</WP>
          </View>
          <View style={styles.RightTop}>
            <Entypo
              name="phone"
              size={30}
              color="white"
              style={{paddingHorizontal: 5}}
            />

            <Entypo
              name="message"
              size={30}
              color="white"
              style={{paddingHorizontal: 5}}
            />
            <Entypo
              name="dots-three-horizontal"
              size={30}
              color="white"
              style={{paddingHorizontal: 5}}
            />
          </View>
        </View>
        <View style={styles.Top}>
          <View style={styles.FourBlocks}>
            <View style={styles.ProfilePic}>
              <Avatar.Image
                size={80}
                source={{
                  uri: 'https://thumbs.dreamstime.com/b/portrait-smiling-young-man-color-background-smiling-young-man-color-background-169671840.jpg',
                }}
              />
            </View>

            <View style={styles.Followers}>
              <H2>24K</H2>
              <P>Followers</P>
            </View>
            <View style={styles.Following}>
              <H2>70K</H2>
              <P>Following</P>
            </View>
            <View style={styles.Price}>
              <H2>90$</H2>
              <P>Price</P>
            </View>
          </View>
          <View style={styles.Bio}>
            <Subtitle>Test</Subtitle>
            <H3>Yes this is my Bio!I'm loving this design and Follow me now</H3>
          </View>
        </View>
      </SafeAreaView>
      <Tabs style={{...theme.colors.customShad}} />
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  Top: {
    backgroundColor: theme.colors.twhite,
    paddingVertical: 30,
    ...theme.colors.customShad2,
  },
  Header: {
    height: 45,
    backgroundColor: theme.colors.main,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  FourBlocks: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  ProfilePic: {width: '30%', justifyContent: 'center', alignItems: 'center'},
  Followers: {width: '25%', justifyContent: 'center', alignItems: 'center'},
  Following: {width: '25%', justifyContent: 'center', alignItems: 'center'},
  Price: {width: '25%', justifyContent: 'center', alignItems: 'center'},
  RightTop: {flexDirection: 'row', display: 'flex'},
  Bio: {paddingHorizontal: 30},
  Content: {paddingVertical: 20},
  Feed: {
    width: '80%',
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Calls: {
    width: '80%',

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  Reviews: {
    width: '80%',

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
  },
  verticalmargin: {marginVertical: 5},
});
