import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {theme} from '../../../theme/theme';
import {AddTemplate, PurpleBtn} from '../../../component/AddComponent';
import {Btn} from '../../../component/basic';

const Calls = ({navigation}) => {
  const [text, setText] = useState();
  const [tags, setTags] = useState();
  const [description, setDescription] = useState();
  const [Length, setLength] = useState();
  const [Availability, setAvailablity] = useState();

  return (
    <AddTemplate
      title="Creat a call"
      subTitle="Use the following features below to create a call">
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
      <Btn placeholder="Create Booking Call" />
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
});
