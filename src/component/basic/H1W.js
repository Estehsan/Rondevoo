import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const H1W = props => {
  return <Text style={styles.Title} {...props} />;
};

export default H1W;

const styles = StyleSheet.create({
  Title: {
    fontFamily: 'Rubik-Bold',
    fontSize: 25,
    color: 'white',
    lineHeight: 40,
  },
});
