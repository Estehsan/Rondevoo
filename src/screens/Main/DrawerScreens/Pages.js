import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Bg, H1} from '../../../component/basic';
import HorizontalListStars from '../../../component/HomeComponent/HorizontalListStars';
import {UsersList} from '../../../dummyData';

const Pages = () => {
  return (
    <Bg>
      <View style={styles.center}>
        <H1>My Pages</H1>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={UsersList}
        numColumns={3}
        renderItem={({item}) => <HorizontalListStars item={item} />}
      />
    </Bg>
  );
};

export default Pages;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
