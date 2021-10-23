import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/theme';

const Btn = ({children}) => {
  return <View style={styles.Btn}>{children}</View>;
};

export default Btn;

const styles = StyleSheet.create({
  Btn: {
    backgroundColor: theme.colors.secondary,
    marginVertical: 4,
    paddingVertical: 13,
    borderRadius: 20,
  },
});
