import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Btn from '../basic/Btn';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {H1W} from '../basic';
import {Button} from 'react-native-paper';
import {theme} from '../../theme/theme';

const PurpleBtn = ({iconName, placeholder, onPress}) => {
  return (
    // <Btn onPress={onPress}>
    //   <View style={styles.btnstyle}>
    //     <Icon color="white" name={iconName} size={25} />
    //     <H1W>{placeholder}</H1W>
    //     <H1W></H1W>
    //   </View>
    // </Btn>
    <Button
      style={styles.btnstyle}
      labelStyle={styles.Text}
      icon={iconName}
      contentStyle={styles.content}
      mode="contained"
      onPress={onPress}>
      {placeholder}
    </Button>
  );
};

export default PurpleBtn;

const styles = StyleSheet.create({
  btnstyle: {
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#8200E2',
    marginVertical: 4,
    paddingVertical: 4,
    borderRadius: 20,
  },
  Text: {
    fontFamily: 'Rubik-Bold',
    fontSize: 20,
    color: 'white',
    lineHeight: 40,
  },
  content: {},
});
