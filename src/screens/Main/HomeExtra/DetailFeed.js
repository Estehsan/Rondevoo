import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  FlatList,
} from 'react-native';
import {H1, H2, P} from '../../../component/basic';
import Comment from '../../../component/FeedComponent/Comment';

import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/EvilIcons';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import {Avatar, Caption, Divider, Paragraph, Title} from 'react-native-paper';

const CommentData = [
  {
    id: 1,
    name: 'Nasra',
    imageUri: 'https://avatars.githubusercontent.com/u/7809332?v=4',
    comment: 'Wow! This is Amazing',
  },
  {
    id: 2,
    name: 'Elon Musk',
    comment: 'Lol',
    imageUri: 'https://picsum.photos/200/300?random=2',
  },
  {
    id: 3,
    name: 'Shah',
    comment: 'Waiting for the reply',
    imageUri: 'https://picsum.photos/200/300?random=1',
  },
];
const DetailFeed = ({route}) => {
  return (
    <View style={styles.bg}>
      {/* Comment Section */}
      <FlatList
        data={CommentData}
        ListHeaderComponent={() => (
          <View>
            <TopDetailsOfFeed route={route} />
            <View style={{marginHorizontal: 10, marginVertical: 10}}>
              <H1>Comments</H1>
            </View>
          </View>
        )}
        ItemSeparatorComponent={() => (
          <Divider
            style={{borderWidth: 0.3, borderColor: 'silver', marginBottom: 10}}
          />
        )}
        renderItem={({item}) => <Comment item={item} />}
      />
    </View>
  );
};

const TopDetailsOfFeed = ({route}) => {
  const {item} = route.params;
  const [like, setLike] = useState(false);

  return (
    <>
      <Image
        resizeMode="cover"
        style={{
          height: 300,
          width: '100%',
        }}
        source={{
          url: item.postImg,
        }}
      />
      <View style={styles.container}>
        <Paragraph>
          Wow That looks nice .It's a wonderfull Paragraphroject. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </Paragraph>
      </View>
      {/* Profile Info */}
      <View style={styles.rw}>
        <Avatar.Image
          size={80}
          source={{
            uri: item.profileImg,
          }}
        />
        <View style={styles.rightOfAvatar}>
          <View style={styles.topright}>
            <H2>@{item.name}</H2>
            <P>31,Dec 2020</P>
          </View>
          <View style={styles.CommentLike}>
            <View style={styles.three}>
              <TouchableOpacity
                style={styles.row}
                onPress={() => setLike(!like)}>
                <Icon2
                  size={30}
                  name={like ? 'like1' : 'like2'}
                  style={styles.p10}
                  color={like ? 'red' : 'black'}
                />
                <P>10K</P>
              </TouchableOpacity>
              <View style={styles.row}>
                <Icon3 size={40} name="comment" style={styles.p10} />
                <P>10K</P>
              </View>
              <View style={styles.row}>
                <Icon4 size={30} name="ios-share" style={styles.p10} />
                <P>10K</P>
              </View>
            </View>
          </View>
        </View>

        <H1>Comments</H1>
      </View>
    </>
  );
};
export default DetailFeed;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: 'white',
  },
  rw: {
    flexDirection: 'row',
    display: 'flex',
    paddingVertical: 10,
  },
  topright: {
    paddingHorizontal: 20,
    width: '80%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  CommentLike: {
    paddingTop: 5,
    paddingBottom: 10,
  },
  three: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  row: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
