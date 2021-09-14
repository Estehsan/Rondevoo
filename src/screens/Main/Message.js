import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {theme} from '../../theme/theme';
import H2 from './../../component/basic/h2';

const Message = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: theme.colors.bg,
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{paddingLeft: 25}}>
          <Icon name="md-arrow-back" size={30} />
        </TouchableOpacity>
      ),
      headerTitle: () => <H2>Message</H2>,
      headerRight: () => <H2>Message</H2>,
    });
  }, [navigation]);
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({});
