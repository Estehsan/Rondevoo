import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Heading = props => {
  return <Text style={styles.Heading} {...props} />;
};

export default Heading;

const styles = StyleSheet.create({
  Heading: {
    fontFamily: 'Rubik-Bold',
    fontSize: 30,
    lineHeight: 40,
  },
});
