import React, {useLayoutEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Bg, H3} from '../../../component/basic';
import Entypo from 'react-native-vector-icons/Entypo';
import Foundation from 'react-native-vector-icons/Foundation';
import {theme} from '../../../theme/theme';
import CategoriesData from './../../../theme/CategoriesData';
import AvatarDrawer from '../../../component/HomeComponent/AvatarDrawer';

function ListOfSettings({item}) {
  return (
    <View style={styles.ListOfSettings}>
      <View style={styles.Left}>
        <Foundation
          style={{paddingLeft: 10, paddingRight: 20}}
          name="social-facebook"
          size={30}
        />
        <H3>{item.SettingText}</H3>
      </View>

      <Entypo name="chevron-right" color={theme.colors.tgrey} size={30} />
    </View>
  );
}
const Setting = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <AvatarDrawer onPress={navigation.openDrawer} />,
    });
  }, [navigation]);
  return (
    <Bg>
      <FlatList
        data={CategoriesData}
        renderItem={({item}) => <ListOfSettings item={item} />}
      />
    </Bg>
  );
};

export default Setting;

const styles = StyleSheet.create({
  ListOfSettings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    alignItems: 'center',
  },
  Left: {
    alignItems: 'center',
    flexDirection: 'row',
  },
});
