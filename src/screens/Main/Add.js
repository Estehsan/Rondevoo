import React, {useLayoutEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {theme} from '../../theme/theme';
import {Avatar, Button, TextInput} from 'react-native-paper';
import LogoBar from '../../component/HomeComponent/LogoBar';
import {
  Bg,
  H1,
  H1W,
  H2,
  H3,
  HeadingW,
  Btn,
  P,
  LogoHeader,
} from '../../component/basic';
import HorizontalListStars from '../../component/HomeComponent/HorizontalListStars';
import {UsersList} from '../../dummyData';
import {PurpleBtn} from '../../component/AddComponent';
import AddScreenHorizontalList from '../../component/HomeComponent/AddScreenHorizontalList';
import AvatarDrawer from '../../component/HomeComponent/AvatarDrawer';

const Add = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#fff',
        height: 100,
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
      headerLeft: () => <AvatarDrawer onPress={navigation.openDrawer} />,
      headerTitle: () => <LogoHeader />,
    });
  }, [navigation]);
  return (
    <Bg>
      <P></P>
      <H2>Select the page you would like to add to</H2>
      <H2></H2>

      {/* <View style={styles.Horizontal}> */}
      <FlatList
        data={UsersList.slice(Math.max(UsersList.length - 3, 1))}
        horizontal
        renderItem={({item}) => (
          <AddScreenHorizontalList item={item} navigation={navigation} />
        )}
      />
      {/* </View> */}

      <ScrollView>
        <H2>Select the feature you would like to add to</H2>

        <PurpleBtn
          iconName="account-group"
          placeholder={'Community'}
          onPress={() => navigation.navigate('Community')}
        />
        <PurpleBtn
          iconName="phone"
          placeholder={'Calls'}
          onPress={() => navigation.navigate('Calls')}
        />
        <PurpleBtn
          iconName="camera"
          placeholder={'Feed'}
          onPress={() => navigation.navigate('Feed')}
        />
        <PurpleBtn
          iconName="store"
          placeholder={'Store'}
          onPress={() => navigation.navigate('Store')}
        />
        <PurpleBtn
          iconName="plus"
          placeholder={'Add Features'}
          onPress={() => navigation.navigate('Calls')}
        />
      </ScrollView>
    </Bg>
  );
};

export default Add;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  main: {
    margin: 30,
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    ...theme.colors.customShad,
  },

  Group: {paddingVertical: 10, justifyContent: 'center'},
  Top: {justifyContent: 'center', alignItems: 'center'},
  Upload: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    ...theme.colors.customShad,
  },
  TInput: {
    backgroundColor: 'white',
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

  cant: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  btnstyle: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  Horizontal: {
    width: '100%',
    backgroundColor: 'green',
  },
});
