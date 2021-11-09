import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const LogoHeader = () => {
  return (
    <View style={{marginTop: -20}}>
      <Image
        style={{
          width: 200,
        }}
        resizeMode="contain"
        source={require('./../../assets/img/purpleLogo.png')}
      />
    </View>
  );
};

export default LogoHeader;

const styles = StyleSheet.create({});
