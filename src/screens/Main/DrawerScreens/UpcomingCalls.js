import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../../theme/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import H2 from './../../../component/basic/H2';

const Tab = createMaterialTopTabNavigator();

const Calls = ({navigation}) => {
  return (
    <View>
      <Text>Yes</Text>
    </View>
  );
};

const Upcoming = ({navigation}) => {
  return (
    <View>
      <Text>yo</Text>
    </View>
  );
};
const UpcomingCalls = ({navigation}) => {
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
export default UpcomingCalls;

const styles = StyleSheet.create({});
