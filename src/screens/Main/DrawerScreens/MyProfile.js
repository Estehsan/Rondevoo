import React, {useLayoutEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Avatar} from 'react-native-paper';
import {Background, Bg, H1, H2, H3, P} from '../../../component/basic';

import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Subtitle from '../../../component/basic/SubTitle';
import {theme} from '../../../theme/theme';
import ActivitiesList from '../../../component/HomeComponent/ActivitiesList';
import {UsersList} from '../../../dummyData';
import HorizontalListStars from '../../../component/HomeComponent/HorizontalListStars';
import ProfileTop from '../../../component/ProfileComponent/ProfileTop';
import AvatarDrawer from '../../../component/HomeComponent/AvatarDrawer';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const MyProfile = ({navigation}) => {
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
      headerLeft: () => <AvatarDrawer onPress={navigation.openDrawer} />,
      headerRight: () => (
        <View style={styles.row}>
          <TouchableOpacity
            onPress={navigation.openDrawer}
            style={{paddingHorizontal: 10}}>
            <Icon name="chatbubble-outline" size={30} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={navigation.openDrawer}
            style={{paddingHorizontal: 10}}>
            <SimpleLineIcons size={30} name="bag" />
          </TouchableOpacity>
        </View>
      ),
      headerTitle: () => <H1>USERNAME</H1>,
    });
  }, [navigation]);
  return (
    <Background>
      <View style={styles.Content}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={UsersList}
          numColumns={3}
          ListHeaderComponent={
            <>
              <ProfileTop />
              <View style={styles.padding30}>
                <H1>Pages</H1>
              </View>

              <FlatList
                data={UsersList}
                numColumns={3}
                renderItem={({item}) => <HorizontalListStars item={item} />}
              />
              <View style={styles.padding30}>
                <H1>Subscription</H1>
              </View>
            </>
          }
          renderItem={({item}) => <HorizontalListStars item={item} />}
        />
      </View>
    </Background>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  Content: {paddingHorizontal: 5, backgroundColor: '#fff'},
  padding30: {paddingVertical: 10},
});
