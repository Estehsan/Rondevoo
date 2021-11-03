import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AddTemplate} from '../../../component/AddComponent';

const Store = () => {
  return (
    <AddTemplate
      title="Create Booking Call"
      subTitle="Use the following features below to create your call">
      <Text>Community</Text>
    </AddTemplate>
  );
};

export default Store;

const styles = StyleSheet.create({});
