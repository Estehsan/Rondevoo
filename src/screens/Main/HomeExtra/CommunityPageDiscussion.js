import React, {useLayoutEffect} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import GroupMessageBubble from '../../../component/MessageComponents/GroupMessageBubble';
import MessageBubble from '../../../component/MessageComponents/MessageBubble';
import MessageInput from '../../../component/MessageComponents/MessageInput';
import DiscussionData from '../../../theme/DiscussionData';

const CommunityPageDiscussion = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="md-arrow-back" size={30} />
        </TouchableOpacity>
      ),
      headerTitle: () => <Title>Kobe Bryan</Title>,
    });
  }, [navigation]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      style={styles.container}>
      <FlatList
        data={DiscussionData.groupMessage}
        inverted
        renderItem={({item}) => <GroupMessageBubble ageBubble item={item} />}
      />
      <MessageInput />
    </KeyboardAvoidingView>
  );
};

export default CommunityPageDiscussion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
