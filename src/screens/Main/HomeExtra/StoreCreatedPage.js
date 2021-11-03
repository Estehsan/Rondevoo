import React, {useLayoutEffect} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Avatar, Button, Card} from 'react-native-paper';
import {PurpleBtn} from '../../../component/AddComponent';
import {Bg, H1} from '../../../component/basic';
import LogoBar from '../../../component/HomeComponent/LogoBar';
import StoreProduct from '../../../component/HomeComponent/StoreProduct';
import ProfileTop from '../../../component/ProfileComponent/ProfileTop';
import {UsersList} from '../../../dummyData';

const StoreCreatedPage = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#fff',
        height: 100,
        shadowColor: 'transparent',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
        },
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={navigation.openDrawer}
          style={{paddingHorizontal: 10}}>
          <Avatar.Image
            size={35}
            source={{
              uri: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            }}
          />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <Image
          style={{width: 200, bottom: 20}}
          resizeMode="contain"
          source={require('../../../assets/img/purpleLogo.png')}
        />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.main}>
      <FlatList
        data={UsersList}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <ProfileTop />
            <View style={styles.marginver}>
              <H1>Store</H1>
            </View>
          </>
        )}
        renderItem={({item}) => <StoreProduct item={item} />}
      />
    </View>
  );
};

export default StoreCreatedPage;

const styles = StyleSheet.create({
  main: {flex: 1, backgroundColor: '#fff'},
  Content: {
    borderTopColor: 'silver',
    borderTopWidth: 0.3,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  marginver: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});
