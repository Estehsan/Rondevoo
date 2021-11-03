import React, {useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import FeedList from '../../../component/FeedComponent/FeedList';
import ProfileInfo from '../../../component/ProfileComponent/ProfileInfo';
import FeedData from '../../../theme/FeedData';

const CommunityCreatePage = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Icon2 size={30} name="hand-holding-usd" />,
    });
  }, [navigation]);
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

export default CommunityCreatePage;

const styles = StyleSheet.create({
  FeedPostStyle: {
    width: Dimensions.get('window').width,
    backgroundColor: 'white',
    marginVertical: 10,
    borderWidth: 0.2,
    borderColor: 'silver',
  },
});
