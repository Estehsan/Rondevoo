import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {theme} from '../../theme/theme';
import H3 from './../../component/basic/H3';
import H2 from './../../component/basic/H2';
import H1 from './../../component/basic/H1';
import Btn from './../../component/basic/Btn';
import H2W from './../../component/basic/H2W';
import BottomBtnCall from './../../component/basic/BottomBtnCall';

import Icon from 'react-native-vector-icons/AntDesign';

import TextField from './../../component/basic/TextField';

import {Subheading, TextInput, Title} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FindSvg from '../../component/svg/FindSvg';

const Tab = createMaterialTopTabNavigator();

const Calls = ({navigation}) => {
  return (
    <View>
      <View style={styles.cant}>
        <FindSvg />
        <Title>We Can't Find Any Call</Title>
      </View>
      <BottomBtnCall />
    </View>
  );
};
const Feed = ({navigation}) => {
  const [text, setText] = useState();
  return (
    <View style={styles.Container}>
      <View style={styles.main}>
        <View style={styles.Top}>
          <Title>Upload Post </Title>
          <Text></Text>
          <H3 style={{textAlign: 'center'}}>Upload your post and get viral</H3>
        </View>

        <View style={styles.Group}>
          <TextInput
            mode="Write a Caption..."
            label="Caption"
            placeholder="Type something"
            style={styles.TInput}
            right={<TextInput.Affix text="/100" />}
          />
        </View>
        {/* <View style={styles.Group}>
          <H3>Tags</H3>
          <TextField
            placeholder=" Search Tags"
            onChangeText={text => setText(text)}
            value={text}
          />
        </View> */}
        <View style={styles.Group}>
          <H3>Upload Media</H3>
          <Text></Text>
          <TouchableOpacity style={styles.Upload}>
            <Icon name="upload" size={30} style={{paddingHorizontal: 5}} />
          </TouchableOpacity>
          <Text></Text>
          <Text></Text>
        </View>

        <Btn>
          <H2W>POST NOW</H2W>
        </Btn>
      </View>
    </View>
  );
};

const Add = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="My Calls" component={Calls} />
      <Tab.Screen name="Feed " component={Feed} />
    </Tab.Navigator>
  );
};

export default Add;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  main: {
    margin: 30,
    padding: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    ...theme.colors.customShad,
  },
  Group: {paddingVertical: 10, justifyContent: 'center'},
  Top: {justifyContent: 'center', alignItems: 'center'},
  Upload: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    ...theme.colors.customShad,
  },
  TInput: {
    backgroundColor: 'white',
  },
  bottom: {
    position: 'absolute',
    width: '90%',
    bottom: 20,
    marginHorizontal: '5%',
    height: 100,
    alignItems: 'center',
  },
  btn: {
    height: 50,
    width: '95%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.main,
    borderRadius: 100,
  },

  cant: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
});
