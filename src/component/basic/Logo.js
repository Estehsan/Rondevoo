import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
const Logo = () => {
  return (
    <View>
      <Image
        source={require('./../../assets/img/logo.png')}
        resizeMode="contain"
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({});
