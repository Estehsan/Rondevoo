import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-paper';

const AvatarDrawer = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{paddingHorizontal: 10}}>
      <Avatar.Image
        size={35}
        source={{
          uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        }}
      />
    </TouchableOpacity>
  );
};

export default AvatarDrawer;

const styles = StyleSheet.create({});
