import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-paper';
import {theme} from '../../theme/theme';

const Btn = ({placeholder, onPress}) => {
  return (
    <Button
      style={styles.btn}
      labelStyle={styles.Text}
      // icon={iconName}
      contentStyle={styles.content}
      mode="contained"
      onPress={onPress}>
      {placeholder}
    </Button>
  );
};

export default Btn;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: theme.colors.secondary,
    marginVertical: 4,
    paddingVertical: 13,
    borderRadius: 20,
  },
});
