import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {theme} from '../../theme/theme';
import P from './P';

const TInput = ({errorText, description, iconName, ...props}) => {
  const [focus, setFocus] = useState(null);
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
      {description && !errorText ? <P>{description}</P> : null}
      {errorText ? <P>{errorText}</P> : null}
    </View>
  );
};

export default TInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 100,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  textFocus: {
    backgroundColor: 'red',
    borderColor: '#5d05d5',
  },
  input: {
    backgroundColor: theme.colors.combination,
    padding: 5,
    textAlign: 'center',
    height: 50,
    alignItems: 'center',
    width: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderRadius: 30,
    borderColor: 'silver',
    borderWidth: 1,
  },
});
