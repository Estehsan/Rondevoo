import React from 'react';
import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import ProfileInfo from '../../../component/ProfileComponent/ProfileInfo';
import FeedList from '../../../component/FeedComponent/FeedList';

import FeedData from '../../../theme/FeedData';

const FeedCreatedPage = () => {
  return (
    <View>
      <FlatList
        data={FeedData}
        keyExtractor={item => item.id}
        ListHeaderComponent={() => <ProfileInfo />}
        renderItem={({item}) => (
          <View style={styles.FeedPostStyle}>
            <FeedList item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default FeedCreatedPage;

const styles = StyleSheet.create({
  FeedPostStyle: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    marginVertical: 10,
    borderWidth: 0.2,
    borderColor: 'silver',
  },
});
