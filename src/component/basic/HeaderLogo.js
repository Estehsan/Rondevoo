import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const HeaderLogo = () => {
  return (
    <Image
      style={{width: 200, bottom: 20}}
      resizeMode="contain"
      source={require('./../../assets/img/purpleLogo.png')}
    />
  );
};

export default HeaderLogo;

const styles = StyleSheet.create({});
