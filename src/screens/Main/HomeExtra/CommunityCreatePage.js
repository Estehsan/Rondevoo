import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/Ionicons';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import FeedList from '../../../component/FeedComponent/FeedList';
import ProfileInfo from '../../../component/ProfileComponent/ProfileInfo';
import FeedData from '../../../theme/FeedData';
import {theme} from '../../../theme/theme';
import SearchBar from '../../../component/HomeComponent/SearchBar';
import {H2, H2W, TI} from '../../../component/basic';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import DiscussionData from '../../../theme/DiscussionData';
import MessageBubble from '../../../component/MessageComponents/MessageBubble';
import MessageInput from '../../../component/MessageComponents/MessageInput';

const Tab = createMaterialTopTabNavigator();

function New({navigation}) {
  return (
    <View>
      <FlatList
        data={FeedData}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <View style={styles.SubFilter}>
            <View style={styles.surface}>
              <Text>
                Today
                <Entypo name="chevron-down" size={20} />
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.push('Community')}
              style={styles.surface}>
              <EvilIcons name="pencil" size={40} />
            </TouchableOpacity>
          </View>
        )}
        renderItem={({item}) => (
          <View style={styles.FeedPostStyle}>
            <FeedList item={item} />
          </View>
        )}
      />
    </View>
  );
}

function Top({navigation}) {
  return (
    <View>
      <FlatList
        data={FeedData}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <View style={styles.SubFilter}>
            <View style={styles.surface}>
              <Text>
                Today
                <Entypo name="chevron-down" size={20} />
              </Text>
            </View>

            <View style={styles.surface}>
              <EvilIcons name="pencil" size={40} />
            </View>
          </View>
        )}
        renderItem={({item}) => (
          <View style={styles.FeedPostStyle}>
            <FeedList item={item} />
          </View>
        )}
      />
    </View>
  );
}
function UserName({navigation}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      style={styles.container}>
      <FlatList
        data={DiscussionData.messages}
        inverted
        renderItem={({item}) => <MessageBubble item={item} />}
      />
      <MessageInput />
    </KeyboardAvoidingView>
  );
}
const CommunityCreatePage = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'white',
        shadowColor: 'transparent',
        shadowRadius: 0,
        borderBottomWidth: 0,
        shadowOffset: {
          height: 0,
          // elevation: 0,
        },
      },

      headerRight: () => <SimpleLineIcons size={30} name="bag" />,
    });
  }, [navigation]);
  return (
    // <View>
    //   <FlatList
    //     data={FeedData}
    //     keyExtractor={item => item.id}
    //     ListHeaderComponent={() => <ProfileInfo />}
    //     renderItem={({item}) => (
    //       <View style={styles.FeedPostStyle}>
    //         <FeedList item={item} />
    //       </View>
    //     )}
    //   />
    // </View>
    <SafeAreaView style={styles.background}>
      <ProfileInfo />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: theme.colors.primary,
          tabBarIndicatorStyle: {
            backgroundColor: theme.colors.primary,
            borderRadius: 10,
          },
        }}>
        <Tab.Screen name="New" component={New} />
        <Tab.Screen name="Top" component={Top} />
        <Tab.Screen name="UserName" component={UserName} />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default CommunityCreatePage;

const styles = StyleSheet.create({
  background: {flex: 1},

  FeedPostStyle: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    marginVertical: 10,
    borderWidth: 0.2,
    borderColor: 'silver',
  },
  SubFilter: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 10,
    justifyContent: 'space-between',
  },
  surface: {
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingVertical: 5,
    flexDirection: 'row',
  },
  center: {
    ...theme.colors.customShad,
  },
});
