import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/theme';

const MessageBubble = ({item}) => {
  const mine = item.user.id === 'u1';
  return (
    <View style={[styles.Container, mine ? styles.rMessage : styles.lMessage]}>
      <Text style={[styles.RText, {color: mine ? 'black' : 'white'}]}>
        {item.content}
      </Text>
    </View>
  );
};

export default MessageBubble;

const styles = StyleSheet.create({
  Container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    maxWidth: '70%',
    borderRadius: 10,
    margin: 10,
    // marginLeft: 'auto',
  },
  RText: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
  },
  lMessage: {
    backgroundColor: theme.colors.primary,
    marginLeft: 10,
    marginRight: 'auto',
  },
  rMessage: {
    backgroundColor: 'grey',
    marginLeft: 'auto',
    marginRight: 10,
  },
});
