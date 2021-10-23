import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';

const MessageInput = () => {
  return (
    <View style={{justifyContent: 'center'}}>
      <TextInput
        style={{borderRadius: 20}}
        mode="outlined"
        placeholder="Enter Messageas"
        right={<TextInput.Icon name="send" />}
      />
    </View>
  );
};

export default MessageInput;

const styles = StyleSheet.create({});
