import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import H2 from './../../component/basic/H2';
import H3 from './../../component/basic/H3';

const ConversationUserList = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        {item.img ? (
          <Avatar.Image
            size={40}
            source={{
              url: item.img,
            }}
          />
        ) : (
          <Avatar.Image
            size={40}
            source={{
              url: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=338&ext=jpg',
            }}
          />
        )}
      </View>
      <View style={styles.Message}>
        <H2>{item.userName}</H2>
        <Text>{item.message}</Text>
      </View>
      <View style={styles.Icon}>
        <Text>{item.time}</Text>
      </View>
    </View>
  );
};

export default ConversationUserList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    display: 'flex',
    width: '100%',
    paddingVertical: 20,
  },
  logo: {width: '15%'},
  Message: {width: '70%', paddingHorizontal: 10},
  Icon: {width: '15%'},
});
