import React, {useLayoutEffect} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Bg, Btn, H1, H2, H3} from '../../../component/basic';
import BankDetails from '../../../component/ProfileComponent/BankDetails';
import {theme} from '../../../theme/theme';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {BankingWithdrawImage} from '../../../component/DrawerScreensComponent';
import {TextInput} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import AvatarDrawer from '../../../component/HomeComponent/AvatarDrawer';

const Tab = createMaterialTopTabNavigator();

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
function Deposit({navigation}) {
  return (
    <Bg>
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
    </Bg>
  );
}
function Withdraw({navigation}) {
  const [text, setText] = React.useState('');

  return (
    <BankingWithdrawImage>
      <View style={styles.padding}>
        <H2>Before we start your Withdrawel</H2>
      </View>

      <TextInput
        label="First Name"
        value={text}
        mode="outlined"
        onChangeText={text => setText(text)}
      />
      <TextInput
        label="Middle Name"
        value={text}
        mode="outlined"
        onChangeText={text => setText(text)}
      />
      <TextInput
        label="Business Name"
        value={text}
        mode="outlined"
        onChangeText={text => setText(text)}
      />
      <TextInput
        label="City"
        value={text}
        mode="outlined"
        onChangeText={text => setText(text)}
      />
      <TextInput
        label="Country"
        value={text}
        mode="outlined"
        onChangeText={text => setText(text)}
      />
      <TextInput
        label="Address "
        value={text}
        mode="outlined"
        onChangeText={text => setText(text)}
      />
      <TextInput
        label="First Name"
        value={text}
        mode="outlined"
        onChangeText={text => setText(text)}
      />
      <View style={styles.padding}>
        <Btn placeholder="Submit" />
      </View>
    </BankingWithdrawImage>
  );
}
const BankingInformation = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <AvatarDrawer onPress={navigation.openDrawer} />,
    });
  }, [navigation]);
  return (
    <Tab.Navigator screenOptions={{}}>
      <Tab.Screen name="Deposit" component={Deposit} />
      <Tab.Screen name="Withdraw" component={Withdraw} />
    </Tab.Navigator>
  );
};

export default BankingInformation;

const styles = StyleSheet.create({
  Bg: {
    flex: 1,
    backgroundColor: 'white',
  },
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
  padding: {
    paddingVertical: 20,
  },
});
