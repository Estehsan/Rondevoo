import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon2 from 'react-native-vector-icons/Foundation';
import {theme} from '../../../theme/theme';
import Wbg from './../../../component/basic/Wbg';
import H2 from './../../../component/basic/H2';

import Icon from 'react-native-vector-icons/Ionicons';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Calls = () => {
  return (
    <View>
      <Text>Yes</Text>
    </View>
  );
};

const Upcoming = () => {
  return (
    <View>
      <Text>yo</Text>
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
    <Wbg>
      <Tab.Navigator>
        <Tab.Screen name="My Calls" component={Calls} />
        <Tab.Screen name="Upcoming Calls" component={Upcoming} />
      </Tab.Navigator>
    </Wbg>
  );
};

export default MyCalls;

const styles = StyleSheet.create({});
