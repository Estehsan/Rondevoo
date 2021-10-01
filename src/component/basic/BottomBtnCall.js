import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/theme';
import H2W from './H2W';

const BottomBtnCall = () => {
  return (
    <View style={styles.bottom}>
      <View style={styles.btn}>
        <H2W>Call Now</H2W>
      </View>
    </View>
  );
};

export default BottomBtnCall;

const styles = StyleSheet.create({
  bottom: {
    position: 'absolute',
    width: '90%',
    bottom: 0,
    marginHorizontal: '5%',
    height: 100,
    alignItems: 'center',
  },
  btn: {
    height: 50,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.main,
    borderRadius: 100,
  },
});
