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

const Wbg = ({children}) => {
  return (
    <SafeAreaView style={styles.background}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Wbg;

const styles = StyleSheet.create({
  background: {
    width: Dimensions.get('screen').width,
    flex: 1,

    backgroundColor: 'white',
  },
  container: {
    width: Dimensions.get('window').width,
  },
});
