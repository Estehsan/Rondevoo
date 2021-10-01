import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Headline, Subheading} from 'react-native-paper';
import {theme} from '../../theme/theme';
import H1 from '../basic/H1';
import H2 from '../basic/H3';
const PeopleIcon = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Avatar.Image
          style={styles.paddingavatar}
          size={50}
          source={{
            uri: item.img,
          }}
        />
        <Headline>{item.title} </Headline>
      </View>
    </View>
  );
};

export default PeopleIcon;

const styles = StyleSheet.create({
  container: {},
  main: {
    height: 120,
    backgroundColor: 'white',
    marginHorizontal: 4,
    width: 90,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  paddingavatar: {marginVertical: 5},
});
