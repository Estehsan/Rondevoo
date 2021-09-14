import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import H3 from './../basic/H3';
import Subtitle from './../basic/SubTitle';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchList = ({item, navigation}) => {
  // const navigation = useNavigation();

  return (
    <View style={styles.main}>
      <View style={styles.Icon}>
        <Icon name={item.iconName} size={38} />
      </View>
      <View style={styles.Content}>
        <Subtitle>{item.Title}</Subtitle>
        <H3>{item.sub}</H3>
      </View>
    </View>
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
