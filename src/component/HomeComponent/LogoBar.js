import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar} from 'react-native-paper';

const LogoBar = ({navigation}) => {
  return (
    <View style={styles.center}>
      <Image
        style={{width: 200}}
        resizeMode="contain"
        source={require('./../../assets/img/purpleLogo.png')}
      />
    </View>
  );
};

export default LogoBar;

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'white',
  },
});
