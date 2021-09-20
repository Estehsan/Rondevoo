import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Foundation';
import Background from './../../component/MessageComponents/ConversationUserList';

import {theme} from '../../theme/theme';
import H2 from './../../component/basic/H2';
import ConversationUserList from './../../component/MessageComponents/ConversationUserList';
import {FlatList} from 'react-native-gesture-handler';

const data1 = [
  {
    id: 1,
    userName: 'Upload A profile Picture.',
    img: 'https://thumbs.dreamstime.com/b/close-up-portrait-nice-person-bristle-show-finger-okey-sign-isolated-pink-color-background-203466939.jpg',
    message: "Let's put a face to your profile!",
    time: '2w',
  },
  {
    id: 2,
    userName: 'Beta',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfa758-9Zet25uR43OnWUDxPh_5ivrKWg4g&usqp=CAU',
    message: 'This is a Beta messageuserName',
    time: '3w',
  },
  {
    id: 21352,
    userName: 'Gamma',
    img: 'https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg',
    message: 'This is a GamerName',
    time: 'today',
  },
  {
    id: 4,
    userName: 'Gamma',

    message: 'This is a rName',
    time: '2d',
  },
  {
    id: 12321,
    userName: 'Gamma',
    message: 'This is a Gamma  messagetitle',
    time: '1w',
  },
];

const Message = ({navigation}) => {
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
      headerTitle: () => <H2>Inbox</H2>,
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{paddingRight: 25}}>
          <Icon2 name="archive" size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.Main}>
      <FlatList
        data={data1}
        renderItem={({item}) => <ConversationUserList item={item} />}
      />
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  Main: {
    backgroundColor: 'white',
    flex: 1,
  },
});
