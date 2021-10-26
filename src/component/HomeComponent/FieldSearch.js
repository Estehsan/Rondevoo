import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Searchbar} from 'react-native-paper';

const FieldSearch = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);

  return (
    // <View style={styles.SearchBarStyle}>
    <Searchbar
      placeholder="Search a Conversation"
      onChangeText={onChangeSearch}
      value={searchQuery}
      style={styles.Searchstyle}
    />
    // </View>
  );
};

export default FieldSearch;

const styles = StyleSheet.create({
  Searchstyle: {
    marginHorizontal: 20,
    borderRadius: 20,
    marginVertical: 10,
  },
});
