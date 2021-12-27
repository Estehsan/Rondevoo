import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';
import {theme} from '../../../theme/theme';
import {AddTemplate, PurpleBtn} from '../../../component/AddComponent';
import {Btn} from '../../../component/basic';

const Calls = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: theme.colors.primary,
        elevation: 0, // for Android
        shadowOffset: {
          width: 0,
          height: 0, // for iOS
        },
      },
    });
  }, [navigation]);
  const [text, setText] = useState();
  const [tags, setTags] = useState();
  const [description, setDescription] = useState();
  const [Length, setLength] = useState();
  const [Availability, setAvailablity] = useState();

  return (
    <AddTemplate
      title="Creat a call"
      subTitle="Use the following features below to create a call">
      <ScrollView>
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
        <TextInput
          style={styles.inputStyle}
          label="Banner Image"
          value={text}
          onChangeText={text => setText(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Length of Time (in minutes)"
          value={text}
          onChangeText={text => setText(text)}
        />
        <Btn placeholder="Add to Community" />
      </ScrollView>
    </AddTemplate>
  );
};

export default Calls;

const styles = StyleSheet.create({
  inputStyle: {
    marginVertical: 10,
    backgroundColor: theme.colors.bg,
  },
  Details: {
    marginVertical: 10,
    backgroundColor: theme.colors.bg,
    height: 100,
  },
  inputStyle: {
    marginVertical: 10,
    backgroundColor: theme.colors.bg,
  },
});
