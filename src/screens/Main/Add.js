import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Calls = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Hailo</Text>
    </View>
  );
};
const Feed = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Feed</Text>
    </View>
  );
};

const Add = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="My Calls" component={Calls} />
      <Tab.Screen name="Feed " component={Feed} />
    </Tab.Navigator>
  );
};

export default Add;

const styles = StyleSheet.create({});
