import React, {useLayoutEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Avatar, Surface} from 'react-native-paper';
import {H1, LogoHeader} from '../../component/basic';
import ActivitiesList from '../../component/HomeComponent/ActivitiesList';
import HorizontalListStars from '../../component/HomeComponent/HorizontalListStars';
import LogoBar from '../../component/HomeComponent/LogoBar';
import {UsersList} from '../../dummyData';
import {theme} from '../../theme/theme';

const Home = ({navigation}) => {
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
      headerTitle: () => <LogoHeader />,
    });
  }, [navigation]);
  return (
    <View style={styles.bg}>
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <H1>Subscriptions</H1>

            <FlatList
              data={UsersList}
              numColumns={3}
              // ListFooterComponent={<Text>hello</Text>}
              ListFooterComponentStyle={{height: 100}}
              renderItem={({item}) => (
                <HorizontalListStars item={item} navigation={navigation} />
              )}
            />
            <H1>Activity</H1>
          </>
        }
        data={UsersList}
        renderItem={({item}) => <ActivitiesList item={item} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bg: {
    paddingTop: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  surface: {padding: 10, elevation: 4},
});
