import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {AddTemplate} from '../../../component/AddComponent';
import {Btn, H1, HeadingW} from '../../../component/basic';
import {theme} from '../../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Community = ({navigation}) => {
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
    // subTitle="Post to Community"
    // subTitle="Use the following features below to create your call"
    >
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
        label="Payment"
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
        style={styles.Details}
        // mode="outlined"
        label="Outlined input"
        placeholder="Type something"
        onChangeText={text => setText(text)}
        right={<TextInput.Affix text="/100" />}
      />
      <Btn placeholder="Add to Community" />
    </AddTemplate>
  );
};

export default Community;
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
});
