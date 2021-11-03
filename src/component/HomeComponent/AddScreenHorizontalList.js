import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../theme/theme';
import {H2, H3} from '../basic';

const AddScreenHorizontalList = ({navigation, item}) => {
  return (
    <TouchableOpacity
      style={styles.ListOfStars}
      onPress={() => navigation.navigate('CreatePages')}>
      <Image
        source={{
          url: item.imageUri,
        }}
        resizeMode="cover"
        style={{
          height: '100%',
          width: '100%',
          borderRadius: 20,
          opacity: 0.8,
        }}
      />
      {item.name && (
        <View style={styles.over}>
          <H2>{item.name}</H2>

          <H3>{item.subTitle}</H3>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default AddScreenHorizontalList;

const styles = StyleSheet.create({
  ListOfStars: {
    width: 110,
    height: 150,
    marginBottom: 20,
    marginRight: 20,
    borderRadius: 20,
    ...theme.colors.customShad,
  },
  over: {
    position: 'absolute',
    bottom: 5,
    width: '90%',
    marginHorizontal: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    ...theme.colors.customShad2,
  },
});
