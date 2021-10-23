import React, {useLayoutEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {theme} from '../../theme/theme';
import {Avatar} from 'react-native-paper';
import LogoBar from '../../component/HomeComponent/LogoBar';
import {Bg, H1, H1W, H2, H3} from '../../component/basic';
import HorizontalListStars from '../../component/HomeComponent/HorizontalListStars';
import {UsersList} from '../../dummyData';
import Btn from '../../component/basic/Btn';

import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

const Calls = ({navigation}) => {
  return (
    <Bg>
      <H2>Select the page you would like to add to</H2>
      <FlatList
        data={UsersList.slice(0, 3)}
        numColumns={3}
        renderItem={({item}) => <HorizontalListStars item={item} />}
      />
      <ScrollView>
        <H2>Select the feature you would like to add to</H2>
        <Btn>
          <View style={styles.btnstyle}>
            <Icon color="white" name="home" size={25} />
            <H1W>Community</H1W>
          </View>
        </Btn>
        <Btn>
          <H1W>Calls</H1W>
        </Btn>
        <Btn>
          <H1W>Feed</H1W>
        </Btn>
        <Btn>
          <H1W>Store</H1W>
        </Btn>
        <Btn>
          <H1W>+ Add Another</H1W>
        </Btn>
      </ScrollView>
    </Bg>
  );
};
const Feed = ({navigation}) => {
  const [text, setText] = useState();
  return <View></View>;
};

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
      headerLeft: () => (
        <TouchableOpacity
          onPress={navigation.openDrawer}
          style={{paddingHorizontal: 10}}>
          <Avatar.Image
            size={35}
            source={{
              uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            }}
          />
        </TouchableOpacity>
      ),
      headerTitle: () => <LogoBar />,
    });
  }, [navigation]);
  return (
    <Tab.Navigator>
      <Tab.Screen name="AnyThing" component={Calls} />
      <Tab.Screen name="Feed " component={Feed} />
    </Tab.Navigator>
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
});
