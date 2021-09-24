import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';

const TextField = props => {
  return <TextInput style={styles.edit} mode="outlined" {...props} />;
};

export default TextField;

const styles = StyleSheet.create({
  edit: {
    borderRadius: 0,
    backgroundColor: 'white',
  },
});
