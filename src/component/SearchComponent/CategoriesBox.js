import React from 'react';
import {Dimensions, StyleSheet, Text, View, Pressable} from 'react-native';
import {theme} from '../../theme/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Avatar} from 'react-native-paper';

const CategoriesBox = ({item}) => {
  return (
    <>
      <View style={styles.container}>
        <Pressable style={styles.innercontainer}>
          <View style={styles.iconBox}>
            <MaterialIcons
              name={item.icon}
              size={20}
              color={theme.colors.primary}
            />
          </View>
          <Text style={styles.purpleText}>{item.category}</Text>
        </Pressable>
      </View>
    </>
  );
};

export default CategoriesBox;

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    marginVertical: 20,
    marginHorizontal: 5,

    width: '31%',
  },
  innercontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBox: {
    padding: 40,
    backgroundColor: 'white',
    borderRadius: 100,
  },
  purpleText: {
    fontSize: 18,
    marginVertical: 10,
    fontFamily: 'Rubik-Regular',
  },
  otherText: {
    fontFamily: 'Rubik-Light',
  },
});
