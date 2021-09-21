import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon2 from 'react-native-vector-icons/Foundation';
import {theme} from '../../../theme/theme';
import Wbg from './../../../component/basic/Wbg';
import H2 from '../../../component/basic/H2';

import {NavigationContainer} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import H2W from '../../../component/basic/H2W';

const Tab = createMaterialTopTabNavigator();

const Calls = ({navigation}) => {
  return (
    <View style={styles.CallBtn}>
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
      <View style={styles.bottom}>
        <View style={styles.btn}>
          <H2W>Call Now</H2W>
        </View>
      </View>
    </View>
  );
};

const MyCalls = ({navigation}) => {
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
      headerTitle: () => <H2>My Calls</H2>,
      headerRight: () => <View />,
    });
  }, [navigation]);
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
    width: '100%',
    height: 100,
    justifyContent: 'flex-end',
    flex: 1,
  },
  bottom: {
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
});
