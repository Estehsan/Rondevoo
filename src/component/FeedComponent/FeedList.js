import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Avatar} from 'react-native-paper';
import H2 from './../../component/basic/H2';
import P from './../../component/basic/P';
import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/Octicons';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import {theme} from '../../theme/theme';

const FeedList = ({item}) => {
  const [like, setLike] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.PostImg}>
        <View style={styles.Content}>
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
                      name={like ? 'hearto' : 'heart'}
                      style={styles.p10}
                      color={like ? 'black' : 'red'}
                    />
                    <P>10K</P>
                  </TouchableOpacity>
                  <View style={styles.row}>
                    <Icon3 size={30} name="comment" style={styles.p10} />
                    <P>10K</P>
                  </View>
                  <View style={styles.row}>
                    <Icon4 size={30} name="ios-share" style={styles.p10} />
                    <P>10K</P>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* <P>{item.postContent}</P> */}
          <P>
            Wow That looks nice .It's a wonderfull Project. Lorem Ipsum is
            simply dummy text of the printing and typesetting industry.
          </P>
        </View>
        <Image
          resizeMode="cover"
          style={{
            height: 400,
            width: '100%',
          }}
          source={{
            url: item.postImg,
          }}
        />
      </View>
    </View>
  );
};

export default FeedList;

const styles = StyleSheet.create({
  container: {},
  postImg: {paddingVertical: 10},
  Content: {paddingVertical: 20, paddingHorizontal: 30},
  three: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  CommentLike: {
    paddingTop: 5,
    paddingBottom: 10,
  },
  rw: {
    flexDirection: 'row',
    display: 'flex',
  },
  topright: {
    paddingHorizontal: 20,
    width: '80%',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
});
