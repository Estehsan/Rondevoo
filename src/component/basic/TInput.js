import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput as Input, TextInput} from 'react-native-paper';
import {theme} from '../../theme/theme';
import P from './P';

const TInput = ({errorText, description, iconName, ...props}) => {
  return (
    <View style={styles.container}>
      <Input
        style={[styles.input]}
        theme={{
          colors: {
            primary: '#578ddd',
            underlineColor: 'transparent',
            text: '#578ddd',
          },
        }}
        label="wow"
        onChangeText={{color: 'silver'}}
        placeholderTextColor="silver"
        // underlineColor="transparent"
        outlineColor={theme.colors.primary}
        underlineColor={theme.colors.primary}
        selectionColor={theme.colors.primary}
        {...props}
      />
      {description && !errorText ? <P>{description}</P> : null}
      {errorText ? <P>{errorText}</P> : null}
    </View>
  );
};

export default TInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',

    marginVertical: 5,
  },
  input: {
    backgroundColor: theme.colors.combination,
  },
});
