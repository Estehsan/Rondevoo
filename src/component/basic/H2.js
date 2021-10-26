import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const H2 = props => {
  return <Text style={styles.Title} {...props} />;
};

export default H2;

const styles = StyleSheet.create({
  Title: {
    fontFamily: 'Rubik-Bold',
    fontSize: 18,
    lineHeight: 16,
    paddingVertical: 3,

    flexWrap: 'wrap',
  },
});
