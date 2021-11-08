import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {PurpleBtn} from '../../../component/AddComponent';
import {Bg, Btn, H1, SmallBtn} from '../../../component/basic';
import CallsHorizontalList from '../../../component/HomeComponent/CallsHorizontalList';
import UsersList from '../../../dummyData/UsersList';

const CallsCreatedPage = () => {
  return (
    <Bg style={styles.main}>
      <View style={styles.Top}>
        <H1>Calls</H1>
        <SmallBtn placeholder="Request a Call" />
      </View>

      <FlatList
        numColumns={2}
        data={UsersList}
        renderItem={({item}) => <CallsHorizontalList item={item} />}
      />
    </Bg>
  );
};

export default CallsCreatedPage;

const styles = StyleSheet.create({
  main: {flex: 1},
  Top: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginBottom: 5,
  },
});
