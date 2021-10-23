import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import TI from '../basic/TI';
import Icon from 'react-native-vector-icons/Octicons';
import {theme} from '../../theme/theme';

const {height, width} = Dimensions.get('window');

const TopBar = () => {
  return (
    <View style={styles.main}>
      <TI iconName="magnify" placeholder="wow" />
      <View style={styles.search}>
        <Icon name="settings" size={25} color={theme.colors.silver} />
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
  },
  search: {
    borderRadius: 15,
    width: '15%',
    marginLeft: 15,
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 8,
    alignItems: 'center',
  },
});
