import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeadingW = props => {
  return <Text style={styles.Heading} {...props} />;
};

export default HeadingW;

const styles = StyleSheet.create({
  Heading: {
    fontFamily: 'Rubik-Bold',
    color: 'white',
    fontSize: 30,
    lineHeight: 40,
  },
});
