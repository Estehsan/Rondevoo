import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {theme} from '../../theme/theme';
import MIcon from 'react-native-vector-icons/MaterialIcons';

const TI = ({description, iconName, data, ...props}) => {
  return (
    <View style={styles.container}>
      <View>
        <MIcon name="search" size={20} color={theme.colors.silver} />
      </View>
      <View style={{width: data}}>
        <TextInput
          style={styles.Input}
          placeholderTextColor={theme.colors.silver}
          placeholder="Search"
          {...props}
        />
      </View>
    </View>
  );
};

export default TI;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.combination,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
  },
  Input: {
    paddingHorizontal: 15,
    paddingVertical: 0,
    backgroundColor: theme.colors.combination,
    width: '100%',
  },
});
