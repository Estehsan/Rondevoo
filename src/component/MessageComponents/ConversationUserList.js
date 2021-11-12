import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import H2 from './../../component/basic/H2';
import H3 from './../../component/basic/H3';
import Span from './../../component/basic/Span';

const ConversationUserList = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Discussion', {
          id: item.id,
          userName: item.userName,
          img: item.img,
          navigation,
        })
      }
      style={styles.container}>
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
        <Span>{item.message}</Span>
      </View>
      <View style={styles.Icon}>
        <Text>{item.time}</Text>
      </View>
    </TouchableOpacity>
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
