import React, {useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {AddTemplate} from '../../../component/AddComponent';
import {Btn, H1} from '../../../component/basic';
import AvatarDrawer from '../../../component/HomeComponent/AvatarDrawer';
import {theme} from '../../../theme/theme';

const Help = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <AvatarDrawer onPress={navigation.openDrawer} />,
    });
  }, [navigation]);
  const [text, setText] = useState();

  return (
    <View style={styles.Main}>
      <View style={styles.content}>
        <View style={styles.Title}>
          <H1>Contact Us</H1>
        </View>
        <TextInput
          style={styles.inputStyle}
          label="Title"
          mode="outlined"
          value={text}
          onChangeText={text => setText(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Price"
          mode="outlined"
          value={text}
          onChangeText={text => setText(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Category"
          mode="outlined"
          value={text}
          onChangeText={text => setText(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Condition"
          value={text}
          mode="outlined"
          onChangeText={text => setText(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Description"
          mode="outlined"
          placeholder="Type something"
          onChangeText={text => setText(text)}
          right={<TextInput.Affix text="/100" />}
        />
        <View style={{paddingVertical: 10}}>
          <Btn placeholder="Create Page" />
        </View>
      </View>
    </View>
  );
};

export default Help;

const styles = StyleSheet.create({
  Main: {flex: 1},
  Title: {
    alignItems: 'center',
    paddingvertical: 10,
  },
  content: {
    marginHorizontal: 30,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    paddingTop: 30,
    paddingHorizontal: 30,
    ...theme.colors.customShad2,
  },
  inputStyle: {
    marginVertical: 5,
    backgroundColor: 'white',
  },
});
