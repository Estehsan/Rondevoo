import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {theme} from '../../../theme/theme';

import Wbg from './../../../component/basic/Wbg';
import H2 from '../../../component/basic/H2';
import H1 from '../../../component/basic/H1';
import H3 from '../../../component/basic/H3';
import H2W from '../../../component/basic/H2W';

import Span from '../../../component/basic/Span';

import Amount from '../../../component/HomeComponent/Amount';

import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Foundation';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import WP from './../../../component/basic/WP';
import Btn from '../../../component/basic/Btn';

const Tab = createMaterialTopTabNavigator();

const Balance = () => {
  return (
    <View style={styles.Container}>
      <Amount />
      <View style={styles.main}>
        <H1>Activity</H1>
        <Span>View your transaction history</Span>
        <Btn>
          <H2W>View More</H2W>
        </Btn>
      </View>
    </View>
  );
};
const Buy = () => {
  return (
    <View style={styles.Container}>
      <Amount />
      <View style={styles.main}>
        <H1>Buy Coins</H1>
        <Span>
          Purchase coins that can be used to buy calls. $1 USD = 100 coins
        </Span>
        <Btn>
          <H2W>Buy Coins</H2W>
        </Btn>
      </View>
    </View>
  );
};
const Cash = () => {
  return (
    <View style={styles.Container}>
      <Amount />
      <View style={styles.main}>
        <H1>Cash Out Coins</H1>
        <Span>Transfer earned coins to your bank account.</Span>
        <Btn>
          <H2W>Transfer to Bank </H2W>
        </Btn>
      </View>
    </View>
  );
};

const Coins = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: theme.colors.bg,
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{paddingLeft: 25}}>
          <Icon name="md-arrow-back" size={30} />
        </TouchableOpacity>
      ),
      headerTitle: () => <H2>Coins</H2>,
    });
  }, [navigation]);
  return (
    <Tab.Navigator>
      <Tab.Screen name="Balance History" component={Balance} />
      <Tab.Screen name="Buy Coins" component={Buy} />
      <Tab.Screen name="Cash Out" component={Cash} />
    </Tab.Navigator>
  );
};

export default Coins;

const styles = StyleSheet.create({
  Container: {flex: 1},
  main: {
    backgroundColor: 'white',
    height: 500,
    marginHorizontal: 20,
    marginTop: 30,
    borderRadius: 10,
    padding: 30,
    ...theme.colors.customShad,
  },
});
