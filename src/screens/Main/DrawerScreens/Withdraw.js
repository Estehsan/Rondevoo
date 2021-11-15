import React, {useLayoutEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {Btn, H2} from '../../../component/basic';
import {BankingWithdrawImage} from '../../../component/DrawerScreensComponent';
import AvatarDrawer from '../../../component/HomeComponent/AvatarDrawer';

const Withdraw = ({navigation}) => {
  const [text, setText] = React.useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => <AvatarDrawer onPress={navigation.openDrawer} />,
    });
  }, [navigation]);
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
};

export default Withdraw;

const styles = StyleSheet.create({});
