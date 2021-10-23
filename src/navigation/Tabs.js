import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Main/Home';
import Message from '../screens/Main/Message';
import Add from '../screens/Main/Add';
import Search from '../screens/Main/Search';
import Activity from '../screens/Main/Activity';
import Profile from './../screens/Main/SearchExtra/Profile';

import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import GetStarted from '../screens/auth/GetStarted';
import DrawerContent from './../component/basic/DrawerContent';

import SearchListInfo from '../screens/Main/SearchExtra/SearchListInfo';
import Discussion from './../screens/Main/MessageScreens/Discussion';

import MyCalls from '../screens/Main/DrawerScreens/MyCalls';
import NewBiddingCall from '../screens/Main/DrawerScreens/NewBiddingCall';
import NewBookingCall from '../screens/Main/DrawerScreens/NewBookingCall';
import Request from '../screens/Main/DrawerScreens/Request';
import Setting from '../screens/Main/DrawerScreens/Setting';
import Support from '../screens/Main/DrawerScreens/Support';
import UpcomingCalls from '../screens/Main/DrawerScreens/UpcomingCalls';
import Coins from '../screens/Main/DrawerScreens/Coins';

import {theme} from '../theme/theme';

const Stack = createBottomTabNavigator();
const All = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Tabs = () => {
  return (
    <All.Navigator screenOptions={{headerShown: false}} initialRouteName="Add">
      <All.Screen name="GetStarted" component={GetStarted} />

      <All.Screen name="Login" component={Login} />
      <All.Screen name="Register" component={Register} />

      <All.Screen name="Home" component={DrawerRoute} />
      <All.Screen name="Message" component={BottomTabNavigator} />
      <All.Screen name="Add" component={BottomTabNavigator} />
      <All.Screen name="Activity" component={BottomTabNavigator} />
      <All.Screen name="Search" component={BottomTabNavigator} />
      <All.Screen
        options={{headerShown: true}}
        name="Coins"
        component={Coins}
      />

      <All.Screen name="Profile" component={Profile} />
      <All.Screen
        name="Discussion"
        options={{headerShown: true}}
        component={Discussion}
      />

      <All.Screen
        name="SearchListInfo"
        options={{headerShown: true}}
        component={SearchListInfo}
      />
    </All.Navigator>
  );
};

function DrawerRoute({navigation}) {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.bg,
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{paddingLeft: 25}}>
            <Icon name="md-arrow-back" size={30} />
          </TouchableOpacity>
        ),
      }}
      drawerContent={DrawerContent}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="Home"
        component={BottomTabNavigator}
      />

      <Drawer.Screen
        options={{headerShown: true, title: 'My Calls'}}
        name="MyCalls"
        component={MyCalls}
      />
      <Drawer.Screen
        options={{headerShown: true, title: 'New Bidding Call'}}
        name="NewBiddingCall"
        component={NewBiddingCall}
      />
      <Drawer.Screen
        options={{headerShown: true, title: 'New Booking Call'}}
        name="NewBookingCall"
        component={NewBookingCall}
      />
      <Drawer.Screen
        options={{headerShown: true, title: 'Request'}}
        name="Request"
        component={Request}
      />
      <Drawer.Screen
        options={{headerShown: true, title: 'Setting'}}
        name="Setting"
        component={Setting}
      />
      <Drawer.Screen
        options={{headerShown: true, title: 'Support'}}
        name="Support"
        component={Support}
      />
      <Drawer.Screen
        options={{headerShown: true, title: 'Upcoming Calls'}}
        name="UpcomingCalls"
        component={UpcomingCalls}
      />
    </Drawer.Navigator>
  );
}
const screenOptionStyle = {
  headerShown: false,
};
function BottomTabNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Add"
      screenOptions={screenOptionStyle}
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: 'black',
        showLabel: false,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          tabBarIcon: ({color, focused}) => (
            <Icon
              style={Platform.OS == 'ios' ? styles.position : styles.position2}
              name={focused ? 'home' : 'home-outline'}
              size={38}
              color={color}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: true,
          tabBarIcon: ({color, focused}) => (
            <Icon
              style={Platform.OS === 'ios' ? styles.position : styles.position2}
              name={focused ? 'search' : 'search-outline'}
              size={35}
              color={color}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Add"
        component={Add}
        options={{
          headerShown: true,
          tabBarIcon: ({color, focused}) => (
            <Icon
              style={Platform.OS === 'ios' ? styles.position : styles.position2}
              name="add-circle"
              size={52}
              color={color}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Activity"
        component={Activity}
        options={{
          headerShown: true,
          tabBarIcon: ({color, focused}) => (
            <Icon
              style={Platform.OS === 'ios' ? styles.position : styles.position2}
              name={focused ? 'notifications' : 'notifications-outline'}
              size={35}
              color={color}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Message"
        component={Message}
        options={{
          headerShown: true,
          tabBarIcon: ({color, focused}) => (
            <Icon
              style={Platform.OS == 'ios' ? styles.position : styles.position2}
              name={focused ? 'chatbubble' : 'chatbubble-outline'}
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
