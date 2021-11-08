import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Btn from '../basic/Btn';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {H1W} from '../basic';
import {Button} from 'react-native-paper';
import {theme} from '../../theme/theme';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SmallBtn = ({iconName, placeholder, onPress}) => {
  return (
    <TouchableOpacity style={styles.btnstyle} onPress={onPress}>
      <Text>{placeholder}</Text>
    </TouchableOpacity>
  );
};

export default SmallBtn;

const styles = StyleSheet.create({
  btnstyle: {
    justifyContent: 'space-around',
    borderColor: theme.colors.primary,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
  Text: {
    fontFamily: 'Rubik-Regular',
    fontSize: 15,
    color: 'white',
    lineHeight: 40,
  },
  content: {},
});
