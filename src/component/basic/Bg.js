import React from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {theme} from '../../theme/theme';

const Bg = ({children}) => {
  return (
    <SafeAreaView style={styles.background}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Bg;

const styles = StyleSheet.create({
  background: {
    width: Dimensions.get('screen').width,
    flex: 1,

    backgroundColor: 'white',
  },
  container: {
    width: Dimensions.get('window').width,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
});
