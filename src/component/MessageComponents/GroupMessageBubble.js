import React, {useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, Paragraph, Subheading, Title} from 'react-native-paper';
import {theme} from '../../theme/theme';
import AntDesign from 'react-native-vector-icons/AntDesign';

const GroupMessageBubble = ({item}) => {
  const [like, setLike] = useState(false);
  const mine = item.user.id === 'u1';

  return (
    <View style={[styles.Container, mine ? styles.rMessage : styles.lMessage]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {!mine && (
          <Avatar.Image
            style={{marginRight: 10}}
            size={35}
            source={{
              uri: item.user.image,
            }}
          />
        )}
        <View style={styles.MessageName}>
          {!mine && <Subheading> {item.user.name} </Subheading>}
          <Paragraph style={[styles.RText, {color: mine ? 'black' : 'black'}]}>
            {item.content}
          </Paragraph>
        </View>
      </View>

      <TouchableOpacity onPress={() => setLike(!like)}>
        {!mine && (
          <AntDesign
            size={25}
            name={like ? 'heart' : 'hearto'}
            color={like ? 'red' : 'black'}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default GroupMessageBubble;

const styles = StyleSheet.create({
  Container: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    width: Dimensions.get('window').width,
    // marginLeft: 'auto',
  },
  RText: {
    color: 'white',
    fontFamily: 'Rubik-Regular',
  },
  lMessage: {
    // backgroundColor: theme.colors.primary,
    // marginLeft: 10,
  },
  rMessage: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'flex-end',
    // ...theme.colors.customShad2,
    // marginLeft: 'auto',
    // marginRight: 10,
  },
});
