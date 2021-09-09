import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Subtitle = props => {
  return <Text style={styles.Title} {...props} />;
};

export default Subtitle;

const styles = StyleSheet.create({
  Title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    letterSpacing: 0,
    lineHeight: 40,
  },
});
