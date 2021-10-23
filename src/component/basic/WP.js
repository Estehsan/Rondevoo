import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const WP = props => {
  return <Text style={styles.Title} {...props} />;
};

export default WP;

const styles = StyleSheet.create({
  Title: {
    fontFamily: 'Rubik-Regular',
    fontSize: 15,
    fontWeight: '400',
    color: 'white',
    lineHeight: 15,
    paddingVertical: 3,
  },
});
