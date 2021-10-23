import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  Caption,
  Headline,
  Subheading,
  TextInput,
  Title,
} from 'react-native-paper';
import TextField from '../../../component/basic/TextField';
import H3 from '../../../component/basic/H3';
import H2W from '../../../component/basic/H2W';

import {theme} from '../../../theme/theme';
import Btn from '../../../component/basic/Btn';

const NewBiddingCall = ({navigation}) => {
  const [text, setText] = React.useState('');

  return (
    <View style={styles.Container}>
      <View style={styles.main}>
        <Title>Create Bidding Call</Title>
        <Subheading>
          Use the following features below to create your call.
        </Subheading>

        <View style={styles.Group}>
          <H3>Call Length</H3>
          <TextField
            placeholder="Title"
            onChangeText={text => setText(text)}
            value={text}
          />
        </View>
        <View style={styles.Group}>
          <H3>Bid Time</H3>
          <TextField
            placeholder="In minutes"
            onChangeText={text => setText(text)}
            value={text}
          />
        </View>
        <View style={styles.Group}>
          <H3>Description</H3>
          <TextField
            placeholder="Description"
            onChangeText={text => setText(text)}
            value={text}
          />
        </View>
        <Btn>
          <H2W>Create Bidding Call</H2W>
        </Btn>
      </View>
    </View>
  );
};

export default NewBiddingCall;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  main: {
    margin: 30,
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    ...theme.colors.customShad,
  },
  Group: {paddingVertical: 10},
});
