import {NavigationContainer} from '@react-navigation/native';
import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import H2 from '../../../component/basic/H2';
import {theme} from '../../../theme/theme';
import Icon from 'react-native-vector-icons/Ionicons';

const Request = ({navigation}) => {
  useLayoutEffect(() => {
    NavigationContainer.setOptions({
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
      headerTitle: () => <H2>My Calls</H2>,
      headerRight: () => <View />,
    });
  }, [navigation]);

  return (
    <View>
      <Text>Request</Text>
    </View>
  );
};

export default Request;

const styles = StyleSheet.create({});
