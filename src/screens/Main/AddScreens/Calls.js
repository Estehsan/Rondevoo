import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {
  Checkbox,
  Paragraph,
  Subheading,
  TextInput,
  Title,
} from 'react-native-paper';
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

  const [checked, setChecked] = useState(false);

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
        <View style={styles.BoxItem}>
          <Title>Availability</Title>
          <Checkbox.Item
            color="red"
            status={checked ? 'checked' : 'unchecked'}
            label="Monday"
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Checkbox.Item
            color="red"
            status={checked ? 'checked' : 'unchecked'}
            label="Tuesday"
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Checkbox.Item
            color="red"
            status={checked ? 'checked' : 'unchecked'}
            label="Wednesday"
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Checkbox.Item
            color="red"
            status={checked ? 'checked' : 'unchecked'}
            label="Thursday"
            onPress={() => {
              setChecked(!checked);
            }}
          />
        </View>
        <View style={styles.BoxItem}>
          <Title>Payment</Title>
          <Paragraph>Select Below</Paragraph>
          <Paragraph>Priced or Free?</Paragraph>
          <View style={styles.row}></View>
        </View>
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
  BoxItem: {
    padding: 20,
    backgroundColor: theme.colors.bg,
    marginVertical: 5,
  },
});
