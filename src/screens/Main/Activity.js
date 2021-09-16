import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import Subtitle from './../../component/basic/SubTitle';
import Background from './../../component/basic/Background';
import H3 from './../../component/basic/H3';
import Span from './../../component/basic/Span';
import H2 from './../../component/basic/H2';

import P from './../../component/basic/P';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from './../../theme/theme';
import {Avatar, Paragraph} from 'react-native-paper';
import H1 from '../../component/basic/H1';

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
  },
];

const Activity = ({route, navigation}) => {
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

      headerTitle: () => <H2>Activity</H2>,
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
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
          renderItem={({item}) => (
            <View style={styles.List}>
              <View style={styles.LeftBar}>
                <View style={styles.ph}>
                  {item.img ? (
                    <Avatar.Image
                      size={30}
                      source={{
                        url: item.img,
                      }}
                    />
                  ) : (
                    <Avatar.Image
                      size={30}
                      source={{
                        url: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg',
                      }}
                    />
                  )}
                </View>
                <View style={styles.row}>
                  <H3>
                    {item.Title} <Span>{item.sub}</Span>
                  </H3>
                </View>
              </View>
              <View style={styles.Rightbar}>
                <Paragraph>{item.time}</Paragraph>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Activity;

const styles = StyleSheet.create({
  container: {},
  List: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    display: 'flex',
    paddingVertical: 15,
    alignItems: 'center',
  },
  LeftBar: {flex: 9, flexDirection: 'row', display: 'flex'},
  Rightbar: {flex: 1, justifyContent: 'flex-end'},
  seperator: {
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
  pd: {padding: 20},
  row: {
    flexDirection: 'row',
    display: 'flex',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  main: {flex: 1, backgroundColor: 'white'},
});
