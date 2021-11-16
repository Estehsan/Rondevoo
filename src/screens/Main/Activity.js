import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Subtitle from './../../component/basic/SubTitle';
import Background from './../../component/basic/Background';
import H3 from './../../component/basic/H3';
import Span from './../../component/basic/Span';
import H2 from './../../component/basic/H2';

import P from './../../component/basic/P';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from './../../theme/theme';
import {Avatar, Paragraph} from 'react-native-paper';
import SearchBar from './../../component/HomeComponent/SearchBar';

import H1 from '../../component/basic/H1';
import ListNotification from '../../component/ActivityComponent/ListNotification';

const data1 = [
  {
    id: 1,
    Title: 'Upload A profile Picture.',
    img: 'https://thumbs.dreamstime.com/b/close-up-portrait-nice-person-bristle-show-finger-okey-sign-isolated-pink-color-background-203466939.jpg',

    sub: "Let's put a face to your profile!",
    time: '2w',
  },
  {
    id: 2,
    Title: 'Beta',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfa758-9Zet25uR43OnWUDxPh_5ivrKWg4g&usqp=CAU',
    sub: 'This is a Beta Subtitle',
    time: '3w',
  },
  {
    id: 21352,
    Title: 'Gamma',
    img: 'https://st3.depositphotos.com/1037987/15097/i/600/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg',
    sub: 'This is a Gamma Subtitle',
    time: '1w',
  },
  {
    id: 4,
    Title: 'Gamma',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfa758-9Zet25uR43OnWUDxPh_5ivrKWg4g&usqp=CAU',
    sub: 'This is a Gamma Subtitle',
    time: '1w',
  },
  {
    id: 12321,
    Title: 'Gamma',
    img: 'md-arrow-back',
    sub: 'This is a Gamma Subtitle',
    time: '1w',
    img: 'https://thumbs.dreamstime.com/b/close-up-portrait-nice-person-bristle-show-finger-okey-sign-isolated-pink-color-background-203466939.jpg',
  },
];

const Activity = ({route, navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
      headerTitle: () => <SearchBar navigation={navigation} />,
    });
  }, [navigation]);
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.pd}>
          <H2>This Month</H2>
        </View>
        <FlatList
          data={data1}
          // ItemSeparatorComponent={() => <View style={styles.seperator} />}
          renderItem={({item}) => <ListNotification item={item} />}
        />
      </View>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  // seperator: {
  //   height: 0.5,
  //   width: '100%',
  //   backgroundColor: '#C8C8C8',
  // },
  pd: {padding: 20, justifyContent: 'center', alignItems: 'center'},

  main: {flex: 1, backgroundColor: 'white'},
});
