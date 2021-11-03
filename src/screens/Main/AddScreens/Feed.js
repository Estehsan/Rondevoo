import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Btn, H1, HeadingW} from '../../../component/basic';
import {theme} from '../../../theme/theme';
import {Avatar, Button, TextInput} from 'react-native-paper';
import {AddTemplate} from '../../../component/AddComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Feed = ({navigation}) => {
  const [text, setText] = useState();
  const [email, setEmail] = useState();
  return (
    <AddTemplate
      title="Create Booking Call"
      subTitle="Use the following features below to create your call">
      <TextInput
        style={styles.inputStyle}
        label="Call Title"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Tags"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Description"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Banner Image"
        value={text}
        onChangeText={text => setText(text)}
      />
      <H1>All Fields will be here</H1>
      <Btn placeholder="Create Booking Call" />
    </AddTemplate>
  );
};

export default Feed;

const styles = StyleSheet.create({
  inputStyle: {
    marginVertical: 10,
    backgroundColor: theme.colors.bg,
  },
});
