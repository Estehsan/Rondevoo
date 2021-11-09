import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/theme';
import Entypo from 'react-native-vector-icons/Entypo';

const BankDetails = ({item}) => {
  return (
    <View style={styles.ListOfBank}>
      <Text style={styles.PurpleText}>{item.name}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 50,
            height: 30,
          }}
          resizeMode="contain"
          source={{
            // url: 'https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png',
            url: item.img,
          }}
        />
        <Entypo name="chevron-right" size={15} />
      </View>
    </View>
  );
};

export default BankDetails;

const styles = StyleSheet.create({
  ListOfBank: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  PurpleText: {
    fontSize: 15,
    fontFamily: 'Rubik-Regular',
  },
});
