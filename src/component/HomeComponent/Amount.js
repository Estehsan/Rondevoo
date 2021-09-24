import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {theme} from '../../theme/theme';
import H2 from '../basic/H2';

const Amount = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.main}>
        <View style={styles.left}>
          <Text style={styles.coinCount}>0</Text>
          <H2>Coin Balance</H2>
        </View>
        <View style={styles.seperation} />
        <View style={styles.Right}>
          <Text style={styles.coinCount}>0</Text>
          <H2>Earned Coins </H2>
        </View>
      </View>
    </View>
  );
};

export default Amount;

const styles = StyleSheet.create({
  Container: {
    marginHorizontal: 20,
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 5,
    ...theme.colors.customShad,
  },
  main: {
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    display: 'flex',
    height: 130,
  },
  left: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Right: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinCount: {
    fontSize: 40,
    color: '#34a5dd',
    paddingVertical: 10,
  },
  seperation: {
    height: '100%',
    borderWidth: 0.2,
    borderColor: 'silver',
  },
});
