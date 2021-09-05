import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const H2W = props => {
  return <Text style={styles.Title} {...props} />;
};

export default H2W;

const styles = StyleSheet.create({
  Title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
    lineHeight: 15,
    paddingVertical: 3,
    color: 'white',
    flexWrap: 'wrap',
  },
});
