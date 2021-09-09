import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import H2 from './../basic/H2';
import H3 from './../basic/H3';
import Subtitle from './../basic/SubTitle';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SearchList = ({navigation, item}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('Details', {
          id: item.id,
          Title: item.Title,
          iconName: item.iconName,
          sub: item.sub,
        })
      }
      style={styles.main}>
      <View style={styles.Icon}>
        <Icon name={item.iconName} size={38} />
      </View>
      <View style={styles.Content}>
        <Subtitle>{item.Title}</Subtitle>
        <H3>{item.sub}</H3>
      </View>
    </TouchableOpacity>
  );
};

export default SearchList;

const styles = StyleSheet.create({
  main: {
    paddingVertical: 8,
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: 'white',
  },
  Icon: {width: '20%', justifyContent: 'center', alignItems: 'center'},
  Content: {width: '80%'},
});
