import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/theme';
import {H3, Span} from '../basic';

const CallsHorizontalList = ({item}) => {
  return (
    <View style={styles.main}>
      <View style={styles.Image}>
        <Image
          style={styles.image}
          source={{
            url: item.imageUri,
          }}
        />
        <View style={styles.content}>
          {/* DATA FROM JSON */}
          {/* <Text style={styles.heading}>{item.name}</Text>
          <Text style={styles.sub}>{item.subTitle}</Text> */}

          <Text style={styles.heading}>Title</Text>
          <Text style={styles.sub}>Description</Text>
          <Text style={styles.sub}>32$ for 15mins </Text>
        </View>
      </View>
    </View>
  );
};

export default CallsHorizontalList;

const styles = StyleSheet.create({
  main: {
    width: '42%',
    marginHorizontal: '4%',
    borderRadius: 10,
    height: 220,
    backgroundColor: 'white',
    marginBottom: 20,
    ...theme.colors.customShad2,
  },
  image: {
    borderTopRightRadius: 10,
    width: '100%',
    height: 150,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
  },
  heading: {
    fontFamily: 'Rubik-Regular',
    fontSize: 18,
  },
  sub: {
    fontFamily: 'Rubik-Regular',
    fontSize: 18,
    color: 'grey',
  },
});
