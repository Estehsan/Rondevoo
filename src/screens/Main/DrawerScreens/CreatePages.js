import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {AddTemplate} from '../../../component/AddComponent';
import {Btn, H1, HeadingW} from '../../../component/basic';
import {theme} from '../../../theme/theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const CreatePages = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTintColor: 'white',

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
    // subTitle="Post to CreatePages"
    // subTitle="Use the following features below to create your call"
    >
      <View style={styles.UploadImg}>
        <Entypo name="camera" size={30} color={theme.colors.primary} />
        <Text style={styles.UploadImgText}>Upload Image</Text>
      </View>
      <TextInput
        style={styles.inputStyle}
        label="Title"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Price"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Category"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        style={styles.inputStyle}
        label="Condition"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        style={styles.Details}
        // mode="outlined"
        label="Description"
        placeholder="Type something"
        onChangeText={text => setText(text)}
        right={<TextInput.Affix text="/100" />}
      />
      <Btn placeholder="Create Page" />
    </AddTemplate>
  );
};

export default CreatePages;
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
  UploadImg: {
    height: 100,
    backgroundColor: theme.colors.bg,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  uploadImgText: {
    fontSize: 20,
  },
});
