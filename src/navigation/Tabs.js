import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import EvilIcons from 'react-native-vector-icons/EvilIcons';
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

import SearchListInfo from '../screens/Main/SearchExtra/SearchListInfo';
import Discussion from './../screens/Main/MessageScreens/Discussion';

import {
  BankingInformation,
  Coins,
  CreatePages,
  Help,
  MyProfile,
  Pages,
  Setting,
  TermsOfService,
} from '../screens/Main/DrawerScreens';

import {theme} from '../theme/theme';
import {Calls, Community, Feed, Store} from '../screens/Main/AddScreens';
import LogoBar from '../component/HomeComponent/LogoBar';
import AvatarDrawer from '../component/HomeComponent/AvatarDrawer';

import {Avatar} from 'react-native-paper';
import {
  H1,
  DrawerContent,
  HeadingW,
  HeaderLogo,
  LogoHeader,
} from '../component/basic';
import {
  CallsCreatedPage,
  CommunityCreatePage,
  FeedCreatedPage,
  StoreCreatedPage,
  Subscription,
} from '../screens/Main/HomeExtra';

const Stack = createBottomTabNavigator();
const All = createNativeStackNavigator();
const AddNavi = createNativeStackNavigator();
const MessageNavi = createNativeStackNavigator();

const Drawers = createDrawerNavigator();

const AllScreens = ({navigation}) => {
  return (
    <All.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <All.Screen name="GetStarted" component={GetStarted} />

      <All.Screen name="Login" component={Login} />
      <All.Screen name="Register" component={Register} />

      <All.Screen options={{headerShown: true}} name="Home" component={Home} />
      {/* <All.Screen name="Message" component={BottomTabNavigator} />
      <All.Screen name="Add" component={BottomTabNavigator} />
      <All.Screen name="Activity" component={BottomTabNavigator} />
      <All.Screen name="Search" component={BottomTabNavigator} /> */}

      <All.Screen name="Coins" component={Coins} />

      <All.Screen
        name="Subscription"
        options={{headerShown: true}}
        component={Subscription}
      />
      <All.Screen
        name="StoreCreatedPage"
        options={{headerShown: true}}
        component={StoreCreatedPage}
      />
      <All.Screen
        name="CallsCreatedPage"
        options={{
          headerShown: true,

          headerTitle: () => <HeaderLogo />,
        }}
        component={CallsCreatedPage}
      />

      <All.Screen name="Profile" component={Profile} />
      {/* <All.Screen
        name="Discussion"
        options={{headerShown: true}}
        component={Discussion}
      /> */}

      <All.Screen
        name="SearchListInfo"
        options={{headerShown: true}}
        component={SearchListInfo}
      />
      <All.Screen
        name="FeedCreatedPage"
        options={{headerShown: true}}
        component={FeedCreatedPage}
      />
      <All.Screen
        name="CommunityCreatePage"
        options={{
          headerShown: true,
          headerTitle: () => <HeaderLogo />,
        }}
        component={CommunityCreatePage}
      />

      <All.Screen
        name="Calls"
        options={{headerShown: true, headerTintColor: 'white'}}
        component={Calls}
      />
      <All.Screen
        name="Community"
        options={{headerShown: true, headerTintColor: 'white'}}
        component={Community}
      />
      <All.Screen name="Feed" options={{headerShown: true}} component={Feed} />
      <All.Screen
        name="Store"
        options={{headerShown: true, headerTintColor: 'white'}}
        component={Store}
      />
    </All.Navigator>
  );
};

function Tabs({navigation}) {
  return (
    <Drawers.Navigator drawerContent={DrawerContent}>
      <Drawers.Screen
        options={{headerShown: false}}
        name="Home"
        component={BottomTabNavigator}
      />
      <Drawers.Screen
        options={{
          headerShown: true,
          // headerLeft: () => <AvatarDrawer onPress={navigation.openDrawer} />,
        }}
        name="MyProfile"
        component={MyProfile}
      />
      <Drawers.Screen
        options={{
          headerShown: true,
          headerTitle: () => <LogoHeader />,
        }}
        name="Pages"
        component={Pages}
      />
      <Drawers.Screen
        options={{headerShown: true, headerTitle: () => <LogoHeader />}}
        name="CreatePages"
        component={CreatePages}
      />
      <Drawers.Screen
        options={{
          headerShown: true,
          headerTitle: () => <LogoHeader />,
        }}
        name="BankingInformation"
        component={BankingInformation}
      />
      <Drawers.Screen
        options={{headerShown: true, title: 'Setting'}}
        name="Setting"
        component={Setting}
      />
      <Drawers.Screen
        options={{headerShown: true, headerTitle: () => <LogoHeader />}}
        name="TermsOfService"
        component={TermsOfService}
      />
      <Drawers.Screen
        options={{headerShown: true, headerTitle: () => <LogoHeader />}}
        name="Help"
        component={Help}
      />
      {/* <Drawers.Screen
        options={{headerShown: true, title: 'Coins'}}
        name="Coins"
        component={Coins}
      /> */}
    </Drawers.Navigator>
  );
}
const screenOptionStyle = {
  headerShown: false,
};
function BottomTabNavigator({navigation}) {
  return (
    <Stack.Navigator
      screenOptions={screenOptionStyle}
      tabBarOptions={{
        activeTintColor: theme.colors.primary,
        inactiveTintColor: 'black',
        showLabel: false,
      }}>
      <Stack.Screen
        name="Home"
        component={AllScreens}
        options={{
          headerShown: false,
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
              size={40}
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

          headerLeft: () => <AvatarDrawer onPress={navigation.openDrawer} />,
          headerTitle: () => <LogoHeader />,
          tabBarIcon: ({color, focused}) => (
            <EvilIcons
              style={Platform.OS === 'ios' ? styles.position : styles.position2}
              name="plus"
              size={50}
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
              size={38}
              color={color}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Message"
        component={MessageScreens}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) => (
            <EvilIcons
              style={Platform.OS === 'ios' ? styles.position : styles.position2}
              name="envelope"
              size={50}
              color={color}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const AddStyling = {
  headerStyle: {
    backgroundColor: theme.colors.primary,
    elevation: 0, // for Android
    shadowOffset: {
      width: 0,
      height: 0, // for iOS
    },
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontFamily: 'Rubik-Bold',
    color: 'white',
    fontSize: 30,
    lineHeight: 40,
  },
};
function MessageScreens({navigation}) {
  return (
    <MessageNavi.Navigator screenOptions={AddStyling}>
      <MessageNavi.Screen
        name="Message"
        options={{headerShown: true}}
        component={Message}
      />
      <MessageNavi.Screen
        options={{headerShown: true}}
        name="Discussion"
        component={Discussion}
      />
    </MessageNavi.Navigator>
  );
}
export default Tabs;

const styles = StyleSheet.create({});
