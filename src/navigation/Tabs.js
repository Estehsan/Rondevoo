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
import {H1, DrawerContent, HeadingW, HeaderLogo} from '../component/basic';
import {
  CommunityCreatePage,
  FeedCreatedPage,
  StoreCreatedPage,
  Subscription,
} from '../screens/Main/HomeExtra';

const Stack = createBottomTabNavigator();
const All = createNativeStackNavigator();
const AddNavi = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Tabs = () => {
  return (
    <All.Navigator screenOptions={{headerShown: false}} initialRouteName="Home">
      <All.Screen name="GetStarted" component={GetStarted} />

      <All.Screen name="Login" component={Login} />
      <All.Screen name="Register" component={Register} />

      <All.Screen name="Home" component={DrawerRoute} />
      <All.Screen name="Message" component={BottomTabNavigator} />
      <All.Screen name="Add" component={BottomTabNavigator} />
      <All.Screen name="Activity" component={BottomTabNavigator} />
      <All.Screen name="Search" component={BottomTabNavigator} />

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

function DrawerRoute({navigation}) {
  return (
    <Drawer.Navigator drawerContent={DrawerContent}>
      <Drawer.Screen
        options={{headerShown: false}}
        name="Home"
        component={BottomTabNavigator}
      />
      <Drawer.Screen name="MyProfile" component={MyProfile} />
      <Drawer.Screen name="Pages" component={Pages} />
      <Drawer.Screen
        options={{headerShown: true, title: 'Create Pages'}}
        name="CreatePages"
        component={CreatePages}
      />
      <Drawer.Screen
        options={{headerShown: true, title: 'Banking Information'}}
        name="BankingInformation"
        component={BankingInformation}
      />
      <Drawer.Screen
        options={{headerShown: true, title: 'Setting'}}
        name="Setting"
        component={Setting}
      />
      <Drawer.Screen
        options={{headerShown: true, title: 'TermsOfService'}}
        name="TermsOfService"
        component={TermsOfService}
      />
      <Drawer.Screen
        options={{headerShown: true, title: 'Help'}}
        name="Help"
        component={Help}
      />
      {/* <Drawer.Screen
        options={{headerShown: true, title: 'Coins'}}
        name="Coins"
        component={Coins}
      /> */}
    </Drawer.Navigator>
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
          headerTitle: () => (
            <View style={{marginTop: -20}}>
              <Image
                style={{
                  width: 200,
                }}
                resizeMode="contain"
                source={require('./../assets/img/purpleLogo.png')}
              />
            </View>
          ),
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
        component={Message}
        options={{
          headerShown: true,
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
// function AddTable({navigation}) {
//   return (
//     <AddNavi.Navigator screenOptions={AddStyling}>
//       <AddNavi.Screen name="Add" component={Add} />

//       <AddNavi.Screen
//         name="Calls"
//         options={{headerShown: true}}
//         component={Calls}
//       />
//       <AddNavi.Screen name="Community" component={Community} />
//       <AddNavi.Screen
//         // options={{headerShown: false}}
//         name="Feed"
//         component={Feed}
//       />
//       <AddNavi.Screen name="Store" component={Store} />
//     </AddNavi.Navigator>
//   );
// }
export default Tabs;

const styles = StyleSheet.create({});
