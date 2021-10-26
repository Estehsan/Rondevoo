import React, {useLayoutEffect, useState} from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {theme} from '../../theme/theme';
import {Avatar, Button, TextInput} from 'react-native-paper';
import LogoBar from '../../component/HomeComponent/LogoBar';
import {Bg, H1, H1W, H2, H3, HeadingW, Btn, P} from '../../component/basic';
import HorizontalListStars from '../../component/HomeComponent/HorizontalListStars';
import {UsersList} from '../../dummyData';
import {PurpleBtn} from '../../component/AddComponent';

const Tab = createMaterialTopTabNavigator();

const Calls = ({navigation}) => {
  return (
    <Bg>
      <P></P>
      <H2>Select the page you would like to add to</H2>
      <H2></H2>

      <FlatList
        data={UsersList.slice(0, 3)}
        numColumns={3}
        renderItem={({item}) => <HorizontalListStars item={item} />}
      />
      <ScrollView>
        <H2>Select the feature you would like to add to</H2>

        <PurpleBtn
          iconName="account-group"
          placeholder={'Community'}
          onPress={navigation.openDrawer}
        />
        <PurpleBtn iconName="phone" placeholder={'Calls'} />
        <PurpleBtn iconName="camera" placeholder={'Feed'} />
        <PurpleBtn iconName="store" placeholder={'Store'} />
        <PurpleBtn iconName="plus" placeholder={'Add Features'} />
      </ScrollView>
    </Bg>
  );
};
const Feed = ({navigation}) => {
  const [text, setText] = useState();
  const [email, setEmail] = useState();

  return (
    <View style={styles.subcontainer}>
      <View style={styles.topContainer}>
        <HeadingW>Create Booking Call</HeadingW>
        <Text style={styles.subhead}>
          Use the following features below to create your call.
        </Text>
      </View>
      <View style={styles.Content}>
        <TextInput
          style={styles.inputStyle}
          label="Call Title"
          value={text}
          onChangeText={text => setText(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Tags"
          value={text}
          onChangeText={text => setText(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Description"
          value={text}
          onChangeText={text => setText(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Banner Image"
          value={text}
          onChangeText={text => setText(text)}
        />
        <H1>All Fields will be here</H1>
        <Btn placeholder="Create Booking Call" />
      </View>
    </View>
  );
};

const Add = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#fff',
        height: 100,
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={navigation.openDrawer}
          style={{paddingHorizontal: 10}}>
          <Avatar.Image
            size={35}
            source={{
              uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            }}
          />
        </TouchableOpacity>
      ),
      headerTitle: () => <LogoBar />,
    });
  }, [navigation]);
  return (
    <Tab.Navigator>
      <Tab.Screen name="AnyThing" component={Calls} />
      <Tab.Screen name="Feed " component={Feed} />
    </Tab.Navigator>
  );
};

export default Add;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  main: {
    margin: 30,
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    ...theme.colors.customShad,
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    alignContent: 'center',
  },
  subcontainer: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  Group: {paddingVertical: 10, justifyContent: 'center'},
  Top: {justifyContent: 'center', alignItems: 'center'},
  Upload: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    ...theme.colors.customShad,
  },
  TInput: {
    backgroundColor: 'white',
  },
  bottom: {
    position: 'absolute',
    width: '90%',
    bottom: 20,
    marginHorizontal: '5%',
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

  cant: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  btnstyle: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  Content: {
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  subhead: {
    marginHorizontal: 10,
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Rubik-Bold',
    flexWrap: 'wrap',
    opacity: 0.8,
  },
  inputStyle: {
    marginVertical: 10,
    backgroundColor: theme.colors.bg,
  },
});
