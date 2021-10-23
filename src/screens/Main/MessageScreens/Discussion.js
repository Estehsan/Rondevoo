import React, {useLayoutEffect} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import MessageBubble from '../../../component/MessageComponents/MessageBubble';
import MessageInput from '../../../component/MessageComponents/MessageInput';
import DiscussionData from '../../../theme/DiscussionData';

const Discussion = ({navigation, route}) => {
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
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{paddingLeft: 25}}>
          <Icon name="md-arrow-back" size={30} />
        </TouchableOpacity>
      ),
      headerTitle: () => <Title>{route.params.userName}</Title>,
      headerRight: () => (
        <Avatar.Image
          size={30}
          source={{
            url: route.params.img,
          }}
        />
      ),
    });
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}
      style={styles.container}>
      <FlatList
        data={DiscussionData.messages}
        inverted
        renderItem={({item}) => <MessageBubble item={item} />}
      />
      <MessageInput />
    </KeyboardAvoidingView>
  );
};

export default Discussion;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
  },
});
