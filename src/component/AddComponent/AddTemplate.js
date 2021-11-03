import React from 'react';
import {KeyboardAvoidingView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '../../theme/theme';
import {HeadingW} from '../basic';

const AddTemplate = ({children, title, subTitle}) => {
  return (
    <SafeAreaView style={styles.subcontainer}>
      <KeyboardAvoidingView behavior="padding" enabled style={{flex: 1}}>
        <View style={styles.topContainer}>
          {subTitle ? <Text style={styles.subhead}>{subTitle}</Text> : null}
        </View>
        <View style={styles.Content}>{children}</View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddTemplate;

const styles = StyleSheet.create({
  subhead: {
    marginHorizontal: 10,
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Rubik-Bold',
    flexWrap: 'wrap',
    opacity: 0.8,
  },
  subcontainer: {
    flex: 1,
    backgroundColor: theme.colors.primary,
  },
  Content: {
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
    ...theme.colors.customShad2,
  },
  topContainer: {
    marginBottom: 20,
  },
});
