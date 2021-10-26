import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Avatar, Paragraph} from 'react-native-paper';
import {H2, Span} from '../basic';

const ListNotification = ({item}) => {
  return (
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
          <H2>
            {item.Title} <Span>{item.sub}</Span>
            <Paragraph> {item.time}</Paragraph>
          </H2>
        </View>
      </View>
      <View style={styles.Rightbar}>
        <Image
          style={{height: 40, width: 40, borderRadius: 10}}
          resizeMode="contain"
          source={{
            url: item.img,
          }}
        />
      </View>
    </View>
  );
};

export default ListNotification;

const styles = StyleSheet.create({
  List: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    display: 'flex',
    paddingVertical: 15,
    alignItems: 'center',
  },
  LeftBar: {flex: 9, flexDirection: 'row'},
  Rightbar: {flex: 1, justifyContent: 'flex-end'},
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '90%',
  },
});
