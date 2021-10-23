import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/theme';

const Span = props => {
  return <Text style={styles.Title} {...props} />;
};

export default Span;

const styles = StyleSheet.create({
  Title: {
    fontFamily: 'Rubik-Regular',
    fontSize: 15,
    // lineHeight: 30,
    paddingVertical: 3,
    color: theme.colors.silver,

    // flexShrink: 1,
    // flex: 1,
    // flexWrap: 'wrap',
  },
});
