import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Bg, H1, H3} from '../../../component/basic';
import BankDetails from '../../../component/ProfileComponent/BankDetails';
import {theme} from '../../../theme/theme';

const data = [
  {
    id: 1,
    name: 'Debit / Credit Card',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png',
  },
  {
    id: 2,
    name: 'Online Banking',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png',
  },
  {
    id: 3,
    name: 'Venmo Banking',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png',
  },
  {
    id: 4,
    name: 'Paypal',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Visa-Logo.png',
  },
];
const BankingInformation = () => {
  return (
    <View>
      <View style={styles.center}>
        <H1>Choose a deposit method</H1>
      </View>
      <View style={styles.content}>
        <FlatList
          renderItem={({item}) => <BankDetails item={item} />}
          data={data}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
    </View>
  );
};

export default BankingInformation;

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  content: {
    marginHorizontal: 30,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
    ...theme.colors.customShad2,
  },
  separator: {
    height: 1,
    borderWidth: 1,
    // borderColor: '#eaeaea',
    borderColor: theme.colors.primary,
  },
});
