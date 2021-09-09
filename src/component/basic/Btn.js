import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/theme';

const Btn = ({children}) => {
  return <View style={styles.Btn}>{children}</View>;
};

export default Btn;

const styles = StyleSheet.create({
  Btn: {
    backgroundColor: theme.colors.main,
    paddingVertical: 13,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
