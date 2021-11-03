import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TextInputComponent,
  TouchableOpacity,
  View,
} from 'react-native';
import {theme} from './../../theme/theme';
import TInput from './../../component/basic/TInput';

import H1 from '../../component/basic/H1';
import H2W from '../../component/basic/H2W';

import Btn from '../../component/basic/Btn';
import Background from '../../component/basic/Background';
import Logo from '../../component/basic/Logo';

const Login = ({navigation}) => {
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.main}>
          <View style={styles.Top}>
            <Logo />
            <View style={styles.P10}></View>
            <H1>Get Started</H1>
            <View style={styles.P5}></View>
          </View>

          <View style={styles.P10}>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Btn>
                <H2W>Login</H2W>
              </Btn>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Btn>
              <H2W>Register</H2W>
            </Btn>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
  },
  main: {
    paddingVertical: 40,
    paddingHorizontal: 30,
    backgroundColor: theme.colors.combination,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

    height: '70%',
    width: '100%',
  },
  Top: {alignItems: 'center'},
  P10: {paddingVertical: 20},
  P5: {paddingVertical: 10},
});
