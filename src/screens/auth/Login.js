import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ImgBackground from '../../component/basic/ImgBackground';

const Login = ({navigation}) => {
  return (
    <ImgBackground>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text>Login</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text>Go To Register Screen</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImgBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  main: {
    backgroundColor: 'blue',

    height: '80%',
    width: '100%',
  },
});
