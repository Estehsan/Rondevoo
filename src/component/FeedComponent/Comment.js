import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Avatar, Paragraph} from 'react-native-paper';
import {H2, P, Caption} from '../basic';
import Icon2 from 'react-native-vector-icons/AntDesign';

const Comment = ({item}) => {
  const [unlike, setUnlike] = useState(false);

  const [like, setLike] = useState(false);

  return (
    <View>
      <View style={styles.CommentSection}>
        <Avatar.Image
          size={50}
          source={{
            uri: item.imageUri,
          }}
        />

        <View style={styles.commentAndTime}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <H2>@{item.name}</H2>
            <H2 />
            <H2 />

            <P>31,Dec 2020</P>
          </View>
          <Paragraph>{item.comment}</Paragraph>
        </View>
      </View>
      <View style={styles.CommentLike}>
        <TouchableOpacity onPress={() => setLike(!like)}>
          <Icon2
            size={25}
            name={like ? 'like1' : 'like2'}
            color={like ? 'red' : 'black'}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setUnlike(!unlike)}>
          <Icon2
            size={25}
            name={unlike ? 'dislike1' : 'dislike2'}
            color={unlike ? 'red' : 'black'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  CommentSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  commentAndTime: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignContent: 'center',
  },
  CommentLike: {
    paddingTop: 5,
    paddingBottom: 10,
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
});
