import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();

const Pending = () => {
  return <Text>Hailo</Text>;
};
const All = () => {
  return <Text>Wow</Text>;
};
const Request = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pending Requests" component={Pending} />
      <Tab.Screen name="All Requests" component={All} />
    </Tab.Navigator>
  );
};

export default Request;

const styles = StyleSheet.create({});
