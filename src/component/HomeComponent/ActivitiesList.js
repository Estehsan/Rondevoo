import React from 'react';
import {StyleSheet, Image, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Surface} from 'react-native-paper';
import {theme} from '../../theme/theme';
import {H2, H3, P} from './../basic';

const ActivitiesList = ({item}) => {
  return (
    <View>
      <Surface style={styles.surface}>
        <View style={styles.container}>
          <View style={styles.img}>
            <Image
              source={{
                url: item.imageUri,
              }}
              resizeMode="cover"
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </View>
          <View style={styles.right}>
            <View>
              <H2>test</H2>
              <H3>test</H3>
              <P>test</P>
            </View>
            <TouchableOpacity style={styles.btn}>
              <H3>BUY</H3>
            </TouchableOpacity>
          </View>
        </View>
      </Surface>
    </View>
  );
};

export default ActivitiesList;

const styles = StyleSheet.create({
  surface: {height: 100, width: '100%', marginVertical: 10},
  width: '30%',
  container: {flexDirection: 'row', display: 'flex', height: '100%'},
  img: {
    width: '30%',
  },
  right: {
    width: '70%',
    padding: 10,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  btn: {
    borderColor: theme.colors.primary,
    borderWidth: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    borderRadius: 20,
  },
});
