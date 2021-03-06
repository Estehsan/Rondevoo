import React, {useLayoutEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {PurpleBtn} from '../../../component/AddComponent';
import {Bg} from '../../../component/basic';
import LogoBar from '../../../component/HomeComponent/LogoBar';
import ProfileInfo from '../../../component/ProfileComponent/ProfileInfo';
import ProfileTop from '../../../component/ProfileComponent/ProfileTop';

const Subscription = ({navigation}) => {
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
    <View style={styles.Center}>
      <ProfileInfo />
      <View style={styles.Content}>
        {/* <Text>Subscrition here</Text> */}
        <View>
          <View style={styles.gap}>
            <PurpleBtn
              style={styles.gap}
              iconName="account-group"
              placeholder={'Community'}
              onPress={() => navigation.push('CommunityCreatePage')}
            />
          </View>

          <View style={styles.gap}>
            <PurpleBtn
              style={styles.gap}
              iconName="phone"
              placeholder={'Calls'}
              onPress={() => navigation.navigate('CallsCreatedPage')}
            />
          </View>

          <View style={styles.gap}>
            <PurpleBtn
              style={styles.gap}
              iconName="camera"
              placeholder={'Feed'}
              onPress={() => navigation.navigate('FeedCreatedPage')}
            />
          </View>

          <View style={styles.gap}>
            <PurpleBtn
              style={styles.gap}
              iconName="store"
              placeholder={'Store'}
              onPress={() => navigation.navigate('StoreCreatedPage')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Subscription;

const styles = StyleSheet.create({
  Content: {
    flex: 1,
    // alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    // alignItems: 'center',
  },
  Center: {
    flex: 1,
  },
  gap: {
    marginVertical: 15,
  },
});
