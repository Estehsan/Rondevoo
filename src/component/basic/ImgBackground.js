import React from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  SafeAreaView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {theme} from '../../theme/theme';

const ImgBackground = ({children}) => {
  return (
    <ImageBackground
      style={{height: '100%', width: '100%'}}
      source={{
        uri: 'https://images.unsplash.com/photo-1557683311-eac922347aa1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=715&q=80',
      }}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default ImgBackground;

const styles = StyleSheet.create({
  background: {
    width: Dimensions.get('screen').width,
    flex: 1,

    backgroundColor: theme.colors.primary,
  },
  container: {
    width: Dimensions.get('window').width,
  },
});
