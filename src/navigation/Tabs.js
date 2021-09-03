import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome';
import FaIcon from 'react-native-vector-icons/FontAwesome5';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Main/Home';
import Message from '../screens/Main/Message';
import Call from '../screens/Main/Call';
import Search from '../screens/Main/Search';
import Activity from '../screens/Main/Activity';

import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';

const Stack = createBottomTabNavigator();
const All = createStackNavigator();

const Tabs = () => {
  return (
    <All.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <All.Screen name="Login" component={Login} />
      <All.Screen name="Register" component={Register} />

      <All.Screen name="Home" component={BottomTabNavigator} />
      <All.Screen name="Message" component={BottomTabNavigator} />
      <All.Screen name="Call" component={BottomTabNavigator} />
      <All.Screen name="Activity" component={BottomTabNavigator} />
      <All.Screen name="Search" component={BottomTabNavigator} />
    </All.Navigator>
  );
};
const screenOptionStyle = {
  headerShown: true,
};
function BottomTabNavigator() {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <MIcon
              style={Platform.OS == 'ios' ? styles.position : styles.position2}
              name="home"
              size={38}
              color={color}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Message"
        component={Message}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              style={Platform.OS == 'ios' ? styles.position : styles.position2}
              name="chatbubbles"
              size={35}
              color={color}
            />
          ),
        }}
      />

      <Stack.Screen
        name="Call"
        component={Call}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              style={Platform.OS == 'ios' ? styles.position : styles.position2}
              name="chatbubbles"
              size={35}
              color={color}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              style={Platform.OS == 'ios' ? styles.position : styles.position2}
              name="chatbubbles"
              size={35}
              color={color}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons
              style={Platform.OS == 'ios' ? styles.position : styles.position2}
              name="chatbubbles"
              size={35}
              color={color}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default Tabs;

const styles = StyleSheet.create({});
